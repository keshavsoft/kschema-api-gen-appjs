import path from "path";

import { locateSource } from "./Insert/steps/locateSource.js";
import { locateDestination } from "./Insert/steps/locateDestination.js";
import { createFolder } from "../../core/createFolder.js";

import updateEndPointsJs from "./Insert/steps/updateEndPointsJs.js";
import createHttpFile from "./Insert/steps/createHttpFile.js";

import { announce } from "./Insert/steps/announce.js";

import resolveFolderName from "./Insert/steps/resolveFolderName.js";

export default ({ folderName = "", toPath, isAnnounce = true, checkBeforeCreate = true }) => {
    const localToPath = toPath;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (resolvedFolderName.KTF === false) {
        console.log(resolvedFolderName.KReason);

        return;
    };

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        toPath: localToPath
    });

    const createFolderResponse = createFolder({
        source, destination,
        isAnnounce, checkBeforeCreate
    });

    if (createFolderResponse.KTF) {
        updateEndPointsJs({
            appJsPath: `${localToPath}/end-points.js`,
            endpoint: resolvedFolderName
        });

        createHttpFile({
            inTargetPath: path.join(localToPath, resolvedFolderName),
            toPath: process.cwd()
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};