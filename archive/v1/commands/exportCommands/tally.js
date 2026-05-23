import fs from "fs";

import { locateSource } from "../tally/steps/locateSource.js";

export default (inDestination) => {
    const source = locateSource();

    fs.cpSync(source, inDestination, { recursive: true });
};