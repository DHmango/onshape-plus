// Put all the javascript code here, that you want to execute in background.
const themesByVersion = {"1.0.0":['classy.json', 'cool_aurora.json', 'midnight.json', 'Onshape_dark.json', 'Onshape_light.json', 'pink.json'],"1.0.6":['purple.json','rainbow.json', 'darkest.json']}

browser.runtime.onInstalled.addListener((details)=>{
  if (details.reason === browser.runtime.OnInstalledReason.INSTALL){
    preloadThemes()
  } else if (details.reason === browser.runtime.OnInstalledReason.UPDATE){ //dont do both
    loadNewThemes()
  }
});
async function getSaves() {
  const themesList = [];
  const keys = await browser.storage.local.getKeys();
  for (const key of keys) {
    if (key.startsWith("theme-")) {
      const value = await browser.storage.local.get(key);
      themesList.push({
        slot: Number(key.slice(-2)),
        name: JSON.parse(typeof value[key] === "string" ? value[key] : "error")
          .name,
      });
    }
  }
  const sortedList = themesList.toSorted((a, b) => a.slot - b.slot);
  return sortedList;
}
async function loadNewThemes() {
  // loads the themes in newThemes for the current version
  let highestSave = (await getSaves()).at(-1).slot // dw its pre sorted
  const extensionVersion = browser.runtime.getManifest().version
  const realNewThemes = themesByVersion[extensionVersion]
  const toSet = {}
  for (const path of realNewThemes) {
    highestSave += 1
    toSet[`theme-${String(highestSave).padStart(2,'0')}`] = JSON.stringify(
      await downloadTheme(
        browser.runtime.getURL(`themes/${path}`),
      ),
    )
  }
  await browser.storage.local.set(
    toSet
  );
}
async function preloadThemes() {
  // loads the built in themes
  const sorted = await browser.storage.local.get("SORTED");
  if (!Object.hasOwn(sorted, "SORTED")) {
    await browser.storage.local.set({
      ["theme-00"]: JSON.stringify(
        await downloadTheme(
          browser.runtime.getURL("themes/Onshape_light.json"),
        ),
      ),
      ["theme-01"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/Onshape_dark.json")),
      ),
      ["theme-02"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/cool_aurora.json")),
      ),
      ["theme-03"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/midnight.json")),
      ),
      ["theme-04"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/darkest.json")),
      ),
      ["theme-05"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/pink.json")),
      ),
      ["theme-06"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/classy.json")),
      ),
      ["theme-07"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/rainbow.json")),
      ),
      ["theme-08"]: JSON.stringify(
        await downloadTheme(browser.runtime.getURL("themes/purple.json")),
      ),
      ["SORTED"]: JSON.stringify(
        await downloadTheme(
          browser.runtime.getURL("themes/Onshape_light.json"),
        ),
      ),
      lightTheme: "theme-00",
      darkTheme: "theme-01",
      allowJS: "false", // ignore?
    });
  }
}
async function downloadTheme(address) {
  try {
    const response = await fetch(address);
    if (!response.ok) {
      throw new Error(response.status);
    }
    jsonned = await response.json();
    return jsonned;
  } catch (error) {
    console.log(`could not fetch theme: ${error}`);
  }
}
