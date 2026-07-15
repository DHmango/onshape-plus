import convert from "color-convert";
import { useState } from "react";

// I NEED TO MAKE IT SO THAT SETTING THE ALPHA TO SOMETHING DOESN'T MESS UP THE COLORPICKER!!! LIKE IF YOU SAY #f081 THATS CURRENTLY DIFFERENT THAN #f08f
// ALSO MAYBE SOMEHOW YOU DON'T SELECT TEXT AND STUFF WHILE DOING THAT [DRAGGING] - idrk, but what could be nice is if it snaps to the nearest in bounds place instead of stopping but that seems hard because mouseMove is only triggered over the thing but idk maybe using activelyChangingColor over the whole thing would work idk
// SOME VALUES LIKE #88F IF INPUTED LOOK LIKE THEY DON'T FIT WHERE THEY ARE ON THE COLOR PICKER... MAYBE THIS FIX WILL GO WITH THE ALPHA THING
// ^ Related?: if you move to a low saturation  place, the hue will change because its changing it to other format or something idrk
// basically just make it so hue doesn't change for this^

function colorStringToRGBA(colorString: string) {
  // the reason i can't wholly rely on the fakestyle method is that some things, like oklch(0.1 0.1 100 /0.5) will not be converted to rgba

  let toReturn = [0, 0, 0, 0];

  //check if its valid using the fakeStyle method
  const fakeStyle = new Option().style;
  fakeStyle.color = colorString; // sets the color to the color provided. it won't stay if invalid. ty stack overflow.
  if (fakeStyle.color == "") {
  } else {
    const cleanedString = fakeStyle.color;
    //if it starts with a #, check the length- 5 or 9 characters has alpha nvm, cleaned uses rgba :sob:
    if (cleanedString.includes("rgba(")) {
      const rgb = cleanedString.slice(5, -1).split(", "); //takes away rgba() and splits it
      toReturn[0] = parseInt(rgb[0], 10);
      toReturn[1] = parseInt(rgb[1], 10);
      toReturn[2] = parseInt(rgb[2], 10);
      toReturn[3] = parseInt(rgb[3], 10);// shut up shut up shut up shut up shut
      // if it doesn't, check if it has a slash. I'm p sure all other alphas have a slash. replace slash and beyond with ")" and feed that into canvas method. whats after the slash, you should check if its percent or decimal, and blah blah
    } else if (cleanedString.includes("/")) {
      const colorCanvas = document.createElement("canvas"); // copied from similar thing in main body... but maybe thats gone as you read this
      colorCanvas.width = colorCanvas.height = 1;
      const colorCanvasContext = colorCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (colorCanvasContext !== null) {
        // to appease the ts gods... theres no backup plan
        colorCanvasContext.fillStyle = `${cleanedString.split("/")[0]})`;
        colorCanvasContext.fillRect(0, 0, 1, 1);
        const rgb = colorCanvasContext.getImageData(0, 0, 1, 1).data;
        toReturn[0] = rgb[0];
        toReturn[1] = rgb[1];
        toReturn[2] = rgb[2];
      }
      toReturn[3] = parseInt(cleanedString.split("/")[1].slice(0, -1), 10);
    } else {
      const colorCanvas = document.createElement("canvas"); // copied from similar thing in main body... but maybe thats gone as you read this
      colorCanvas.width = colorCanvas.height = 1;
      const colorCanvasContext = colorCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (colorCanvasContext !== null) {
        colorCanvasContext.fillStyle = cleanedString;
        colorCanvasContext.fillRect(0, 0, 1, 1);
        const rgb = colorCanvasContext.getImageData(0, 0, 1, 1).data;
        toReturn[0] = rgb[0];
        toReturn[1] = rgb[1];
        toReturn[2] = rgb[2];
      }
      toReturn[3] = 1;
    }
  }
  return(toReturn)
}

// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({
  reportBack, //the thing used to change the centralized array of data
  dataType, // color, px, etc. only 'c' works rn
  selector, // css selector- not implemented
  ruleKey, // what the name of the value we are setting. ex: --os-accent-nonary
  ruleValue, // the value we set it to
}: {
  // the typescripr types
  reportBack: (ruleID: string[], value: string) => void;
  dataType: string;
  selector: string;
  ruleKey: string;
  ruleValue: string;
}) {
  // someday we will have totally different things if its not a color
  if (dataType === "c") {
    let cardColor = ruleValue; // the actual color used within the card

    const [liveColor, setLiveColor] = useState("#000"); // the color while you are dragging it, local to this card instead of in the bigger array
    const [activelyChangingColor, setActivelyChangingColor] = useState(false); // whether or not you are actively changing the color

    if (activelyChangingColor) {
      cardColor = liveColor; // sets the color shown on the card to the active live color
    }

    const colorCanvas = document.createElement("canvas"); // makes a fake canvas
    colorCanvas.width = colorCanvas.height = 1;
    const colorCanvasContext = colorCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    let colorRGBA = new Uint8ClampedArray([0, 0, 0, 0]); // this section has a problem- its supposed to be converting any arbitrary color to rgba and hsl, but it doesn't work if its not totally opaque because its just looking at the pixel and seeing what color it is, so if it was #f008, it would turn into #800 (or something like that)
    let colorHSL = [0, 0, 0];
    if (colorCanvasContext !== null) {
      colorCanvasContext.fillStyle = cardColor;
      colorCanvasContext.fillRect(0, 0, 1, 1);
      colorRGBA = colorCanvasContext.getImageData(0, 0, 1, 1).data;
      colorHSL = convert.rgb.hsl.raw(colorRGBA[0], colorRGBA[1], colorRGBA[2]);
    } //
    const colorHSV = convert.hsl.hsv.raw(colorHSL[0], colorHSL[1], colorHSL[2]);

    const colorThumbPos = {
      x: colorHSV[1] / 100,
      y: 1 - colorHSV[2] / 100,
    };

    const fakeStyle = new Option().style;
    fakeStyle.color = cardColor; // sets the color to the color provided. it won't stay if invalid. ty stack overflow.
    if (fakeStyle.color == "") {
      cardColor = "#0000";
    } // this doesn't have the problem that the thing above has, but it also doesn't convert it to something easy to parse
    //maybe i have to make or find something that converts **any** color string to rgba, including the a
    return (
      <>
        <div
          className={`animate-none ${activelyChangingColor ? "h-27" : "h-9"} ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]`}
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
                onChange={
                  (
                    e, //{
                  ) => reportBack([dataType, selector, ruleKey], e.target.value)
                  //setColorPos({
                  //x: colorHSV[1] / 100,
                  //y: 1 - colorHSV[2] / 100,
                  //});
                  //}
                }
              />
            </label>

            <div
              className={` bg-white ${activelyChangingColor ? "invisible" : "visible"} bg-[conic-gradient(transparent_25%,#ccc_25%_50%,transparent_50%_75%,#ccc_75%)] bg-size-[18px_18px] group-hover:invisible`}
              // for some reason this one has to be opposite grid as the other for them to line up
            >
              <div
                className="flex-auto h-19"
                style={{ backgroundColor: cardColor }}
              />
            </div>
            <div
              className={`flex -mt-19 flex-row ${activelyChangingColor ? "visible" : "invisible"} group-hover:visible`}
            >
              <div
                className="flex-2 bg-linear-to-r from-white to-(--hueColor)"
                style={
                  {
                    "--hueColor": `hsl(${colorHSL[0]} 100 50)`,
                  } as React.CSSProperties
                }
              >
                {/* maybe i can set the opacity of the outer div to whatever alpha is an have another grid behind it */}
                <div className="cursor-crosshair bg-linear-to-t from-black to-[#0000] h-19">
                  <div
                    onMouseMove={(e) => {
                      console.log("yayy!");
                      if (e.buttons === 1) {
                        const pickerRegion =
                          e.currentTarget.getBoundingClientRect();
                        const color = convert.hsv.hsl.raw(
                          0,
                          ((e.clientX - pickerRegion.x) / pickerRegion.width) *
                            100,
                          100 -
                            ((e.clientY - pickerRegion.y) /
                              pickerRegion.height) *
                              100,
                        );

                        setLiveColor(
                          `hsl(${colorHSL[0].toFixed(2)} ${color[1].toFixed(2)} ${color[2].toFixed(2)})`,
                        );
                        setActivelyChangingColor(true);
                        // mamybe i can make some thing where while its dragging it doesn't use reportback
                      } else {
                        if (activelyChangingColor) {
                          setActivelyChangingColor(false);
                          reportBack([dataType, selector, ruleKey], liveColor);
                        }
                      }
                    }}
                    onMouseDown={(e) => {
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
                          `hsl(${colorHSL[0].toFixed(2)} ${color[1].toFixed(2)} ${color[2].toFixed(2)})`,
                        );
                        setActivelyChangingColor(true);
                      }
                    }}
                    className="relative flex-1 bg-[#0ff0] h-19 w-80"
                    onMouseUp={() => {
                      if (activelyChangingColor) {
                        setActivelyChangingColor(false);
                        reportBack([dataType, selector, ruleKey], liveColor);
                      }
                    }}
                  >
                    <div
                      style={
                        {
                          "--xPos": `${colorThumbPos.x * 100}%`,
                          "--yPos": `${colorThumbPos.y * 100}%`,
                          "--selectedColor": `${cardColor}`,
                        } as React.CSSProperties
                      }
                      className="-translate-x-1/2 -translate-y-1/2 bg-(--selectedColor) rounded-full h-3 w-3 border border-white absolute top-(--yPos) left-(--xPos)"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col ${activelyChangingColor ? "visible" : "invisible"} group-hover:visible flex-1 h-19 mr-0.4`}
              >
                <div className="relative flex-1 m-1 rounded-md bg-linear-to-r/[in_hsl_longer_hue] from-[#ff0000] to-[#ff0000]">
                  <div
                    style={
                      {
                        "--xPos": `${colorHSL[0] / 3.6}%`,
                      } as React.CSSProperties
                    }
                    className="-translate-x-1/2 -translate-y-1/2 bg-0% rounded-md h-7 w-1 border-2 border-white absolute top-[50%] left-(--xPos)"
                  ></div>
                </div>
                <div className="flex-1 flex bg-[conic-gradient(#fff_25%,#ccc_25%_50%,#fff_50%_75%,#ccc_75%)] bg-size-[15px_15px] m-1 rounded-md">
                  <div
                    style={
                      {
                        "--selectedColor": `${cardColor}`,
                      } as React.CSSProperties
                    }
                    className="relative flex-1 bg-linear-to-r from-transparent to-(--selectedColor)" // this needs to not include the alpha for the to-(). Surely this will all come in the great alpha overhall. also for some reaosn the coreners aren't rounded on the right
                  >
                    <div
                      style={
                        {
                          "--xPos": `50%`, //...glup
                        } as React.CSSProperties
                      }
                      className="-translate-x-1/2 -translate-y-1/2 bg-0% rounded-md h-7 w-1 border-2 border-white absolute top-[50%] left-(--xPos)"
                    ></div>
                  </div>
                </div>
                <code className="text-gray-300 text-xs font-mono">
                  {JSON.stringify(colorStringToRGBA(ruleValue))}
                </code>
              </div>
            </div>
          </div>
          <div
            className="flex-1 justify-end "
            style={{ backgroundColor: cardColor }}
          ></div>
        </div>
      </>
    );
  }
}
