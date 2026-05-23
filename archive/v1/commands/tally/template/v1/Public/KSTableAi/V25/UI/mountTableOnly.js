// /UI/mountTableUI.js

import { initRender } from "../BuildTableOnlyWithVersions/V1/initRender.js";
import { buildFullUI } from "./compose/buildFullUI.js";

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
    // debugger
    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName
    });

    // buildUIFromEmpty({ inContainerEl: containerEl });

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
