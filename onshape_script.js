// Script that runs when onshape loads

//see active themes
const styleSheet = document.createElement('style')
let CSSRules = ''
for (const lightnessMode of ['light','dark']){
    console.log(JSON.parse(await browser.storage.local.get(`${lightnessMode}Theme`)))
    const theme = json2css(JSON.parse(await browser.storage.local.get(`${lightnessMode}Theme`)),lightnessMode)
    CSSRules += theme.css
}

styleSheet.textContent = CSSRules

document.head.appendChild(styleSheet)

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