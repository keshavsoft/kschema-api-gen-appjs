import { funcToRun as funcToRunForLedgersHtmlId } from "./LedgersHtmlId/start.js";

import { funcToRun as funcToRunForStockItemsHtmlId } from "./StockItemsHtmlId/start.js";

import { funcToRun as funcToRunForImportHtmlId } from "./ImportHtmlId/start.js";

const hookAllListeners = () => {
    funcToRunForLedgersHtmlId();
    funcToRunForStockItemsHtmlId();

    funcToRunForImportHtmlId();

};

export { hookAllListeners };