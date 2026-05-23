import index from "../index.js";

const startFunc = async () => {
    index({
        folderName: "aaaaaaaaaaa",
        toPath: process.cwd(),
        showLog: false,
        isAnnounce: false
    });
};

startFunc().then();