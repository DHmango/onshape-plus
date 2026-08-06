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
      console.log(theme.lightTheme);
      return typeof theme.lightTheme === "string" ? theme.lightTheme : "";
    });
  const darkTheme = await browser.storage.local
    .get("darkTheme")
    .then((theme) =>
      typeof theme.darkTheme === "string" ? theme.darkTheme : "",
    );
  return({light:lightTheme,dark:darkTheme})
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
  const [saveSlots, setSaveSlots] = useState<saveSlot[]>([
    { slot: -1, name: "Error" },
  ]);
  const [themeName, setThemeName] = useState("");
  const saveDialogRef = useRef<HTMLDialogElement>(null);
  const saveSlotsToShow = [];

  const [lightTheme, setLightTheme] = useState('')
  const [darkTheme, setDarkTheme] = useState('')

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
      setDarkTheme(val.dark)
      setLightTheme(val.light)
    });
    getSaves().then((val) => {
      setSaveSlots(val);
      console.log("loaded saves!");
    });
  }, []);

  async function loadTheme(address: string) {
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
    } catch (error) {
      console.log(`could not fetch theme: ${error}`);
    }
  }

  // function HSLOverRules(HSLs: hslPlusItem[], rules: string[]) {
  //   const newRules = rules.map((rule) => {
  //     if (rule[0] === "c") {
  //       for (const hsl of HSLs) {
  //         if (hsl.id === `${rule[0] + "_㊫_" + rule[1] + "_㊫_" + rule[2]}`){ // is this inefficient?
  //           //TOFODIOUJ

  //           //todo dont forget
  //         }
  //       }
  //     } else{
  //       return rule
  //     }
  //   });
  // }
  //I think you are supposed to have functions be totally isolated so starting now I will

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
          <div className="z-50 shadow-2xl/50 flex-col flex flex-none fixed right-0 h-screen bg-[#aaa] w-30">
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
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            <div className="flex-col flex m-1">
              <button
                onClick={() => {
                  saveDialogRef.current?.showModal();
                }}
                className="bg-gray-800 rounded-lg text-gray-100"
              >
                Save Theme
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
                  browser.storage.local.set({ [`theme-${slot}`]: value });
                  getSaves().then((val) => {
                    setSaveSlots(val);
                    console.log("loaded saves!");
                  });
                }}
                deleteTheme={(slot: string) => {
                  console.log(`deleting${slot}`);
                  console.log(darkTheme)
                  console.log(darkTheme.slice(-2))
                  console.log('split!')
                  console.log(slot)
                  if (
                    slot === darkTheme.slice(-2) ||
                    slot === lightTheme.slice(-2)
                  ) {
                    confirm(
                      "Cannot delete an active theme. Change theme and reload",
                    );
                  } else {
                    browser.storage.local.remove(`theme-${slot}`);
                    console.log(slot);
                    console.log(lightTheme.slice(-2));
                  }
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
              spellCheck="false"
              value={textAreaJSON}
              onBlur={(event) => {
                /* get it? because blur is the opposite of focus !*/
                try {
                  const rules = JSON.parse(event.target.value).rules;
                  sendAllRulesToHSL(rules);
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
              className="break-all resize-none flex-none select-all font-mono bg-[#ccc] h-40 overflow-auto tracking-tight text-[9px]/tight wrap-anywhere scrollbar-thin"
            ></textarea>
            <div className="flex flex-row flex-nowrap max-w-full">
              <button
                className="flex-row flex flex-1 bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
                onClick={() => {
                  if (confirm("Really load theme?")) {
                    loadTheme(selectedPreset);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>

                <p className="flex-3 text-xs text-gray-300 self-center">Load</p>
              </button>
              <select
                onChange={(event) => {
                  setSelectedPreset(event.target.value);
                }}
                className="min-w-0 flex-1 overflow-hidden text-ellipsis bg-gray-800 m-1 ml-0 p-1 rounded-lg text-gray-100 text-xs"
              >
                <option
                  value={
                    "https://raw.githubusercontent.com/DHmango/onshape-plus/main/themes/Onshape_dark.json" /*if you change this link, make the usestate default to it, too */
                  }
                >
                  Onshape Dark
                </option>
                <option
                  value={
                    "https://raw.githubusercontent.com/DHmango/onshape-plus/main/themes/Onshape_light.json"
                  }
                >
                  Onshape Light
                </option>
              </select>
            </div>
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
            </div> TODO*/}
          </div>
          <div className="relative flex-1 overflow-x-hidden overflow-y-scroll h-full mr-30 scrollbar-thumb-slate-400/50 scrollbar-track-black/50">
            <div className="w-full h-full bg-zinc-500 text-center p-5 text-xl text-mauve-800">
              No rules yet. Load a preset using the sidebar
            </div>
            <div className="top-0 left-0 absolute w-full z-10">
              {ruleValues.map((ruleData) => (
                <RulesCard
                  key={
                    ruleData[0] + "_㊫_" + ruleData[1] + "_㊫_" + ruleData[2]
                  } // ['c','',"--os-accent-nonary","#a64dff"] becomes c_㊫__㊫_--os-accent-nonary
                  reportBack={whenInputChanged}
                  dataType={ruleData[0]}
                  selector={ruleData[1]}
                  ruleKey={ruleData[2]}
                  ruleValue={ruleData[3]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
