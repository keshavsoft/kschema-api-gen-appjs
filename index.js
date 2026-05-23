import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();
    return (await import(`./bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

export const StartEndPoint = async (...a) => (await load("StartEndPoint"))(...a);
export const init = async (...a) => (await load("init"))(...a);
export const tally = async (...a) => (await load("tally"))(...a);