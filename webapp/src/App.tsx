//Todo: add reordering of rules (.toSpliced?), make good preset themes, reorder default jsons, make website about this? buy chrome extension? theme share? quick tutorial, sorting?? Select does more thing?? oscope

import { useEffect, useRef, useState } from "react";
import "./App.css";
import RulesCard from "./RulesCard";
import colorStringToRGBA from "./colorStringToRGBA";
import convert from "color-convert";
import SaveCards from "./SaveCards";
import browser from "webextension-polyfill";

interface saveSlot {
  slot: number;
  name: string;
}
interface hslPlusItem {
  id: string;
  h: number;
  s: number;
  l: number;
  a: number;
} // from now i will do it this way, the right way

async function getSaves() {
  const themesList = [];
  const keys = await browser.storage.local.getKeys();
  for (const key of keys) {
    if (key.startsWith("theme-")) {
      const value = await browser.storage.local.get(key);
      themesList.push({
        slot: Number(key.slice(-2)),
        name: JSON.parse(typeof value[key] === "string" ? value[key] : "error")
          .name,
      });
    }
  }
  const sortedList = themesList.toSorted((a, b) => a.slot - b.slot);
  return sortedList;
}
async function getLightnesses() {
  const lightTheme = await browser.storage.local
    .get("lightTheme")
    .then((theme) => {
      return typeof theme.lightTheme === "string" ? theme.lightTheme : "";
    });
  const darkTheme = await browser.storage.local
    .get("darkTheme")
    .then((theme) =>
      typeof theme.darkTheme === "string" ? theme.darkTheme : "",
    );
  return { light: lightTheme, dark: darkTheme };
}

export default function App() {
  //add a way to sort them by whatever
  // last 4 are h s l a I will store them beyond their range limits internally and limit it when actually setting
  const [ruleValues, setRuleValues] = useState<string[][]>([]);
  const [colorsHSL, setColorsHSL] = useState<hslPlusItem[]>([]);
  const [justCopied, setJustCopied] = useState(false);
  const [textAreaJSON, setTextAreaJSON] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(
    "https://raw.githubusercontent.com/DHmango/onshape-plus/main/themes/Onshape_dark.json",
  );
  const [selectedRuleIDs, setSelectedRuleIDs] = useState<
    Record<string, boolean>
  >({});
  selectedRuleIDs;
  setSelectedRuleIDs;
  const [lastSelectedID, setLastSelectedID] = useState("");
  const [lastSelectedBool, setLastSelectedBool] = useState(false);
  const [whatYouAdd, setWhatYouAdd] = useState(0);
  const [whatYouAddTemp, setWhatYouAddTemp] = useState("0");
  const [whatYouPullTo, setWhatYouPullTo] = useState(0);
  const [whatYouPullToTemp, setWhatYouPullToTemp] = useState("0");
  const [howFarYouPullTo, setHowFarYouPullTo] = useState(0);
  const [howFarYouPullToTemp, setHowFarYouPullToTemp] = useState("0");
  const [whichYouPullTo, setWhichYouPullTo] = useState("h");
  const [whichYouAdd, setWhichYouAdd] = useState("h");

  const [saveSlots, setSaveSlots] = useState<saveSlot[]>([
    { slot: -1, name: "Error" },
  ]);
  const [themeName, setThemeName] = useState("");
  const saveDialogRef = useRef<HTMLDialogElement>(null);
  const saveSlotsToShow = [];

  const [allSelected, setAllSelected] = useState(false);

  const [lightTheme, setLightTheme] = useState("");
  const [darkTheme, setDarkTheme] = useState("");
  const [isRearranging, setIsRearranging] = useState(false);

  function isStringArrayArray(value: unknown): value is string[][] {
    return (
      Array.isArray(value) &&
      value.every(
        (item) =>
          Array.isArray(item) &&
          item.every((content) => typeof content === "string"),
      )
    );
  }

  function moveSelectedTo(
    rules: string[][],
    selected: Record<string, boolean>,
    below: string,
  ) {
    const movingRules = rules.filter((rule) => {
      return selected[`${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}`];
    });
    let newRules = rules.filter((rule) => {
      return !movingRules.includes(rule);
    });
    const whereImBelow = newRules.indexOf(
      newRules.filter((rule) => {
        return `${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}` === below;
      })[0],
    );
    if (whereImBelow === -1) {
      return rules;//KNOWN ISSUE: if you move below a selected rule, it will not move them, which is bad if its not a continuous group
                   //FIX: maybe you can move up the list until you find a safe one to move below? seems sus but workable
    }
    newRules.splice(whereImBelow + 1, 0, ...movingRules);
    return newRules;
  }

  for (const value of saveSlots) {
    saveSlotsToShow.push(
      `${String(value.slot).padStart(2, "0")}-${value.name}`,
    );
  }
  saveSlotsToShow.push(
    `${String(Number(saveSlots.at(-1)?.slot) + 1).padStart(2, "0")}-Empty slot`,
  );

  useEffect(() => {
    getLightnesses().then((val) => {
      setDarkTheme(val.dark);
      setLightTheme(val.light);
    });
    getSaves().then((val) => {
      setSaveSlots(val);
    });
  }, []);

  function selectAllRules(rules: string[][], bool: boolean) {
    const newSelectedRules: Record<string, boolean> = {};
    for (const rule of rules) {
      newSelectedRules[`${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}`] =
        bool;
    }
    return newSelectedRules;
  }

  async function loadThemeFromAddress(address: string) {
    //this is basically the same as the background_script.js
    try {
      const response = await fetch(address);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const jsonned = await response.json();
      setTextAreaJSON(JSON.stringify(jsonned));
      setThemeName(jsonned.name);
      setRuleValues(jsonned.rules);
      sendAllRulesToHSL(jsonned.rules);
      setSelectedRuleIDs(selectAllRules(jsonned.rules, false));
    } catch (error) {
      console.log(`could not fetch theme: ${error}`);
    }
  }

  async function loadThemeFromSlot(slot: string) {
    //this is basically the same as the background_script.js
    try {
      const value = await browser.storage.local.get(`theme-${slot}`);
      const intermediate = value[`theme-${slot}`]; //this is dumb?
      if (typeof intermediate === "string") {
        const jsonned = JSON.parse(intermediate);
        setTextAreaJSON(JSON.stringify(jsonned));
        setThemeName(jsonned.name);
        setRuleValues(jsonned.rules);
        sendAllRulesToHSL(jsonned.rules);
        setSelectedRuleIDs(selectAllRules(jsonned.rules, false));
      }
    } catch (error) {
      console.log(`could not fetch theme: ${error}`);
    }
  }

  function applyHSLOverRules(HSLs: hslPlusItem[], rules: string[][]) {
    const newRules = rules.map((rule) => {
      if (rule[0] === "c") {
        for (const hsl of HSLs) {
          if (hsl.id === `${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}`) {
            // is this inefficient? idc
            return [
              rule[0],
              rule[1],
              rule[2],
              `hsl(${hsl.h} ${hsl.s} ${hsl.l} / ${hsl.a})`,
            ];
          }
        }
      } else {
        return rule;
      }
    });
    return newRules;
  }
  // I think you are supposed to have functions be totally isolated so starting now I will ^^^

  function sendAllRulesToHSL(allRules: string[][]) {
    const newColorsHSL = [];
    for (const rule of allRules) {
      if (rule[0] === "c") {
        const colorRGBA = colorStringToRGBA(rule[3]);
        const colorHSL = convert.rgb.hsl(
          colorRGBA[0],
          colorRGBA[1],
          colorRGBA[2],
        );
        const colorID = `${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}`;
        newColorsHSL.push({
          id: colorID,
          h: colorHSL[0],
          s: colorHSL[1],
          l: colorHSL[2],
          a: colorRGBA[3],
        });
      }
    }
    setColorsHSL(newColorsHSL);
  }
  const whenInputChanged = (ruleID: string[], value: string) => {
    const newRuleValues = ruleValues.map(
      (
        rule, // a rule looks like ['c','',"--os-accent-nonary","#a64dff"]
      ) =>
        rule[2] === ruleID[2] && rule[1] === ruleID[1] && rule[0] === ruleID[0] //checks if all key parts of the rule match, stopping as soon as one doesn't
          ? rule.map((oldValue, dataIndex) =>
              dataIndex === 3 ? value : oldValue,
            )
          : rule, // holy one liner whyd i do that
    );
    const colorRGBA = colorStringToRGBA(value);
    const colorHSL = convert.rgb.hsl(colorRGBA[0], colorRGBA[1], colorRGBA[2]);
    const newColorsHSL = colorsHSL.map(
      (
        color, //looks like ['c_㊫__㊫_--os-accent-nonary',360,100,100,1]
      ) => {
        if (color.id === ruleID[0] + "_㊫_" + ruleID[1] + "_㊫_" + ruleID[2]) {
          return {
            id: color.id,
            h: colorHSL[0],
            s: colorHSL[1],
            l: colorHSL[2],
            a: colorRGBA[3],
          };
        } else {
          return color;
        }
      },
    );
    setColorsHSL(newColorsHSL);
    //map sets every array value to the result of what you givt it. index 2 means it only changes the index 2 thing in the array 'key':['c','','THIS']
    setRuleValues(newRuleValues);
    setTextAreaJSON(`{
"version": "0.1",
"what": "onshape theme",
"name": "Onshape light",
"rules": ${JSON.stringify(newRuleValues)}}`);
  };
  return (
    <>
      <div className="flex w-full overflow-hidden h-screen bg-[#202020]">
        <div className="flex flex-1 place-content-between">
          <div className="relative flex-1 overflow-x-hidden overflow-y-scroll h-full mr-30 scrollbar-thumb-slate-400/50 scrollbar-track-black/50">
            <div className="w-full h-full bg-zinc-500 text-center p-5 text-xl text-mauve-800">
              No rules yet. Load a preset using the sidebar
            </div>
            <div className="top-0 left-0 absolute w-full z-10">
              {ruleValues.map((ruleData) => {
                const key =
                  ruleData[0] + "_㊫_" + ruleData[1] + "_㊫_" + ruleData[2]; //  ['c','',"--os-accent-nonary","#a64dff"] becomes c_㊫__㊫_--os-accent-nonary
                const selected = selectedRuleIDs[key];
                return (
                  <RulesCard
                    isRearranging={isRearranging}
                    moveHere={() => {
                      const newRuleValues = moveSelectedTo(
                        ruleValues,
                        selectedRuleIDs,
                        key,
                      );
                      setRuleValues(newRuleValues);
                      setAllSelected(false);
                      setLastSelectedID("");
                      setSelectedRuleIDs(selectAllRules(newRuleValues, false));
                    }}
                    isSelected={selected}
                    setSelected={(bool, shift) => {
                      setAllSelected(false);
                      setSelectedRuleIDs({ ...selectedRuleIDs, [key]: bool });
                      // if (!isRearranging) { I Made this to prevent you from making split groups when rearranging... but it actually a better UX to allow it, and the rearrange function I made supports it
                      //   setSelectedRuleIDs({ ...selectedRuleIDs, [key]: bool });
                      // } else {
                      //   let howManyTimesSwitched = 0;
                      //   let lastOne = false;
                      //   Object.entries({ ...selectedRuleIDs, [key]: bool }).map(
                      //     ([ruleID, val]) => {
                      //       ruleID; //is there a better way? almost certainly.
                      //       if (val === lastOne) {
                      //       } else {
                      //         howManyTimesSwitched++;
                      //         lastOne = val;
                      //       }
                      //     },
                      //   );
                      //   console.log(howManyTimesSwitched);
                      //   if (howManyTimesSwitched > 20) {
                      //     //maybe i don't need to avoid split groups?
                      //     setSelectedRuleIDs({
                      //       ...selectAllRules(ruleValues, false),
                      //       [key]: bool,
                      //     });
                      //   } else {
                      //     setSelectedRuleIDs({
                      //       ...selectedRuleIDs,
                      //       [key]: bool,
                      //     });
                      //   }
                      // } I Made this to prevent you from making split groups when rearranging... but it actually a better UX to allow it, and the rearrange function I made supports it
                      if (
                        shift &&
                        Object.hasOwn(selectedRuleIDs, lastSelectedID) &&
                        lastSelectedBool === bool
                      ) {
                        let selectsToAdd = {};
                        let inSelectionRange = false;
                        Object.entries(selectedRuleIDs).map(([ruleID, val]) => {
                          val;
                          if (inSelectionRange) {
                            selectsToAdd = { ...selectsToAdd, [ruleID]: bool };
                            if (ruleID === lastSelectedID || ruleID === key) {
                              inSelectionRange = false;
                            }
                          } else {
                            if (ruleID === lastSelectedID || ruleID === key) {
                              inSelectionRange = true;
                              selectsToAdd = {
                                ...selectsToAdd,
                                [ruleID]: bool,
                              };
                            }
                          } // select multiple is here!
                        });
                        setSelectedRuleIDs({
                          ...selectedRuleIDs,
                          ...selectsToAdd,
                        });
                      }
                      setLastSelectedID(key);
                      setLastSelectedBool(bool);
                    }}
                    key={key}
                    reportBack={whenInputChanged}
                    dataType={ruleData[0]}
                    selector={ruleData[1]}
                    ruleKey={ruleData[2]}
                    ruleValue={ruleData[3]}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* below this is the SIDEBAR */}
        <div className="z-50 shadow-2xl/50 flex-col flex flex-none fixed right-0 h-screen bg-[#aaa] w-30">
          <div className="flex-col flex m-1">
            <button
              onClick={() => {
                saveDialogRef.current?.showModal();
              }}
              className="bg-gray-800 rounded-lg text-gray-100"
            >
              Load / Save
            </button>
          </div>
          <dialog
            ref={saveDialogRef}
            className="m-auto backdrop:backdrop-brightness-50"
          >
            <SaveCards
              currentTheme={textAreaJSON}
              saveSlots={saveSlotsToShow}
              onClose={() => {
                saveDialogRef.current?.close();
              }}
              reportBack={(slot: string, value: string) => {
                try {
                  if ((JSON.parse(value).what = "onshape theme")) {
                    if (confirm("save here?")) {
                      browser.storage.local
                        .set({ [`theme-${slot}`]: value })
                        .then(() => {
                          getSaves().then((val) => {
                            setSaveSlots(val);
                          });
                        });
                    }
                  } else {
                    alert("error shouldn't ever happen!");
                  }
                } catch {
                  alert("invalid save data!");
                }
              }}
              deleteTheme={(slot: string) => {
                if (
                  slot === darkTheme.slice(-2) ||
                  slot === lightTheme.slice(-2)
                ) {
                  alert(
                    "Cannot delete an active theme. Change theme and reload",
                  );
                } else {
                  browser.storage.local.remove(`theme-${slot}`).then(() => {
                    getSaves().then((val) => {
                      setSaveSlots(val);
                    });
                  });
                }
              }}
              loadTheme={(slot: string) => {
                loadThemeFromSlot(slot);
                saveDialogRef.current?.close();
              }}
            ></SaveCards>
          </dialog>
          <div className="m-1 p-0.5 rounded-lg bg-gray-400 inset-shadow-sm/10">
            <label className="flex-col flex text-center">
              <span className="text-center">Theme Name</span>
              <input
                value={themeName}
                onChange={(e) => {
                  const val = e.target.value;
                  setThemeName(val);
                  setTextAreaJSON(
                    JSON.stringify({
                      ...JSON.parse(textAreaJSON),
                      name: val,
                    }),
                  );
                }}
                className="shadow-xs/30 w-full text-xs text-gray-300 focus:outline-1.5 outline-mist-100 bg-gray-900 rounded-md mr-1 hover:bg-[#171720] border-black pl-1 inset-shadow-md/40"
              ></input>
            </label>
          </div>
          <button
            className="cursor-copy flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
            onClick={() => {
              navigator.clipboard.writeText(textAreaJSON);
              setJustCopied(true);
              setTimeout(() => {
                setJustCopied(false);
              }, 1500);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 self-center flex-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
            <p className="flex-3 text-xs text-gray-300 self-center">
              {justCopied ? "Copied!" : "Copy"}
            </p>
          </button>
          <textarea
            title="Raw rule data"
            spellCheck="false"
            value={textAreaJSON}
            onBlur={(event) => {
              /* get it? because blur is the opposite of focus !*/
              try {
                const rules = JSON.parse(event.target.value).rules;
                sendAllRulesToHSL(rules);
                setSelectedRuleIDs(selectAllRules(rules, false));
                const rulesString = JSON.stringify(rules);
                setRuleValues(rules);
                setTextAreaJSON(`{
"version": "0.1",
"what": "onshape theme",
"name": "${themeName}",
"rules": ${rulesString}}`);
              } catch (error) {
                setTextAreaJSON(
                  "The JSON you typed was invalid! modify a rule on the left to revert this",
                );
              }
            }}
            onFocus={(event) => {
              event.target.select();
            }}
            onChange={(event) => {
              setTextAreaJSON(event.target.value);
            }}
            className="inset-ring-1 inset-ring-taupe-500 break-all resize-none flex-none select-all font-mono bg-[#ccc] h-40 overflow-auto tracking-tight text-[9px]/tight wrap-anywhere scrollbar-thin"
          />
          <div className="flex flex-col flex-nowrap max-w-full">
            <button
              title="load theme from a valid json"
              className="flex-row flex flex-1 bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {
                if (confirm("Really load theme?")) {
                  loadThemeFromAddress(selectedPreset);
                }
              }}
            >
              <p className="flex-3 text-xs text-gray-300 self-center">
                Load from URL
              </p>
            </button>
            <input
              title="Input the url here"
              onChange={(event) => {
                setSelectedPreset(event.target.value);
              }}
              value={selectedPreset}
              className="min-w-0 mt-0 flex-1 overflow-hidden text-ellipsis bg-gray-800 m-1 p-1 rounded-lg text-gray-100 text-xs"
            />
          </div>
          <div className="text-center text-sm flex flex-col m-1 p-1 bg-gray-300 rounded-xl inset-ring-1 inset-ring-mist-600">
            <span className="font-semibold">Modify selected colors</span>
            <button
              onClick={() => {
                if (allSelected || isRearranging) {
                  setAllSelected(false);
                  setLastSelectedID("");
                  setSelectedRuleIDs(selectAllRules(ruleValues, false));
                } else {
                  setAllSelected(true);
                  setSelectedRuleIDs(selectAllRules(ruleValues, true));
                  setLastSelectedID("");
                }
              }}
              className="text-xs text-white  mb-1 bg-indigo-600 inset-ring-1 inset-ring-indigo-800 rounded-md"
            >
              Select/deselect all
            </button>
            <div className="flex items-start flex-col text-xs inset-ring-1 inset-ring-blue-950 bg-gray-400 rounded-lg p-1 mb-1">
              <button
                className="self-stretch hover:bg-indigo-400 bg-indigo-300 inset-ring-1 inset-ring-indigo-600 rounded-md p-1"
                onClick={() => {
                  let anySelected;
                  const newColors = colorsHSL.map((color) => {
                    if (selectedRuleIDs[color.id]) {
                      anySelected = true;
                      const newHSLA = {
                        ...{ h: 0, s: 0, l: 0, a: 0 },
                        [whichYouAdd]: whatYouAdd,
                      }; // cursed method?
                      return {
                        h: color.h + newHSLA.h,
                        s: color.s + newHSLA.s,
                        l: color.l + newHSLA.l,
                        a: color.a + newHSLA.a,
                        id: color.id,
                      };
                    } else {
                      return {
                        h: color.h,
                        s: color.s,
                        l: color.l,
                        a: color.a,
                        id: color.id,
                      };
                    }
                  });
                  if (!anySelected) {
                    alert("no selected rules!");
                  }
                  setColorsHSL(newColors);
                  const newRules = applyHSLOverRules(newColors, ruleValues);
                  if (isStringArrayArray(newRules)) {
                    setRuleValues(newRules);
                    const rulesString = JSON.stringify(newRules);
                    setTextAreaJSON(`{
"version": "0.1",
"what": "onshape theme",
"name": "${themeName}",
"rules": ${rulesString}}`);
                  } else {
                    alert(`wasn't string array!`);
                  }
                }}
              >
                Add to&nbsp;
              </button>
              <div className="p-0.5 mt-1 mb-1 inset-ring-1 inset-ring-blue-900 bg-gray-500 self-stretch rounded-md">
                <select
                  className="w-22 "
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => {
                    setWhichYouAdd(e.target.value);
                  }}
                  value={whichYouAdd}
                >
                  <option value={"h"}>hue </option>
                  <option value={"s"}>saturation</option>
                  <option value={"l"}>lightness</option>
                  <option value={"a"}>transparency</option>
                </select>
              </div>
              <div className="flex-row flex">
                <span title="Value to add">Value&nbsp;</span>
                <input
                  title="Value to add"
                  className="w-8 pl-1 inset-ring-1 inset-ring-emerald-900 bg-gray-500 rounded-md"
                  onChange={(e) => {
                    const val = e.target.value;
                    setWhatYouAddTemp(String(val));
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    if (typeof val === "number") {
                      setWhatYouAdd(val);
                      setWhatYouAddTemp(String(val));
                    } else {
                      setWhatYouAdd(0);
                      setWhatYouAddTemp("0");
                    }
                  }}
                  value={whatYouAddTemp}
                ></input>
              </div>
            </div>
            <div className="flex items-start flex-col text-xs inset-ring-1 inset-ring-blue-950 bg-gray-400 rounded-lg p-1">
              {" "}
              <button
                className="self-stretch hover:bg-indigo-400 bg-indigo-300 inset-ring-1 inset-ring-indigo-600 rounded-md p-1"
                onClick={() => {
                  let anySelected = false;
                  const newColors = colorsHSL.map((color) => {
                    if (selectedRuleIDs[color.id]) {
                      anySelected = true;
                      let valDrawnTo = whatYouPullTo;
                      if (whichYouPullTo === "h") {
                        // this nonsense is because hue wraps around and im bad at math
                        if (
                          Math.abs(color.h - whatYouPullTo) <
                            Math.abs(color.h - (whatYouPullTo + 360)) &&
                          Math.abs(color.h - whatYouPullTo) <
                            Math.abs(color.h - (-360 + whatYouPullTo))
                        ) {
                        } else {
                          if (
                            Math.abs(color.h - (whatYouPullTo + 360)) <
                            Math.abs(color.h - (-360 + whatYouPullTo))
                          ) {
                            valDrawnTo = whatYouPullTo + 360;
                          } else {
                            valDrawnTo = -360 + whatYouPullTo;
                          }
                        }
                      }
                      const newHSLA = {
                        ...color,
                        [whichYouPullTo]: valDrawnTo,
                      };
                      return {
                        h:
                          color.h * (1 - howFarYouPullTo) +
                          howFarYouPullTo * newHSLA.h,
                        s:
                          color.s * (1 - howFarYouPullTo) +
                          howFarYouPullTo * newHSLA.s,
                        l:
                          color.l * (1 - howFarYouPullTo) +
                          howFarYouPullTo * newHSLA.l,
                        a:
                          color.a * (1 - howFarYouPullTo) +
                          howFarYouPullTo * newHSLA.a,
                        id: color.id,
                      };
                    } else {
                      return {
                        h: color.h,
                        s: color.s,
                        l: color.l,
                        a: color.a,
                        id: color.id,
                      };
                    }
                  });
                  if (!anySelected) {
                    alert("no selected rules!");
                  }
                  setColorsHSL(newColors);
                  const newRules = applyHSLOverRules(newColors, ruleValues);
                  if (isStringArrayArray(newRules)) {
                    setRuleValues(newRules);
                    const rulesString = JSON.stringify(newRules);
                    setTextAreaJSON(`{
"version": "0.1",
"what": "onshape theme",
"name": "${themeName}",
"rules": ${rulesString}}`);
                  } else {
                    alert(`wasn't string array!`);
                  }
                }}
              >
                Move towards&nbsp;
              </button>
              <div className="p-0.5 inset-ring-1 inset-ring-blue-900 bg-gray-500 self-stretch mt-1 rounded-md">
                <select
                  className="w-22"
                  onChange={(e) => {
                    setWhichYouPullTo(e.target.value);
                  }}
                  value={whichYouPullTo}
                >
                  <option value={"h"}>hue</option>
                  <option value={"s"}>saturation</option>
                  <option value={"l"}>lightness</option>
                  <option value={"a"}>transparency</option>
                </select>
              </div>
              <div className="grid-cols-2">
                <span title="Target Value">Target&nbsp;</span>
                <input
                  title="Target value"
                  className="w-8 mt-1 mb-1 pl-1 inset-ring-1 inset-ring-emerald-900 bg-gray-500 rounded-md"
                  onChange={(e) => {
                    const val = e.target.value;
                    setWhatYouPullToTemp(String(val));
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    if (typeof val === "number") {
                      setWhatYouPullTo(val);
                      setWhatYouPullToTemp(String(val));
                    } else {
                      setWhatYouPullTo(0);
                      setWhatYouPullToTemp("0");
                    }
                  }}
                  value={whatYouPullToTemp}
                ></input>
              </div>
              <div className="flex-row flex">
                <span title="what proportion of the way to move (0-1)">
                  Magnitude&nbsp;
                </span>
                <input
                  title="what proportion of the way to move (0-1)"
                  className="w-8 pl-1 inset-ring-1 inset-ring-emerald-900 bg-gray-500 rounded-md"
                  onChange={(e) => {
                    const val = e.target.value;
                    setHowFarYouPullToTemp(String(val));
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    if (typeof val === "number") {
                      setHowFarYouPullTo(val);
                      setHowFarYouPullToTemp(String(val));
                    } else {
                      setHowFarYouPullTo(0);
                      setHowFarYouPullToTemp("0");
                    }
                  }}
                  value={howFarYouPullToTemp}
                ></input>
              </div>
            </div>
          </div>
          <button
            className={`${isRearranging ? "bg-orange-200" : "bg-orange-500"}`}
            onClick={() => {
              if (isRearranging) {
                setIsRearranging(false);
                setAllSelected(false);
                setLastSelectedID("");
                setSelectedRuleIDs(selectAllRules(ruleValues, false));
              } else {
                setIsRearranging(true);
                setAllSelected(false);
                setLastSelectedID("");
                setSelectedRuleIDs(selectAllRules(ruleValues, false));
              }
            }}
          >
            Reorder rules
          </button>
          {/* <div>
              add rule
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <input className="bg-amber-400"></input>
              <input className="bg-indigo-400"></input>
              <select>
                <option value={"c"}>color</option>
                <option value={"o"}>other</option>
              </select>
            </div> TODO... or is it*/}
        </div>
      </div>
    </>
  );
}
