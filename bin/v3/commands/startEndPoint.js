import { locateSource } from "./StartEndPoint/steps/locateSource.js";
import { locateDestination } from "./StartEndPoint/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";
import { updateAppJs } from "./StartEndPoint/steps/UpdateAppJs/index.js";

import { announce } from "./StartEndPoint/steps/announce.js";

import resolveFolderName from "./StartEndPoint/steps/resolveFolderName.js";

export default ({ folderName = "", toPath, isAnnounce = true, checkBeforeCreate = true }) => {
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

    // console.log("bbbbbbbbbbbbbbbb : ", createFolderResponse);

    if (createFolderResponse.KTF) {
        updateAppJs({
            appJsPath: `${localToPath}/app.js`,
            endpoint: resolvedFolderName
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};