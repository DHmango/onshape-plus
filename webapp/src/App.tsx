import { useState } from 'react'
import './App.css'
import RulesCard from './RulesCard'

export default function App() {
  //const rulesList = [
  //['c','',"--os-accent-nonary","#a64dff"],
  //  ["c","","--os-accent-octonary","#def1fb"],
  //]

  const [ruleValues, setRuleValues] = useState<Record<string, string[]>>({'--test3': ['c','','oklch(0.6 0.1 90/0.7)'],'--test': ['c','','#a64dff'], '--fakeTest': ['c','','rgb(90,60,90)'],'hello':['c','','#123456']})
  const whenInputChanged = (id: string, value:string) => {
    setRuleValues((prevValues) => ({
      ...prevValues, [id]:prevValues[id].map((oldValue, index) => index===2 ? value : oldValue),//map sets every array value to the result of what you givt it. index 2 means it only changes the index 2 thing in the array 'key':['c','','THIS']
    }))
  }
  return (
    <>
    <div className='w-full min-h-screen bg-[#202020]'>
      {Object.entries(ruleValues).map(([ruleKey, ruleData]) => (
        <RulesCard reportBack={whenInputChanged} ruleKey={ruleKey} ruleValue={ruleData[2]} dataType={ruleData[0]} selector={ruleData[1]}/>
      ))}
    </div>
    </>
  )
}