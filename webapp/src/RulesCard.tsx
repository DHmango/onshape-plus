// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({reportBack, dataType, selector, ruleKey, ruleValue}:{reportBack: (id: string, value: string) => void;dataType: string; selector: string; ruleKey: string; ruleValue: string}) {
    if (dataType === 'c'){
        let cardColor = ruleValue
        const fakeStyle = new Option().style
        fakeStyle.color = ruleValue // sets the color to the color provided. it won't stay if invalid. ty stack overflow. 
        if (fakeStyle.color == ''){
            cardColor='#0000'
        }
        return (<>
        <div className="h-9 ease-in-out flex transition-all hover:h-27 duration-100 overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[18px_18px]">
        <div className="w-xl shrink-0 border-[#000000] border float-start p-1 bg-gray-800 text-gray-50">
        <label className="flex-start">
            <i className="text-sm text-gray-300">color:&nbsp;</i><span className="font-bold">{ruleKey}</span>&nbsp;<input value={ruleValue} className="w-40 focus:outline-1 outline-mist-100 bg-gray-900 rounded-md mr-1 hover:bg-[#171720] border-black pl-1 shadow-md/40" onChange={(e) => reportBack(ruleKey, e.target.value)}/> 
        </label>
        <code className="text-gray-300 text-xs font-mono">{fakeStyle.color}</code>
        </div>
        <div className="flex-1 justify-end"style={{backgroundColor:cardColor,}}>
        </div>
        </div>
        </>)
    }

}