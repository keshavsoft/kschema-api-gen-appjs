import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('toTallyId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
