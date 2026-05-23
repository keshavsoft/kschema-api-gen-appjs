import StartEndPoint from "../commands/startEndPoint.js";
import AddSubRoute from "../commands/addSubRoute.js";
import AddTableName from "../commands/addTableName.js";
import ShowAll from "../commands/showAll.js";

import CreateApi from "../commands/createApi.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    AddSubRoute,
    AddTableName,
    ShowAll,
    CreateApi
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};