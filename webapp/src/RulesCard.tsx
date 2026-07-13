import convert from "color-convert";
import { useState } from "react";

//I NEED TO MAKE IT SO THAT SETTING THE ALPHA TO SOMETHING DOESN'T MESS UP THE COLORPICKER!!! LIKE IF YOU SAY #f081 THATS CURRENTLY DIFFERENT THAN #f08f
//I SHOULD SET COLOR CONVERT NOT TO ROUND EVERYWHERE
//I NEED TO HAVE IT NOT CLOSE THE EXPANDED THING WHILE YOU ARE ACTIVELY CHANGING THE COLOR
//ALSO MAYBE SOMEHOW YOU DON'T SELECT TEXT AND STUFF WHILE DOING THAT
//SOME VALUES LIKE #88F IF INPUTED LOOK LIKE THEY DON'T FIT WHERE THEY ARE ON THE COLOR PICKER... MAYBE THIS FIX WILL GO WITH THE ALPHA THING
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
      colorHSL = convert.rgb.hsl(colorRGBA[0], colorRGBA[1], colorRGBA[2]);
    }
    const colorHSV = convert.hsl.hsv(colorHSL[0], colorHSL[1], colorHSL[2]);

    const [colorPos, setColorPos] = useState({
      x: colorHSV[1] / 100,
      y: 1 - colorHSV[2] / 100,
    }); // Note: These are to be expressed as ratios, not coordinates (ex: 0.5 = halfway)
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
          className={`animate-none h-${activelyChangingColor ? 27 : 9} ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]`}
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
            {/*
              <code className="text-gray-300 text-xs font-mono">
                {fakeStyle.color}
              </code>
              */}
            <div
              className={` bg-white ${activelyChangingColor ? "in" : ""}visible bg-[conic-gradient(transparent_25%,#ccc_25%_50%,transparent_50%_75%,#ccc_75%)] bg-size-[18px_18px] group-hover:invisible`}
            >
              <div
                className="flex-auto h-19"
                style={{ backgroundColor: cardColor }}
              />
            </div>
            <div
              className={`flex -mt-19 flex-row ${activelyChangingColor ? "" : "in"}visible group-hover:visible`}
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
                        const color = convert.hsv.hsl(
                          0,
                          ((e.clientX - pickerRegion.x) / pickerRegion.width) *
                            100,
                          100 -
                            ((e.clientY - pickerRegion.y) /
                              pickerRegion.height) *
                              100,
                        );

                        setLiveColor(
                          `hsl(${colorHSL[0]} ${color[1]} ${color[2]})`,
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
                      const pickerRegion =
                        e.currentTarget.getBoundingClientRect();
                      let relativeX = (e.clientX - pickerRegion.x) / pickerRegion.width
                      let relativeY = (e.clientY - pickerRegion.y) / pickerRegion.height
                      if (relativeX >1){
                        relativeX = 1
                      }
                      if (relativeX <0){
                        relativeX = 0
                      }
                      if (relativeY >1){
                        relativeY = 1
                      }
                      if (relativeY <0){
                        relativeY = 0
                      }
                      const color = convert.hsv.hsl(
                        0,
                        relativeX *
                          100,
                        100 - //why did you do that prettier
                          relativeY *
                            100,
                      );

                      setLiveColor(
                        `hsl(${colorHSL[0]} ${color[1]} ${color[2]})`,
                      );
                      setActivelyChangingColor(true);
                      // mamybe i can make some thing where while its dragging it doesn't use reportback
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
                className={`${activelyChangingColor ? "" : "in"}visible group-hover:visible flex-1 h-19`}
              >
                {JSON.stringify(colorThumbPos)} alpha and hue sliders
                <br></br>
                {cardColor}
                <br />
                {`${activelyChangingColor}`}
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
