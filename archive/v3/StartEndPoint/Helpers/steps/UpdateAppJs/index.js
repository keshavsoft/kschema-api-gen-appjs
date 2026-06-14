import fs from "fs";

import updateImports from "./updateImports/index.js";
import updateAppUse from "./updateUse/index.js";

const updateAppJs = ({ appJsPath, endpoint, showLog }) => {
    if (!fs.existsSync(appJsPath)) {
        if (showLog) console.log("app.js file not found ?");

        return false;
    };

    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });

    return false;
};

export default updateAppJs;