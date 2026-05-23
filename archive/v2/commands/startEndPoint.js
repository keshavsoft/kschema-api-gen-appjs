import { locateSource } from "./StartEndPoint/steps/locateSource.js";
import { locateDestination } from "./StartEndPoint/steps/locateDestination.js";
import { createFolder } from "./StartEndPoint/steps/createFolder.js";
import { announce } from "./StartEndPoint/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createFolder({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};