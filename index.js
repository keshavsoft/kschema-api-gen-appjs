import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    return await import(`../bin/${v}/StartEndPoint/index.js`);
};

export default load;