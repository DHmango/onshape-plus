# Onshape plus

Theme manager web extension for Onshape.

Create themes in the editor, choose from ready-to-use themes, or import user-created themes!

![The editor allows for easy granular modifcation of the UI](editor-screenshot.png)

![Darker theme](darker.png)

### Get the browser extension:
<a href="https://example.com">
  <img width="40" alt="firefox extension" src="firefox.png">
</a>
<a href="https://example.com">
  <img width="40" alt="chromium extension" src="chrome.png">
</a>

---

### Basic usage

Open the theme manager popup by clicking the icon in your toolbar

picture of that

Select which theme will be loaded based on Onshape's dark/light theme switch. Reload Onshape for the change to take place.

Manage your themes in the tab made by the Manage themes button

Update your theme saves in the Load / Save dialog,

Get user created themes by loading from a URL using that button, or by simply pasting the data into the raw data area. Then, in the Load / Save dialog, save it to a new slot. **There is no autosave**

### Making/modifying your own themes

When making a theme, you should generally start from an existing preset.

For simple-ish themes, where you just want to change the main color scheme, the fastest strategy is to select all of the themes from the same color block and modify them using the 'modify selected colors' tools. To select rules click a box on the right side to select one, and shift click another to select all between them (you can also use this to deselect rules). Now, you can modify all of those rules at once. If you wanted change red colors which you selected to green, you could have the 'Add to' box say :
> hue
> 
> Value: 120

Now, when you click the 'Add to' button, it will convert all the colors to [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/hsl), and add 120° to all the hues of all the colors you had selected.

If you wanted to make everything a bit darker, you could do 'Move towards, lightness, 0, 0.1' which would move all selected colors 10% of the way to lightness 0. 

A combination of these tools can be used to make cool themes.

Alternatively, you *could* take the raw JSON data and run it through your own custom script, but I'll let you figure that out for yourself.

---

If you have suggestions for improvements or found a bug, you can make an issue in github. Or, you can make a pull request, and I will try to look at it.

---
<small> This project is not endorsed by, affiliated with, maintained, authorized, or sponsored by PTC or Onshape </small>
