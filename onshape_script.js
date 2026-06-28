// Put all the javascript code here, that you want to execute after page load.
//const welcomeMat = document.querySelector("osx-welcome-mat-section")//[[show-spinner]='showWelcomeMatDocumentSpinner']")
//welcomeMat.remove()
const styleSheet = document.createElement('style') //CSSStyleSheet(); //chooses the first existing stylesheet it sees

const rules = `























































































































































[data-os-theme]{ --os-accent-nonary:#672f8f !important;}
[data-os-theme]{ --os-accent-octonary:#094174 !important;}
[data-os-theme]{ --os-accent-primary:#1651b0 !important;}
[data-os-theme]{ --os-accent-primary--static:#1651b0 !important;}
[data-os-theme]{ --os-accent-quaternary:#333 !important;}
[data-os-theme]{ --os-accent-quinary--static:#3e94ff !important;}
[data-os-theme]{ --os-accent-secondary:#90cef1 !important;}
[data-os-theme]{ --os-accent-secondary--static:#90cef1 !important;}
[data-os-theme]{ --os-accent-senary--static:#74ce3a !important;}
[data-os-theme]{ --os-accent-septenary--static:#bf6900 !important;}
[data-os-theme]{ --os-accent-success:#009400 !important;}
[data-os-theme]{ --os-accent-tertiary--static:#fff !important;}
[data-os-theme]{ --os-active:#1651b0 !important;}
[data-os-theme]{ --os-background-color-primary:#f1f5fa !important;}
[data-os-theme]{ --os-background-color-quaternary:#f1f5fa !important;}
[data-os-theme]{ --os-background-color-secondary:#ecf0f4 !important;}
[data-os-theme]{ --os-background-color-tertiary:#134e96 !important;}
[data-os-theme]{ --os-background-octonary:#f5f5f5 !important;}
[data-os-theme]{ --os-background-primary:#fff !important;}
[data-os-theme]{ --os-background-quaternary:#d7d7d7 !important;}
[data-os-theme]{ --os-background-quinary:#eee !important;}
[data-os-theme]{ --os-background-secondary:#f5f5f5 !important;}
[data-os-theme]{ --os-background-senary:#fff !important;}
[data-os-theme]{ --os-background-septenary:#eaeaea !important;}
[data-os-theme]{ --os-background-tertiary:#fafafa !important;}
[data-os-theme]{ --os-background-transparent-primary:#fffffff2 !important;}
[data-os-theme]{ --os-background-transparent-secondary:#ffffffbf !important;}
[data-os-theme]{ --os-background-transparent-tertiary:#ffffff59 !important;}
[data-os-theme]{ --os-close:#888 !important;}
[data-os-theme]{ --os-emphasis-disabled--static:#a2b9df !important;}
[data-os-theme]{ --os-emphasis-fill:#1651b0 !important;}
[data-os-theme]{ --os-emphasis-fill--static:#1651b0 !important;}
[data-os-theme]{ --os-emphasis-hover--static:#769fcc !important;}
[data-os-theme]{ --os-error:#bd3039 !important;}
[data-os-theme]{ --os-error-background:#f9ebec !important;}
[data-os-theme]{ --os-error-bad:#dd979b !important;}
[data-os-theme]{ --os-error-close:#aa252d !important;}
[data-os-theme]{ --os-error-disabled--static:#dd979b !important;}
[data-os-theme]{ --os-error-fill--static:#bd3039 !important;}
[data-os-theme]{ --os-error-hover--static:#d66e74 !important;}
[data-os-theme]{ --os-error-outline-primary--static:#bd3039 !important;}
[data-os-theme]{ --os-error-outline-secondary:#dd979b !important;}
[data-os-theme]{ --os-fill-color-primary:#d0dbe5 !important;}
[data-os-theme]{ --os-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme]{ --os-fill-color-quaternary--static:#c3f2e4 !important;}
[data-os-theme]{ --os-fill-color-quinary:#fff !important;}
[data-os-theme]{ --os-fill-color-secondary:#f1f5fa !important;}
[data-os-theme]{ --os-fill-color-tertiary--static:#d1c0dd !important;}
[data-os-theme]{ --os-fill-denary--static:#ccc !important;}
[data-os-theme]{ --os-fill-duodenary:#fafafa !important;}
[data-os-theme]{ --os-fill-elevenary:#fff !important;}
[data-os-theme]{ --os-fill-nonary:#f5f5f5 !important;}
[data-os-theme]{ --os-fill-octonary:#d7d7d7 !important;}
[data-os-theme]{ --os-fill-primary:#fff !important;}
[data-os-theme]{ --os-fill-quaternary:#d7d7d7 !important;}
[data-os-theme]{ --os-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme]{ --os-fill-quinary:#eee !important;}
[data-os-theme]{ --os-fill-quinary--static:#eee !important;}
[data-os-theme]{ --os-fill-secondary:#999 !important;}
[data-os-theme]{ --os-fill-secondary--static:#999 !important;}
[data-os-theme]{ --os-fill-senary:#eaeaea !important;}
[data-os-theme]{ --os-fill-tertiary:#666 !important;}
[data-os-theme]{ --os-fill-tertiary--static:#666 !important;}
[data-os-theme]{ --os-focus:#3e94ff !important;}
[data-os-theme]{ --os-highlight-fill:#fcda7f !important;}
[data-os-theme]{ --os-highlight-outline:#fab601 !important;}
[data-os-theme]{ --os-hover-primary:#def1fb !important;}
[data-os-theme]{ --os-hover-quaternary:#d0dbe5 !important;}
[data-os-theme]{ --os-hover-quinary:#d7d7d7 !important;}
[data-os-theme]{ --os-hover-secondary:#eaeaea !important;}
[data-os-theme]{ --os-hover-senary--static:#467bb6 !important;}
[data-os-theme]{ --os-hover-septenary:#d0dbe5 !important;}
[data-os-theme]{ --os-hover-tertiary:#d7d7d7 !important;}
[data-os-theme]{ --os-inferred:#ecf0f4 !important;}
[data-os-theme]{ --os-info:#90cef1 !important;}
[data-os-theme]{ --os-info-background-primary:#def1fb !important;}
[data-os-theme]{ --os-info-background-secondary:#def1fb !important;}
[data-os-theme]{ --os-info-background-tertiary:#ecf5fc !important;}
[data-os-theme]{ --os-info-close:#467bb6 !important;}
[data-os-theme]{ --os-info-fill:#90cef1 !important;}
[data-os-theme]{ --os-info-outline:#b2ddf6 !important;}
[data-os-theme]{ --os-info-subtle:#769fcc !important;}
[data-os-theme]{ --os-info-text:#094174 !important;}
[data-os-theme]{ --os-info-tooltip:#d0dbe5 !important;}
[data-os-theme]{ --os-link:#094174 !important;}
[data-os-theme]{ --os-link--static:#094174 !important;}
[data-os-theme]{ --os-outline-color-primary:#d0dbe5 !important;}
[data-os-theme]{ --os-outline-denary:#999 !important;}
[data-os-theme]{ --os-outline-emphasis:#1651b0 !important;}
[data-os-theme]{ --os-outline-nonary:#666 !important;}
[data-os-theme]{ --os-outline-octonary:#fff !important;}
[data-os-theme]{ --os-outline-primary:#333 !important;}
[data-os-theme]{ --os-outline-primary--static:#333 !important;}
[data-os-theme]{ --os-outline-quaternary:#ccc !important;}
[data-os-theme]{ --os-outline-quaternary--static:#ccc !important;}
[data-os-theme]{ --os-outline-quinary:#888 !important;}
[data-os-theme]{ --os-outline-quinary--static:#888 !important;}
[data-os-theme]{ --os-outline-secondary:#aaa !important;}
[data-os-theme]{ --os-outline-secondary--static:#aaa !important;}
[data-os-theme]{ --os-outline-senary:#777 !important;}
[data-os-theme]{ --os-outline-septenary:#333 !important;}
[data-os-theme]{ --os-outline-subtle:#d0dbe5 !important;}
[data-os-theme]{ --os-outline-tertiary:#d7d7d7 !important;}
[data-os-theme]{ --os-outline-tertiary--static:#d7d7d7 !important;}
[data-os-theme]{ --os-overlay-disabled:#33333359 !important;}
[data-os-theme]{ --os-overlay-emphasis:#1651b019 !important;}


[data-os-theme]{ --os-select-primary:#b2ddf6 !important;}
[data-os-theme]{ --os-select-secondary:#b2ddf6 !important;}
[data-os-theme]{ --os-select-tertiary:#d0dbe5 !important;}
[data-os-theme]{ --os-shadow-primary:#00000033 !important;}
[data-os-theme]{ --os-shadow-quaternary--static:#0000003f !important;}
[data-os-theme]{ --os-shadow-quinary:#0000000c !important;}
[data-os-theme]{ --os-shadow-secondary:#00000033 !important;}
[data-os-theme]{ --os-shadow-senary--static:#00000019 !important;}
[data-os-theme]{ --os-shadow-tertiary--static:#0000001f !important;}
[data-os-theme]{ --os-stop:#bd3039 !important;}
[data-os-theme]{ --os-success:#009400 !important;}
[data-os-theme]{ --os-success-background:#ddf6cc !important;}
[data-os-theme]{ --os-success-close:#028502 !important;}
[data-os-theme]{ --os-success-disabled--static:#a2db7d !important;}
[data-os-theme]{ --os-success-fill--static:#028502 !important;}
[data-os-theme]{ --os-success-hover--static:#74ce3a !important;}
[data-os-theme]{ --os-success-outline:#a2db7d !important;}
[data-os-theme]{ --os-text-accent:#fff !important;}
[data-os-theme]{ --os-text-accent--static:#fff !important;}
[data-os-theme]{ --os-text-emphasis:#1651b0 !important;}
[data-os-theme]{ --os-text-emphasis-title:#1651b0 !important;}
[data-os-theme]{ --os-text-invalid:#aa252d !important;}
[data-os-theme]{ --os-text-primary:#333 !important;}
[data-os-theme]{ --os-text-primary--static:#333 !important;}
[data-os-theme]{ --os-text-quaternary:#555 !important;}
[data-os-theme]{ --os-text-quaternary--static:#555 !important;}
[data-os-theme]{ --os-text-quinary:#1c1c1c !important;}
[data-os-theme]{ --os-text-secondary:#666 !important;}
[data-os-theme]{ --os-text-tertiary--static:#999 !important;}
[data-os-theme]{ --os-warn:#fab601 !important;}
[data-os-theme]{ --os-warn-background:#fff8e6 !important;}
[data-os-theme]{ --os-warn-close:#987107 !important;}
[data-os-theme]{ --os-warn-close-static:#987107 !important;}
[data-os-theme]{ --os-warn-fill:#fab601 !important;}
[data-os-theme]{ --os-warn-outline:#fcda7f !important;}
[data-os-theme]{ --os-warn-subtle--static:#e9dbb2 !important;}


[data-os-theme]{ --os-accent-nonary:#a64dff !important;}
[data-os-theme]{ --os-accent-octonary:#def1fb !important;}
[data-os-theme]{ --os-accent-primary:#3e94ff !important;}
[data-os-theme]{ --os-accent-primary--static:#1651b0 !important;}
[data-os-theme]{ --os-accent-quaternary:#fff !important;}
[data-os-theme]{ --os-accent-quinary--static:#3e94ff !important;}
[data-os-theme]{ --os-accent-secondary:#def1fb !important;}
[data-os-theme]{ --os-accent-secondary--static:#90cef1 !important;}
[data-os-theme]{ --os-accent-senary--static:#74ce3a !important;}
[data-os-theme]{ --os-accent-septenary--static:#bf6900 !important;}
[data-os-theme]{ --os-accent-success:#35bc35 !important;}
[data-os-theme]{ --os-accent-tertiary--static:#fff !important;}
[data-os-theme]{ --os-active:#3e94ff !important;}
[data-os-theme]{ --os-background-color-primary:#142434 !important;}
[data-os-theme]{ --os-background-color-quaternary:#555 !important;}
[data-os-theme]{ --os-background-color-secondary:#555 !important;}
[data-os-theme]{ --os-background-color-tertiary:#094174 !important;}
[data-os-theme]{ --os-background-octonary:#333 !important;}
[data-os-theme]{ --os-background-primary:#333 !important;}
[data-os-theme]{ --os-background-quaternary:#555 !important;}
[data-os-theme]{ --os-background-quinary:#666 !important;}
[data-os-theme]{ --os-background-secondary:#2c2c2c !important;}
[data-os-theme]{ --os-background-senary:#1c1c1c !important;}
[data-os-theme]{ --os-background-septenary:#555 !important;}
[data-os-theme]{ --os-background-tertiary:#2c2c2c !important;}
[data-os-theme]{ --os-background-transparent-primary:#333333f2 !important;}
[data-os-theme]{ --os-background-transparent-secondary:#333333bf !important;}
[data-os-theme]{ --os-background-transparent-tertiary:#33333359 !important;}
[data-os-theme]{ --os-close:#888 !important;}
[data-os-theme]{ --os-emphasis-disabled--static:#a2b9df !important;}
[data-os-theme]{ --os-emphasis-fill:#90cef1 !important;}
[data-os-theme]{ --os-emphasis-fill--static:#1651b0 !important;}
[data-os-theme]{ --os-emphasis-hover--static:#769fcc !important;}
[data-os-theme]{ --os-error:#bd3039 !important;}
[data-os-theme]{ --os-error-background:#683232 !important;}
[data-os-theme]{ --os-error-bad:#683232 !important;}
[data-os-theme]{ --os-error-close:#dd979b !important;}
[data-os-theme]{ --os-error-disabled--static:#dd979b !important;}
[data-os-theme]{ --os-error-fill--static:#bd3039 !important;}
[data-os-theme]{ --os-error-hover--static:#d66e74 !important;}
[data-os-theme]{ --os-error-outline-primary--static:#bd3039 !important;}
[data-os-theme]{ --os-error-outline-secondary:#932229 !important;}
[data-os-theme]{ --os-fill-color-primary:#092046 !important;}
[data-os-theme]{ --os-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme]{ --os-fill-color-quaternary--static:#d1c0dd !important;}
[data-os-theme]{ --os-fill-color-quinary:#094174 !important;}
[data-os-theme]{ --os-fill-color-secondary:#4b5761 !important;}
[data-os-theme]{ --os-fill-color-tertiary--static:#d1c0dd !important;}
[data-os-theme]{ --os-fill-denary--static:#ccc !important;}
[data-os-theme]{ --os-fill-duodenary:#555 !important;}
[data-os-theme]{ --os-fill-elevenary:#ccc !important;}
[data-os-theme]{ --os-fill-nonary:#555 !important;}
[data-os-theme]{ --os-fill-octonary:#666 !important;}
[data-os-theme]{ --os-fill-primary:#333 !important;}
[data-os-theme]{ --os-fill-quaternary:#555 !important;}
[data-os-theme]{ --os-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme]{ --os-fill-quinary:#555 !important;}
[data-os-theme]{ --os-fill-quinary--static:#eee !important;}
[data-os-theme]{ --os-fill-secondary:#d7d7d7 !important;}
[data-os-theme]{ --os-fill-secondary--static:#999 !important;}
[data-os-theme]{ --os-fill-senary:#1c1c1c !important;}
[data-os-theme]{ --os-fill-tertiary:#999 !important;}
[data-os-theme]{ --os-fill-tertiary--static:#666 !important;}
[data-os-theme]{ --os-focus:#3e94ff !important;}
[data-os-theme]{ --os-highlight-fill:#6a4f06 !important;}
[data-os-theme]{ --os-highlight-outline:#dba517 !important;}
[data-os-theme]{ --os-hover-primary:#0a4780 !important;}
[data-os-theme]{ --os-hover-quaternary:#4b5761 !important;}
[data-os-theme]{ --os-hover-quinary:#333 !important;}
[data-os-theme]{ --os-hover-secondary:#666 !important;}
[data-os-theme]{ --os-hover-senary--static:#467bb6 !important;}
[data-os-theme]{ --os-hover-septenary:#094174 !important;}
[data-os-theme]{ --os-hover-tertiary:#555 !important;}
[data-os-theme]{ --os-inferred:#092046 !important;}
[data-os-theme]{ --os-info:#90cef1 !important;}
[data-os-theme]{ --os-info-background-primary:#094174 !important;}
[data-os-theme]{ --os-info-background-secondary:#142434 !important;}
[data-os-theme]{ --os-info-background-tertiary:#092046 !important;}
[data-os-theme]{ --os-info-close:#90cef1 !important;}
[data-os-theme]{ --os-info-fill:#0a4780 !important;}
[data-os-theme]{ --os-info-outline:#467bb6 !important;}
[data-os-theme]{ --os-info-subtle:#769fcc !important;}
[data-os-theme]{ --os-info-text:#d0dbe5 !important;}
[data-os-theme]{ --os-info-tooltip:#4b5761 !important;}
[data-os-theme]{ --os-link:#b2ddf6 !important;}
[data-os-theme]{ --os-link--static:#094174 !important;}
[data-os-theme]{ --os-outline-color-primary:#a2b9df !important;}
[data-os-theme]{ --os-outline-denary:#333 !important;}
[data-os-theme]{ --os-outline-emphasis:#90cef1 !important;}
[data-os-theme]{ --os-outline-nonary:#ccc !important;}
[data-os-theme]{ --os-outline-octonary:#999 !important;}
[data-os-theme]{ --os-outline-primary:#fff !important;}
[data-os-theme]{ --os-outline-primary--static:#333 !important;}
[data-os-theme]{ --os-outline-quaternary:#555 !important;}
[data-os-theme]{ --os-outline-quaternary--static:#ccc !important;}
[data-os-theme]{ --os-outline-quinary:#ccc !important;}
[data-os-theme]{ --os-outline-quinary--static:#888 !important;}
[data-os-theme]{ --os-outline-secondary:#888 !important;}
[data-os-theme]{ --os-outline-secondary--static:#aaa !important;}
[data-os-theme]{ --os-outline-senary:#999 !important;}
[data-os-theme]{ --os-outline-septenary:#bababa !important;}
[data-os-theme]{ --os-outline-subtle:#555 !important;}
[data-os-theme]{ --os-outline-tertiary:#666 !important;}
[data-os-theme]{ --os-outline-tertiary--static:#d7d7d7 !important;}
[data-os-theme]{ --os-overlay-disabled:#ffffff59 !important;}
[data-os-theme]{ --os-overlay-emphasis:#3e94ff19 !important;}
[data-os-theme]{ --os-ptc-logo-accent:#fff !important;}
[data-os-theme]{ --os-ptc-logo-main:#fff !important;}
[data-os-theme]{ --os-select-primary:#134e96 !important;}
[data-os-theme]{ --os-select-secondary:#092046 !important;}
[data-os-theme]{ --os-select-tertiary:#467bb6 !important;}
[data-os-theme]{ --os-shadow-primary:#00000066 !important;}
[data-os-theme]{ --os-shadow-quaternary--static:#0000003f !important;}
[data-os-theme]{ --os-shadow-quinary:#00000066 !important;}
[data-os-theme]{ --os-shadow-secondary:#00000099 !important;}
[data-os-theme]{ --os-shadow-senary--static:#00000019 !important;}
[data-os-theme]{ --os-shadow-tertiary--static:#0000001f !important;}
[data-os-theme]{ --os-stop:#ff6b6b !important;}
[data-os-theme]{ --os-success:#009400 !important;}
[data-os-theme]{ --os-success-background:#0b450b !important;}
[data-os-theme]{ --os-success-close:#a2db7d !important;}
[data-os-theme]{ --os-success-disabled--static:#a2db7d !important;}
[data-os-theme]{ --os-success-fill--static:#028502 !important;}
[data-os-theme]{ --os-success-hover--static:#74ce3a !important;}
[data-os-theme]{ --os-success-outline:#028502 !important;}
[data-os-theme]{ --os-text-accent:#333 !important;}
[data-os-theme]{ --os-text-accent--static:#fff !important;}
[data-os-theme]{ --os-text-emphasis:#90cef1 !important;}
[data-os-theme]{ --os-text-emphasis-title:#fff !important;}
[data-os-theme]{ --os-text-invalid:#ff6b6b !important;}
[data-os-theme]{ --os-text-primary:#fff !important;}
[data-os-theme]{ --os-text-primary--static:#333 !important;}
[data-os-theme]{ --os-text-quaternary:#d7d7d7 !important;}
[data-os-theme]{ --os-text-quaternary--static:#555 !important;}
[data-os-theme]{ --os-text-quinary:#fff !important;}
[data-os-theme]{ --os-text-secondary:#ccc !important;}
[data-os-theme]{ --os-text-tertiary--static:#999 !important;}
[data-os-theme]{ --os-warn:#fab601 !important;}
[data-os-theme]{ --os-warn-background:#6a4f06 !important;}
[data-os-theme]{ --os-warn-close:#fcda7f !important;}
[data-os-theme]{ --os-warn-close-static:#987107 !important;}
[data-os-theme]{ --os-warn-fill:#825f00 !important;}
[data-os-theme]{ --os-warn-outline:#987107 !important;}
[data-os-theme]{ --os-warn-subtle--static:#e9dbb2 !important;}



[data-os-theme]{ --os-accordion-fill--active:#999 !important;}
[data-os-theme]{ --os-accordion-fill--error:#ff6b6b !important;}
[data-os-theme]{ --os-accordion-fill--inactive:#555 !important;}
[data-os-theme]{ --os-accordion-leader:#ccc !important;}
[data-os-theme]{ --os-alert-background-error:#683232 !important;}
[data-os-theme]{ --os-alert-background-info:#094174 !important;}
[data-os-theme]{ --os-alert-background-success:#0b450b !important;}
[data-os-theme]{ --os-alert-background-warn:#6a4f06 !important;}


[data-os-theme]{ --os-alert-close-error:#dd979b !important;}
[data-os-theme]{ --os-alert-close-info:#90cef1 !important;}
[data-os-theme]{ --os-alert-close-success:#a2db7d !important;}
[data-os-theme]{ --os-alert-close-warn:#fcda7f !important;}

[data-os-theme]{ --os-alert-outline-error:#932229 !important;}
[data-os-theme]{ --os-alert-outline-info:#467bb6 !important;}
[data-os-theme]{ --os-alert-outline-success:#028502 !important;}
[data-os-theme]{ --os-alert-outline-warn:#987107 !important;}


[data-os-theme]{ --os-alert-text:#fff !important;}
[data-os-theme]{ --os-alert-text-info:#d0dbe5 !important;}
[data-os-theme]{ --os-alert-text-link:#b2ddf6 !important;}
[data-os-theme]{ --os-analysis-menu-background:#333333bf !important;}
[data-os-theme]{ --os-analysis-menu-text:#ccc !important;}
[data-os-theme]{ --os-analysis-menu-underline:#666 !important;}
[data-os-theme]{ --os-banner-close:#888 !important;}
[data-os-theme]{ --os-banner-fill-error:#683232 !important;}
[data-os-theme]{ --os-banner-fill-info:#2c2c2c !important;}
[data-os-theme]{ --os-banner-fill-warn:#6a4f06 !important;}



[data-os-theme]{ --os-banner-text:#fff !important;}
[data-os-theme]{ --os-breadcrumb-text--active:#fff !important;}
[data-os-theme]{ --os-breadcrumb-text--inactive:#ccc !important;}



[data-os-theme]{ --os-button-fill-cancel--disabled:#ccc !important;}
[data-os-theme]{ --os-button-fill-cancel--hover:#eee !important;}
[data-os-theme]{ --os-button-fill-cancel--idle:#d7d7d7 !important;}
[data-os-theme]{ --os-button-fill-error--disabled:#dd979b !important;}
[data-os-theme]{ --os-button-fill-error--hover:#d66e74 !important;}
[data-os-theme]{ --os-button-fill-error--idle:#bd3039 !important;}
[data-os-theme]{ --os-button-fill-primary--disabled:#a2b9df !important;}
[data-os-theme]{ --os-button-fill-primary--hover:#769fcc !important;}
[data-os-theme]{ --os-button-fill-primary--idle:#1651b0 !important;}
[data-os-theme]{ --os-button-fill-secondary--disabled:#333 !important;}
[data-os-theme]{ --os-button-fill-secondary--hover:#666 !important;}
[data-os-theme]{ --os-button-fill-secondary--idle:#333 !important;}
[data-os-theme]{ --os-button-fill-success--disabled:#a2db7d !important;}
[data-os-theme]{ --os-button-fill-success--hover:#74ce3a !important;}
[data-os-theme]{ --os-button-fill-success--idle:#028502 !important;}



[data-os-theme]{ --os-button-outline:#aaa !important;}


[data-os-theme]{ --os-button-text-cancel--disabled:#555 !important;}
[data-os-theme]{ --os-button-text-secondary:#fff !important;}
[data-os-theme]{ --os-button-text-secondary--disabled:#999 !important;}
[data-os-theme]{ --os-button-text-static-dark:#333 !important;}
[data-os-theme]{ --os-button-text-static-light:#fff !important;}
[data-os-theme]{ --os-camera-menu-fill--hover:#666 !important;}
[data-os-theme]{ --os-camera-menu-fill--idle:#33333359 !important;}

[data-os-theme]{ --os-collaborator-decorator:#3e94ff !important;}
[data-os-theme]{ --os-context-menu-background--hover:#0a4780 !important;}
[data-os-theme]{ --os-context-menu-background--idle:#333 !important;}

[data-os-theme]{ --os-context-menu-outline:#ccc !important;}


[data-os-theme]{ --os-context-menu-text:#fff !important;}
[data-os-theme]{ --os-document-card-background:#333 !important;}
[data-os-theme]{ --os-document-card-fill--idle:#555 !important;}
[data-os-theme]{ --os-document-card-fill--selected:#0a4780 !important;}
[data-os-theme]{ --os-document-card-header-text:#fff !important;}
[data-os-theme]{ --os-document-card-outline:#555 !important;}
[data-os-theme]{ --os-document-handle-divider:#a2b9df !important;}
[data-os-theme]{ --os-document-handle-fill:#333 !important;}
[data-os-theme]{ --os-document-handle-outline:#666 !important;}
[data-os-theme]{ --os-document-header-fill:#333 !important;}
[data-os-theme]{ --os-document-list-divider:#666 !important;}
[data-os-theme]{ --os-document-list-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-document-list-fill--idle:#333 !important;}
[data-os-theme]{ --os-document-list-fill--selected:#134e96 !important;}
[data-os-theme]{ --os-document-list-label-background:#666 !important;}
[data-os-theme]{ --os-document-list-status-background:#90cef1 !important;}
[data-os-theme]{ --os-document-list-text:#fff !important;}
[data-os-theme]{ --os-document-quick-actions-background:#eee !important;}
[data-os-theme]{ --os-drag-and-drop-message-fill--active:#1651b0 !important;}
[data-os-theme]{ --os-drag-and-drop-message-fill--disabled:#666 !important;}
[data-os-theme]{ --os-drag-and-drop-message-text:#fff !important;}
[data-os-theme]{ --os-drag-and-drop-outline--active:#3e94ff !important;}
[data-os-theme]{ --os-drag-and-drop-outline--disabled:#ccc !important;}
[data-os-theme]{ --os-drag-and-drop-overlay--active:#3e94ff19 !important;}
[data-os-theme]{ --os-drag-and-drop-overlay--disabled:#ffffff59 !important;}



[data-os-theme]{ --os-dropdown-menu-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-dropdown-menu-fill--idle:#333 !important;}
[data-os-theme]{ --os-dropdown-menu-fill--selected:#134e96 !important;}
[data-os-theme]{ --os-dropdown-menu-outline:#d7d7d7 !important;}

[data-os-theme]{ --os-dropdown-menu-text:#d7d7d7 !important;}
[data-os-theme]{ --os-dropdown-menu-text--selected:#fff !important;}


[data-os-theme]{ --os-effect-shadow-button-primary:#0000001f !important;}
[data-os-theme]{ --os-effect-shadow-button-secondary:#0000003f !important;}
[data-os-theme]{ --os-effect-shadow-drop-primary:#00000066 !important;}
[data-os-theme]{ --os-effect-shadow-drop-quaternary:#00000019 !important;}
[data-os-theme]{ --os-effect-shadow-drop-secondary:#00000099 !important;}
[data-os-theme]{ --os-effect-shadow-drop-tertiary:#00000066 !important;}
[data-os-theme]{ --os-feature-dialog-accept--disabled:#a2db7d !important;}
[data-os-theme]{ --os-feature-dialog-accept--hover:#74ce3a !important;}
[data-os-theme]{ --os-feature-dialog-accept--idle:#009400 !important;}
[data-os-theme]{ --os-feature-dialog-background:#333333f2 !important;}
[data-os-theme]{ --os-feature-dialog-cancel--hover:#666 !important;}
[data-os-theme]{ --os-feature-dialog-divider:#666 !important;}
[data-os-theme]{ --os-feature-dialog-edit--hover:#666 !important;}
[data-os-theme]{ --os-feature-dialog-footer-border:#666 !important;}
[data-os-theme]{ --os-feature-dialog-footer-fill:#555 !important;}

[data-os-theme]{ --os-feature-dialog-header-background:#333 !important;}


[data-os-theme]{ --os-feature-dialog-name--invalid:#ff6b6b !important;}
[data-os-theme]{ --os-feature-dialog-name--valid:#fff !important;}

[data-os-theme]{ --os-feature-dialog-text:#fff !important;}
[data-os-theme]{ --os-feature-dialog-textbox-fill:#2c2c2c !important;}
[data-os-theme]{ --os-feature-dialog-textbox-outline:#3e94ff !important;}
[data-os-theme]{ --os-feature-dialog-version-name-text:#999 !important;}
[data-os-theme]{ --os-featurescript-dropdown-fill--hover:#555 !important;}
[data-os-theme]{ --os-featurescript-dropdown-fill--idle:#333 !important;}
[data-os-theme]{ --os-featurescript-dropdown-fill--selected:#094174 !important;}
[data-os-theme]{ --os-featurescript-dropdown-input-text:#fff !important;}
[data-os-theme]{ --os-featurescript-dropdown-outline:#555 !important;}
[data-os-theme]{ --os-featurescript-dropdown-suggested-text--hover:#d7d7d7 !important;}
[data-os-theme]{ --os-featurescript-dropdown-suggested-text--idle:#ccc !important;}




[data-os-theme]{ --os-form-field-fill:#333 !important;}
[data-os-theme]{ --os-form-field-fill--disabled:#555 !important;}


[data-os-theme]{ --os-form-field-outline--disabled:#888 !important;}
[data-os-theme]{ --os-form-field-outline--error:#bd3039 !important;}
[data-os-theme]{ --os-form-field-outline--focused:#3e94ff !important;}
[data-os-theme]{ --os-form-field-outline--idle:#888 !important;}




[data-os-theme]{ --os-form-field-text:#fff !important;}
[data-os-theme]{ --os-form-field-text--disabled:#ccc !important;}
[data-os-theme]{ --os-help-fill--hover:#999 !important;}
[data-os-theme]{ --os-help-fill--idle:#ccc !important;}
[data-os-theme]{ --os-hint-border:#aaa !important;}
[data-os-theme]{ --os-hint-fill:#1c1c1c !important;}
[data-os-theme]{ --os-hint-text:#fff !important;}





[data-os-theme]{ --os-icon-button-fill--highlight:#6a4f06 !important;}
[data-os-theme]{ --os-icon-button-fill--hover:#666 !important;}
[data-os-theme]{ --os-icon-button-fill--hover-group:#666 !important;}
[data-os-theme]{ --os-icon-button-fill--hover-other:#1c1c1c !important;}
[data-os-theme]{ --os-icon-button-fill--selected:#555 !important;}






[data-os-theme]{ --os-icon-button-outline--highlight:#dba517 !important;}
[data-os-theme]{ --os-icon-button-outline--menu:#aaa !important;}

[data-os-theme]{ --os-icon-button-pill-fill--hover:#666 !important;}
[data-os-theme]{ --os-icon-button-pill-fill--idle:#555 !important;}
[data-os-theme]{ --os-icon-button-pill-fill--selected:#467bb6 !important;}
[data-os-theme]{ --os-icon-button-text:#fff !important;}


[data-os-theme]{ --os-icon-accent-bad:#683232 !important;}
[data-os-theme]{ --os-icon-accent-cancel:#ff6b6b !important;}
[data-os-theme]{ --os-icon-accent-cancel--static:#bd3039 !important;}
[data-os-theme]{ --os-icon-accent-error:#dd979b !important;}
[data-os-theme]{ --os-icon-accent-info-subtle--static:#769fcc !important;}
[data-os-theme]{ --os-icon-accent-octonary:#a64dff !important;}
[data-os-theme]{ --os-icon-accent-primary:#3e94ff !important;}
[data-os-theme]{ --os-icon-accent-primary-static:#1651b0 !important;}
[data-os-theme]{ --os-icon-accent-quaternary--static:#3e94ff !important;}
[data-os-theme]{ --os-icon-accent-quinary--static:#74ce3a !important;}
[data-os-theme]{ --os-icon-accent-secondary:#def1fb !important;}
[data-os-theme]{ --os-icon-accent-secondary--static:#90cef1 !important;}
[data-os-theme]{ --os-icon-accent-selected:#90cef1 !important;}
[data-os-theme]{ --os-icon-accent-senary--static:#bf6900 !important;}
[data-os-theme]{ --os-icon-accent-septenary:#def1fb !important;}
[data-os-theme]{ --os-icon-accent-success:#35bc35 !important;}
[data-os-theme]{ --os-icon-accent-success--static:#009400 !important;}
[data-os-theme]{ --os-icon-accent-tertiary:#fff !important;}
[data-os-theme]{ --os-icon-accent-warn--static:#fab601 !important;}
[data-os-theme]{ --os-icon-fill-color-primary--static:#d0dbe5 !important;}
[data-os-theme]{ --os-icon-fill-color-secondary:#094174 !important;}
[data-os-theme]{ --os-icon-fill-primary:#333 !important;}
[data-os-theme]{ --os-icon-fill-primary--static:#fff !important;}
[data-os-theme]{ --os-icon-fill-quaternary:#555 !important;}
[data-os-theme]{ --os-icon-fill-quaternary--static:#d7d7d7 !important;}
[data-os-theme]{ --os-icon-fill-quinary:#555 !important;}
[data-os-theme]{ --os-icon-fill-quinary--static:#eee !important;}
[data-os-theme]{ --os-icon-fill-secondary:#d7d7d7 !important;}
[data-os-theme]{ --os-icon-fill-secondary--static:#999 !important;}
[data-os-theme]{ --os-icon-fill-tertiary:#999 !important;}
[data-os-theme]{ --os-icon-fill-tertiary--static:#666 !important;}
[data-os-theme]{ --os-icon-outline-primary:#fff !important;}
[data-os-theme]{ --os-icon-outline-primary--static:#333 !important;}
[data-os-theme]{ --os-icon-outline-quaternary:#ccc !important;}
[data-os-theme]{ --os-icon-outline-quinary:#333 !important;}
[data-os-theme]{ --os-icon-outline-secondary:#bababa !important;}
[data-os-theme]{ --os-icon-outline-tertiary:#ccc !important;}
[data-os-theme]{ --os-icon-outline-tertiary--static:#888 !important;}
[data-os-theme]{ --os-left-panel-background:#2c2c2c !important;}
[data-os-theme]{ --os-left-panel-body-fill:#333 !important;}
[data-os-theme]{ --os-left-panel-comment-box-outline:#ccc !important;}
[data-os-theme]{ --os-left-panel-fill--hover:#666 !important;}
[data-os-theme]{ --os-left-panel-link:#b2ddf6 !important;}
[data-os-theme]{ --os-left-panel-list-border:#3e94ff !important;}
[data-os-theme]{ --os-left-panel-list-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-left-panel-list-fill--selected:#134e96 !important;}
[data-os-theme]{ --os-left-panel-outline:#666 !important;}
[data-os-theme]{ --os-left-panel-selected-indicator:#90cef1 !important;}
[data-os-theme]{ --os-left-panel-text:#fff !important;}
[data-os-theme]{ --os-left-panel-thumbnail-background:#2c2c2c !important;}
[data-os-theme]{ --os-left-panel-type-text--selected:#d7d7d7 !important;}
[data-os-theme]{ --os-left-panel-type-text--unselected:#ccc !important;}




[data-os-theme]{ --os-modal-background:#333 !important;}

[data-os-theme]{ --os-modal-border:#666 !important;}




[data-os-theme]{ --os-modal-button-fill--hover:#666 !important;}
[data-os-theme]{ --os-modal-button-fill--idle:#333 !important;}
[data-os-theme]{ --os-modal-button-fill--selected:#092046 !important;}

[data-os-theme]{ --os-modal-button-outline--idle:#555 !important;}
[data-os-theme]{ --os-modal-button-outline--selected:#888 !important;}



[data-os-theme]{ --os-modal-location-picker-divider:#555 !important;}
[data-os-theme]{ --os-modal-location-picker-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-modal-location-picker-fill--idle:#333 !important;}
[data-os-theme]{ --os-modal-location-picker-fill--selected:#134e96 !important;}


[data-os-theme]{ --os-modal-location-picker-outline:#aaa !important;}
[data-os-theme]{ --os-modal-location-picker-text--disabled:#ccc !important;}




[data-os-theme]{ --os-modal-text:#fff !important;}
[data-os-theme]{ --os-mode-bar-fill-primary:#4b5761 !important;}
[data-os-theme]{ --os-mode-bar-fill-secondary:#825f00 !important;}
[data-os-theme]{ --os-mode-bar-fill-tertiary:#0a4780 !important;}




[data-os-theme]{ --os-mode-bar-text:#fff !important;}
[data-os-theme]{ --os-navbar-background:#1c1c1c !important;}
[data-os-theme]{ --os-navbar-item--hover:#555 !important;}
[data-os-theme]{ --os-navbar-subtitle-text:#999 !important;}
[data-os-theme]{ --os-navbar-textbox-fill:#2c2c2c !important;}
[data-os-theme]{ --os-panel-background--active:#333 !important;}
[data-os-theme]{ --os-panel-background--inactive:#1c1c1c !important;}
[data-os-theme]{ --os-panel-footer-background:#666 !important;}
[data-os-theme]{ --os-panel-outline:#555 !important;}






[data-os-theme]{ --os-parameter-calculated-value-fill--selected:#092046 !important;}

[data-os-theme]{ --os-parameter-calculated-value-text:#ccc !important;}
[data-os-theme]{ --os-parameter-calculated-value-underline:#666 !important;}
[data-os-theme]{ --os-parameter-checkbox-border--focused:#3e94ff !important;}
[data-os-theme]{ --os-parameter-checkbox-border--hover:#fff !important;}
[data-os-theme]{ --os-parameter-checkbox-border--idle:#ccc !important;}




[data-os-theme]{ --os-parameter-checkbox-check:#fff !important;}
[data-os-theme]{ --os-parameter-checkbox-fill--checked:#3e94ff !important;}
[data-os-theme]{ --os-parameter-checkbox-fill--disabled:#999 !important;}
[data-os-theme]{ --os-parameter-checkbox-fill--unchecked:#333 !important;}
[data-os-theme]{ --os-parameter-checkbox-text--hover:#fff !important;}
[data-os-theme]{ --os-parameter-checkbox-text--idle:#ccc !important;}

[data-os-theme]{ --os-parameter-dropdown-border:#d7d7d7 !important;}
[data-os-theme]{ --os-parameter-dropdown-button--hover:#666 !important;}
[data-os-theme]{ --os-parameter-dropdown-fill--disabled:#555 !important;}
[data-os-theme]{ --os-parameter-dropdown-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-parameter-dropdown-fill-selected:#3e94ff !important;}
[data-os-theme]{ --os-parameter-dropdown-text--default:#ccc !important;}
[data-os-theme]{ --os-parameter-dropdown-text--disabled:#ccc !important;}
[data-os-theme]{ --os-parameter-dropdown-text--selected:#fff !important;}
[data-os-theme]{ --os-parameter-dropdown-underline--idle:#d7d7d7 !important;}
[data-os-theme]{ --os-parameter-enum-border--idle:#d7d7d7 !important;}

[data-os-theme]{ --os-parameter-enum-text--idle:#fff !important;}
[data-os-theme]{ --os-parameter-enum-text--selected:#90cef1 !important;}
[data-os-theme]{ --os-parameter-fill--highlight:#6a4f06 !important;}
[data-os-theme]{ --os-parameter-fill--hover:#666 !important;}
[data-os-theme]{ --os-parameter-form-fill--error:#683232 !important;}
[data-os-theme]{ --os-parameter-form-input-text:#fff !important;}
[data-os-theme]{ --os-parameter-form-text--hover:#fff !important;}
[data-os-theme]{ --os-parameter-form-text--idle:#ccc !important;}
[data-os-theme]{ --os-parameter-form-underline--error:#bd3039 !important;}
[data-os-theme]{ --os-parameter-form-underline--idle:#d7d7d7 !important;}
[data-os-theme]{ --os-parameter-outline--configured:#dba517 !important;}









[data-os-theme]{ --os-parameter-qlv-border:#666 !important;}





[data-os-theme]{ --os-parameter-qlv-fill--error:#683232 !important;}
[data-os-theme]{ --os-parameter-qlv-fill--idle:#333 !important;}
[data-os-theme]{ --os-parameter-qlv-fill--selected:#142434 !important;}
[data-os-theme]{ --os-parameter-qlv-fill--selected-other:#092046 !important;}





[data-os-theme]{ --os-parameter-qlv-outline--error:#bd3039 !important;}
[data-os-theme]{ --os-parameter-qlv-outline--idle:#666 !important;}
[data-os-theme]{ --os-parameter-qlv-outline--selected:#3e94ff !important;}











[data-os-theme]{ --os-parameter-qlv-text--error:#ccc !important;}
[data-os-theme]{ --os-parameter-qlv-text--idle:#ccc !important;}
[data-os-theme]{ --os-parameter-qlv-text--missing:#ff6b6b !important;}
[data-os-theme]{ --os-parameter-qlv-text--selected:#d7d7d7 !important;}

[data-os-theme]{ --os-parameter-section-fill:#666 !important;}

[data-os-theme]{ --os-parameter-section-text:#fff !important;}
[data-os-theme]{ --os-parameter-slider-bar--active:#999 !important;}
[data-os-theme]{ --os-parameter-slider-bar--disabled:#666 !important;}
[data-os-theme]{ --os-parameter-slider-control-fill--disabled:#333 !important;}
[data-os-theme]{ --os-parameter-slider-control-fill--dragging:#555 !important;}
[data-os-theme]{ --os-parameter-slider-control-fill--idle:#333 !important;}
[data-os-theme]{ --os-parameter-slider-control-outline--active:#ccc !important;}
[data-os-theme]{ --os-parameter-slider-control-outline--disabled:#666 !important;}
[data-os-theme]{ --os-parameter-text--highlight:#fff !important;}
[data-os-theme]{ --os-parameter-underline--active:#3e94ff !important;}

[data-os-theme]{ --os-radio-button-label-text:#fff !important;}
[data-os-theme]{ --os-radio-button-subtitle-text:#999 !important;}
[data-os-theme]{ --os-radio-button-toggle--active:#3e94ff !important;}
[data-os-theme]{ --os-radio-button-toggle--inactive:#fff !important;}
[data-os-theme]{ --os-regeneration-flyout-fill:#6a4f06 !important;}
[data-os-theme]{ --os-regeneration-flyout-text:#fff !important;}
[data-os-theme]{ --os-search-bar-button-fill:#555 !important;}
[data-os-theme]{ --os-search-bar-fill:#333 !important;}
[data-os-theme]{ --os-search-bar-filter-outline--focused:#3e94ff !important;}
[data-os-theme]{ --os-search-bar-filter-outline--idle:#ccc !important;}
[data-os-theme]{ --os-search-bar-outline--focused:#3e94ff !important;}
[data-os-theme]{ --os-search-bar-outline--idle:#888 !important;}
[data-os-theme]{ --os-search-bar-text--active:#fff !important;}
[data-os-theme]{ --os-search-bar-text--inactive:#ccc !important;}


[data-os-theme]{ --os-selection-pill-fill--disabled:#555 !important;}
[data-os-theme]{ --os-selection-pill-fill--idle:#1c1c1c !important;}
[data-os-theme]{ --os-selection-pill-fill--selected:#1651b0 !important;}

[data-os-theme]{ --os-selection-pill-outline--disabled:#888 !important;}
[data-os-theme]{ --os-selection-pill-outline--idle:#666 !important;}



[data-os-theme]{ --os-selection-pill-text:#fff !important;}
[data-os-theme]{ --os-selection-pill-text--selected:#fff !important;}

[data-os-theme]{ --os-shortcut-menu-fill:#33333359 !important;}
[data-os-theme]{ --os-shortcut-menu-outline:#555 !important;}
[data-os-theme]{ --os-sidebar-border:#555 !important;}
[data-os-theme]{ --os-sidebar-divider:#555 !important;}
[data-os-theme]{ --os-sidebar-hover:#0a4780 !important;}
[data-os-theme]{ --os-sidebar-selected-indicator:#3e94ff !important;}
[data-os-theme]{ --os-sidebar-text--idle:#fff !important;}
[data-os-theme]{ --os-sidebar-text--selected:#90cef1 !important;}
[data-os-theme]{ --os-spinner-background:#333333bf !important;}
[data-os-theme]{ --os-spinner-button-ring:#ccc !important;}
[data-os-theme]{ --os-spinner-indicator:#3e94ff !important;}
[data-os-theme]{ --os-spinner-ring:#666 !important;}
[data-os-theme]{ --os-spinner-text:#fff !important;}
[data-os-theme]{ --os-status-pill-dropdown-fill:#333 !important;}
[data-os-theme]{ --os-status-pill-dropdown-hover:#0a4780 !important;}
[data-os-theme]{ --os-status-pill-dropdown-outline:#d7d7d7 !important;}
[data-os-theme]{ --os-status-pill-fill-archived:#333 !important;}
[data-os-theme]{ --os-status-pill-fill-closed:#666 !important;}
[data-os-theme]{ --os-status-pill-fill-draft:#d7d7d7 !important;}
[data-os-theme]{ --os-status-pill-fill-graded:#d1c0dd !important;}
[data-os-theme]{ --os-status-pill-fill-in-progress:#90cef1 !important;}
[data-os-theme]{ --os-status-pill-fill-needs-revision:#e9dbb2 !important;}
[data-os-theme]{ --os-status-pill-fill-not-started:#fab601 !important;}
[data-os-theme]{ --os-status-pill-fill-submitted:#028502 !important;}
[data-os-theme]{ --os-status-pill-fill-under-review:#d1c0dd !important;}
[data-os-theme]{ --os-status-pill-pill-outline:#fff !important;}
[data-os-theme]{ --os-status-pill-text-primary:#fff !important;}
[data-os-theme]{ --os-status-pill-text-primary--static:#333 !important;}
[data-os-theme]{ --os-status-pill-text-secondary:#fff !important;}
[data-os-theme]{ --os-tab-bar-background:#555 !important;}


[data-os-theme]{ --os-tab-bar-button--hover:#666 !important;}
[data-os-theme]{ --os-tab-bar-selected-indicator:#3e94ff !important;}
[data-os-theme]{ --os-tab-bar-tab--active:#333 !important;}
[data-os-theme]{ --os-tab-bar-tab--inactive:#1c1c1c !important;}

[data-os-theme]{ --os-tab-bar-text--active:#fff !important;}
[data-os-theme]{ --os-tab-bar-text--inactive:#ccc !important;}
[data-os-theme]{ --os-tab-bar-textbox-fill:#2c2c2c !important;}
[data-os-theme]{ --os-tab-bar-textbox-outline:#3e94ff !important;}


[data-os-theme]{ --os-table-border--focused:#3e94ff !important;}
[data-os-theme]{ --os-table-border--idle:#888 !important;}
[data-os-theme]{ --os-table-cell-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-table-cell-fill--idle:#1c1c1c !important;}
[data-os-theme]{ --os-table-cell-fill--read-only-hover:#666 !important;}
[data-os-theme]{ --os-table-cell-fill--read-only-idle:#333 !important;}
[data-os-theme]{ --os-table-cell-indicator--hover:#666 !important;}
[data-os-theme]{ --os-table-cell-indicator--selected-row:#555 !important;}
[data-os-theme]{ --os-table-header-fill--hover:#333 !important;}
[data-os-theme]{ --os-table-header-fill--idle:#555 !important;}
[data-os-theme]{ --os-table-text:#fff !important;}
[data-os-theme]{ --os-table-text--activated:#90cef1 !important;}


[data-os-theme]{ --os-textbox-outline--edit:#3e94ff !important;}
[data-os-theme]{ --os-textbox-outline--error:#bd3039 !important;}
[data-os-theme]{ --os-textbox-outline--idle:#555 !important;}



[data-os-theme]{ --os-textbox-text--active:#fff !important;}
[data-os-theme]{ --os-textbox-text--inactive:#ccc !important;}
[data-os-theme]{ --os-toggle-body-fill--active:#3e94ff !important;}
[data-os-theme]{ --os-toggle-body-fill--disabled-active:#092046 !important;}
[data-os-theme]{ --os-toggle-body-fill--disabled-inactive:#2c2c2c !important;}
[data-os-theme]{ --os-toggle-body-fill--inactive:#555 !important;}
[data-os-theme]{ --os-toggle-handle-fill:#ccc !important;}
[data-os-theme]{ --os-toggle-outline:#999 !important;}
[data-os-theme]{ --os-toggle-outline--disabled:#666 !important;}
[data-os-theme]{ --os-toggle-text:#fff !important;}

[data-os-theme]{ --os-tool-search-button-fill--hover:#666 !important;}
[data-os-theme]{ --os-tool-search-button-fill--idle:#555 !important;}
[data-os-theme]{ --os-tool-search-container-fill:#2c2c2c !important;}
[data-os-theme]{ --os-tool-search-container-text:#fff !important;}
[data-os-theme]{ --os-tool-search-divider:#ccc !important;}
[data-os-theme]{ --os-tool-search-footer-fill:#555 !important;}
[data-os-theme]{ --os-tool-search-footer-text:#ccc !important;}


[data-os-theme]{ --os-tool-search-remove-button-fill--hover:#999 !important;}
[data-os-theme]{ --os-tool-search-remove-button-fill--idle:#ccc !important;}
[data-os-theme]{ --os-tool-search-result-fill--hover:#0a4780 !important;}
[data-os-theme]{ --os-tool-search-result-fill--idle:#2c2c2c !important;}
[data-os-theme]{ --os-tool-search-result-fill--selected:#134e96 !important;}
[data-os-theme]{ --os-tool-search-searchbar-fill:#333 !important;}
[data-os-theme]{ --os-tool-search-shortcut-fill--hover:#aaa !important;}
[data-os-theme]{ --os-tool-search-shortcut-fill--idle:#aaa !important;}
[data-os-theme]{ --os-tool-search-shortcut-fill--selected:#d7d7d7 !important;}
[data-os-theme]{ --os-tool-search-shortcut-outline:#aaa !important;}


[data-os-theme]{ --os-tool-search-suggestion-fill:#333 !important;}
[data-os-theme]{ --os-tool-search-suggestion-outline:#d7d7d7 !important;}
[data-os-theme]{ --os-toolbar-background:#333 !important;}


[data-os-theme]{ --os-toolbar-divider:#666 !important;}
[data-os-theme]{ --os-toolbar-menu-outline:#d7d7d7 !important;}
[data-os-theme]{ --os-toolbar-text:#fff !important;}
[data-os-theme]{ --os-tooltip-expanded-fill:#333 !important;}
[data-os-theme]{ --os-tooltip-fill:#4b5761 !important;}





[data-os-theme]{ --os-tooltip-text:#fff !important;}
[data-os-theme]{ --os-tree-background:#333 !important;}
[data-os-theme]{ --os-tree-item-background--hover:#0a4780 !important;}
[data-os-theme]{ --os-tree-item-background--inferred:#092046 !important;}
[data-os-theme]{ --os-tree-item-background--selected:#134e96 !important;}

[data-os-theme]{ --os-tree-item-text:#fff !important;}
[data-os-theme]{ --os-tree-item-text--error:#ff6b6b !important;}
[data-os-theme]{ --os-tree-item-text--inactive:#999 !important;}
[data-os-theme]{ --os-tree-item-underline:#90cef1 !important;}
[data-os-theme]{ --os-tree-outline:#666 !important;}
[data-os-theme]{ --os-tree-rollback-bar:#aaa !important;}
[data-os-theme]{ --os-tree-title:#fff !important;}
[data-os-theme]{ --os-version-graph-node-background--hover:#0a4780 !important;}
[data-os-theme]{ --os-version-graph-node-background--idle:#2c2c2c !important;}
[data-os-theme]{ --os-version-graph-node-background--referenced:#4b5761 !important;}
[data-os-theme]{ --os-version-graph-node-background--selected:#092046 !important;}
[data-os-theme]{ --os-vertical-tab-background:#2c2c2c !important;}
[data-os-theme]{ --os-vertical-tab-fill--hover:#666 !important;}
[data-os-theme]{ --os-vertical-tab-outline:#666 !important;}
[data-os-theme]{ --os-vertical-tab-selected-indicator:#3e94ff !important;}
[data-os-theme]{ --os-view-only-mode-bar-border:#555 !important;}
[data-os-theme]{ --os-view-only-mode-bar-fill:#333 !important;}





[data-os-theme]{ --os-view-only-mode-bar-text:#fff !important;}
[data-os-theme]{ --os-demo-card-accordion-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-demo-card-accordion-fill--idle:#555 !important;}
[data-os-theme]{ --os-demo-card-arrow-fill--hover:#467bb6 !important;}
[data-os-theme]{ --os-demo-card-arrow-fill--idle:#094174 !important;}
[data-os-theme]{ --os-demo-card-divider--hover:#999 !important;}
[data-os-theme]{ --os-demo-card-divider--idle:#aaa !important;}
[data-os-theme]{ --os-demo-card-dropdown-background:#333 !important;}
[data-os-theme]{ --os-demo-card-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-demo-card-fill--idle:#333 !important;}
[data-os-theme]{ --os-demo-card-subtext:#ccc !important;}
[data-os-theme]{ --os-demo-card-text:#fff !important;}
[data-os-theme]{ --os-explore-banner:#094174 !important;}
[data-os-theme]{ --os-model-card-divider--hover:#999 !important;}
[data-os-theme]{ --os-model-card-divider--idle:#aaa !important;}
[data-os-theme]{ --os-model-card-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-model-card-fill--idle:#333 !important;}
[data-os-theme]{ --os-model-card-fill-info--idle:#555 !important;}
[data-os-theme]{ --os-model-card-label-fill--hover:#333 !important;}
[data-os-theme]{ --os-model-card-label-fill--idle:#092046 !important;}
[data-os-theme]{ --os-model-card-text:#fff !important;}
[data-os-theme]{ --os-quickstart-divider--hover:#999 !important;}
[data-os-theme]{ --os-quickstart-divider--idle:#aaa !important;}
[data-os-theme]{ --os-quickstart-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-quickstart-fill--idle:#333 !important;}
[data-os-theme]{ --os-quickstart-instruction-fill--idle:#555 !important;}
[data-os-theme]{ --os-quickstart-progress-fill:#90cef1 !important;}
[data-os-theme]{ --os-quickstart-progress-outline:#90cef1 !important;}
[data-os-theme]{ --os-quickstart-text:#fff !important;}
[data-os-theme]{ --os-quickstart-timestamp-text:#ccc !important;}
[data-os-theme]{ --os-resource-card-divider--hover:#999 !important;}
[data-os-theme]{ --os-resource-card-divider--idle:#aaa !important;}
[data-os-theme]{ --os-resource-card-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-resource-card-fill--idle:#333 !important;}
[data-os-theme]{ --os-resource-card-text:#fff !important;}
[data-os-theme]{ --os-welcome-mat-fill--hover:#4b5761 !important;}
[data-os-theme]{ --os-welcome-mat-fill--idle:#333 !important;}
[data-os-theme]{ --os-welcome-mat-header-text:#fff !important;}
[data-os-theme]{ --os-welcome-mat-image-background:#142434 !important;}
[data-os-theme]{ --os-welcome-mat-text:#fff !important;}



[data-os-theme]{ --os-axis-x-color:#cd0000 !important;}
[data-os-theme]{ --os-axis-y-color:#009400 !important;}
[data-os-theme]{ --os-axis-z-color:#0000d0 !important;}
[data-os-theme]{ --os-box-select-color:#1651b0 !important;}
[data-os-theme]{ --os-connectivity-analysis-cannot-compute-color:#333 !important;}
[data-os-theme]{ --os-connectivity-analysis-cannot-compute-contrast-color:#ccc !important;}
[data-os-theme]{ --os-connectivity-analysis-g0-color:#fcda7f !important;}
[data-os-theme]{ --os-connectivity-analysis-g0-contrast-color:#987107 !important;}
[data-os-theme]{ --os-connectivity-analysis-g1-color:#028502 !important;}
[data-os-theme]{ --os-connectivity-analysis-g1-contrast-color:#a2db7d !important;}
[data-os-theme]{ --os-connectivity-analysis-g2-color:#440154 !important;}
[data-os-theme]{ --os-connectivity-analysis-g2-contrast-color:#b689be !important;}
[data-os-theme]{ --os-connectivity-analysis-g3-color:#467bb6 !important;}
[data-os-theme]{ --os-connectivity-analysis-g3-contrast-color:#d0dbe5 !important;}
[data-os-theme]{ --os-connectivity-analysis-no-connection-color:#932229 !important;}
[data-os-theme]{ --os-constraint-bad-color:#d66e74 !important;}
[data-os-theme]{ --os-constraint-bad-color--prehilite:#aa252d !important;}
[data-os-theme]{ --os-constraint-bad-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-constraint-bad-external-color:#d66e74 !important;}
[data-os-theme]{ --os-constraint-bad-external-color--prehilite:#aa252d !important;}
[data-os-theme]{ --os-constraint-bad-external-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-constraint-indicator-leader-color:#9aa5af !important;}
[data-os-theme]{ --os-constraint-ok-color:#fff !important;}
[data-os-theme]{ --os-constraint-ok-color--prehilite:#fcda7f !important;}
[data-os-theme]{ --os-constraint-ok-color--selected:#fab601 !important;}
[data-os-theme]{ --os-constraint-ok-external-color:#def1fb !important;}
[data-os-theme]{ --os-constraint-ok-external-color--prehilite:#b2ddf6 !important;}
[data-os-theme]{ --os-constraint-ok-external-color--selected:#90cef1 !important;}
[data-os-theme]{ --os-construction-plane-ambient-color:#cedbe5 !important;}
[data-os-theme]{ --os-construction-plane-outline-color:#1d60aa59 !important;}
[data-os-theme]{ --os-construction-plane-text-color:#1651b0 !important;}
[data-os-theme]{ --os-curvature-circle-radius-color:#b275decc !important;}
[data-os-theme]{ --os-curvature-control-point-grid-color:#8000ff !important;}
[data-os-theme]{ --os-curvature-control-point-grid-u-color:#bd3039 !important;}
[data-os-theme]{ --os-curvature-control-point-grid-v-color:#3e94ff !important;}
[data-os-theme]{ --os-curvature-control-point-grid-vertices-color:#8000ff !important;}
[data-os-theme]{ --os-curvature-deviation-max-color:#bd3039 !important;}
[data-os-theme]{ --os-curvature-deviation-min-color:#3e94ff !important;}
[data-os-theme]{ --os-curvature-inflection-point-color:#000 !important;}
[data-os-theme]{ --os-curvature-knot-points-color:#000 !important;}
[data-os-theme]{ --os-curvature-roof-color:#b275decc !important;}
[data-os-theme]{ --os-curvature-tooth-color:#70a65cb2 !important;}
[data-os-theme]{ --os-curvature-u-knot-lines-color:#0000d0b2 !important;}
[data-os-theme]{ --os-curvature-u-roof-color:#ff005acc !important;}
[data-os-theme]{ --os-curvature-u-tooth-color:#ff005acc !important;}
[data-os-theme]{ --os-curvature-v-knot-lines-color:#ff005acc !important;}
[data-os-theme]{ --os-curvature-v-roof-color:#0000d0b2 !important;}
[data-os-theme]{ --os-curvature-v-tooth-color:#0000d0b2 !important;}
[data-os-theme]{ --os-dihedral-low-threshold-color:#440154cc !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color:#dd979b !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color--hovered:#aa252d !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color:#def1fb !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color--hovered:#b2ddf6 !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color--selected:#90cef1 !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-border-color:#90cef1 !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-color--hovered:#fcda7f !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-color--selected:#fab601 !important;}
[data-os-theme]{ --os-dimension-driven-hovered-line-arrow-color:#666 !important;}
[data-os-theme]{ --os-dimension-driven-line-point-color:#666 !important;}
[data-os-theme]{ --os-dimension-driven-value-hovered-background-color:#bf9460 !important;}
[data-os-theme]{ --os-dimension-driving-hovered-line-arrow-color:#987107 !important;}
[data-os-theme]{ --os-dimension-driving-value-hovered-background-color:#bf9460 !important;}
[data-os-theme]{ --os-dimension-inactive-occluded-color:#666 !important;}
[data-os-theme]{ --os-dimension-line-arrow-color:#000 !important;}
[data-os-theme]{ --os-dimension-selected-line-arrow-color:#6a4f06 !important;}
[data-os-theme]{ --os-dimension-value-selected-background-color:#bf6900 !important;}
[data-os-theme]{ --os-dimension-value-text-color:#000 !important;}
[data-os-theme]{ --os-draft-analysis-against-direction-color:#3e94ff !important;}
[data-os-theme]{ --os-draft-analysis-undercut-color:#bd3039 !important;}
[data-os-theme]{ --os-explode-line-color:#000 !important;}
[data-os-theme]{ --os-legend-background-color:#ffffffbf !important;}
[data-os-theme]{ --os-legend-tick-min-max-color:#000 !important;}
[data-os-theme]{ --os-legend-tick-min-max-outline-color:#d7d7d7 !important;}
[data-os-theme]{ --os-legend-tick-scale-color:#000 !important;}
[data-os-theme]{ --os-legend-tick-text-color:#000 !important;}
[data-os-theme]{ --os-legend-tick-text-color--clickable:#1651b0 !important;}
[data-os-theme]{ --os-manipulator-displacement-color:#1651b0 !important;}
[data-os-theme]{ --os-manipulator-line-color:#fff !important;}
[data-os-theme]{ --os-manipulator-line-color--disabled:#000 !important;}
[data-os-theme]{ --os-manipulator-line-color--drag:#134e96 !important;}
[data-os-theme]{ --os-manipulator-line-color--hover:#a2b9df !important;}
[data-os-theme]{ --os-manipulator-outline-color:#606a72 !important;}
[data-os-theme]{ --os-manipulator-outline-color--disabled:#ffffff00 !important;}
[data-os-theme]{ --os-manipulator-outline-color--drag:#a2b9df !important;}
[data-os-theme]{ --os-manipulator-outline-color--hover:#134e96 !important;}
[data-os-theme]{ --os-mate-connector-coordinate-system-offset-axis-color:#000 !important;}
[data-os-theme]{ --os-mate-connector-fill-color:#ffffffcc !important;}
[data-os-theme]{ --os-mate-connector-stroke-color:#002847 !important;}
[data-os-theme]{ --os-origin-color:#000 !important;}
[data-os-theme]{ --os-point-body-color:#000 !important;}
[data-os-theme]{ --os-project-measurement-angle-color:#00007f !important;}
[data-os-theme]{ --os-project-measurement-distance-color:#000 !important;}
[data-os-theme]{ --os-resize-manipulator-outer-color:#1b5faa7f !important;}
[data-os-theme]{ --os-resize-manipulator-outer-highlight:#1b5faae5 !important;}
[data-os-theme]{ --os-simulation-line-axis-color:#000 !important;}
[data-os-theme]{ --os-simulation-load-leader-line-color:#000 !important;}
[data-os-theme]{ --os-sketch-plane-line-color:#90cef1 !important;}
[data-os-theme]{ --os-sketch-plane-text-color:#90cef1 !important;}
[data-os-theme]{ --os-sketch-drag-trim-path-color:#555 !important;}
[data-os-theme]{ --os-sketch-face-color:#9aa5af33 !important;}
[data-os-theme]{ --os-sketch-face-color-show-through-color:#9aa5af19 !important;}
[data-os-theme]{ --os-sketch-inactive-color:#999 !important;}
[data-os-theme]{ --os-sketch-overconstrained-line-point-color:#cd0000 !important;}
[data-os-theme]{ --os-sketch-overconstrained-show-through-line-point-color:#dd979b !important;}
[data-os-theme]{ --os-sketch-underconstrained-line-point-color:#0000d0 !important;}
[data-os-theme]{ --os-sketch-underconstrained-show-through-line-point-color:#a2b9df !important;}

[data-os-theme]{ --os-unshaded-body-line-color:#000 !important;}
[data-os-theme]{ --os-view-cube-arrow-color:#cedbe599 !important;}
[data-os-theme]{ --os-view-cube-back-color:#cedbe599 !important;}
[data-os-theme]{ --os-view-cube-face-highlight:#90cef199 !important;}
[data-os-theme]{ --os-view-cube-front-color:#fff !important;}
[data-os-theme]{ --os-view-cube-text-color--hover:#000 !important;}
[data-os-theme]{ --os-view-cube-text-color--idle:#000 !important;}


[data-os-theme]{ --os-axis-x-color:#dd979b !important;}
[data-os-theme]{ --os-axis-y-color:#a2db7d !important;}
[data-os-theme]{ --os-axis-z-color:#90cef1 !important;}
[data-os-theme]{ --os-box-select-color:#769fcc !important;}
[data-os-theme]{ --os-connectivity-analysis-cannot-compute-color:#666 !important;}
[data-os-theme]{ --os-connectivity-analysis-cannot-compute-contrast-color:#ccc !important;}
[data-os-theme]{ --os-connectivity-analysis-g0-color:#fff8e6 !important;}
[data-os-theme]{ --os-connectivity-analysis-g0-contrast-color:#987107 !important;}
[data-os-theme]{ --os-connectivity-analysis-g1-color:#028502 !important;}
[data-os-theme]{ --os-connectivity-analysis-g1-contrast-color:#a2db7d !important;}
[data-os-theme]{ --os-connectivity-analysis-g2-color:#440154 !important;}
[data-os-theme]{ --os-connectivity-analysis-g2-contrast-color:#b689be !important;}
[data-os-theme]{ --os-connectivity-analysis-g3-color:#467bb6 !important;}
[data-os-theme]{ --os-connectivity-analysis-g3-contrast-color:#d0dbe5 !important;}
[data-os-theme]{ --os-connectivity-analysis-no-connection-color:#bd3039 !important;}
[data-os-theme]{ --os-constraint-bad-color:#d66e74 !important;}
[data-os-theme]{ --os-constraint-bad-color--prehilite:#aa252d !important;}
[data-os-theme]{ --os-constraint-bad-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-constraint-bad-external-color:#d66e74 !important;}
[data-os-theme]{ --os-constraint-bad-external-color--prehilite:#aa252d !important;}
[data-os-theme]{ --os-constraint-bad-external-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-constraint-indicator-leader-color:#ccc !important;}
[data-os-theme]{ --os-constraint-ok-color:#555 !important;}
[data-os-theme]{ --os-constraint-ok-color--prehilite:#fcda7f !important;}
[data-os-theme]{ --os-constraint-ok-color--selected:#fab601 !important;}
[data-os-theme]{ --os-constraint-ok-external-color:#def1fb !important;}
[data-os-theme]{ --os-constraint-ok-external-color--prehilite:#b2ddf6 !important;}
[data-os-theme]{ --os-constraint-ok-external-color--selected:#90cef1 !important;}
[data-os-theme]{ --os-construction-plane-ambient-color:#666 !important;}
[data-os-theme]{ --os-construction-plane-outline-color:#ffffff59 !important;}
[data-os-theme]{ --os-construction-plane-text-color:#fff !important;}
[data-os-theme]{ --os-curvature-circle-radius-color:#d1acebcc !important;}
[data-os-theme]{ --os-curvature-control-point-grid-color:#a64dff !important;}
[data-os-theme]{ --os-curvature-control-point-grid-u-color:#ff6b6b !important;}
[data-os-theme]{ --os-curvature-control-point-grid-v-color:#3e94ff !important;}
[data-os-theme]{ --os-curvature-control-point-grid-vertices-color:#a64dff !important;}
[data-os-theme]{ --os-curvature-deviation-max-color:#ff6b6b !important;}
[data-os-theme]{ --os-curvature-deviation-min-color:#3e94ff !important;}
[data-os-theme]{ --os-curvature-inflection-point-color:#fff !important;}
[data-os-theme]{ --os-curvature-knot-points-color:#fff !important;}
[data-os-theme]{ --os-curvature-roof-color:#d1acebcc !important;}
[data-os-theme]{ --os-curvature-tooth-color:#a2db7db2 !important;}
[data-os-theme]{ --os-curvature-u-knot-lines-color:#3e94ffe5 !important;}
[data-os-theme]{ --os-curvature-u-roof-color:#ff4d8ccc !important;}
[data-os-theme]{ --os-curvature-u-tooth-color:#ff4d8ccc !important;}
[data-os-theme]{ --os-curvature-v-knot-lines-color:#ff4d8ccc !important;}
[data-os-theme]{ --os-curvature-v-roof-color:#3e94ffe5 !important;}
[data-os-theme]{ --os-curvature-v-tooth-color:#3e94ffe5 !important;}
[data-os-theme]{ --os-dihedral-low-threshold-color:#b499bbcc !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color:#dd979b !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color--hovered:#aa252d !important;}
[data-os-theme]{ --os-dimension-expression-bad-background-color--selected:#bd3039 !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color:#def1fb !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color--hovered:#b2ddf6 !important;}
[data-os-theme]{ --os-dimension-expression-with-variables-background-color--selected:#90cef1 !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-border-color:#90cef1 !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-color--hovered:#fcda7f !important;}
[data-os-theme]{ --os-dimension-expression-without-variables-background-color--selected:#fab601 !important;}
[data-os-theme]{ --os-dimension-driven-hovered-line-arrow-color:#ccc !important;}
[data-os-theme]{ --os-dimension-driven-line-point-color:#ccc !important;}
[data-os-theme]{ --os-dimension-driven-value-hovered-background-color:#bf9460 !important;}
[data-os-theme]{ --os-dimension-driving-hovered-line-arrow-color:#fcda7f !important;}
[data-os-theme]{ --os-dimension-driving-value-hovered-background-color:#bf9460 !important;}
[data-os-theme]{ --os-dimension-inactive-occluded-color:#bababa !important;}
[data-os-theme]{ --os-dimension-line-arrow-color:#fff !important;}
[data-os-theme]{ --os-dimension-selected-line-arrow-color:#dba517 !important;}
[data-os-theme]{ --os-dimension-value-selected-background-color:#bf6900 !important;}
[data-os-theme]{ --os-dimension-value-text-color:#fff !important;}
[data-os-theme]{ --os-draft-analysis-against-direction-color:#3e94ff !important;}
[data-os-theme]{ --os-draft-analysis-undercut-color:#ff6b6b !important;}
[data-os-theme]{ --os-explode-line-color:#fff !important;}
[data-os-theme]{ --os-legend-background-color:#333333bf !important;}
[data-os-theme]{ --os-legend-tick-min-max-color:#fff !important;}
[data-os-theme]{ --os-legend-tick-min-max-outline-color:#555 !important;}
[data-os-theme]{ --os-legend-tick-scale-color:#fff !important;}
[data-os-theme]{ --os-legend-tick-text-color:#fff !important;}
[data-os-theme]{ --os-legend-tick-text-color--clickable:#90cef1 !important;}
[data-os-theme]{ --os-manipulator-displacement-color:#a2b9df !important;}
[data-os-theme]{ --os-manipulator-line-color:#fff !important;}
[data-os-theme]{ --os-manipulator-line-color--disabled:#fff !important;}
[data-os-theme]{ --os-manipulator-line-color--drag:#a2b9df !important;}
[data-os-theme]{ --os-manipulator-line-color--hover:#134e96 !important;}
[data-os-theme]{ --os-manipulator-outline-color:#606a72 !important;}
[data-os-theme]{ --os-manipulator-outline-color--disabled:#fff !important;}
[data-os-theme]{ --os-manipulator-outline-color--drag:#134e96 !important;}
[data-os-theme]{ --os-manipulator-outline-color--hover:#a2b9df !important;}
[data-os-theme]{ --os-mate-connector-coordinate-system-offset-axis-color:#fff !important;}
[data-os-theme]{ --os-mate-connector-fill-color:#ffffffcc !important;}
[data-os-theme]{ --os-mate-connector-stroke-color:#002847 !important;}
[data-os-theme]{ --os-origin-color:#fff !important;}
[data-os-theme]{ --os-point-body-color:#fff !important;}
[data-os-theme]{ --os-project-measurement-angle-color:#def1fb !important;}
[data-os-theme]{ --os-project-measurement-distance-color:#fff !important;}
[data-os-theme]{ --os-resize-manipulator-outer-color:#d0dbe57f !important;}
[data-os-theme]{ --os-resize-manipulator-outer-highlight:#d0dbe5e5 !important;}
[data-os-theme]{ --os-simulation-line-axis-color:#fff !important;}
[data-os-theme]{ --os-simulation-load-leader-line-color:#fff !important;}
[data-os-theme]{ --os-sketch-plane-line-color:#90cef1 !important;}
[data-os-theme]{ --os-sketch-plane-text-color:#90cef1 !important;}
[data-os-theme]{ --os-sketch-drag-trim-path-color:#f5f5f5 !important;}
[data-os-theme]{ --os-sketch-face-color:#f2f2f233 !important;}
[data-os-theme]{ --os-sketch-face-color-show-through-color:#f2f2f219 !important;}
[data-os-theme]{ --os-sketch-inactive-color:#999 !important;}
[data-os-theme]{ --os-sketch-overconstrained-line-point-color:#ff6b6b !important;}
[data-os-theme]{ --os-sketch-overconstrained-show-through-line-point-color:#dd979b !important;}
[data-os-theme]{ --os-sketch-underconstrained-line-point-color:#3e94ff !important;}
[data-os-theme]{ --os-sketch-underconstrained-show-through-line-point-color:#a2b9df !important;}

[data-os-theme]{ --os-unshaded-body-line-color:#fff !important;}
[data-os-theme]{ --os-view-cube-arrow-color:#999 !important;}
[data-os-theme]{ --os-view-cube-back-color:#999 !important;}
[data-os-theme]{ --os-view-cube-face-highlight:#90cef199 !important;}
[data-os-theme]{ --os-view-cube-front-color:#333 !important;}
[data-os-theme]{ --os-view-cube-text-color--hover:#000 !important;}
[data-os-theme]{ --os-view-cube-text-color--idle:#fff !important;}



[data-os-theme]{ --background-color:#f5f5f5 !important;}
[data-os-theme]{ --info-button-color:#1651b0 !important;}
[data-os-theme]{ --key-color:#1651b0 !important;}
[data-os-theme]{ --text-color:#333 !important;}
[data-os-theme]{ --title-color:#333 !important;}
[data-os-theme]{ --warning-button-color:#bd3039 !important;}


[data-os-theme]{ --background-color:#333 !important;}
[data-os-theme]{ --info-button-color:#1651b0 !important;}
[data-os-theme]{ --key-color:#3e94ff !important;}
[data-os-theme]{ --text-color:#fff !important;}
[data-os-theme]{ --title-color:#fff !important;}
[data-os-theme]{ --warning-button-color:#bd3039 !important;}















































[data-os-theme]{ --os-version-graph-branch-0:#1651b0 !important;}
[data-os-theme]{ --os-version-graph-branch-0-faded:#d0dbe5 !important;}
[data-os-theme]{ --os-version-graph-branch-1:#fab601 !important;}
[data-os-theme]{ --os-version-graph-branch-1-faded:#fff8e6 !important;}
[data-os-theme]{ --os-version-graph-branch-2:#3ad4a7 !important;}
[data-os-theme]{ --os-version-graph-branch-2-faded:#c3f2e4 !important;}
[data-os-theme]{ --os-version-graph-branch-3:#b689be !important;}
[data-os-theme]{ --os-version-graph-branch-3-faded:#e9dbeb !important;}
[data-os-theme]{ --os-version-graph-branch-4:#3e94ff !important;}
[data-os-theme]{ --os-version-graph-branch-4-faded:#def1fb !important;}
[data-os-theme]{ --os-version-graph-branch-5:#b88a00 !important;}
[data-os-theme]{ --os-version-graph-branch-5-faded:#e9dbb2 !important;}
[data-os-theme]{ --os-version-graph-branch-6:#219773 !important;}
[data-os-theme]{ --os-version-graph-branch-6-faded:#c3e2d9 !important;}
[data-os-theme]{ --os-version-graph-branch-7:#672f8f !important;}
[data-os-theme]{ --os-version-graph-branch-7-faded:#d1c0dd !important;}
[data-os-theme]{ --os-version-graph-branch-8:#e98e72 !important;}
[data-os-theme]{ --os-version-graph-branch-8-faded:#f8ddd4 !important;}


[data-os-theme]{ --os-version-graph-branch-0:#3e94ff !important;}
[data-os-theme]{ --os-version-graph-branch-0-faded:#d0dbe5 !important;}
[data-os-theme]{ --os-version-graph-branch-1:#fab601 !important;}
[data-os-theme]{ --os-version-graph-branch-1-faded:#fff8e6 !important;}
[data-os-theme]{ --os-version-graph-branch-2:#3ad4a7 !important;}
[data-os-theme]{ --os-version-graph-branch-2-faded:#c3f2e4 !important;}
[data-os-theme]{ --os-version-graph-branch-3:#b689be !important;}
[data-os-theme]{ --os-version-graph-branch-3-faded:#e9dbeb !important;}
[data-os-theme]{ --os-version-graph-branch-4:#90cef1 !important;}
[data-os-theme]{ --os-version-graph-branch-4-faded:#def1fb !important;}
[data-os-theme]{ --os-version-graph-branch-5:#b88a00 !important;}
[data-os-theme]{ --os-version-graph-branch-5-faded:#e9dbb2 !important;}
[data-os-theme]{ --os-version-graph-branch-6:#219773 !important;}
[data-os-theme]{ --os-version-graph-branch-6-faded:#c3e2d9 !important;}
[data-os-theme]{ --os-version-graph-branch-7:#a64dff !important;}
[data-os-theme]{ --os-version-graph-branch-7-faded:#d1c0dd !important;}
[data-os-theme]{ --os-version-graph-branch-8:#e98e72 !important;}
[data-os-theme]{ --os-version-graph-branch-8-faded:#f8ddd4 !important;}
`

styleSheet.textContent = rules

//styleSheet.replaceSync(rules)

document.head.appendChild(styleSheet)

//styleSheet.insertRule('osx-welcome-mat-section{display: none !important;}')


