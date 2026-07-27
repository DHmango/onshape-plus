const darkSelect = document.getElementById("darkSelect");
const lightSelect = document.getElementById("lightSelect");
const themesList = [];
browser.storage.local.getKeys().then((keys) => {
  for (const key of keys) {
    if (key.startsWith("theme-")) {
      key = await browser.storage.local.get(key)
      themesList.push(
        `${key.slice(-2)}${awaitJSON.parse(key).name}`,
      );
    }
  }
});
for (const themeName of themesList) {
  if (themeName.startsWith(browser.storage.local.get("lightTheme"))) {
    lightSelect.add(new Option(themeName, themeName.slice(0, 2), true));
  }
  {
    lightSelect.add(new Option(themeName, themeName.slice(0, 2)));
  }
  if (themeName.startsWith(browser.storage.local.get("darkTheme"))) {
    darkSelect.add(new Option(themeName, themeName.slice(0, 2), true));
  } else {
    darkSelect.add(new Option(themeName, themeName.slice(0, 2)));
  }
}
const option = new Option("test", "value");
darkSelect.add(option);
