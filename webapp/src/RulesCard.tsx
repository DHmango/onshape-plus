// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({reportBack, dataType, selector, ruleKey, ruleValue}:{reportBack: (id: string, value: string) => void;dataType: string; selector: string; ruleKey: string; ruleValue: string}) {
    if (dataType === 'c'){
        let cardColor = ruleValue
        const fakeStyle = new Option().style
        fakeStyle.color = ruleValue // sets the color to the color provided. it won't stay if invalid. ty stack overflow
        if (fakeStyle.color == ''){
            cardColor='#0000'
        }
        return (<>
        <div className="flex overflow-hidden bg-white bg-[conic-gradient(#ccc_25%,transparent_25%_50%,#ccc_50%_75%,transparent_75%)] bg-size-[24px_24px]">
        <div className="flex-1 shrink-0 border-[#000000] border float-start p-3 font-serif bg-gray-900 text-gray-50">
        <label className="justify-start">
            <u>{ruleKey}</u>&nbsp;hex code:&nbsp;<input value={ruleValue} className="width-sm" onChange={(e) => reportBack(ruleKey, e.target.value)}/> 
        </label>
        </div>
        <div className="flex-1 justify-end"style={{backgroundColor:cardColor,}}>
        </div>
        </div>
        </>)
    }

}