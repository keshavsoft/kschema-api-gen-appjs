import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceVersion = "v5";

export const locateSource = () => {
    return path.join(
        __dirname,
        "..",
        "template",
        sourceVersion
    );
};