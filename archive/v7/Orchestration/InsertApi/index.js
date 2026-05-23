import path from "path";

import startEndPoint from "../../commands/startEndPoint.js";
import addSubRoute from "../../commands/addSubRoute.js";
import addTableName from "../../commands/addTableName.js";
import showAll from "../../commands/showAll.js";

export default ({ inRouteObject, showLog = true }) => {
    const localcommand = inRouteObject.command;

    const fromStartEndPoint = startEndPoint({
        folderName: inRouteObject.root,
        toPath: process.cwd(),
        isAnnounce: false
    });

    const fromAddSubRoute = addSubRoute({
        folderName: inRouteObject.version,
        toPath: path.join(process.cwd(), fromStartEndPoint),
        isAnnounce: false
    });

    const fromAddTableName = addTableName({
        folderName: inRouteObject.tableName,
        toPath: path.join(process.cwd(), fromStartEndPoint, fromAddSubRoute),
        isAnnounce: false
    });

    const endpointPath = path.join(process.cwd(), fromStartEndPoint, fromAddSubRoute, fromAddTableName);

    const fromShowAll = showAll({
        folderName: inRouteObject.command,
        toPath: endpointPath,
        isAnnounce: false
    });

    if (showLog) console.log("endpointPath :", endpointPath);
};