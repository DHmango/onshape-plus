const darkSelect = document.getElementById("darkSelect");
const lightSelect = document.getElementById("lightSelect");
const saveButton = document.getElementById("saveButton");

const lightTheme = await browser.storage.local.get("lightTheme");
const darkTheme = await browser.storage.local.get("darkTheme");
const themesList = [];
const keys = await browser.storage.local.getKeys();
for (const key of keys) {
  if (key.startsWith("theme-")) {
    const value = await browser.storage.local.get(key);
    themesList.push(`${key.slice(-2)}-${await JSON.parse(value[key]).name}`);
  }
}
console.log(lightTheme.lightTheme.slice(-2));
console.log(darkTheme.darkTheme.slice(-2));
for (const themeName of themesList) {
  darkSelect.add(new Option(themeName, `theme-${themeName.slice(0, 2)}`));
  lightSelect.add(new Option(themeName, `theme-${themeName.slice(0, 2)}`));
}
darkSelect.value = darkTheme.darkTheme
lightSelect.value = lightTheme.lightTheme

saveButton.addEventListener("click", function () {
  browser.storage.local.set({
    lightTheme: lightSelect.value,
    darkTheme: darkSelect.value,
  });
});
