// /UI/mountTableUI.js

// <div class="dataListContainerClass">

//             </div>

import { initRender } from "../BuildVertical/initRender.js";
import { buildFullUI } from "./compose/buildFullUI.js";

export const mountVerticalUI = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig
}) => {
    buildFullUI({ containerEl, inIsTableNeeded: false });

    initRender({
        inContainerEl: containerEl,
        inDataStore: dataStore,
        inDom: dom,
        inServices: services,
        inOptions: options,
        inEndPoints: endPoints,
        inColumnsConfig: columnsConfig,
        inUiClasses: uiClasses,
        callbacks,
        inConfig
    });
};