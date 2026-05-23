import { kschema } from "@keshavsoft/kschema";
import configJson from './config.json' with { type: 'json' };

export default function loadConfig() {
    kschema.loadConfig(configJson);
};