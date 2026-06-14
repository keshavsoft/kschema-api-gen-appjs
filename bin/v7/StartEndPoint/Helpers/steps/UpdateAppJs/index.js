import fs from "fs";
import checkLines from "./checkLines.json" with {type: "json"};
import load from "express-fix-app-js";

const updateAppJs = ({ appJsPath, endpoint, showLog }) => {
    load({
        showLog,
        jsFilePath: appJsPath,
        inCheckLines: checkLines,
        inStartEndPoint: endpoint
    });

    return false;
};

export default updateAppJs;