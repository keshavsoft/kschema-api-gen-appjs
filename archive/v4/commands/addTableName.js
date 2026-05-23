import { locateSource } from "./AddTableName/steps/locateSource.js";
import { locateDestination } from "./AddTableName/steps/locateDestination.js";
import { createFolder } from "./AddTableName/steps/createFolder.js";
import { updateAppJs } from "./AddTableName/steps/updateAppJs.js";
import { updateEndPointsFile } from "./AddTableName/steps/updateEndPointsFile.js";

import { announce } from "./AddTableName/steps/announce.js";

import resolveFolderName from "./AddTableName/steps/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createFolder({ source, destination });

    updateAppJs({
        appJsPath: `${process.cwd()}/routes.js`,
        endpoint: resolvedFolderName
    });

    updateEndPointsFile({
        filePath: `${destination}/end-points.js`,
        inTableName: resolvedFolderName
    });

    announce({ inResolvedFolderName: resolvedFolderName });
};