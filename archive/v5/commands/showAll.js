import { locateSource } from "./ShowAll/steps/locateSource.js";
import { locateDestination } from "./ShowAll/steps/locateDestination.js";
import { createFolder } from "./ShowAll/steps/createFolder.js";
import updateEndPointsJs from "./ShowAll/steps/updateEndPointsJs.js";

// import { updateAppJs } from "./ShowAll/steps/updateAppJs.js";
// import { updateEndPointsFile } from "./ShowAll/steps/updateEndPointsFile.js";

import { announce } from "./ShowAll/steps/announce.js";

import resolveFolderName from "./ShowAll/steps/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createFolder({ source, destination });

    updateEndPointsJs({
        appJsPath: `${process.cwd()}/end-points.js`,
        endpoint: resolvedFolderName
    });

    // updateEndPointsFile({
    //     filePath: `${destination}/end-points.js`,
    //     inTableName: resolvedFolderName
    // });

    announce({ inResolvedFolderName: resolvedFolderName });
};