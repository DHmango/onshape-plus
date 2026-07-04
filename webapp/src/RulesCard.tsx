// this thing doesn't store any data its self, its instead passed data from its parent, and calls back to it when it changes.
export default function RulesCard({reportBack, dataType, selector, ruleKey, ruleValue}:{reportBack: (id: string, value: string) => void;dataType: string; selector: string; ruleKey: string; ruleValue: string}) {
    if (dataType === 'c'){
        return (<>
        <div className="border border-indigo-600">
        <label>
            <u>{ruleKey}</u> hex code:<input value={ruleValue} name="coolInput" onChange={(e) => reportBack(ruleKey, e.target.value)}/> 
        </label>
        <p>{selector}</p>
        <p>{ruleKey}</p>
        <p>{ruleValue}</p>
        </div>
        </>)
    }

}