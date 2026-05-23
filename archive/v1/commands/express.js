import { locateSource } from "./express/steps/locateSource.js";
import { locateDestination } from "./express/steps/locateDestination.js";
import { createProject } from "./express/steps/createProject.js";
import { announce } from "./express/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({  folderName =""}) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};