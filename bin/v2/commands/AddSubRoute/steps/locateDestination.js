import path from "path";

export const locateDestination = ({ inResolvedFolderName, toPath }) => {
    return path.join(toPath, inResolvedFolderName);
};