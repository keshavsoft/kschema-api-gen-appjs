import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    return import(`../bin/${v}/core/resolveCommand.js`);
};

const startFunc = async ({ inCommandToSend, inFolderName,
    inToPath
}) => {
    const { default: run } = await load();

    const fn = run(inCommandToSend);

    fn({
        folderName: inFolderName,
        toPath: inToPath,
        showLog: false,
        isAnnounce: false
    });
};

export const StartEndPoint = async ({ inFolderName, inToPath }) => {
    return startFunc({
        inCommandToSend: "StartEndPoint",
        inFolderName, inToPath
    });
};