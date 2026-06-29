// Put all the javascript code here, that you want to execute after page load.
//const welcomeMat = document.querySelector("osx-welcome-mat-section")//[[show-spinner]='showWelcomeMatDocumentSpinner']")
//welcomeMat.remove()
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

const styleSheet = document.createElement('style') //CSSStyleSheet(); //chooses the first existing stylesheet it sees

const rules = `






















































































































































[data-os-theme=dark]{ --os-accent-nonary:#672f8f !important;}
[data-os-theme=dark]{ --os-accent-octonary:#094174 !important;}
[data-os-theme=dark]{ --os-accent-primary:#1651b0 !important;}
[data-os-theme=dark]{ --os-accent-primary--static:#1651b0 !important;}
[data-os-theme=dark]{ --os-accent-quaternary:#333 !important;}
[data-os-theme=dark]{ --os-accent-quinary--static:#3e94ff !important;}
[data-os-theme=dark]{ --os-accent-secondary:#90cef1 !important;}
[data-os-theme=dark]{ --os-accent-secondary--static:#90cef1 !important;}
[data-os-theme=dark]{ --os-accent-senary--static:#74ce3a !important;}
[data-os-theme=dark]{ --os-accent-septenary--static:#bf6900 !important;}
[data-os-theme=dark]{ --os-accent-success:#009400 !important;}
[data-os-theme=dark]{ --os-accent-tertiary--static:#fff !important;}
[data-os-theme=dark]{ --os-active:#1651b0 !important;}
[data-os-theme=dark]{ --os-background-color-primary:#f1f5fa !important;}
[data-os-theme=dark]{ --os-background-color-quaternary:#f1f5fa !important;}
[data-os-theme=dark]{ --os-background-color-secondary:#ecf0f4 !important;}
[data-os-theme=dark]{ --os-background-color-tertiary:#134e96 !important;}
[data-os-theme=dark]{ --os-background-octonary:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-background-primary:#fff !important;}
[data-os-theme=dark]{ --os-background-quaternary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-background-quinary:#eee !important;}
[data-os-theme=dark]{ --os-background-secondary:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-background-senary:#fff !important;}
[data-os-theme=dark]{ --os-background-septenary:#eaeaea !important;}
[data-os-theme=dark]{ --os-background-tertiary:#fafafa !important;}
[data-os-theme=dark]{ --os-background-transparent-primary:#fffffff2 !important;}
[data-os-theme=dark]{ --os-background-transparent-secondary:#ffffffbf !important;}
[data-os-theme=dark]{ --os-background-transparent-tertiary:#ffffff59 !important;}
[data-os-theme=dark]{ --os-close:#888 !important;}
[data-os-theme=dark]{ --os-emphasis-disabled--static:#a2b9df !important;}
[data-os-theme=dark]{ --os-emphasis-fill:#1651b0 !important;}
[data-os-theme=dark]{ --os-emphasis-fill--static:#1651b0 !important;}
[data-os-theme=dark]{ --os-emphasis-hover--static:#769fcc !important;}
[data-os-theme=dark]{ --os-error:#bd3039 !important;}
[data-os-theme=dark]{ --os-error-background:#f9ebec !important;}
[data-os-theme=dark]{ --os-error-bad:#dd979b !important;}
[data-os-theme=dark]{ --os-error-close:#aa252d !important;}
[data-os-theme=dark]{ --os-error-disabled--static:#dd979b !important;}
[data-os-theme=dark]{ --os-error-fill--static:#bd3039 !important;}
[data-os-theme=dark]{ --os-error-hover--static:#d66e74 !important;}
[data-os-theme=dark]{ --os-error-outline-primary--static:#bd3039 !important;}
[data-os-theme=dark]{ --os-error-outline-secondary:#dd979b !important;}
[data-os-theme=dark]{ --os-fill-color-primary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-fill-color-quaternary--static:#c3f2e4 !important;}
[data-os-theme=dark]{ --os-fill-color-quinary:#fff !important;}
[data-os-theme=dark]{ --os-fill-color-secondary:#f1f5fa !important;}
[data-os-theme=dark]{ --os-fill-color-tertiary--static:#d1c0dd !important;}
[data-os-theme=dark]{ --os-fill-denary--static:#ccc !important;}
[data-os-theme=dark]{ --os-fill-duodenary:#fafafa !important;}
[data-os-theme=dark]{ --os-fill-elevenary:#fff !important;}
[data-os-theme=dark]{ --os-fill-nonary:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-fill-octonary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-fill-primary:#fff !important;}
[data-os-theme=dark]{ --os-fill-quaternary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-fill-quinary:#eee !important;}
[data-os-theme=dark]{ --os-fill-quinary--static:#eee !important;}
[data-os-theme=dark]{ --os-fill-secondary:#999 !important;}
[data-os-theme=dark]{ --os-fill-secondary--static:#999 !important;}
[data-os-theme=dark]{ --os-fill-senary:#eaeaea !important;}
[data-os-theme=dark]{ --os-fill-tertiary:#666 !important;}
[data-os-theme=dark]{ --os-fill-tertiary--static:#666 !important;}
[data-os-theme=dark]{ --os-focus:#3e94ff !important;}
[data-os-theme=dark]{ --os-highlight-fill:#fcda7f !important;}
[data-os-theme=dark]{ --os-highlight-outline:#fab601 !important;}
[data-os-theme=dark]{ --os-hover-primary:#def1fb !important;}
[data-os-theme=dark]{ --os-hover-quaternary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-hover-quinary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-hover-secondary:#eaeaea !important;}
[data-os-theme=dark]{ --os-hover-senary--static:#467bb6 !important;}
[data-os-theme=dark]{ --os-hover-septenary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-hover-tertiary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-inferred:#ecf0f4 !important;}
[data-os-theme=dark]{ --os-info:#90cef1 !important;}
[data-os-theme=dark]{ --os-info-background-primary:#def1fb !important;}
[data-os-theme=dark]{ --os-info-background-secondary:#def1fb !important;}
[data-os-theme=dark]{ --os-info-background-tertiary:#ecf5fc !important;}
[data-os-theme=dark]{ --os-info-close:#467bb6 !important;}
[data-os-theme=dark]{ --os-info-fill:#90cef1 !important;}
[data-os-theme=dark]{ --os-info-outline:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-info-subtle:#769fcc !important;}
[data-os-theme=dark]{ --os-info-text:#094174 !important;}
[data-os-theme=dark]{ --os-info-tooltip:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-link:#094174 !important;}
[data-os-theme=dark]{ --os-link--static:#094174 !important;}
[data-os-theme=dark]{ --os-outline-color-primary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-outline-denary:#999 !important;}
[data-os-theme=dark]{ --os-outline-emphasis:#1651b0 !important;}
[data-os-theme=dark]{ --os-outline-nonary:#666 !important;}
[data-os-theme=dark]{ --os-outline-octonary:#fff !important;}
[data-os-theme=dark]{ --os-outline-primary:#333 !important;}
[data-os-theme=dark]{ --os-outline-primary--static:#333 !important;}
[data-os-theme=dark]{ --os-outline-quaternary:#ccc !important;}
[data-os-theme=dark]{ --os-outline-quaternary--static:#ccc !important;}
[data-os-theme=dark]{ --os-outline-quinary:#888 !important;}
[data-os-theme=dark]{ --os-outline-quinary--static:#888 !important;}
[data-os-theme=dark]{ --os-outline-secondary:#aaa !important;}
[data-os-theme=dark]{ --os-outline-secondary--static:#aaa !important;}
[data-os-theme=dark]{ --os-outline-senary:#777 !important;}
[data-os-theme=dark]{ --os-outline-septenary:#333 !important;}
[data-os-theme=dark]{ --os-outline-subtle:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-outline-tertiary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-outline-tertiary--static:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-overlay-disabled:#33333359 !important;}
[data-os-theme=dark]{ --os-overlay-emphasis:#1651b019 !important;}


[data-os-theme=dark]{ --os-select-primary:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-select-secondary:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-select-tertiary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-shadow-primary:#00000033 !important;}
[data-os-theme=dark]{ --os-shadow-quaternary--static:#0000003f !important;}
[data-os-theme=dark]{ --os-shadow-quinary:#0000000c !important;}
[data-os-theme=dark]{ --os-shadow-secondary:#00000033 !important;}
[data-os-theme=dark]{ --os-shadow-senary--static:#00000019 !important;}
[data-os-theme=dark]{ --os-shadow-tertiary--static:#0000001f !important;}
[data-os-theme=dark]{ --os-stop:#bd3039 !important;}
[data-os-theme=dark]{ --os-success:#009400 !important;}
[data-os-theme=dark]{ --os-success-background:#ddf6cc !important;}
[data-os-theme=dark]{ --os-success-close:#028502 !important;}
[data-os-theme=dark]{ --os-success-disabled--static:#a2db7d !important;}
[data-os-theme=dark]{ --os-success-fill--static:#028502 !important;}
[data-os-theme=dark]{ --os-success-hover--static:#74ce3a !important;}
[data-os-theme=dark]{ --os-success-outline:#a2db7d !important;}
[data-os-theme=dark]{ --os-text-accent:#fff !important;}
[data-os-theme=dark]{ --os-text-accent--static:#fff !important;}
[data-os-theme=dark]{ --os-text-emphasis:#1651b0 !important;}
[data-os-theme=dark]{ --os-text-emphasis-title:#1651b0 !important;}
[data-os-theme=dark]{ --os-text-invalid:#aa252d !important;}
[data-os-theme=dark]{ --os-text-primary:#333 !important;}
[data-os-theme=dark]{ --os-text-primary--static:#333 !important;}
[data-os-theme=dark]{ --os-text-quaternary:#555 !important;}
[data-os-theme=dark]{ --os-text-quaternary--static:#555 !important;}
[data-os-theme=dark]{ --os-text-quinary:#1c1c1c !important;}
[data-os-theme=dark]{ --os-text-secondary:#666 !important;}
[data-os-theme=dark]{ --os-text-tertiary--static:#999 !important;}
[data-os-theme=dark]{ --os-warn:#fab601 !important;}
[data-os-theme=dark]{ --os-warn-background:#fff8e6 !important;}
[data-os-theme=dark]{ --os-warn-close:#987107 !important;}
[data-os-theme=dark]{ --os-warn-close-static:#987107 !important;}
[data-os-theme=dark]{ --os-warn-fill:#fab601 !important;}
[data-os-theme=dark]{ --os-warn-outline:#fcda7f !important;}
[data-os-theme=dark]{ --os-warn-subtle--static:#e9dbb2 !important;}





















































































































































[data-os-theme=dark]{ --os-accordion-fill--active:#666 !important;}
[data-os-theme=dark]{ --os-accordion-fill--error:#bd3039 !important;}
[data-os-theme=dark]{ --os-accordion-fill--inactive:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-accordion-leader:#ccc !important;}
[data-os-theme=dark]{ --os-alert-background-error:#f9ebec !important;}
[data-os-theme=dark]{ --os-alert-background-info:#def1fb !important;}
[data-os-theme=dark]{ --os-alert-background-success:#ddf6cc !important;}
[data-os-theme=dark]{ --os-alert-background-warn:#fff8e6 !important;}


[data-os-theme=dark]{ --os-alert-close-error:#aa252d !important;}
[data-os-theme=dark]{ --os-alert-close-info:#467bb6 !important;}
[data-os-theme=dark]{ --os-alert-close-success:#028502 !important;}
[data-os-theme=dark]{ --os-alert-close-warn:#987107 !important;}

[data-os-theme=dark]{ --os-alert-outline-error:#dd979b !important;}
[data-os-theme=dark]{ --os-alert-outline-info:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-alert-outline-success:#a2db7d !important;}
[data-os-theme=dark]{ --os-alert-outline-warn:#fcda7f !important;}


[data-os-theme=dark]{ --os-alert-text:#333 !important;}
[data-os-theme=dark]{ --os-alert-text-info:#094174 !important;}
[data-os-theme=dark]{ --os-alert-text-link:#094174 !important;}
[data-os-theme=dark]{ --os-analysis-menu-background:#ffffffbf !important;}
[data-os-theme=dark]{ --os-analysis-menu-text:#666 !important;}
[data-os-theme=dark]{ --os-analysis-menu-underline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-banner-close:#888 !important;}
[data-os-theme=dark]{ --os-banner-fill-error:#f9ebec !important;}
[data-os-theme=dark]{ --os-banner-fill-info:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-banner-fill-warn:#fff8e6 !important;}



[data-os-theme=dark]{ --os-banner-text:#333 !important;}
[data-os-theme=dark]{ --os-breadcrumb-text--active:#333 !important;}
[data-os-theme=dark]{ --os-breadcrumb-text--inactive:#666 !important;}



[data-os-theme=dark]{ --os-button-fill-cancel--disabled:#ccc !important;}
[data-os-theme=dark]{ --os-button-fill-cancel--hover:#eee !important;}
[data-os-theme=dark]{ --os-button-fill-cancel--idle:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-button-fill-error--disabled:#dd979b !important;}
[data-os-theme=dark]{ --os-button-fill-error--hover:#d66e74 !important;}
[data-os-theme=dark]{ --os-button-fill-error--idle:#bd3039 !important;}
[data-os-theme=dark]{ --os-button-fill-primary--disabled:#a2b9df !important;}
[data-os-theme=dark]{ --os-button-fill-primary--hover:#769fcc !important;}
[data-os-theme=dark]{ --os-button-fill-primary--idle:#1651b0 !important;}
[data-os-theme=dark]{ --os-button-fill-secondary--disabled:#fff !important;}
[data-os-theme=dark]{ --os-button-fill-secondary--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-button-fill-secondary--idle:#fff !important;}
[data-os-theme=dark]{ --os-button-fill-success--disabled:#a2db7d !important;}
[data-os-theme=dark]{ --os-button-fill-success--hover:#74ce3a !important;}
[data-os-theme=dark]{ --os-button-fill-success--idle:#028502 !important;}



[data-os-theme=dark]{ --os-button-outline:#aaa !important;}


[data-os-theme=dark]{ --os-button-text-cancel--disabled:#555 !important;}
[data-os-theme=dark]{ --os-button-text-secondary:#333 !important;}
[data-os-theme=dark]{ --os-button-text-secondary--disabled:#999 !important;}
[data-os-theme=dark]{ --os-button-text-static-dark:#333 !important;}
[data-os-theme=dark]{ --os-button-text-static-light:#fff !important;}
[data-os-theme=dark]{ --os-camera-menu-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-camera-menu-fill--idle:#ffffff59 !important;}

[data-os-theme=dark]{ --os-collaborator-decorator:#1651b0 !important;}
[data-os-theme=dark]{ --os-context-menu-background--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-context-menu-background--idle:#fff !important;}

[data-os-theme=dark]{ --os-context-menu-outline:#ccc !important;}


[data-os-theme=dark]{ --os-context-menu-text:#333 !important;}
[data-os-theme=dark]{ --os-document-card-background:#fff !important;}
[data-os-theme=dark]{ --os-document-card-fill--idle:#fafafa !important;}
[data-os-theme=dark]{ --os-document-card-fill--selected:#90cef1 !important;}
[data-os-theme=dark]{ --os-document-card-header-text:#333 !important;}
[data-os-theme=dark]{ --os-document-card-outline:#eee !important;}
[data-os-theme=dark]{ --os-document-handle-divider:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-document-handle-fill:#fff !important;}
[data-os-theme=dark]{ --os-document-handle-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-document-header-fill:#fff !important;}
[data-os-theme=dark]{ --os-document-list-divider:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-document-list-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-document-list-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-document-list-fill--selected:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-document-list-label-background:#eee !important;}
[data-os-theme=dark]{ --os-document-list-status-background:#90cef1 !important;}
[data-os-theme=dark]{ --os-document-list-text:#333 !important;}
[data-os-theme=dark]{ --os-document-quick-actions-background:#eee !important;}
[data-os-theme=dark]{ --os-drag-and-drop-message-fill--active:#1651b0 !important;}
[data-os-theme=dark]{ --os-drag-and-drop-message-fill--disabled:#666 !important;}
[data-os-theme=dark]{ --os-drag-and-drop-message-text:#fff !important;}
[data-os-theme=dark]{ --os-drag-and-drop-outline--active:#1651b0 !important;}
[data-os-theme=dark]{ --os-drag-and-drop-outline--disabled:#888 !important;}
[data-os-theme=dark]{ --os-drag-and-drop-overlay--active:#1651b019 !important;}
[data-os-theme=dark]{ --os-drag-and-drop-overlay--disabled:#33333359 !important;}



[data-os-theme=dark]{ --os-dropdown-menu-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-dropdown-menu-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-dropdown-menu-fill--selected:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-dropdown-menu-outline:#d7d7d7 !important;}

[data-os-theme=dark]{ --os-dropdown-menu-text:#555 !important;}
[data-os-theme=dark]{ --os-dropdown-menu-text--selected:#333 !important;}


[data-os-theme=dark]{ --os-effect-shadow-button-primary:#0000001f !important;}
[data-os-theme=dark]{ --os-effect-shadow-button-secondary:#0000003f !important;}
[data-os-theme=dark]{ --os-effect-shadow-drop-primary:#00000033 !important;}
[data-os-theme=dark]{ --os-effect-shadow-drop-quaternary:#00000019 !important;}
[data-os-theme=dark]{ --os-effect-shadow-drop-secondary:#00000033 !important;}
[data-os-theme=dark]{ --os-effect-shadow-drop-tertiary:#0000000c !important;}
[data-os-theme=dark]{ --os-feature-dialog-accept--disabled:#a2db7d !important;}
[data-os-theme=dark]{ --os-feature-dialog-accept--hover:#74ce3a !important;}
[data-os-theme=dark]{ --os-feature-dialog-accept--idle:#009400 !important;}
[data-os-theme=dark]{ --os-feature-dialog-background:#fffffff2 !important;}
[data-os-theme=dark]{ --os-feature-dialog-cancel--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-feature-dialog-divider:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-feature-dialog-edit--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-feature-dialog-footer-border:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-feature-dialog-footer-fill:#eee !important;}

[data-os-theme=dark]{ --os-feature-dialog-header-background:#fff !important;}


[data-os-theme=dark]{ --os-feature-dialog-name--invalid:#aa252d !important;}
[data-os-theme=dark]{ --os-feature-dialog-name--valid:#333 !important;}

[data-os-theme=dark]{ --os-feature-dialog-text:#333 !important;}
[data-os-theme=dark]{ --os-feature-dialog-textbox-fill:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-feature-dialog-textbox-outline:#1651b0 !important;}
[data-os-theme=dark]{ --os-feature-dialog-version-name-text:#999 !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-fill--selected:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-input-text:#1c1c1c !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-suggested-text--hover:#555 !important;}
[data-os-theme=dark]{ --os-featurescript-dropdown-suggested-text--idle:#666 !important;}




[data-os-theme=dark]{ --os-form-field-fill:#fff !important;}
[data-os-theme=dark]{ --os-form-field-fill--disabled:#eee !important;}


[data-os-theme=dark]{ --os-form-field-outline--disabled:#aaa !important;}
[data-os-theme=dark]{ --os-form-field-outline--error:#bd3039 !important;}
[data-os-theme=dark]{ --os-form-field-outline--focused:#3e94ff !important;}
[data-os-theme=dark]{ --os-form-field-outline--idle:#aaa !important;}




[data-os-theme=dark]{ --os-form-field-text:#333 !important;}
[data-os-theme=dark]{ --os-form-field-text--disabled:#666 !important;}
[data-os-theme=dark]{ --os-help-fill--hover:#666 !important;}
[data-os-theme=dark]{ --os-help-fill--idle:#888 !important;}
[data-os-theme=dark]{ --os-hint-border:#aaa !important;}
[data-os-theme=dark]{ --os-hint-fill:#fff !important;}
[data-os-theme=dark]{ --os-hint-text:#333 !important;}





[data-os-theme=dark]{ --os-icon-button-fill--highlight:#fcda7f !important;}
[data-os-theme=dark]{ --os-icon-button-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-icon-button-fill--hover-group:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-icon-button-fill--hover-other:#eaeaea !important;}
[data-os-theme=dark]{ --os-icon-button-fill--selected:#eaeaea !important;}






[data-os-theme=dark]{ --os-icon-button-outline--highlight:#fab601 !important;}
[data-os-theme=dark]{ --os-icon-button-outline--menu:#aaa !important;}

[data-os-theme=dark]{ --os-icon-button-pill-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-icon-button-pill-fill--idle:#ecf0f4 !important;}
[data-os-theme=dark]{ --os-icon-button-pill-fill--selected:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-icon-button-text:#333 !important;}


[data-os-theme=dark]{ --os-icon-accent-bad:#dd979b !important;}
[data-os-theme=dark]{ --os-icon-accent-cancel:#bd3039 !important;}
[data-os-theme=dark]{ --os-icon-accent-cancel--static:#bd3039 !important;}
[data-os-theme=dark]{ --os-icon-accent-error:#aa252d !important;}
[data-os-theme=dark]{ --os-icon-accent-info-subtle--static:#769fcc !important;}
[data-os-theme=dark]{ --os-icon-accent-octonary:#672f8f !important;}
[data-os-theme=dark]{ --os-icon-accent-primary:#1651b0 !important;}
[data-os-theme=dark]{ --os-icon-accent-primary-static:#1651b0 !important;}
[data-os-theme=dark]{ --os-icon-accent-quaternary--static:#3e94ff !important;}
[data-os-theme=dark]{ --os-icon-accent-quinary--static:#74ce3a !important;}
[data-os-theme=dark]{ --os-icon-accent-secondary:#90cef1 !important;}
[data-os-theme=dark]{ --os-icon-accent-secondary--static:#90cef1 !important;}
[data-os-theme=dark]{ --os-icon-accent-selected:#1651b0 !important;}
[data-os-theme=dark]{ --os-icon-accent-senary--static:#bf6900 !important;}
[data-os-theme=dark]{ --os-icon-accent-septenary:#094174 !important;}
[data-os-theme=dark]{ --os-icon-accent-success:#009400 !important;}
[data-os-theme=dark]{ --os-icon-accent-success--static:#009400 !important;}
[data-os-theme=dark]{ --os-icon-accent-tertiary:#333 !important;}
[data-os-theme=dark]{ --os-icon-accent-warn--static:#fab601 !important;}
[data-os-theme=dark]{ --os-icon-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-icon-fill-color-secondary:#fff !important;}
[data-os-theme=dark]{ --os-icon-fill-primary:#fff !important;}
[data-os-theme=dark]{ --os-icon-fill-primary--static:#fff !important;}
[data-os-theme=dark]{ --os-icon-fill-quaternary:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-icon-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-icon-fill-quinary:#eee !important;}
[data-os-theme=dark]{ --os-icon-fill-quinary--static:#eee !important;}
[data-os-theme=dark]{ --os-icon-fill-secondary:#999 !important;}
[data-os-theme=dark]{ --os-icon-fill-secondary--static:#999 !important;}
[data-os-theme=dark]{ --os-icon-fill-tertiary:#666 !important;}
[data-os-theme=dark]{ --os-icon-fill-tertiary--static:#666 !important;}
[data-os-theme=dark]{ --os-icon-outline-primary:#333 !important;}
[data-os-theme=dark]{ --os-icon-outline-primary--static:#333 !important;}
[data-os-theme=dark]{ --os-icon-outline-quaternary:#666 !important;}
[data-os-theme=dark]{ --os-icon-outline-quinary:#999 !important;}
[data-os-theme=dark]{ --os-icon-outline-secondary:#333 !important;}
[data-os-theme=dark]{ --os-icon-outline-tertiary:#888 !important;}
[data-os-theme=dark]{ --os-icon-outline-tertiary--static:#888 !important;}
[data-os-theme=dark]{ --os-left-panel-background:#fafafa !important;}
[data-os-theme=dark]{ --os-left-panel-body-fill:#fff !important;}
[data-os-theme=dark]{ --os-left-panel-comment-box-outline:#ccc !important;}
[data-os-theme=dark]{ --os-left-panel-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-left-panel-link:#094174 !important;}
[data-os-theme=dark]{ --os-left-panel-list-border:#1651b0 !important;}
[data-os-theme=dark]{ --os-left-panel-list-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-left-panel-list-fill--selected:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-left-panel-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-left-panel-selected-indicator:#1651b0 !important;}
[data-os-theme=dark]{ --os-left-panel-text:#333 !important;}
[data-os-theme=dark]{ --os-left-panel-thumbnail-background:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-left-panel-type-text--selected:#555 !important;}
[data-os-theme=dark]{ --os-left-panel-type-text--unselected:#666 !important;}




[data-os-theme=dark]{ --os-modal-background:#fff !important;}

[data-os-theme=dark]{ --os-modal-border:#d7d7d7 !important;}




[data-os-theme=dark]{ --os-modal-button-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-modal-button-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-modal-button-fill--selected:#b2ddf6 !important;}

[data-os-theme=dark]{ --os-modal-button-outline--idle:#ccc !important;}
[data-os-theme=dark]{ --os-modal-button-outline--selected:#aaa !important;}



[data-os-theme=dark]{ --os-modal-location-picker-divider:#eee !important;}
[data-os-theme=dark]{ --os-modal-location-picker-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-modal-location-picker-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-modal-location-picker-fill--selected:#b2ddf6 !important;}


[data-os-theme=dark]{ --os-modal-location-picker-outline:#aaa !important;}
[data-os-theme=dark]{ --os-modal-location-picker-text--disabled:#666 !important;}




[data-os-theme=dark]{ --os-modal-text:#333 !important;}
[data-os-theme=dark]{ --os-mode-bar-fill-primary:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-mode-bar-fill-secondary:#fab601 !important;}
[data-os-theme=dark]{ --os-mode-bar-fill-tertiary:#90cef1 !important;}




[data-os-theme=dark]{ --os-mode-bar-text:#333 !important;}
[data-os-theme=dark]{ --os-navbar-background:#eaeaea !important;}
[data-os-theme=dark]{ --os-navbar-item--hover:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-navbar-subtitle-text:#999 !important;}
[data-os-theme=dark]{ --os-navbar-textbox-fill:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-panel-background--active:#fff !important;}
[data-os-theme=dark]{ --os-panel-background--inactive:#eaeaea !important;}
[data-os-theme=dark]{ --os-panel-footer-background:#eee !important;}
[data-os-theme=dark]{ --os-panel-outline:#ccc !important;}






[data-os-theme=dark]{ --os-parameter-calculated-value-fill--selected:#b2ddf6 !important;}

[data-os-theme=dark]{ --os-parameter-calculated-value-text:#666 !important;}
[data-os-theme=dark]{ --os-parameter-calculated-value-underline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-border--focused:#3e94ff !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-border--hover:#333 !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-border--idle:#888 !important;}




[data-os-theme=dark]{ --os-parameter-checkbox-check:#fff !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-fill--checked:#1651b0 !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-fill--disabled:#999 !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-fill--unchecked:#fff !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-text--hover:#333 !important;}
[data-os-theme=dark]{ --os-parameter-checkbox-text--idle:#666 !important;}

[data-os-theme=dark]{ --os-parameter-dropdown-border:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-button--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-fill--disabled:#eee !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-fill-selected:#1651b0 !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-text--default:#666 !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-text--disabled:#666 !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-text--selected:#fff !important;}
[data-os-theme=dark]{ --os-parameter-dropdown-underline--idle:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-enum-border--idle:#d7d7d7 !important;}

[data-os-theme=dark]{ --os-parameter-enum-text--idle:#333 !important;}
[data-os-theme=dark]{ --os-parameter-enum-text--selected:#1651b0 !important;}
[data-os-theme=dark]{ --os-parameter-fill--highlight:#fcda7f !important;}
[data-os-theme=dark]{ --os-parameter-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-parameter-form-fill--error:#f9ebec !important;}
[data-os-theme=dark]{ --os-parameter-form-input-text:#333 !important;}
[data-os-theme=dark]{ --os-parameter-form-text--hover:#333 !important;}
[data-os-theme=dark]{ --os-parameter-form-text--idle:#666 !important;}
[data-os-theme=dark]{ --os-parameter-form-underline--error:#bd3039 !important;}
[data-os-theme=dark]{ --os-parameter-form-underline--idle:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-outline--configured:#fab601 !important;}









[data-os-theme=dark]{ --os-parameter-qlv-border:#d7d7d7 !important;}





[data-os-theme=dark]{ --os-parameter-qlv-fill--error:#f9ebec !important;}
[data-os-theme=dark]{ --os-parameter-qlv-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-parameter-qlv-fill--selected:#def1fb !important;}
[data-os-theme=dark]{ --os-parameter-qlv-fill--selected-other:#ecf5fc !important;}





[data-os-theme=dark]{ --os-parameter-qlv-outline--error:#bd3039 !important;}
[data-os-theme=dark]{ --os-parameter-qlv-outline--idle:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-qlv-outline--selected:#1651b0 !important;}











[data-os-theme=dark]{ --os-parameter-qlv-text--error:#666 !important;}
[data-os-theme=dark]{ --os-parameter-qlv-text--idle:#666 !important;}
[data-os-theme=dark]{ --os-parameter-qlv-text--missing:#aa252d !important;}
[data-os-theme=dark]{ --os-parameter-qlv-text--selected:#555 !important;}

[data-os-theme=dark]{ --os-parameter-section-fill:#eee !important;}

[data-os-theme=dark]{ --os-parameter-section-text:#333 !important;}
[data-os-theme=dark]{ --os-parameter-slider-bar--active:#777 !important;}
[data-os-theme=dark]{ --os-parameter-slider-bar--disabled:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-slider-control-fill--disabled:#fff !important;}
[data-os-theme=dark]{ --os-parameter-slider-control-fill--dragging:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-slider-control-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-parameter-slider-control-outline--active:#888 !important;}
[data-os-theme=dark]{ --os-parameter-slider-control-outline--disabled:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-parameter-text--highlight:#333 !important;}
[data-os-theme=dark]{ --os-parameter-underline--active:#1651b0 !important;}

[data-os-theme=dark]{ --os-radio-button-label-text:#333 !important;}
[data-os-theme=dark]{ --os-radio-button-subtitle-text:#999 !important;}
[data-os-theme=dark]{ --os-radio-button-toggle--active:#1651b0 !important;}
[data-os-theme=dark]{ --os-radio-button-toggle--inactive:#333 !important;}
[data-os-theme=dark]{ --os-regeneration-flyout-fill:#fff8e6 !important;}
[data-os-theme=dark]{ --os-regeneration-flyout-text:#333 !important;}
[data-os-theme=dark]{ --os-search-bar-button-fill:#eee !important;}
[data-os-theme=dark]{ --os-search-bar-fill:#fff !important;}
[data-os-theme=dark]{ --os-search-bar-filter-outline--focused:#3e94ff !important;}
[data-os-theme=dark]{ --os-search-bar-filter-outline--idle:#ccc !important;}
[data-os-theme=dark]{ --os-search-bar-outline--focused:#3e94ff !important;}
[data-os-theme=dark]{ --os-search-bar-outline--idle:#aaa !important;}
[data-os-theme=dark]{ --os-search-bar-text--active:#333 !important;}
[data-os-theme=dark]{ --os-search-bar-text--inactive:#666 !important;}


[data-os-theme=dark]{ --os-selection-pill-fill--disabled:#fafafa !important;}
[data-os-theme=dark]{ --os-selection-pill-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-selection-pill-fill--selected:#1651b0 !important;}

[data-os-theme=dark]{ --os-selection-pill-outline--disabled:#aaa !important;}
[data-os-theme=dark]{ --os-selection-pill-outline--idle:#d7d7d7 !important;}



[data-os-theme=dark]{ --os-selection-pill-text:#333 !important;}
[data-os-theme=dark]{ --os-selection-pill-text--selected:#fff !important;}

[data-os-theme=dark]{ --os-shortcut-menu-fill:#ffffff59 !important;}
[data-os-theme=dark]{ --os-shortcut-menu-outline:#ccc !important;}
[data-os-theme=dark]{ --os-sidebar-border:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-sidebar-divider:#ccc !important;}
[data-os-theme=dark]{ --os-sidebar-hover:#def1fb !important;}
[data-os-theme=dark]{ --os-sidebar-selected-indicator:#1651b0 !important;}
[data-os-theme=dark]{ --os-sidebar-text--idle:#333 !important;}
[data-os-theme=dark]{ --os-sidebar-text--selected:#1651b0 !important;}
[data-os-theme=dark]{ --os-spinner-background:#ffffffbf !important;}
[data-os-theme=dark]{ --os-spinner-button-ring:#ccc !important;}
[data-os-theme=dark]{ --os-spinner-indicator:#1651b0 !important;}
[data-os-theme=dark]{ --os-spinner-ring:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-spinner-text:#333 !important;}
[data-os-theme=dark]{ --os-status-pill-dropdown-fill:#fff !important;}
[data-os-theme=dark]{ --os-status-pill-dropdown-hover:#def1fb !important;}
[data-os-theme=dark]{ --os-status-pill-dropdown-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-archived:#fff !important;}
[data-os-theme=dark]{ --os-status-pill-fill-closed:#666 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-draft:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-graded:#d1c0dd !important;}
[data-os-theme=dark]{ --os-status-pill-fill-in-progress:#90cef1 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-needs-revision:#e9dbb2 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-not-started:#fab601 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-submitted:#028502 !important;}
[data-os-theme=dark]{ --os-status-pill-fill-under-review:#c3f2e4 !important;}
[data-os-theme=dark]{ --os-status-pill-pill-outline:#333 !important;}
[data-os-theme=dark]{ --os-status-pill-text-primary:#333 !important;}
[data-os-theme=dark]{ --os-status-pill-text-primary--static:#333 !important;}
[data-os-theme=dark]{ --os-status-pill-text-secondary:#fff !important;}
[data-os-theme=dark]{ --os-tab-bar-background:#d7d7d7 !important;}


[data-os-theme=dark]{ --os-tab-bar-button--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-tab-bar-selected-indicator:#1651b0 !important;}
[data-os-theme=dark]{ --os-tab-bar-tab--active:#fff !important;}
[data-os-theme=dark]{ --os-tab-bar-tab--inactive:#eaeaea !important;}

[data-os-theme=dark]{ --os-tab-bar-text--active:#333 !important;}
[data-os-theme=dark]{ --os-tab-bar-text--inactive:#666 !important;}
[data-os-theme=dark]{ --os-tab-bar-textbox-fill:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-tab-bar-textbox-outline:#1651b0 !important;}


[data-os-theme=dark]{ --os-table-border--focused:#1651b0 !important;}
[data-os-theme=dark]{ --os-table-border--idle:#aaa !important;}
[data-os-theme=dark]{ --os-table-cell-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-table-cell-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-table-cell-fill--read-only-hover:#eee !important;}
[data-os-theme=dark]{ --os-table-cell-fill--read-only-idle:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-table-cell-indicator--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-table-cell-indicator--selected-row:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-table-header-fill--hover:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-table-header-fill--idle:#eaeaea !important;}
[data-os-theme=dark]{ --os-table-text:#333 !important;}
[data-os-theme=dark]{ --os-table-text--activated:#1651b0 !important;}


[data-os-theme=dark]{ --os-textbox-outline--edit:#1651b0 !important;}
[data-os-theme=dark]{ --os-textbox-outline--error:#bd3039 !important;}
[data-os-theme=dark]{ --os-textbox-outline--idle:#ccc !important;}



[data-os-theme=dark]{ --os-textbox-text--active:#333 !important;}
[data-os-theme=dark]{ --os-textbox-text--inactive:#666 !important;}
[data-os-theme=dark]{ --os-toggle-body-fill--active:#1651b0 !important;}
[data-os-theme=dark]{ --os-toggle-body-fill--disabled-active:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-toggle-body-fill--disabled-inactive:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-toggle-body-fill--inactive:#eaeaea !important;}
[data-os-theme=dark]{ --os-toggle-handle-fill:#fff !important;}
[data-os-theme=dark]{ --os-toggle-outline:#999 !important;}
[data-os-theme=dark]{ --os-toggle-outline--disabled:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-toggle-text:#333 !important;}

[data-os-theme=dark]{ --os-tool-search-button-fill--hover:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-tool-search-button-fill--idle:#eee !important;}
[data-os-theme=dark]{ --os-tool-search-container-fill:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-tool-search-container-text:#333 !important;}
[data-os-theme=dark]{ --os-tool-search-divider:#ccc !important;}
[data-os-theme=dark]{ --os-tool-search-footer-fill:#eee !important;}
[data-os-theme=dark]{ --os-tool-search-footer-text:#666 !important;}


[data-os-theme=dark]{ --os-tool-search-remove-button-fill--hover:#666 !important;}
[data-os-theme=dark]{ --os-tool-search-remove-button-fill--idle:#888 !important;}
[data-os-theme=dark]{ --os-tool-search-result-fill--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-tool-search-result-fill--idle:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-tool-search-result-fill--selected:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-tool-search-searchbar-fill:#fff !important;}
[data-os-theme=dark]{ --os-tool-search-shortcut-fill--hover:#aaa !important;}
[data-os-theme=dark]{ --os-tool-search-shortcut-fill--idle:#aaa !important;}
[data-os-theme=dark]{ --os-tool-search-shortcut-fill--selected:#999 !important;}
[data-os-theme=dark]{ --os-tool-search-shortcut-outline:#aaa !important;}


[data-os-theme=dark]{ --os-tool-search-suggestion-fill:#fff !important;}
[data-os-theme=dark]{ --os-tool-search-suggestion-outline:#999 !important;}
[data-os-theme=dark]{ --os-toolbar-background:#fff !important;}


[data-os-theme=dark]{ --os-toolbar-divider:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-toolbar-menu-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-toolbar-text:#333 !important;}
[data-os-theme=dark]{ --os-tooltip-expanded-fill:#fff !important;}
[data-os-theme=dark]{ --os-tooltip-fill:#d0dbe5 !important;}





[data-os-theme=dark]{ --os-tooltip-text:#333 !important;}
[data-os-theme=dark]{ --os-tree-background:#fff !important;}
[data-os-theme=dark]{ --os-tree-item-background--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-tree-item-background--inferred:#ecf0f4 !important;}
[data-os-theme=dark]{ --os-tree-item-background--selected:#b2ddf6 !important;}

[data-os-theme=dark]{ --os-tree-item-text:#333 !important;}
[data-os-theme=dark]{ --os-tree-item-text--error:#aa252d !important;}
[data-os-theme=dark]{ --os-tree-item-text--inactive:#999 !important;}
[data-os-theme=dark]{ --os-tree-item-underline:#90cef1 !important;}
[data-os-theme=dark]{ --os-tree-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-tree-rollback-bar:#aaa !important;}
[data-os-theme=dark]{ --os-tree-title:#333 !important;}
[data-os-theme=dark]{ --os-version-graph-node-background--hover:#def1fb !important;}
[data-os-theme=dark]{ --os-version-graph-node-background--idle:#fafafa !important;}
[data-os-theme=dark]{ --os-version-graph-node-background--referenced:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-version-graph-node-background--selected:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-vertical-tab-background:#fafafa !important;}
[data-os-theme=dark]{ --os-vertical-tab-fill--hover:#eaeaea !important;}
[data-os-theme=dark]{ --os-vertical-tab-outline:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-vertical-tab-selected-indicator:#1651b0 !important;}
[data-os-theme=dark]{ --os-view-only-mode-bar-border:#ccc !important;}
[data-os-theme=dark]{ --os-view-only-mode-bar-fill:#fff !important;}





[data-os-theme=dark]{ --os-view-only-mode-bar-text:#333 !important;}
[data-os-theme=dark]{ --os-demo-card-accordion-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-demo-card-accordion-fill--idle:#f1f5fa !important;}
[data-os-theme=dark]{ --os-demo-card-arrow-fill--hover:#467bb6 !important;}
[data-os-theme=dark]{ --os-demo-card-arrow-fill--idle:#134e96 !important;}
[data-os-theme=dark]{ --os-demo-card-divider--hover:#666 !important;}
[data-os-theme=dark]{ --os-demo-card-divider--idle:#aaa !important;}
[data-os-theme=dark]{ --os-demo-card-dropdown-background:#fff !important;}
[data-os-theme=dark]{ --os-demo-card-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-demo-card-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-demo-card-subtext:#666 !important;}
[data-os-theme=dark]{ --os-demo-card-text:#333 !important;}
[data-os-theme=dark]{ --os-explore-banner:#134e96 !important;}
[data-os-theme=dark]{ --os-model-card-divider--hover:#666 !important;}
[data-os-theme=dark]{ --os-model-card-divider--idle:#aaa !important;}
[data-os-theme=dark]{ --os-model-card-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-model-card-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-model-card-fill-info--idle:#fafafa !important;}
[data-os-theme=dark]{ --os-model-card-label-fill--hover:#fff !important;}
[data-os-theme=dark]{ --os-model-card-label-fill--idle:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-model-card-text:#333 !important;}
[data-os-theme=dark]{ --os-quickstart-divider--hover:#666 !important;}
[data-os-theme=dark]{ --os-quickstart-divider--idle:#aaa !important;}
[data-os-theme=dark]{ --os-quickstart-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-quickstart-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-quickstart-instruction-fill--idle:#f5f5f5 !important;}
[data-os-theme=dark]{ --os-quickstart-progress-fill:#1651b0 !important;}
[data-os-theme=dark]{ --os-quickstart-progress-outline:#1651b0 !important;}
[data-os-theme=dark]{ --os-quickstart-text:#333 !important;}
[data-os-theme=dark]{ --os-quickstart-timestamp-text:#666 !important;}
[data-os-theme=dark]{ --os-resource-card-divider--hover:#666 !important;}
[data-os-theme=dark]{ --os-resource-card-divider--idle:#aaa !important;}
[data-os-theme=dark]{ --os-resource-card-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-resource-card-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-resource-card-text:#333 !important;}
[data-os-theme=dark]{ --os-welcome-mat-fill--hover:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-welcome-mat-fill--idle:#fff !important;}
[data-os-theme=dark]{ --os-welcome-mat-header-text:#1651b0 !important;}
[data-os-theme=dark]{ --os-welcome-mat-image-background:#f1f5fa !important;}
[data-os-theme=dark]{ --os-welcome-mat-text:#333 !important;}



[data-os-theme=dark]{ --os-axis-x-color:#cd0000 !important;}
[data-os-theme=dark]{ --os-axis-y-color:#009400 !important;}
[data-os-theme=dark]{ --os-axis-z-color:#0000d0 !important;}
[data-os-theme=dark]{ --os-box-select-color:#1651b0 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-cannot-compute-color:#333 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-cannot-compute-contrast-color:#ccc !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g0-color:#fcda7f !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g0-contrast-color:#987107 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g1-color:#028502 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g1-contrast-color:#a2db7d !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g2-color:#440154 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g2-contrast-color:#b689be !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g3-color:#467bb6 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-g3-contrast-color:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-connectivity-analysis-no-connection-color:#932229 !important;}
[data-os-theme=dark]{ --os-constraint-bad-color:#d66e74 !important;}
[data-os-theme=dark]{ --os-constraint-bad-color--prehilite:#aa252d !important;}
[data-os-theme=dark]{ --os-constraint-bad-color--selected:#bd3039 !important;}
[data-os-theme=dark]{ --os-constraint-bad-external-color:#d66e74 !important;}
[data-os-theme=dark]{ --os-constraint-bad-external-color--prehilite:#aa252d !important;}
[data-os-theme=dark]{ --os-constraint-bad-external-color--selected:#bd3039 !important;}
[data-os-theme=dark]{ --os-constraint-indicator-leader-color:#9aa5af !important;}
[data-os-theme=dark]{ --os-constraint-ok-color:#fff !important;}
[data-os-theme=dark]{ --os-constraint-ok-color--prehilite:#fcda7f !important;}
[data-os-theme=dark]{ --os-constraint-ok-color--selected:#fab601 !important;}
[data-os-theme=dark]{ --os-constraint-ok-external-color:#def1fb !important;}
[data-os-theme=dark]{ --os-constraint-ok-external-color--prehilite:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-constraint-ok-external-color--selected:#90cef1 !important;}
[data-os-theme=dark]{ --os-construction-plane-ambient-color:#cedbe5 !important;}
[data-os-theme=dark]{ --os-construction-plane-outline-color:#1d60aa59 !important;}
[data-os-theme=dark]{ --os-construction-plane-text-color:#1651b0 !important;}
[data-os-theme=dark]{ --os-curvature-circle-radius-color:#b275decc !important;}
[data-os-theme=dark]{ --os-curvature-control-point-grid-color:#8000ff !important;}
[data-os-theme=dark]{ --os-curvature-control-point-grid-u-color:#bd3039 !important;}
[data-os-theme=dark]{ --os-curvature-control-point-grid-v-color:#3e94ff !important;}
[data-os-theme=dark]{ --os-curvature-control-point-grid-vertices-color:#8000ff !important;}
[data-os-theme=dark]{ --os-curvature-deviation-max-color:#bd3039 !important;}
[data-os-theme=dark]{ --os-curvature-deviation-min-color:#3e94ff !important;}
[data-os-theme=dark]{ --os-curvature-inflection-point-color:#000 !important;}
[data-os-theme=dark]{ --os-curvature-knot-points-color:#000 !important;}
[data-os-theme=dark]{ --os-curvature-roof-color:#b275decc !important;}
[data-os-theme=dark]{ --os-curvature-tooth-color:#70a65cb2 !important;}
[data-os-theme=dark]{ --os-curvature-u-knot-lines-color:#0000d0b2 !important;}
[data-os-theme=dark]{ --os-curvature-u-roof-color:#ff005acc !important;}
[data-os-theme=dark]{ --os-curvature-u-tooth-color:#ff005acc !important;}
[data-os-theme=dark]{ --os-curvature-v-knot-lines-color:#ff005acc !important;}
[data-os-theme=dark]{ --os-curvature-v-roof-color:#0000d0b2 !important;}
[data-os-theme=dark]{ --os-curvature-v-tooth-color:#0000d0b2 !important;}
[data-os-theme=dark]{ --os-dihedral-low-threshold-color:#440154cc !important;}
[data-os-theme=dark]{ --os-dimension-expression-bad-background-color:#dd979b !important;}
[data-os-theme=dark]{ --os-dimension-expression-bad-background-color--hovered:#aa252d !important;}
[data-os-theme=dark]{ --os-dimension-expression-bad-background-color--selected:#bd3039 !important;}
[data-os-theme=dark]{ --os-dimension-expression-with-variables-background-color:#def1fb !important;}
[data-os-theme=dark]{ --os-dimension-expression-with-variables-background-color--hovered:#b2ddf6 !important;}
[data-os-theme=dark]{ --os-dimension-expression-with-variables-background-color--selected:#90cef1 !important;}
[data-os-theme=dark]{ --os-dimension-expression-without-variables-background-border-color:#90cef1 !important;}
[data-os-theme=dark]{ --os-dimension-expression-without-variables-background-color--hovered:#fcda7f !important;}
[data-os-theme=dark]{ --os-dimension-expression-without-variables-background-color--selected:#fab601 !important;}
[data-os-theme=dark]{ --os-dimension-driven-hovered-line-arrow-color:#666 !important;}
[data-os-theme=dark]{ --os-dimension-driven-line-point-color:#666 !important;}
[data-os-theme=dark]{ --os-dimension-driven-value-hovered-background-color:#bf9460 !important;}
[data-os-theme=dark]{ --os-dimension-driving-hovered-line-arrow-color:#987107 !important;}
[data-os-theme=dark]{ --os-dimension-driving-value-hovered-background-color:#bf9460 !important;}
[data-os-theme=dark]{ --os-dimension-inactive-occluded-color:#666 !important;}
[data-os-theme=dark]{ --os-dimension-line-arrow-color:#000 !important;}
[data-os-theme=dark]{ --os-dimension-selected-line-arrow-color:#6a4f06 !important;}
[data-os-theme=dark]{ --os-dimension-value-selected-background-color:#bf6900 !important;}
[data-os-theme=dark]{ --os-dimension-value-text-color:#000 !important;}
[data-os-theme=dark]{ --os-draft-analysis-against-direction-color:#3e94ff !important;}
[data-os-theme=dark]{ --os-draft-analysis-undercut-color:#bd3039 !important;}
[data-os-theme=dark]{ --os-explode-line-color:#000 !important;}
[data-os-theme=dark]{ --os-legend-background-color:#ffffffbf !important;}
[data-os-theme=dark]{ --os-legend-tick-min-max-color:#000 !important;}
[data-os-theme=dark]{ --os-legend-tick-min-max-outline-color:#d7d7d7 !important;}
[data-os-theme=dark]{ --os-legend-tick-scale-color:#000 !important;}
[data-os-theme=dark]{ --os-legend-tick-text-color:#000 !important;}
[data-os-theme=dark]{ --os-legend-tick-text-color--clickable:#1651b0 !important;}
[data-os-theme=dark]{ --os-manipulator-displacement-color:#1651b0 !important;}
[data-os-theme=dark]{ --os-manipulator-line-color:#fff !important;}
[data-os-theme=dark]{ --os-manipulator-line-color--disabled:#000 !important;}
[data-os-theme=dark]{ --os-manipulator-line-color--drag:#134e96 !important;}
[data-os-theme=dark]{ --os-manipulator-line-color--hover:#a2b9df !important;}
[data-os-theme=dark]{ --os-manipulator-outline-color:#606a72 !important;}
[data-os-theme=dark]{ --os-manipulator-outline-color--disabled:#ffffff00 !important;}
[data-os-theme=dark]{ --os-manipulator-outline-color--drag:#a2b9df !important;}
[data-os-theme=dark]{ --os-manipulator-outline-color--hover:#134e96 !important;}
[data-os-theme=dark]{ --os-mate-connector-coordinate-system-offset-axis-color:#000 !important;}
[data-os-theme=dark]{ --os-mate-connector-fill-color:#ffffffcc !important;}
[data-os-theme=dark]{ --os-mate-connector-stroke-color:#002847 !important;}
[data-os-theme=dark]{ --os-origin-color:#000 !important;}
[data-os-theme=dark]{ --os-point-body-color:#000 !important;}
[data-os-theme=dark]{ --os-project-measurement-angle-color:#00007f !important;}
[data-os-theme=dark]{ --os-project-measurement-distance-color:#000 !important;}
[data-os-theme=dark]{ --os-resize-manipulator-outer-color:#1b5faa7f !important;}
[data-os-theme=dark]{ --os-resize-manipulator-outer-highlight:#1b5faae5 !important;}
[data-os-theme=dark]{ --os-simulation-line-axis-color:#000 !important;}
[data-os-theme=dark]{ --os-simulation-load-leader-line-color:#000 !important;}
[data-os-theme=dark]{ --os-sketch-plane-line-color:#90cef1 !important;}
[data-os-theme=dark]{ --os-sketch-plane-text-color:#90cef1 !important;}
[data-os-theme=dark]{ --os-sketch-drag-trim-path-color:#555 !important;}
[data-os-theme=dark]{ --os-sketch-face-color:#9aa5af33 !important;}
[data-os-theme=dark]{ --os-sketch-face-color-show-through-color:#9aa5af19 !important;}
[data-os-theme=dark]{ --os-sketch-inactive-color:#999 !important;}
[data-os-theme=dark]{ --os-sketch-overconstrained-line-point-color:#cd0000 !important;}
[data-os-theme=dark]{ --os-sketch-overconstrained-show-through-line-point-color:#dd979b !important;}
[data-os-theme=dark]{ --os-sketch-underconstrained-line-point-color:#0000d0 !important;}
[data-os-theme=dark]{ --os-sketch-underconstrained-show-through-line-point-color:#a2b9df !important;}

[data-os-theme=dark]{ --os-unshaded-body-line-color:#000 !important;}
[data-os-theme=dark]{ --os-view-cube-arrow-color:#cedbe599 !important;}
[data-os-theme=dark]{ --os-view-cube-back-color:#cedbe599 !important;}
[data-os-theme=dark]{ --os-view-cube-face-highlight:#90cef199 !important;}
[data-os-theme=dark]{ --os-view-cube-front-color:#fff !important;}
[data-os-theme=dark]{ --os-view-cube-text-color--hover:#000 !important;}
[data-os-theme=dark]{ --os-view-cube-text-color--idle:#000 !important;}
























































































































[data-os-theme=dark]{ --background-color:#f5f5f5 !important;}
[data-os-theme=dark]{ --info-button-color:#1651b0 !important;}
[data-os-theme=dark]{ --key-color:#1651b0 !important;}
[data-os-theme=dark]{ --text-color:#333 !important;}
[data-os-theme=dark]{ --title-color:#333 !important;}
[data-os-theme=dark]{ --warning-button-color:#bd3039 !important;}























































[data-os-theme=dark]{ --os-version-graph-branch-0:#1651b0 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-0-faded:#d0dbe5 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-1:#fab601 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-1-faded:#fff8e6 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-2:#3ad4a7 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-2-faded:#c3f2e4 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-3:#b689be !important;}
[data-os-theme=dark]{ --os-version-graph-branch-3-faded:#e9dbeb !important;}
[data-os-theme=dark]{ --os-version-graph-branch-4:#3e94ff !important;}
[data-os-theme=dark]{ --os-version-graph-branch-4-faded:#def1fb !important;}
[data-os-theme=dark]{ --os-version-graph-branch-5:#b88a00 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-5-faded:#e9dbb2 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-6:#219773 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-6-faded:#c3e2d9 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-7:#672f8f !important;}
[data-os-theme=dark]{ --os-version-graph-branch-7-faded:#d1c0dd !important;}
[data-os-theme=dark]{ --os-version-graph-branch-8:#e98e72 !important;}
[data-os-theme=dark]{ --os-version-graph-branch-8-faded:#f8ddd4 !important;}








































































































































































































































































































































[data-os-theme=light]{ --os-accent-nonary:#a64dff !important;}
[data-os-theme=light]{ --os-accent-octonary:#def1fb !important;}
[data-os-theme=light]{ --os-accent-primary:#3e94ff !important;}
[data-os-theme=light]{ --os-accent-primary--static:#1651b0 !important;}
[data-os-theme=light]{ --os-accent-quaternary:#fff !important;}
[data-os-theme=light]{ --os-accent-quinary--static:#3e94ff !important;}
[data-os-theme=light]{ --os-accent-secondary:#def1fb !important;}
[data-os-theme=light]{ --os-accent-secondary--static:#90cef1 !important;}
[data-os-theme=light]{ --os-accent-senary--static:#74ce3a !important;}
[data-os-theme=light]{ --os-accent-septenary--static:#bf6900 !important;}
[data-os-theme=light]{ --os-accent-success:#35bc35 !important;}
[data-os-theme=light]{ --os-accent-tertiary--static:#fff !important;}
[data-os-theme=light]{ --os-active:#3e94ff !important;}
[data-os-theme=light]{ --os-background-color-primary:#142434 !important;}
[data-os-theme=light]{ --os-background-color-quaternary:#555 !important;}
[data-os-theme=light]{ --os-background-color-secondary:#555 !important;}
[data-os-theme=light]{ --os-background-color-tertiary:#094174 !important;}
[data-os-theme=light]{ --os-background-octonary:#333 !important;}
[data-os-theme=light]{ --os-background-primary:#333 !important;}
[data-os-theme=light]{ --os-background-quaternary:#555 !important;}
[data-os-theme=light]{ --os-background-quinary:#666 !important;}
[data-os-theme=light]{ --os-background-secondary:#2c2c2c !important;}
[data-os-theme=light]{ --os-background-senary:#1c1c1c !important;}
[data-os-theme=light]{ --os-background-septenary:#555 !important;}
[data-os-theme=light]{ --os-background-tertiary:#2c2c2c !important;}
[data-os-theme=light]{ --os-background-transparent-primary:#333333f2 !important;}
[data-os-theme=light]{ --os-background-transparent-secondary:#333333bf !important;}
[data-os-theme=light]{ --os-background-transparent-tertiary:#33333359 !important;}
[data-os-theme=light]{ --os-close:#888 !important;}
[data-os-theme=light]{ --os-emphasis-disabled--static:#a2b9df !important;}
[data-os-theme=light]{ --os-emphasis-fill:#90cef1 !important;}
[data-os-theme=light]{ --os-emphasis-fill--static:#1651b0 !important;}
[data-os-theme=light]{ --os-emphasis-hover--static:#769fcc !important;}
[data-os-theme=light]{ --os-error:#bd3039 !important;}
[data-os-theme=light]{ --os-error-background:#683232 !important;}
[data-os-theme=light]{ --os-error-bad:#683232 !important;}
[data-os-theme=light]{ --os-error-close:#dd979b !important;}
[data-os-theme=light]{ --os-error-disabled--static:#dd979b !important;}
[data-os-theme=light]{ --os-error-fill--static:#bd3039 !important;}
[data-os-theme=light]{ --os-error-hover--static:#d66e74 !important;}
[data-os-theme=light]{ --os-error-outline-primary--static:#bd3039 !important;}
[data-os-theme=light]{ --os-error-outline-secondary:#932229 !important;}
[data-os-theme=light]{ --os-fill-color-primary:#092046 !important;}
[data-os-theme=light]{ --os-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme=light]{ --os-fill-color-quaternary--static:#d1c0dd !important;}
[data-os-theme=light]{ --os-fill-color-quinary:#094174 !important;}
[data-os-theme=light]{ --os-fill-color-secondary:#4b5761 !important;}
[data-os-theme=light]{ --os-fill-color-tertiary--static:#d1c0dd !important;}
[data-os-theme=light]{ --os-fill-denary--static:#ccc !important;}
[data-os-theme=light]{ --os-fill-duodenary:#555 !important;}
[data-os-theme=light]{ --os-fill-elevenary:#ccc !important;}
[data-os-theme=light]{ --os-fill-nonary:#555 !important;}
[data-os-theme=light]{ --os-fill-octonary:#666 !important;}
[data-os-theme=light]{ --os-fill-primary:#333 !important;}
[data-os-theme=light]{ --os-fill-quaternary:#555 !important;}
[data-os-theme=light]{ --os-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme=light]{ --os-fill-quinary:#555 !important;}
[data-os-theme=light]{ --os-fill-quinary--static:#eee !important;}
[data-os-theme=light]{ --os-fill-secondary:#d7d7d7 !important;}
[data-os-theme=light]{ --os-fill-secondary--static:#999 !important;}
[data-os-theme=light]{ --os-fill-senary:#1c1c1c !important;}
[data-os-theme=light]{ --os-fill-tertiary:#999 !important;}
[data-os-theme=light]{ --os-fill-tertiary--static:#666 !important;}
[data-os-theme=light]{ --os-focus:#3e94ff !important;}
[data-os-theme=light]{ --os-highlight-fill:#6a4f06 !important;}
[data-os-theme=light]{ --os-highlight-outline:#dba517 !important;}
[data-os-theme=light]{ --os-hover-primary:#0a4780 !important;}
[data-os-theme=light]{ --os-hover-quaternary:#4b5761 !important;}
[data-os-theme=light]{ --os-hover-quinary:#333 !important;}
[data-os-theme=light]{ --os-hover-secondary:#666 !important;}
[data-os-theme=light]{ --os-hover-senary--static:#467bb6 !important;}
[data-os-theme=light]{ --os-hover-septenary:#094174 !important;}
[data-os-theme=light]{ --os-hover-tertiary:#555 !important;}
[data-os-theme=light]{ --os-inferred:#092046 !important;}
[data-os-theme=light]{ --os-info:#90cef1 !important;}
[data-os-theme=light]{ --os-info-background-primary:#094174 !important;}
[data-os-theme=light]{ --os-info-background-secondary:#142434 !important;}
[data-os-theme=light]{ --os-info-background-tertiary:#092046 !important;}
[data-os-theme=light]{ --os-info-close:#90cef1 !important;}
[data-os-theme=light]{ --os-info-fill:#0a4780 !important;}
[data-os-theme=light]{ --os-info-outline:#467bb6 !important;}
[data-os-theme=light]{ --os-info-subtle:#769fcc !important;}
[data-os-theme=light]{ --os-info-text:#d0dbe5 !important;}
[data-os-theme=light]{ --os-info-tooltip:#4b5761 !important;}
[data-os-theme=light]{ --os-link:#b2ddf6 !important;}
[data-os-theme=light]{ --os-link--static:#094174 !important;}
[data-os-theme=light]{ --os-outline-color-primary:#a2b9df !important;}
[data-os-theme=light]{ --os-outline-denary:#333 !important;}
[data-os-theme=light]{ --os-outline-emphasis:#90cef1 !important;}
[data-os-theme=light]{ --os-outline-nonary:#ccc !important;}
[data-os-theme=light]{ --os-outline-octonary:#999 !important;}
[data-os-theme=light]{ --os-outline-primary:#fff !important;}
[data-os-theme=light]{ --os-outline-primary--static:#333 !important;}
[data-os-theme=light]{ --os-outline-quaternary:#555 !important;}
[data-os-theme=light]{ --os-outline-quaternary--static:#ccc !important;}
[data-os-theme=light]{ --os-outline-quinary:#ccc !important;}
[data-os-theme=light]{ --os-outline-quinary--static:#888 !important;}
[data-os-theme=light]{ --os-outline-secondary:#888 !important;}
[data-os-theme=light]{ --os-outline-secondary--static:#aaa !important;}
[data-os-theme=light]{ --os-outline-senary:#999 !important;}
[data-os-theme=light]{ --os-outline-septenary:#bababa !important;}
[data-os-theme=light]{ --os-outline-subtle:#555 !important;}
[data-os-theme=light]{ --os-outline-tertiary:#666 !important;}
[data-os-theme=light]{ --os-outline-tertiary--static:#d7d7d7 !important;}
[data-os-theme=light]{ --os-overlay-disabled:#ffffff59 !important;}
[data-os-theme=light]{ --os-overlay-emphasis:#3e94ff19 !important;}
[data-os-theme=light]{ --os-ptc-logo-accent:#fff !important;}
[data-os-theme=light]{ --os-ptc-logo-main:#fff !important;}
[data-os-theme=light]{ --os-select-primary:#134e96 !important;}
[data-os-theme=light]{ --os-select-secondary:#092046 !important;}
[data-os-theme=light]{ --os-select-tertiary:#467bb6 !important;}
[data-os-theme=light]{ --os-shadow-primary:#00000066 !important;}
[data-os-theme=light]{ --os-shadow-quaternary--static:#0000003f !important;}
[data-os-theme=light]{ --os-shadow-quinary:#00000066 !important;}
[data-os-theme=light]{ --os-shadow-secondary:#00000099 !important;}
[data-os-theme=light]{ --os-shadow-senary--static:#00000019 !important;}
[data-os-theme=light]{ --os-shadow-tertiary--static:#0000001f !important;}
[data-os-theme=light]{ --os-stop:#ff6b6b !important;}
[data-os-theme=light]{ --os-success:#009400 !important;}
[data-os-theme=light]{ --os-success-background:#0b450b !important;}
[data-os-theme=light]{ --os-success-close:#a2db7d !important;}
[data-os-theme=light]{ --os-success-disabled--static:#a2db7d !important;}
[data-os-theme=light]{ --os-success-fill--static:#028502 !important;}
[data-os-theme=light]{ --os-success-hover--static:#74ce3a !important;}
[data-os-theme=light]{ --os-success-outline:#028502 !important;}
[data-os-theme=light]{ --os-text-accent:#333 !important;}
[data-os-theme=light]{ --os-text-accent--static:#fff !important;}
[data-os-theme=light]{ --os-text-emphasis:#90cef1 !important;}
[data-os-theme=light]{ --os-text-emphasis-title:#fff !important;}
[data-os-theme=light]{ --os-text-invalid:#ff6b6b !important;}
[data-os-theme=light]{ --os-text-primary:#fff !important;}
[data-os-theme=light]{ --os-text-primary--static:#333 !important;}
[data-os-theme=light]{ --os-text-quaternary:#d7d7d7 !important;}
[data-os-theme=light]{ --os-text-quaternary--static:#555 !important;}
[data-os-theme=light]{ --os-text-quinary:#fff !important;}
[data-os-theme=light]{ --os-text-secondary:#ccc !important;}
[data-os-theme=light]{ --os-text-tertiary--static:#999 !important;}
[data-os-theme=light]{ --os-warn:#fab601 !important;}
[data-os-theme=light]{ --os-warn-background:#6a4f06 !important;}
[data-os-theme=light]{ --os-warn-close:#fcda7f !important;}
[data-os-theme=light]{ --os-warn-close-static:#987107 !important;}
[data-os-theme=light]{ --os-warn-fill:#825f00 !important;}
[data-os-theme=light]{ --os-warn-outline:#987107 !important;}
[data-os-theme=light]{ --os-warn-subtle--static:#e9dbb2 !important;}













































































































































































































































































[data-os-theme=light]{ --os-modal-location-picker-divider:#eee !important;}





























































































































































































































































































































[data-os-theme=light]{ --os-quickstart-divider--hover:#666 !important;}










































































































































[data-os-theme=light]{ --os-axis-x-color:#dd979b !important;}
[data-os-theme=light]{ --os-axis-y-color:#a2db7d !important;}
[data-os-theme=light]{ --os-axis-z-color:#90cef1 !important;}
[data-os-theme=light]{ --os-box-select-color:#769fcc !important;}
[data-os-theme=light]{ --os-connectivity-analysis-cannot-compute-color:#666 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-cannot-compute-contrast-color:#ccc !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g0-color:#fff8e6 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g0-contrast-color:#987107 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g1-color:#028502 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g1-contrast-color:#a2db7d !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g2-color:#440154 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g2-contrast-color:#b689be !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g3-color:#467bb6 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-g3-contrast-color:#d0dbe5 !important;}
[data-os-theme=light]{ --os-connectivity-analysis-no-connection-color:#bd3039 !important;}
[data-os-theme=light]{ --os-constraint-bad-color:#d66e74 !important;}
[data-os-theme=light]{ --os-constraint-bad-color--prehilite:#aa252d !important;}
[data-os-theme=light]{ --os-constraint-bad-color--selected:#bd3039 !important;}
[data-os-theme=light]{ --os-constraint-bad-external-color:#d66e74 !important;}
[data-os-theme=light]{ --os-constraint-bad-external-color--prehilite:#aa252d !important;}
[data-os-theme=light]{ --os-constraint-bad-external-color--selected:#bd3039 !important;}
[data-os-theme=light]{ --os-constraint-indicator-leader-color:#ccc !important;}
[data-os-theme=light]{ --os-constraint-ok-color:#555 !important;}
[data-os-theme=light]{ --os-constraint-ok-color--prehilite:#fcda7f !important;}
[data-os-theme=light]{ --os-constraint-ok-color--selected:#fab601 !important;}
[data-os-theme=light]{ --os-constraint-ok-external-color:#def1fb !important;}
[data-os-theme=light]{ --os-constraint-ok-external-color--prehilite:#b2ddf6 !important;}
[data-os-theme=light]{ --os-constraint-ok-external-color--selected:#90cef1 !important;}
[data-os-theme=light]{ --os-construction-plane-ambient-color:#666 !important;}
[data-os-theme=light]{ --os-construction-plane-outline-color:#ffffff59 !important;}
[data-os-theme=light]{ --os-construction-plane-text-color:#fff !important;}
[data-os-theme=light]{ --os-curvature-circle-radius-color:#d1acebcc !important;}
[data-os-theme=light]{ --os-curvature-control-point-grid-color:#a64dff !important;}
[data-os-theme=light]{ --os-curvature-control-point-grid-u-color:#ff6b6b !important;}
[data-os-theme=light]{ --os-curvature-control-point-grid-v-color:#3e94ff !important;}
[data-os-theme=light]{ --os-curvature-control-point-grid-vertices-color:#a64dff !important;}
[data-os-theme=light]{ --os-curvature-deviation-max-color:#ff6b6b !important;}
[data-os-theme=light]{ --os-curvature-deviation-min-color:#3e94ff !important;}
[data-os-theme=light]{ --os-curvature-inflection-point-color:#fff !important;}
[data-os-theme=light]{ --os-curvature-knot-points-color:#fff !important;}
[data-os-theme=light]{ --os-curvature-roof-color:#d1acebcc !important;}
[data-os-theme=light]{ --os-curvature-tooth-color:#a2db7db2 !important;}
[data-os-theme=light]{ --os-curvature-u-knot-lines-color:#3e94ffe5 !important;}
[data-os-theme=light]{ --os-curvature-u-roof-color:#ff4d8ccc !important;}
[data-os-theme=light]{ --os-curvature-u-tooth-color:#ff4d8ccc !important;}
[data-os-theme=light]{ --os-curvature-v-knot-lines-color:#ff4d8ccc !important;}
[data-os-theme=light]{ --os-curvature-v-roof-color:#3e94ffe5 !important;}
[data-os-theme=light]{ --os-curvature-v-tooth-color:#3e94ffe5 !important;}
[data-os-theme=light]{ --os-dihedral-low-threshold-color:#b499bbcc !important;}
[data-os-theme=light]{ --os-dimension-expression-bad-background-color:#dd979b !important;}
[data-os-theme=light]{ --os-dimension-expression-bad-background-color--hovered:#aa252d !important;}
[data-os-theme=light]{ --os-dimension-expression-bad-background-color--selected:#bd3039 !important;}
[data-os-theme=light]{ --os-dimension-expression-with-variables-background-color:#def1fb !important;}
[data-os-theme=light]{ --os-dimension-expression-with-variables-background-color--hovered:#b2ddf6 !important;}
[data-os-theme=light]{ --os-dimension-expression-with-variables-background-color--selected:#90cef1 !important;}
[data-os-theme=light]{ --os-dimension-expression-without-variables-background-border-color:#90cef1 !important;}
[data-os-theme=light]{ --os-dimension-expression-without-variables-background-color--hovered:#fcda7f !important;}
[data-os-theme=light]{ --os-dimension-expression-without-variables-background-color--selected:#fab601 !important;}
[data-os-theme=light]{ --os-dimension-driven-hovered-line-arrow-color:#ccc !important;}
[data-os-theme=light]{ --os-dimension-driven-line-point-color:#ccc !important;}
[data-os-theme=light]{ --os-dimension-driven-value-hovered-background-color:#bf9460 !important;}
[data-os-theme=light]{ --os-dimension-driving-hovered-line-arrow-color:#fcda7f !important;}
[data-os-theme=light]{ --os-dimension-driving-value-hovered-background-color:#bf9460 !important;}
[data-os-theme=light]{ --os-dimension-inactive-occluded-color:#bababa !important;}
[data-os-theme=light]{ --os-dimension-line-arrow-color:#fff !important;}
[data-os-theme=light]{ --os-dimension-selected-line-arrow-color:#dba517 !important;}
[data-os-theme=light]{ --os-dimension-value-selected-background-color:#bf6900 !important;}
[data-os-theme=light]{ --os-dimension-value-text-color:#fff !important;}
[data-os-theme=light]{ --os-draft-analysis-against-direction-color:#3e94ff !important;}
[data-os-theme=light]{ --os-draft-analysis-undercut-color:#ff6b6b !important;}
[data-os-theme=light]{ --os-explode-line-color:#fff !important;}
[data-os-theme=light]{ --os-legend-background-color:#333333bf !important;}
[data-os-theme=light]{ --os-legend-tick-min-max-color:#fff !important;}
[data-os-theme=light]{ --os-legend-tick-min-max-outline-color:#555 !important;}
[data-os-theme=light]{ --os-legend-tick-scale-color:#fff !important;}
[data-os-theme=light]{ --os-legend-tick-text-color:#fff !important;}
[data-os-theme=light]{ --os-legend-tick-text-color--clickable:#90cef1 !important;}
[data-os-theme=light]{ --os-manipulator-displacement-color:#a2b9df !important;}
[data-os-theme=light]{ --os-manipulator-line-color:#fff !important;}
[data-os-theme=light]{ --os-manipulator-line-color--disabled:#fff !important;}
[data-os-theme=light]{ --os-manipulator-line-color--drag:#a2b9df !important;}
[data-os-theme=light]{ --os-manipulator-line-color--hover:#134e96 !important;}
[data-os-theme=light]{ --os-manipulator-outline-color:#606a72 !important;}
[data-os-theme=light]{ --os-manipulator-outline-color--disabled:#fff !important;}
[data-os-theme=light]{ --os-manipulator-outline-color--drag:#134e96 !important;}
[data-os-theme=light]{ --os-manipulator-outline-color--hover:#a2b9df !important;}
[data-os-theme=light]{ --os-mate-connector-coordinate-system-offset-axis-color:#fff !important;}
[data-os-theme=light]{ --os-mate-connector-fill-color:#ffffffcc !important;}
[data-os-theme=light]{ --os-mate-connector-stroke-color:#002847 !important;}
[data-os-theme=light]{ --os-origin-color:#fff !important;}
[data-os-theme=light]{ --os-point-body-color:#fff !important;}
[data-os-theme=light]{ --os-project-measurement-angle-color:#def1fb !important;}
[data-os-theme=light]{ --os-project-measurement-distance-color:#fff !important;}
[data-os-theme=light]{ --os-resize-manipulator-outer-color:#d0dbe57f !important;}
[data-os-theme=light]{ --os-resize-manipulator-outer-highlight:#d0dbe5e5 !important;}
[data-os-theme=light]{ --os-simulation-line-axis-color:#fff !important;}
[data-os-theme=light]{ --os-simulation-load-leader-line-color:#fff !important;}
[data-os-theme=light]{ --os-sketch-plane-line-color:#90cef1 !important;}
[data-os-theme=light]{ --os-sketch-plane-text-color:#90cef1 !important;}
[data-os-theme=light]{ --os-sketch-drag-trim-path-color:#f5f5f5 !important;}
[data-os-theme=light]{ --os-sketch-face-color:#f2f2f233 !important;}
[data-os-theme=light]{ --os-sketch-face-color-show-through-color:#f2f2f219 !important;}
[data-os-theme=light]{ --os-sketch-inactive-color:#999 !important;}
[data-os-theme=light]{ --os-sketch-overconstrained-line-point-color:#ff6b6b !important;}
[data-os-theme=light]{ --os-sketch-overconstrained-show-through-line-point-color:#dd979b !important;}
[data-os-theme=light]{ --os-sketch-underconstrained-line-point-color:#3e94ff !important;}
[data-os-theme=light]{ --os-sketch-underconstrained-show-through-line-point-color:#a2b9df !important;}

[data-os-theme=light]{ --os-unshaded-body-line-color:#fff !important;}
[data-os-theme=light]{ --os-view-cube-arrow-color:#999 !important;}
[data-os-theme=light]{ --os-view-cube-back-color:#999 !important;}
[data-os-theme=light]{ --os-view-cube-face-highlight:#90cef199 !important;}
[data-os-theme=light]{ --os-view-cube-front-color:#333 !important;}
[data-os-theme=light]{ --os-view-cube-text-color--hover:#000 !important;}
[data-os-theme=light]{ --os-view-cube-text-color--idle:#fff !important;}











[data-os-theme=light]{ --background-color:#333 !important;}
[data-os-theme=light]{ --info-button-color:#1651b0 !important;}
[data-os-theme=light]{ --key-color:#3e94ff !important;}
[data-os-theme=light]{ --text-color:#fff !important;}
[data-os-theme=light]{ --title-color:#fff !important;}
[data-os-theme=light]{ --warning-button-color:#bd3039 !important;}



































































[data-os-theme=light]{ --os-version-graph-branch-0:#3e94ff !important;}
[data-os-theme=light]{ --os-version-graph-branch-0-faded:#d0dbe5 !important;}
[data-os-theme=light]{ --os-version-graph-branch-1:#fab601 !important;}
[data-os-theme=light]{ --os-version-graph-branch-1-faded:#fff8e6 !important;}
[data-os-theme=light]{ --os-version-graph-branch-2:#3ad4a7 !important;}
[data-os-theme=light]{ --os-version-graph-branch-2-faded:#c3f2e4 !important;}
[data-os-theme=light]{ --os-version-graph-branch-3:#b689be !important;}
[data-os-theme=light]{ --os-version-graph-branch-3-faded:#e9dbeb !important;}
[data-os-theme=light]{ --os-version-graph-branch-4:#90cef1 !important;}
[data-os-theme=light]{ --os-version-graph-branch-4-faded:#def1fb !important;}
[data-os-theme=light]{ --os-version-graph-branch-5:#b88a00 !important;}
[data-os-theme=light]{ --os-version-graph-branch-5-faded:#e9dbb2 !important;}
[data-os-theme=light]{ --os-version-graph-branch-6:#219773 !important;}
[data-os-theme=light]{ --os-version-graph-branch-6-faded:#c3e2d9 !important;}
[data-os-theme=light]{ --os-version-graph-branch-7:#a64dff !important;}
[data-os-theme=light]{ --os-version-graph-branch-7-faded:#d1c0dd !important;}
[data-os-theme=light]{ --os-version-graph-branch-8:#e98e72 !important;}
[data-os-theme=light]{ --os-version-graph-branch-8-faded:#f8ddd4 !important;}


[data-os-theme=dark]{ --zero-state-background:#f1f5fa !important;}

[data-os-theme=light]{ --zero-state-background:#2c2c2c !important;}

[data-os-theme=light]{ color-scheme:dark !important;}



[data-os-theme=dark]{ color-shceme:light !important;}
`

styleSheet.textContent = rules

//styleSheet.replaceSync(rules)

document.head.appendChild(styleSheet)

//styleSheet.insertRule('osx-welcome-mat-section{display: none !important;}')


