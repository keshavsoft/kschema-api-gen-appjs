import { locateSource } from "./AddSubRoute/steps/locateSource.js";
import { locateDestination } from "./AddSubRoute/steps/locateDestination.js";
import { createFolder } from "./AddSubRoute/steps/createFolder.js";
import { updateAppJs } from "./AddSubRoute/steps/updateAppJs.js";
import { announce } from "./AddSubRoute/steps/announce.js";

import resolveFolderName from "./AddSubRoute/steps/resolveFolderName.js";

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

    announce({ inResolvedFolderName: resolvedFolderName });
};