import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "StartEndPoint";

const load = async () => {
    const v = getLatestVersion();
    console.log("v : ", v);
    return import(`../bin/${v}/core/resolveCommand.js`);
};

const startFunc = async () => {
    const { default: run } = await load();
    console.log("run : ", run);

    const fn = run(commandToSend);
    console.log("fn : ", fn);

    fn({
        folderName: "aaaaaaaaaaa",
        toPath: process.cwd()
    });
};

startFunc().then();