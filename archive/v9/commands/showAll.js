import path from "path";
import { endPointsJs } from "@keshavsoft/kschema-api-check";

import { locateSource } from "./ShowAll/steps/locateSource.js";
import { locateDestination } from "./ShowAll/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";

// import updateEndPointsJs from "./ShowAll/steps/updateEndPointsJs.js";
import createHttpFile from "./ShowAll/steps/createHttpFile.js";

import { announce } from "./ShowAll/steps/announce.js";

import resolveFolderName from "./ShowAll/steps/resolveFolderName.js";

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
        endPointsJs({
            toPath: localToPath,
            action: resolvedFolderName
        });

        // updateEndPointsJs({
        //     appJsPath: `${localToPath}/end-points.js`,
        //     endpoint: resolvedFolderName
        // });

        createHttpFile({
            inTargetPath: path.join(localToPath, resolvedFolderName),
            toPath: process.cwd()
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolveFolderName;
};