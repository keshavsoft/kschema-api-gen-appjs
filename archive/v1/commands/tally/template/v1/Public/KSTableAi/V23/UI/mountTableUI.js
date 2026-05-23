// /UI/mountTableUI.js

import { initRender } from "../BuildTotal/initRender.js";
// import { initRender } from "../BuildTableOnly/initRender.js";

export const mountTableUI = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks
}) => {
    initRender({
        inContainerEl: containerEl,
        inDataStore: dataStore,
        inDom: dom,
        inServices: services,
        inOptions: options,
        inEndPoints: endPoints,
        inColumnsConfig: columnsConfig,
        inUiClasses: uiClasses,
        callbacks
    });
};