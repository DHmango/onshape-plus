// Put all the javascript code here, that you want to execute in background.
browser.runtime.onInstalled.addListener(preloadThemes)
console.log('hi im a service worker or something')

async function preloadThemes(){ // loads the built in themes
    await browser.storage.local.set({
        ['theme-00']:JSON.stringify(await downloadTheme(browser.runtime.getURL('themes/Onshape_light.json'))),
        ['theme-01']:JSON.stringify(await downloadTheme(browser.runtime.getURL('themes/Onshape_dark.json'))),
        lightTheme:"theme-01",
        darkTheme:"theme-00",
        allowJS:"false"
    })
    console.log(JSON.parse(browser.storage.local.get(['theme-00'])))
}
async function downloadTheme(address){
    try{
        const response = await fetch(address);
        if (!response.ok){
            throw new Error(response.status)
        }
        jsonned = await response.json()
        return jsonned;
    } catch(error){
        console.log(`could not fetch theme: ${error}`)
    }       
}