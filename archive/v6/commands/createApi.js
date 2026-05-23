import startOrchestration from "../Orchestration/index.js";

export default ({ folderName = "" }) => {
    const parsed = parseInput(folderName);

    startOrchestration({ inRouteObject: parsed });
};

const parseInput = (input) => {
    const parts = input.split("/");

    return {
        root: parts[0],
        version: parts[1],
        tableName: parts[2],
        command: parts[3]
    };
};