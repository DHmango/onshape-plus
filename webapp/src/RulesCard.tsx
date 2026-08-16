import convert from "color-convert";
import colorStringToRGBA from "./colorStringToRGBA";
import { useState } from "react";

// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({
  reportBack, //the thing used to change the centralized array of data
  isSelected,
  isRearranging,
  moveHere,
  setSelected,
  dataType, // color, px, etc. only 'c' works rn
  selector, // css selector- not implemented
  ruleKey, // what the name of the value we are setting. ex: --os-accent-nonary
  ruleValue, // the value we set it to
}: {
  // the typescripr types
  reportBack: (ruleID: string[], value: string) => void;
  isRearranging: boolean;
  isSelected: boolean;
  moveHere: () => void;
  setSelected: (trueRuleIDs: boolean, shift: boolean) => void;
  dataType: string;
  selector: string;
  ruleKey: string;
  ruleValue: string;
}) {
  if (dataType === "c") {
    let cardColor = ruleValue; // the actual color used within the card

    const [liveColor, setLiveColor] = useState("#000"); // the color while you are dragging it, local to this card instead of in the bigger array
    const [activelyChangingSV, setActivelyChangingSV] = useState(false); // whether or not you are actively changing the color
    const [wasMouseDownSV, setWasMouseDownSV] = useState(false);

    const [activelyChangingH, setActivelyChangingH] = useState(false);
    const [wasMouseDownH, setWasMouseDownH] = useState(false);

    const [activelyChangingA, setActivelyChangingA] = useState(false);
    const [wasMouseDownA, setWasMouseDownA] = useState(false);

    if (activelyChangingSV || activelyChangingA || activelyChangingH) {
      cardColor = liveColor; // sets the color shown on the card to the active live color
    }

    const colorRGBA = colorStringToRGBA(cardColor);
    const deadRGBA = colorStringToRGBA(ruleValue); // this one is old, so you can read the things you arent changing from it!

    if (
      colorRGBA[0] === 0 &&
      colorRGBA[1] === 0 &&
      colorRGBA[2] === 0 &&
      colorRGBA[3] === 0
    ) {
      cardColor = "#0000";
    }

    const deadHSL = convert.rgb.hsl.raw(deadRGBA[0], deadRGBA[1], deadRGBA[2]);

    const colorHSV = convert.rgb.hsv.raw(
      colorRGBA[0],
      colorRGBA[1],
      colorRGBA[2],
    );

    const colorThumbPos = {
      x: colorHSV[1] / 100,
      y: 1 - colorHSV[2] / 100,
    };
    const hueThumbPos = activelyChangingSV ? deadHSL[0] : colorHSV[0];

    return (
      <>
        <div
          className={`animate-none ${activelyChangingSV ? "h-27" : "h-9"} relative ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]`}
        >
          <div className="flex-col text-nowrap w-120  shrink-0  float-start bg-gray-800 text-gray-50">
            <label
              title={ruleKey}
              className="justify-between flex flex-start m-1"
            >
              <span className="overflow-hidden text-ellipsis">
                <span className="text-xs text-gray-300">
                  color: {selector}&nbsp;
                </span>
                <span className="font-bold">{ruleKey}</span>&nbsp;
              </span>
              <input
                value={ruleValue}
                className="w-40 focus:outline-1.5 outline-mist-100 bg-gray-900 rounded-md mr-1 hover:bg-[#171720] border-black pl-1 inset-shadow-md/40"
                onChange={(e) =>
                  reportBack([dataType, selector, ruleKey], e.target.value)
                }
              />
            </label>

            <div
              className={` bg-white ${activelyChangingSV ? "invisible" : "visible"} bg-[conic-gradient(transparent_25%,#ccc_25%_50%,transparent_50%_75%,#ccc_75%)] bg-size-[18px_18px] group-hover:invisible`}
              // for some reason this one has to be opposite grid as the other for them to line up
            >
              <div
                className="flex-auto h-19"
                style={{ backgroundColor: cardColor }}
              />
            </div>
            {/* main color picker region */}
            <div
              className={`flex -mt-19 flex-row ${activelyChangingSV ? "visible" : "invisible"} group-hover:visible`}
            >
              <div
                className="flex-2 bg-linear-to-r from-white to-(--hueColor)"
                style={
                  {
                    "--hueColor": `hsl(${activelyChangingSV ? deadHSL[0] : colorHSV[0]} 100 50)`,
                  } as React.CSSProperties
                }
              >
                <div className="cursor-crosshair bg-linear-to-t from-black to-[#0000] h-19">
                  <div
                    onMouseMove={(e) => {
                      if (e.buttons === 1) {
                        if (wasMouseDownSV) {
                          const pickerRegion =
                            e.currentTarget.getBoundingClientRect();
                          let relativeX =
                            (e.clientX - pickerRegion.x) / pickerRegion.width;
                          let relativeY =
                            (e.clientY - pickerRegion.y) / pickerRegion.height;
                          if (relativeX > 1) {
                            relativeX = 1;
                          }
                          if (relativeX < 0) {
                            relativeX = 0;
                          }
                          if (relativeY > 1) {
                            relativeY = 1;
                          }
                          if (relativeY < 0) {
                            relativeY = 0;
                          }
                          const color = convert.hsv.hsl.raw(
                            0,
                            relativeX * 100,
                            100 - //why did you do that prettier
                              relativeY * 100,
                          );

                          setLiveColor(
                            `hsl(${deadHSL[0].toFixed(2)} ${color[1].toFixed(2)} ${color[2].toFixed(2)} / ${deadRGBA[3].toFixed(2)})`,
                          );
                          setActivelyChangingSV(true);
                        }
                      }
                    }}
                    onMouseEnter={() => setWasMouseDownSV(false)}
                    onMouseDown={(e) => {
                      // ^ v ^ v These are the mostly the same
                      setWasMouseDownSV(true);
                      if (e.buttons === 1) {
                        const pickerRegion =
                          e.currentTarget.getBoundingClientRect();
                        let relativeX =
                          (e.clientX - pickerRegion.x) / pickerRegion.width;
                        let relativeY =
                          (e.clientY - pickerRegion.y) / pickerRegion.height;
                        if (relativeX > 1) {
                          relativeX = 1;
                        }
                        if (relativeX < 0) {
                          relativeX = 0;
                        }
                        if (relativeY > 1) {
                          relativeY = 1;
                        }
                        if (relativeY < 0) {
                          relativeY = 0;
                        }
                        const color = convert.hsv.hsl.raw(
                          0,
                          relativeX * 100,
                          100 - //why did you do that prettier
                            relativeY * 100,
                        );

                        setLiveColor(
                          `hsl(${deadHSL[0].toFixed(2)} ${color[1].toFixed(2)} ${color[2].toFixed(2)} / ${deadRGBA[3].toFixed(2)})`,
                        );
                        setActivelyChangingSV(true);
                      }
                    }}
                    onMouseLeave={() => {
                      setWasMouseDownSV(false);
                      if (activelyChangingSV) {
                        setActivelyChangingSV(false);
                        reportBack([dataType, selector, ruleKey], liveColor);
                      }
                    }}
                    className="relative flex-1 bg-[#0ff0] h-19 w-80"
                    onMouseUp={() => {
                      if (activelyChangingSV) {
                        setActivelyChangingSV(false);
                        reportBack([dataType, selector, ruleKey], liveColor);
                      }
                    }}
                  >
                    <div
                      style={
                        {
                          "--xPos": `${colorThumbPos.x * 100}%`,
                          "--yPos": `${colorThumbPos.y * 100}%`,
                          "--selectedColor": `rgb(${colorRGBA[0]} ${colorRGBA[1]} ${colorRGBA[2]})`,
                        } as React.CSSProperties
                      }
                      className="-translate-x-1/2 -translate-y-1/2 bg-(--selectedColor) rounded-full h-3 w-3 border border-white absolute top-(--yPos) left-(--xPos)"
                    ></div>
                  </div>
                </div>
              </div>
              {/* other two pickers */}
              <div
                className={`flex flex-col ${activelyChangingSV ? "visible" : "invisible"} group-hover:visible flex-1 h-19 mr-0.4`}
              >
                {/* hue */}
                <div
                  onMouseMove={(e) => {
                    if (e.buttons === 1) {
                      if (wasMouseDownH) {
                        const pickerRegion =
                          e.currentTarget.getBoundingClientRect();
                        let relativeX =
                          (e.clientX - pickerRegion.x) / pickerRegion.width;
                        // I'm not sure if this stuff down here is necessary but whatever
                        if (relativeX > 1) {
                          relativeX = 1;
                        }
                        if (relativeX < 0) {
                          relativeX = 0;
                        }
                        setLiveColor(
                          `hsl(${(relativeX * 360).toFixed(2)} ${deadHSL[1].toFixed(2)} ${deadHSL[2].toFixed(2)} / ${deadRGBA[3].toFixed(2)})`,
                        );
                        setActivelyChangingH(true);
                      }
                    }
                  }}
                  onMouseEnter={() => setWasMouseDownH(false)}
                  onMouseDown={(e) => {
                    // ^ v ^ v These are the mostly the same
                    setWasMouseDownH(true);
                    if (e.buttons === 1) {
                      const pickerRegion =
                        e.currentTarget.getBoundingClientRect();
                      let relativeX =
                        (e.clientX - pickerRegion.x) / pickerRegion.width;
                      // I'm not sure if this stuff down here is necessary but whatever
                      if (relativeX > 1) {
                        relativeX = 1;
                      }
                      if (relativeX < 0) {
                        relativeX = 0;
                      }
                      setLiveColor(
                        `hsl(${(relativeX * 360).toFixed(2)} ${deadHSL[1].toFixed(2)} ${deadHSL[2].toFixed(2)} / ${deadRGBA[3].toFixed(2)})`,
                      );
                      setActivelyChangingH(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setWasMouseDownH(false);
                    if (activelyChangingH) {
                      setActivelyChangingH(false);
                      reportBack([dataType, selector, ruleKey], liveColor);
                    }
                  }}
                  onMouseUp={() => {
                    if (activelyChangingH) {
                      setActivelyChangingH(false);
                      reportBack([dataType, selector, ruleKey], liveColor);
                    }
                  }}
                  className="cursor-col-resize relative flex-1 m-1 rounded-md bg-linear-to-r/[in_hsl_longer_hue] from-[#ff0000] to-[#ff0000]"
                >
                  <div
                    style={
                      {
                        "--xPos": `${hueThumbPos / 3.6}%`,
                      } as React.CSSProperties
                    }
                    className="-translate-x-1/2 -translate-y-1/2 bg-0% rounded-md h-7 w-1 border-2 border-white absolute top-[50%] left-(--xPos)"
                  ></div>
                </div>
                {/* alpha */}
                <div
                  onMouseMove={(e) => {
                    if (e.buttons === 1) {
                      if (wasMouseDownA) {
                        const pickerRegion =
                          e.currentTarget.getBoundingClientRect();
                        let relativeX =
                          (e.clientX - pickerRegion.x) / pickerRegion.width;
                        // I'm not sure if this stuff down here is necessary but whatever
                        if (relativeX > 1) {
                          relativeX = 1;
                        }
                        if (relativeX < 0) {
                          relativeX = 0;
                        }
                        setLiveColor(
                          `hsl(${deadHSL[0].toFixed(2)} ${deadHSL[1].toFixed(2)} ${deadHSL[2].toFixed(2)} / ${relativeX.toFixed(2)})`,
                        );
                        setActivelyChangingA(true);
                      }
                    }
                  }}
                  onMouseEnter={() => setWasMouseDownA(false)}
                  onMouseDown={(e) => {
                    // ^ v ^ v These are the mostly the same
                    setWasMouseDownA(true);
                    if (e.buttons === 1) {
                      if (wasMouseDownA) {
                        const pickerRegion =
                          e.currentTarget.getBoundingClientRect();
                        let relativeX =
                          (e.clientX - pickerRegion.x) / pickerRegion.width;
                        // I'm not sure if this stuff down here is necessary but whatever
                        if (relativeX > 1) {
                          relativeX = 1;
                        }
                        if (relativeX < 0) {
                          relativeX = 0;
                        }
                        setLiveColor(
                          `hsl(${deadHSL[0].toFixed(2)} ${deadHSL[1].toFixed(2)} ${deadHSL[2].toFixed(2)} / ${relativeX.toFixed(2)})`,
                        );
                        setActivelyChangingA(true);
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    setWasMouseDownA(false);
                    if (activelyChangingA) {
                      setActivelyChangingA(false);
                      reportBack([dataType, selector, ruleKey], liveColor);
                    }
                  }}
                  onMouseUp={() => {
                    if (activelyChangingA) {
                      setActivelyChangingA(false);
                      reportBack([dataType, selector, ruleKey], liveColor);
                    }
                  }}
                  className="cursor-col-resize flex-1 flex bg-[conic-gradient(#fff_25%,#ccc_25%_50%,#fff_50%_75%,#ccc_75%)] bg-size-[15px_15px] m-1 rounded-md"
                >
                  <div
                    style={
                      {
                        "--selectedColor": `rgb(${colorRGBA[0]} ${colorRGBA[1]} ${colorRGBA[2]})`,
                      } as React.CSSProperties
                    }
                    className="relative flex-1 bg-linear-to-r from-transparent to-(--selectedColor)" // this needs to not include the alpha for the to-(). Surely this will all come in the great alpha overhall. also for some reaosn the coreners aren't rounded on the right
                  >
                    <div
                      style={
                        {
                          "--xPos": `${100 * colorRGBA[3]}%`,
                        } as React.CSSProperties
                      }
                      className="-translate-x-1/2 -translate-y-1/2 bg-0% rounded-md h-7 w-1 border-2 border-white absolute top-[50%] left-(--xPos)"
                    ></div>
                  </div>
                </div>
                <code className="text-gray-300 text-xs font-mono">
                  {JSON.stringify(colorRGBA)}
                </code>
              </div>
            </div>
          </div>
          <div
            className="flex-1 justify-end "
            style={{ backgroundColor: cardColor }}
          ></div>
          <div className="absolute top-0 right-0">
            <button
              className={`inset-ring-2 w-8 h-30 ${isSelected ? "inset-ring-neutral-400 bg-indigo-800" : "inset-ring-gray-400 bg-neutral-100"}`}
              onClick={(e) => {
                if (isSelected) {
                  setSelected(false, e.shiftKey);
                } else {
                  setSelected(true, e.shiftKey);
                }
              }}
            ></button>
          </div>
          <div className="absolute top-0 right-10 h-27 flex flex-col justify-end">
            <button
              className={`rounded-md hover:bg-neutral-800 inset-ring-2 inset-ring-neutral-900 bg-black text-white w-50 h-6 font-workSans ${isRearranging ? "" : "hidden"}`}
              onClick={() => {
                moveHere();
              }}
            >
              Move Selected Below
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={`relative  animate-none h-9 ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]`}
        >
          <div className="flex-col text-nowrap w-120  shrink-0  float-start bg-gray-800 text-gray-50">
            <label
              title={`${selector} ${ruleKey}`}
              className="justify-between flex flex-start m-1"
            >
              <span className="overflow-hidden text-ellipsis">
                <span className="text-xs text-gray-300">value: &nbsp;</span>
                <span className="overflow-hidden text-sm flex-1 min-w-0">
                  {selector}&nbsp;
                </span>
                <span className="font-bold min-w-0">{ruleKey}</span>&nbsp;
              </span>
              <input
                value={ruleValue}
                className="w-40 focus:outline-1.5 outline-mist-100 bg-gray-900 rounded-md mr-1 hover:bg-[#171720] border-black pl-1 inset-shadow-md/40"
                onChange={(e) =>
                  reportBack([dataType, selector, ruleKey], e.target.value)
                }
              />
            </label>
          </div>
          <div className="absolute top-0 right-0">
            <button
              className={`inset-ring-2 w-8 h-30 ${isSelected ? "inset-ring-neutral-400 bg-indigo-800" : "inset-ring-gray-400 bg-neutral-100"}`}
              onClick={(e) => {
                if (isSelected) {
                  setSelected(false, e.shiftKey);
                } else {
                  setSelected(true, e.shiftKey);
                }
              }}
            ></button>
          </div>
          <div className="absolute top-0 right-10 h-27 flex flex-col justify-end">
            <button
              className={`rounded-md hover:bg-neutral-800 inset-ring-2 inset-ring-neutral-900 bg-black text-white w-50 h-6 font-workSans ${isRearranging ? "" : "hidden"}`}
              onClick={() => {
                moveHere();
              }}
            >
              Move Selected Below
            </button>
          </div>
        </div>
      </>
    );
  }
}
