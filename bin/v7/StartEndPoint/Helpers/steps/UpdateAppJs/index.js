import fs from "fs";
import checkLines from "./checkLines.json" with {type: "json"};
import fs from "fs";

const updateAppJs = ({ appJsPath, endpoint, showLog }) => {
    index({
        showLog,
        jsFilePath: appJsPath,
        inCheckLines: checkLines
    });

    return false;
};

export default updateAppJs;