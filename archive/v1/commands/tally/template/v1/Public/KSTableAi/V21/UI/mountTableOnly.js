// /UI/mountTableUI.js

import { initRender } from "../BuildTableOnly/initRender.js";

export const mountTableOnlyUI = ({
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