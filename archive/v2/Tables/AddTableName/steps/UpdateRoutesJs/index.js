import updateImports from "./updateImports/index.js";
import updateAppUse from "./updateUse/index.js";

const startFunc = ({ appJsPath, endpoint }) => {
    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });
};

export default startFunc;