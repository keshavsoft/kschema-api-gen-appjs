// /UI/mountTableUI.js

import { initRender } from "../BuildTableOnlyWithVersions/V1/initRender.js";

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

    buildUIFromEmpty({ inContainerEl: containerEl });

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

const buildUIFromEmpty = ({ inContainerEl }) => {
    const root = inContainerEl;
    root.className = "max-w-6xl mx-auto p-2";
    root.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "rounded-b-lg shadow-md overflow-x-auto tableParent";

    const table = document.createElement("table");
    table.className = "table w-full bg-white";

    const thead = document.createElement("thead");
    thead.className = "theadClass";

    const tbody = document.createElement("tbody");
    tbody.className = "tbodyClass";

    const tfoot = document.createElement("tfoot");
    tfoot.className = "tfootClass";

    table.append(thead, tbody, tfoot);
    wrapper.appendChild(table);

    root.replaceChildren(wrapper);
};

const buildUIFromEmpty1 = ({ inContainerEl }) => {
    const root = inContainerEl;

    root.innerHTML = `
    <div class="rounded-b-lg shadow-md overflow-x-auto tableParent">
      <table class="table w-full bg-white">
        <thead class="theadClass"></thead>
        <tbody class="tbodyClass"></tbody>
        <tfoot class="tfootClass"></tfoot>
      </table>
    </div>
  `;
};
