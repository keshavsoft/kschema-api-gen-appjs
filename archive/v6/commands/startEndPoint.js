import { locateSource } from "./StartEndPoint/steps/locateSource.js";
import { locateDestination } from "./StartEndPoint/steps/locateDestination.js";
import { createFolder } from "./StartEndPoint/steps/createFolder.js";
import { updateAppJs } from "./StartEndPoint/steps/UpdateAppJs/index.js";

import { announce } from "./StartEndPoint/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ folderName = "", toPath, isAnnounce = true }) => {
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
        appJsPath: `${localToPath}/app.js`,
        endpoint: resolvedFolderName
    });

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolvedFolderName;
};