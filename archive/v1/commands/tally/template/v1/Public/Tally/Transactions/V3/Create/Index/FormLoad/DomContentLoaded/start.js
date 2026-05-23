import { runAfterDomLoad } from "./runAfterDomLoad.js";

export function startDomContentLoaded() {
    document.addEventListener("DOMContentLoaded", async () => {
        await runAfterDomLoad();
    });
}
