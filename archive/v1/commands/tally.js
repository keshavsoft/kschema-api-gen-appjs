import { locateSource } from "./tally/steps/locateSource.js";
import { locateDestination } from "./tally/steps/locateDestination.js";
import { createProject } from "./tally/steps/createProject.js";
import { announce } from "./tally/steps/announce.js";

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