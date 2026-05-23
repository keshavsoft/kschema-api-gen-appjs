import path from "path";

import { locateSource } from "./ShowAll/steps/locateSource.js";
import { locateDestination } from "./ShowAll/steps/locateDestination.js";
import { createFolder } from "./ShowAll/steps/createFolder.js";
import updateEndPointsJs from "./ShowAll/steps/updateEndPointsJs.js";
import createHttpFile from "./ShowAll/steps/createHttpFile.js";

import { announce } from "./ShowAll/steps/announce.js";

import resolveFolderName from "./ShowAll/steps/resolveFolderName.js";

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

    updateEndPointsJs({
        appJsPath: `${localToPath}/end-points.js`,
        endpoint: resolvedFolderName
    });

    createHttpFile({
        inTargetPath: path.join(localToPath, resolvedFolderName),
        toPath: process.cwd()
    });

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolveFolderName;
};