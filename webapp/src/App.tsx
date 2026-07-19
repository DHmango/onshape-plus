import { useState } from "react";
import "./App.css";
import RulesCard from "./RulesCard";

export default function App() {
  //add a way to sort them by whatever
  const [ruleValues, setRuleValues] = useState<string[][]>([]);
  const [justCopied, setJustCopied] = useState(false)
  const themeJSON = `{
"version": "0.1",
"what": "onshape theme",
"name": "Onshape light",
"rules": ${JSON.stringify(ruleValues)}}`;

  const whenInputChanged = (ruleID: string[], value: string) => {
    setRuleValues(
      (prevValues) =>
        prevValues.map(
          (
            rule, // a rule looks like ['c','',"--os-accent-nonary","#a64dff"]
          ) =>
            rule[2] === ruleID[2] &&
            rule[1] === ruleID[1] &&
            rule[0] === ruleID[0] //checks if all key parts of the rule match, stopping as soon as one doesn't
              ? rule.map((oldValue, dataIndex) =>
                  dataIndex === 3 ? value : oldValue,
                )
              : rule,
        ),
      //map sets every array value to the result of what you givt it. index 2 means it only changes the index 2 thing in the array 'key':['c','','THIS']
    );
  };
  return (
    <>
      <div className="flex w-full overflow-hidden h-screen bg-[#202020]">
        <div className="flex flex-1 place-content-between">
          <div className="flex-col flex flex-none fixed right-0 h-screen bg-[#aaa] w-30">
            Hi
            <button
              className="flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {}
              }
            >
              <p className="flex-3 text-xs text-gray-300 self-center">
                Sort A-Z
              </p>
            </button>
            <button
              className="flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {}
              }
            >
              <p className="flex-3 text-xs text-gray-300 self-center">
                Sort hue
              </p>
            </button>
            <button
              className="flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {}
              }
            >
              <p className="flex-3 text-xs text-gray-300 self-center">
                Sort saturation
              </p>
            </button>
            <button
              className="flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {}
              }
            >
              <p className="flex-3 text-xs text-gray-300 self-center">
                Sort value
              </p>
            </button>
            <button
              className="flex-row flex bg-gray-800 m-1 p-1 rounded-lg text-gray-100"
              onClick={() => {navigator.clipboard.writeText(themeJSON)
                setJustCopied(true)
                setTimeout(()=>{
                  setJustCopied(false)
                }, 1500)
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
                {justCopied? 'Copied!' : 'Copy'}
              </p>
            </button>
            <textarea
              spellCheck="false"
              value={themeJSON}
              onChange={(event)=>{setRuleValues(JSON.parse(event.target.value).rules)}}
              onFocus={(event) => {
                event.target.select();                
              }}
              className="break-all resize-none flex-none select-all font-mono bg-[#ccc] h-40 overflow-auto tracking-tight text-[9px]/tight wrap-anywhere scrollbar-thin"
            ></textarea>  
          </div>
          <div className="relative flex-1 overflow-x-hidden overflow-y-scroll h-full mr-30 scrollbar-thumb-slate-400/50 scrollbar-track-black/50">
            <div className="w-full h-full bg-zinc-500 text-center p-5 text-xl text-mauve-800">No rules yet. Load a preset using the sidebar</div>
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
