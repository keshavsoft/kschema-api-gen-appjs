import { locateSource } from "./AddTableName/steps/locateSource.js";
import { locateDestination } from "./AddTableName/steps/locateDestination.js";
import { createFolder } from "./AddTableName/steps/createFolder.js";
import { updateAppJs } from "./AddTableName/steps/updateAppJs.js";
import { updateEndPointsFile } from "./AddTableName/steps/updateEndPointsFile.js";

import { announce } from "./AddTableName/steps/announce.js";

import resolveFolderName from "./AddTableName/steps/resolveFolderName.js";

export default ({ folderName = "", toPath, isAnnounce }) => {
    const localToPath = toPath;
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        toPath: localToPath
    });

    createFolder({ source, destination });

    updateAppJs({
        appJsPath: `${localToPath}/routes.js`,
        endpoint: resolvedFolderName
    });

    updateEndPointsFile({
        filePath: `${destination}/end-points.js`,
        inTableName: resolvedFolderName
    });

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};