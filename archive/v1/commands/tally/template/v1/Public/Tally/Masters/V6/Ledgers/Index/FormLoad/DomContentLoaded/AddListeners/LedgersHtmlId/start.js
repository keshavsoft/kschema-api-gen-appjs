import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('LedgersHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
