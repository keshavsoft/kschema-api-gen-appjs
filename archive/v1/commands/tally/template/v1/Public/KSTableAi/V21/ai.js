// ai.js
import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { validateConfig } from "./Utils/validateConfig.js";
import { prepareColumnsBundle } from "./Utils/prepareColumnsBundle.js";
import { normalizeConfig } from "./Utils/normalizeConfig.js";
import { focusToEl } from "./FocusSet/V2/focusSet.js";

import { createStore } from "./TableStore/V2/start.js";
import { applyMode } from "./Core/applyMode.js";
import { KeshavUIClasses } from "./uiClasses.js";
import { loadDataFlow } from "./Core/loadDataFlow.js";

import { setupServices } from "./Services/setupServices.js";
import { mountTableUI } from "./UI/mountTableUI.js";
import { mountVerticalUI } from "./UI/mountVertical.js";
import { mountTableOnlyUI } from "./UI/mountTableOnly.js";

class KSAiTable {
    constructor(inConfig) {
        let config = normalizeConfig(inConfig);
        // config = applyMode(config);
        validateConfig(config);
        // debugger;
        const { containerId, options, endPoints, columnsConfig,
            uiClasses, callbacks } = config;

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        if (!this.containerEl) {
            throw new Error(`Container not found: ${containerId}`);
        };

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);
        this.uiClasses = this.mergeUI(KeshavUIClasses, uiClasses);

        const bundle = prepareColumnsBundle(columnsConfig);

        this.dataStore.setColumns(bundle.keys);
        this.dataStore.setVisibleColumns(bundle.visibleColumns);
        this.dataStore.setVisibleConfig(bundle.visibleConfig);
        this.dataStore.setDefaultRow(bundle.defaultRow);
        this.dataStore.setDataListColumns(bundle.dataListColumns);

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
        // constructor
        this.callbacks = callbacks || {};
    };

    mergeUI(defaults, incoming = {}) {
        return {
            ...defaults,
            ...incoming,
            form: {
                ...defaults.form,
                ...incoming.form
            }
        };
    };

    async init() {
        this.setupServices();

        await loadDataFlow({
            config: this.config,
            services: this.services,
            dataStore: this.dataStore,
            endPoints: this.endPoints
        });

        this.mountUI();

        focusToEl({
            inContainerEl: this.containerEl,
            inPriority: this.options.focus.priority
        });
    };

    async initVertical() {
        this.setupServices();

        await loadDataFlow({
            config: this.config,
            services: this.services,
            dataStore: this.dataStore,
            endPoints: this.endPoints
        });

        this.mountVertical();
    };

    async initTable() {
        this.setupServices();

        await loadDataFlow({
            config: this.config,
            services: this.services,
            dataStore: this.dataStore,
            endPoints: this.endPoints
        });

        this.mountTableOnly();
    };

    setupServices() {
        this.services = setupServices({
            config: this.config,
            dataStore: this.dataStore
        });
    };

    mountUI() {
        mountTableUI({
            containerEl: this.containerEl,
            dataStore: this.dataStore,
            dom: this.dom,
            services: this.services,
            options: this.options,
            endPoints: this.endPoints,
            columnsConfig: this.columnsConfig,
            uiClasses: this.uiClasses,
            callbacks: this.callbacks
        });
    };

    mountVertical() {
        mountVerticalUI({
            containerEl: this.containerEl,
            dataStore: this.dataStore,
            dom: this.dom,
            services: this.services,
            options: this.options,
            endPoints: this.endPoints,
            columnsConfig: this.columnsConfig,
            uiClasses: this.uiClasses,
            callbacks: this.callbacks,
            inConfig: this.config,
        });
    };
    
    mountTableOnly() {
        mountTableOnlyUI({
            containerEl: this.containerEl,
            dataStore: this.dataStore,
            dom: this.dom,
            services: this.services,
            options: this.options,
            endPoints: this.endPoints,
            columnsConfig: this.columnsConfig,
            uiClasses: this.uiClasses,
            callbacks: this.callbacks,
            inConfig: this.config,
        });
    };
};

export { KSAiTable };