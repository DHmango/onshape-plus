// Put all the javascript code here, that you want to execute after page load.
//const welcomeMat = document.querySelector("osx-welcome-mat-section")//[[show-spinner]='showWelcomeMatDocumentSpinner']")
//welcomeMat.remove()
const styleSheet = document.createElement('style') //CSSStyleSheet(); //chooses the first existing stylesheet it sees

const rules = `[data-os-theme]{ --os-color-aquarium:#ff0001 !important;}
[data-os-theme]{ --os-color-aquarium-rgba10:#ff0000 !important;}
[data-os-theme]{ --os-color-aquarium-rgba90:#ff0001 !important;}
[data-os-theme]{ --os-color-blue-hills-500:#ff0002 !important;}
[data-os-theme]{ --os-color-blue-hills-600:#ff0003 !important;}
[data-os-theme]{ --os-color-blue-hils-500-rgba70:#ff0004 !important;}
[data-os-theme]{ --os-color-boston-cream:#ff0005 !important;}
[data-os-theme]{ --os-color-boston-terrier:#ff0006 !important;}
[data-os-theme]{ --os-color-boston-terrier-rgba35:#ff0007 !important;}
[data-os-theme]{ --os-color-boston-terrier-rgba75:#ff0008 !important;}
[data-os-theme]{ --os-color-boston-terrier-rgba95:#ff0009 !important;}
[data-os-theme]{ --os-color-charles-100:#ff0010 !important;}
[data-os-theme]{ --os-color-charles-100-rgba50:#ff0011 !important;}
[data-os-theme]{ --os-color-charles-100-rgba90:#ff0012 !important;}
[data-os-theme]{ --os-color-charles-200:#ff0013 !important;}
[data-os-theme]{ --os-color-charles-300:#ff0014 !important;}
[data-os-theme]{ --os-color-charles-40:#ff0015 !important;}
[data-os-theme]{ --os-color-charles-400:#ff0016 !important;}
[data-os-theme]{ --os-color-charles-450-rgba35:#ff0017 !important;}
[data-os-theme]{ --os-color-charles-50:#ff0018 !important;}
[data-os-theme]{ --os-color-charles-500:#ff0019 !important;}
[data-os-theme]{ --os-color-charles-500-rgba10:#ff0020 !important;}
[data-os-theme]{ --os-color-charles-60:#ff0001 !important;}
[data-os-theme]{ --os-color-charles-600:#ff0000 !important;}
[data-os-theme]{ --os-color-charles-700:#ff0001 !important;}
[data-os-theme]{ --os-color-charles-800:#ff0002 !important;}
[data-os-theme]{ --os-color-charles-900:#ff0003 !important;}
[data-os-theme]{ --os-color-charles-950:#ff0004 !important;}
[data-os-theme]{ --os-color-clover-100:#ff0005 !important;}
[data-os-theme]{ --os-color-clover-200:#ff0006 !important;}
[data-os-theme]{ --os-color-clover-200-rgba70:#ff0007 !important;}
[data-os-theme]{ --os-color-clover-300:#ff0008 !important;}
[data-os-theme]{ --os-color-clover-350-rgba70:#ff0009 !important;}
[data-os-theme]{ --os-color-clover-400:#ff0010 !important;}
[data-os-theme]{ --os-color-clover-500:#ff0011 !important;}
[data-os-theme]{ --os-color-clover-600:#ff0012 !important;}
[data-os-theme]{ --os-color-clover-800:#ff0013 !important;}
[data-os-theme]{ --os-color-commuter-rail-100:#ff0014 !important;}
[data-os-theme]{ --os-color-commuter-rail-100-rgba80:#ff0015 !important;}
[data-os-theme]{ --os-color-commuter-rail-20:#ff0016 !important;}
[data-os-theme]{ --os-color-commuter-rail-200:#ff0017 !important;}
[data-os-theme]{ --os-color-commuter-rail-200-rgba80:#ff0018 !important;}
[data-os-theme]{ --os-color-commuter-rail-250:#ff0019 !important;}
[data-os-theme]{ --os-color-commuter-rail-30:#ff0020 !important;}
[data-os-theme]{ --os-color-commuter-rail-30-rgba20:#ff0001 !important;}
[data-os-theme]{ --os-color-commuter-rail-300:#ff0000 !important;}
[data-os-theme]{ --os-color-commuter-rail-300-rgba80:#ff0001 !important;}
[data-os-theme]{ --os-color-commuter-rail-400:#ff0002 !important;}
[data-os-theme]{ --os-color-commuter-rail-500:#ff0003 !important;}
[data-os-theme]{ --os-color-commuter-rail-550:#ff0004 !important;}
[data-os-theme]{ --os-color-commuter-rail-600:#ff0005 !important;}
[data-os-theme]{ --os-color-commuter-rail-600-rgba80:#ff0006 !important;}
[data-os-theme]{ --os-color-constitution:#ff0007 !important;}
[data-os-theme]{ --os-color-constitution-rgba10:#ff0008 !important;}
[data-os-theme]{ --os-color-constitution-rgba12:#ff0009 !important;}
[data-os-theme]{ --os-color-constitution-rgba20:#ff0010 !important;}
[data-os-theme]{ --os-color-constitution-rgba25:#ff0011 !important;}
[data-os-theme]{ --os-color-constitution-rgba40:#ff0012 !important;}
[data-os-theme]{ --os-color-constitution-rgba5:#ff0013 !important;}
[data-os-theme]{ --os-color-constitution-rgba60:#ff0014 !important;}
[data-os-theme]{ --os-color-crimson:#ff0015 !important;}
[data-os-theme]{ --os-color-duck-tour-100:#ff0016 !important;}
[data-os-theme]{ --os-color-duck-tour-150:#ff0017 !important;}
[data-os-theme]{ --os-color-duck-tour-200:#ff0018 !important;}
[data-os-theme]{ --os-color-duck-tour-50:#ff0019 !important;}
[data-os-theme]{ --os-color-duck-tour-500:#ff0020 !important;}
[data-os-theme]{ --os-color-duck-tour-600:#ff0001 !important;}
[data-os-theme]{ --os-color-duck-tour-650:#ff0000 !important;}
[data-os-theme]{ --os-color-duck-tour-700:#ff0001 !important;}
[data-os-theme]{ --os-color-duck-tour-750:#ff0002 !important;}
[data-os-theme]{ --os-color-duck-tour-800:#ff0003 !important;}
[data-os-theme]{ --os-color-esplanade-rgba50:#ff0004 !important;}
[data-os-theme]{ --os-color-esplanade-rgba90:#ff0005 !important;}
[data-os-theme]{ --os-color-green-monstah-100:#ff0006 !important;}
[data-os-theme]{ --os-color-green-monstah-50:#ff0007 !important;}
[data-os-theme]{ --os-color-green-monstah-500:#ff0008 !important;}
[data-os-theme]{ --os-color-green-monstah-700:#ff0009 !important;}
[data-os-theme]{ --os-color-harbor:#ff0010 !important;}
[data-os-theme]{ --os-color-harbor-rgba60:#ff0011 !important;}
[data-os-theme]{ --os-color-hatch-shell-400-rgba80:#ff0012 !important;}
[data-os-theme]{ --os-color-hatch-shell-500-rgba80:#ff0013 !important;}
[data-os-theme]{ --os-color-iced-coffee-100:#ff0014 !important;}
[data-os-theme]{ --os-color-iced-coffee-500:#ff0015 !important;}
[data-os-theme]{ --os-color-lobster-roll-100:#ff0016 !important;}
[data-os-theme]{ --os-color-lobster-roll-500:#ff0017 !important;}
[data-os-theme]{ --os-color-molasses:#ff0018 !important;}
[data-os-theme]{ --os-color-monument:#ff0019 !important;}
[data-os-theme]{ --os-color-navy-yard:#ff0020 !important;}
[data-os-theme]{ --os-color-noreaster-10:#ff0001 !important;}
[data-os-theme]{ --os-color-noreaster-100:#ff0000 !important;}
[data-os-theme]{ --os-color-noreaster-20:#ff0001 !important;}
[data-os-theme]{ --os-color-noreaster-200:#ff0002 !important;}
[data-os-theme]{ --os-color-noreaster-30:#ff0003 !important;}
[data-os-theme]{ --os-color-noreaster-30-rgba10:#ff0004 !important;}
[data-os-theme]{ --os-color-noreaster-30-rgba20:#ff0005 !important;}
[data-os-theme]{ --os-color-noreaster-300:#ff0006 !important;}
[data-os-theme]{ --os-color-noreaster-40:#ff0007 !important;}
[data-os-theme]{ --os-color-noreaster-400:#ff0008 !important;}
[data-os-theme]{ --os-color-noreaster-50:#ff0009 !important;}
[data-os-theme]{ --os-color-noreaster-500:#ff0010 !important;}
[data-os-theme]{ --os-color-noreaster-600:#ff0011 !important;}
[data-os-theme]{ --os-color-noreaster-700:#ff0012 !important;}
[data-os-theme]{ --os-color-noreaster-800:#ff0013 !important;}
[data-os-theme]{ --os-color-noreaster-900:#ff0014 !important;}
[data-os-theme]{ --os-color-old-ironsides:#ff0015 !important;}
[data-os-theme]{ --os-color-old-ironsides-rgba10:#ff0016 !important;}
[data-os-theme]{ --os-color-old-ironsides-rgba20:#ff0017 !important;}
[data-os-theme]{ --os-color-red-sox-100:#ff0018 !important;}
[data-os-theme]{ --os-color-red-sox-200:#ff0019 !important;}
[data-os-theme]{ --os-color-red-sox-300:#ff0020 !important;}
[data-os-theme]{ --os-color-red-sox-400:#ff0001 !important;}
[data-os-theme]{ --os-color-red-sox-500:#ff0000 !important;}
[data-os-theme]{ --os-color-red-sox-600:#ff0001 !important;}
[data-os-theme]{ --os-color-red-sox-700:#ff0002 !important;}
[data-os-theme]{ --os-color-red-sox-800:#ff0003 !important;}
[data-os-theme]{ --os-color-revolution:#ff0004 !important;}
[data-os-theme]{ --os-color-seaport-300:#ff0005 !important;}
[data-os-theme]{ --os-color-seaport-400:#ff0006 !important;}
[data-os-theme]{ --os-color-seaport-500:#ff0007 !important;}
[data-os-theme]{ --os-color-seaport-500-rgba60:#ff0008 !important;}
[data-os-theme]{ --os-color-tea-party:#ff0009 !important;}
[data-os-theme]{ --os-color-zakim:#ff0010 !important;}
[data-os-theme]{ --os-color-zakim-rgba35:#ff0011 !important;}
[data-os-theme]{ --os-color-zakim-rgba75:#ff0012 !important;}
[data-os-theme]{ --os-color-zakim-rgba80:#ff0013 !important;}
[data-os-theme]{ --os-color-zakim-rgba95:#ff0014 !important;}`

styleSheet.textContent = rules

//styleSheet.replaceSync(rules)

document.head.appendChild(styleSheet)

//styleSheet.insertRule('osx-welcome-mat-section{display: none !important;}')


