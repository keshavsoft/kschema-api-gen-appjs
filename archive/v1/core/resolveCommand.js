import StartEndPoint from "../commands/startEndPoint.js";
import test from "../commands/test.js";
import generateSamples from "../commands/generateSamples.js";
import express from "../commands/express.js";
import tally from "../commands/tally.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    test,
    "generate-samples": generateSamples,
    express,
    tally
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};