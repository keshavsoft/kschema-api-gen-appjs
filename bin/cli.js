#!/usr/bin/env node

import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";

const run = () => {
  const version = getLatestVersion();
  const runner = loadRunner(version);
  runner();
};

run();