import { locateSource } from "./AddSubRoute/steps/locateSource.js";
import { locateDestination } from "./AddSubRoute/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";
import { updateAppJs } from "./AddSubRoute/steps/updateAppJs.js";
import { announce } from "./AddSubRoute/steps/announce.js";

import resolveFolderName from "./AddSubRoute/steps/resolveFolderName.js";

export default ({ folderName = "", argsAsIs, toPath, isAnnounce = true, checkBeforeCreate = true }) => {
    const localToPath = toPath;
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (resolvedFolderName.KTF === false) {
        console.log(resolvedFolderName.KReason);

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
        updateAppJs({
            appJsPath: `${localToPath}/routes.js`,
            endpoint: resolvedFolderName
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};