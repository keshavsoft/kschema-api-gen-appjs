import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('StockItemsHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
