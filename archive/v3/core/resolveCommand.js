import StartEndPoint from "../commands/startEndPoint.js";
import AddSubRoute from "../commands/addSubRoute.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    AddSubRoute
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};