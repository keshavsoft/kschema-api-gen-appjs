import fs from "fs";

import updateImports from "./updateImports/index.js";
import updateAppUse from "./updateUse/index.js";

export function updateAppJs({ appJsPath, endpoint }) {
    if (!fs.existsSync(appJsPath)) return;

    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });
};