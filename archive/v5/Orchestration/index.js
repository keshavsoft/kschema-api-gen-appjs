import path from "path";

import startEndPoint from "../commands/startEndPoint.js";
import addSubRoute from "../commands/addSubRoute.js";
import addTableName from "../commands/addTableName.js";

export default ({ inRouteObject }) => {
    const localcommand = inRouteObject.command;

    const fromStartEndPoint = startEndPoint({ folderName: inRouteObject.root });

    const fromAddSubRoute = addSubRoute({
        folderName: inRouteObject.version,
        toPath: path.join(process.cwd(), fromStartEndPoint)
    });

    const fromAddTableName = addTableName({
        folderName: inRouteObject.tableName,
        toPath: path.join(process.cwd(), fromStartEndPoint, fromAddSubRoute)
    });


    console.log("k1 : ", inRouteObject, fromStartEndPoint, fromAddTableName);
};