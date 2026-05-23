import { hookAllListeners } from "./AddListeners/start.js";
import { buildHeader } from "./buildHeader.js";

const runAfterDomLoad = () => {
    buildHeader();

    hookAllListeners();
};

export { runAfterDomLoad };
