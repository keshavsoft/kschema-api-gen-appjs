import { createLi } from "./createLi.js";
import { createAnchor } from "./createAnchor.js";
import { createLabel } from "./createLabel.js";
import { createIcon } from "./createIcon.js";

export const buildMenuItem = (item, classes = {}) => {
    const li = createLi(classes.liClass);
    const a = createAnchor(item, classes.aClass);
    const span = createLabel(item, classes.spanClass);
    const svg = createIcon(item, classes.svgClass);

    a.append(svg, span);
    li.appendChild(a);

    return li;
};