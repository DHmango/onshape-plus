import convert from "color-convert";
import { useState } from "react";

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

    const [liveColor, setLiveColor] = useState('#000')
    const [activelyChangingColor, setActivelyChangingColor] = useState(false)

    if (activelyChangingColor){
      cardColor = liveColor
      //Basically, it needs to use a color while you are dragging, and only send it to the central array when you stop. 
    }

    

    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = colorCanvas.height = 1;
    const colorCanvasContext = colorCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    let colorRGBA = new Uint8ClampedArray([0, 0, 0, 0]);
    let colorHSL = [0, 0, 0];
    if (colorCanvasContext !== null) {
      colorCanvasContext.fillStyle = cardColor;
      colorCanvasContext.fillRect(0, 0, 1, 1);
      colorRGBA = colorCanvasContext.getImageData(0, 0, 1, 1).data;
      colorHSL = convert.rgb.hsl(colorRGBA[0], colorRGBA[1], colorRGBA[2]);
    }
    const colorHSV = convert.hsl.hsv(colorHSL[0],colorHSL[1],colorHSL[2])

    const [colorPos, setColorPos] = useState({x:colorHSV[1]/100, y:1-colorHSV[2]/100}); // Note: These are to be expressed as ratios, not coordinates (ex: 0.5 = halfway)

    const fakeStyle = new Option().style;
    fakeStyle.color = cardColor; // sets the color to the color provided. it won't stay if invalid. ty stack overflow.
    if (fakeStyle.color == "") {
      cardColor = "#0000";
    }
    return (
      <>
        <div className="animate-none h-9 ease-in-out flex transition-all group hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]">
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
            {/*
              <code className="text-gray-300 text-xs font-mono">
                {fakeStyle.color}
              </code>
              */}
            <div className=" bg-white visible bg-[conic-gradient(transparent_25%,#ccc_25%_50%,transparent_50%_75%,#ccc_75%)] bg-size-[18px_18px] group-hover:invisible">
              <div
                className="flex-auto h-19"
                style={{ backgroundColor: cardColor }}
              />
            </div>
            <div className="flex -mt-19 flex-row invisible group-hover:visible">
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
                      console.log('yayy!')
                      if (e.buttons === 1) {
                        const pickerRegion = e.currentTarget.getBoundingClientRect()
                        setColorPos({ x: (e.clientX-pickerRegion.x)/pickerRegion.width, y: (e.clientY-pickerRegion.y)/pickerRegion.height })
                        const color = convert.hsv.hsl(0, colorPos.x*100, (1-colorPos.y)*100)
                        
                        setLiveColor(`hsl(${colorHSL[0]} ${color[1]} ${color[2]})`)
                        setActivelyChangingColor(true)
                        // mamybe i can make some thing where while its dragging it doesn't use reportback
                      } else{
                        if (activelyChangingColor){
                          setActivelyChangingColor(false)
                          reportBack([dataType, selector, ruleKey],liveColor)
                        }
                      }
                    }}
                    onMouseDown={(e) => {
                      const pickerRegion = e.currentTarget.getBoundingClientRect()
                      setColorPos({ x: (e.clientX-pickerRegion.x)/pickerRegion.width, y: (e.clientY-pickerRegion.y)/pickerRegion.height })
                      const color = convert.hsv.hsl(colorHSL[0], colorPos.x*100, (1-colorPos.y)*100)

                      setLiveColor(`hsl(${colorHSL[0]} ${color[1]} ${color[2]})`)
                      setActivelyChangingColor(true)
                      }}
                    className="relative flex-1 bg-[#0ff0] h-19 w-80"
                    onMouseUp={() => {
                      if (activelyChangingColor){
                          setActivelyChangingColor(false)
                          reportBack([dataType, selector, ruleKey],liveColor)
                      }
                    }}
                  >
                    <div
                      style={
                        {
                          "--xPos": `${colorPos.x*100}%`,
                          "--yPos": `${colorPos.y*100}%`,
                          "--selectedColor" : `${cardColor}`
                        } as React.CSSProperties
                      }
                      className="-translate-x-1/2 -translate-y-1/2 bg-(--selectedColor) rounded-full h-3 w-3 border border-white absolute top-(--yPos) left-(--xPos)"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="invisible group-hover:visible flex-1 h-19">
                {JSON.stringify(colorPos)} alpha and hue sliders
                <br></br>
                {cardColor}
                <br/>
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
