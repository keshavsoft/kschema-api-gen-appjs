import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "StartEndPoint";

const load = async () => {
    const v = getLatestVersion();

    return import(`../bin/${v}/core/resolveCommand.js`);
};

const startFunc = async () => {
    const { default: run } = await load();

    const fn = run(commandToSend);

    fn({
        folderName: "aaaaaaaaaaa",
        toPath: process.cwd(),
        showLog: false,
        isAnnounce: false
    });
};

startFunc().then();