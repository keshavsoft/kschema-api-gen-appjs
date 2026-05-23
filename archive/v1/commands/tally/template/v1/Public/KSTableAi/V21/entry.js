import { KSAiTable } from "./ai.js";

// entry.js
export const initTable = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.init();   // ✅ THIS is missing
    return table;
};

export const initVertical = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initVertical();   // ✅ THIS is missing
    return table;
};

export const initTableOnly = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initTable();   // ✅ THIS is missing
    return table;
};