import convert from "color-convert";
//import { useRef } from "react";

//I NEED TO MAKE IT SO THAT SETTING THE ALPHA TO SOMETHING DOESN'T MESS UP THE COLORPICKER!!! LIKE IF YOU SAY #f081 THATS CURRENTLY DIFFERENT THAN #f08f 

// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({
  reportBack,
  dataType,
  selector,
  ruleKey,
  ruleValue,
}: {
  reportBack: (ruleID: string[], value: string) => void;
  dataType: string;
  selector: string;
  ruleKey: string;
  ruleValue: string;
}) {
  if (dataType === "c") {
    let cardColor = ruleValue;

    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = colorCanvas.height = 1;
    const colorCanvasContext = colorCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    let colorRGBA = new Uint8ClampedArray([0, 0, 0, 0]);
    let colorHSL = [0, 0, 0];
    if (colorCanvasContext !== null) {
      colorCanvasContext.fillStyle = ruleValue;
      colorCanvasContext.fillRect(0, 0, 1, 1);
      colorRGBA = colorCanvasContext.getImageData(0, 0, 1, 1).data;
      colorHSL = convert.rgb.hsl(colorRGBA[0], colorRGBA[1], colorRGBA[2]);
    }
    const fakeStyle = new Option().style;
    fakeStyle.color = ruleValue; // sets the color to the color provided. it won't stay if invalid. ty stack overflow.
    if (fakeStyle.color == "") {
      cardColor = "#0000";
    }
    return (
      <>
        <div className="animate-none h-9 ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]">
          <div className="flex-col text-nowrap w-200 pt-1 shrink-0  float-start bg-gray-800 text-gray-50">
            <label className="flex-start m-1">
              <span className="text-xs text-gray-300">
                color: {selector}&nbsp;
              </span>
              <span className="font-bold">{ruleKey}</span>&nbsp;
              <input
                value={ruleValue}
                className="w-40 focus:outline-1.5 outline-mist-100 bg-gray-900 rounded-md mr-1 hover:bg-[#171720] border-black pl-1 inset-shadow-md/40"
                onChange={(e) => reportBack([dataType, selector, ruleKey], e.target.value)}
              />
            </label>
            <code className="text-gray-300 text-xs font-mono">
              {fakeStyle.color}
            </code>
            <div className="flex mt-1 flex-row">
              <div
                className="flex-2 bg-linear-to-r from-white to-(--hueColor)"
                style={
                  {
                    "--hueColor": `hsl(${colorHSL[0]} 100 50)`,
                  } as React.CSSProperties
                }
              >
                <div className="bg-linear-to-t from-black to-[#0000]">
                  <div className="bg-white visible bg-[conic-gradient(transparent_25%,#ccc_25%_50%,transparent_50%_75%,#ccc_75%)] bg-size-[18px_18px] group-hover:invisible transition duration-100">
                    <div
                      className="flex-auto h-19"
                      style={{ backgroundColor: cardColor }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-amber-950 h-19">
                beep
              </div>
            </div>
          </div>
          <div
            className="flex-1 justify-end"
            style={{ backgroundColor: cardColor }}
          ></div>
        </div>
      </>
    );
  }
}
