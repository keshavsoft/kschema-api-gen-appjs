import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/StartEndPoint/index.js`);

    return module.default;
};

export default load;