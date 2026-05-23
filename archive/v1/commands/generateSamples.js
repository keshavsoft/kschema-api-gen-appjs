import fs from "fs";
import path from "path";

import { exampleSchema } from "@keshavsoft/kschema";
import { baseTemplate } from "./template/baseTemplate.js";

export default ({ args }) => {
    const OUTPUT_DIR = path.resolve(process.cwd(), "samples");

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    };

    Object.entries(exampleSchema).forEach(([intent, methods]) => {
        Object.entries(methods).forEach(([key, meta]) => {
            if (Array.isArray(meta)) {
                const finalCode = baseTemplate({
                    body: meta.join("\r\n"),
                    inTableName: args[0]
                });

                fs.writeFileSync(path.join(OUTPUT_DIR, `${intent}_${key}.js`), finalCode);
            };
        });
    });
};
