import { locateSource } from "./Helpers/steps/locateSource.js";
import { locateDestination } from "./Helpers/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";
import updateAppJs from "./Helpers/steps/UpdateAppJs/index.js";

import { announce } from "./Helpers/steps/announce.js";

import resolveFolderName from "./Helpers/steps/resolveFolderName.js";

export default ({ folderName = "", toPath, isAnnounce = true,
    checkBeforeCreate = true, showLog = false
}) => {
    console.log("aaaaaaaaaa : ", folderName);

    const localToPath = toPath;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (resolvedFolderName.KTF === false) {
        return folderName;
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
        const fromUpdate = updateAppJs({
            appJsPath: `${localToPath}/app.js`,
            endpoint: resolvedFolderName,
            showLog
        });

        if (showLog) console.log("fromUpdate : ", fromUpdate);
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};