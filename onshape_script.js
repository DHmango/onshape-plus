// Script that runs when onshape loads

//see active themes
const styleSheet = document.createElement('style')
let CSSRules = ''
//
const rulePromises = []
rulePromises.push(new Promise)
//CORE OF WHAT NEEDS TO HAPPEN
//get the keys for light and dark theme
//retrieve the values based on those keys with proper formatting
//convert each of those into css (json2css)
//combine them
//put them into the new stylesheet
//apply it
for (const lightnessMode of ['light','dark']){ //this sucks.
    const which = browser.storage.local.get(`${lightnessMode}Theme`)
    which.then((value)=>{
        const data = browser.storage.local.get(value[`${lightnessMode}Theme`])
        data.then((value) => {
            console.log(Object.values(value)[0])
            rulePromises.push(json2css(JSON.parse(data),lightnessMode)) //i'm sure this isn't the right way to do it...
        })
    })
}
rulePromises.push(Promise())
Promise.allSettled(rulePromises).then(()=>{
    for (const rule of rulePromises){
        CSSRules+=rulePromises.css
    }
    styleSheet.textContent = CSSRules
    console.log(rulePromises)
    document.head.appendChild(styleSheet)
})


//styleSheet.insertRule('osx-welcome-mat-section{display: none !important;}')


function json2css(json,mode){
    let cssOutput = ''
    let jsOutput = ''
    try{
        if (!json.what == 'onshape theme'){
            throw new Error(`file was not recognized as an onshape theme`)
        }
        if (!json.version.includes("0.1")){
            throw new Error(`version mismatch- incompatible theme version: ${json.version}`)
        }
        for (const rule of json.rules){
            if (rule[0]=='c'){
                cssOutput += `[data-os-theme=${mode}]${rule[1]}{${rule[2]}:${rule[3]} !important} 
`
            } else if (rule[0]=='px' || rule[0]=='p'){
                cssOutput += `[data-os-theme=${mode}]${rule[1]}{${rule[2]}:${rule[3]} !important}
`
            } else if (rule[0]=='d'){
                cssOutput += `[data-os-theme=${mode}]${rule[1]}{${rule[2]}:${rule[3]} !important}
`
            } else if (rule[0]=='o'){
                cssOutput += `[data-os-theme=${mode}]${rule[1]}{${rule[2]}:${rule[3]} !important}
`
            } else if (rule[0]=='j'){
                jsOutput+=`${rule[3]}
`
            }
        }
        return {
            "name":json.name,
            "js":jsOutput,
            "css":cssOutput
        }
    } catch (error){
        console.log(`could not process file: ${error}`)
    }
}