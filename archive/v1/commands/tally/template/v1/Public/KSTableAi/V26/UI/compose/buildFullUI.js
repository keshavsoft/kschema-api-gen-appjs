import { buildHeaderRow } from "../builders/buildHeaderRow.js";
import { buildDataListContainer } from "../builders/buildDataListContainer.js";
import { buildTableShell } from "../builders/buildTableShell.js";

export const buildFullUI1 = ({ containerEl, inTableName, inIsDataListNeeded = true }) => {
    const root = containerEl;
    root.className = "max-w-6xl mx-auto p-2";

    const { header } = buildHeaderRow({ inTitleText: inTableName });
    const { container: dataList } = buildDataListContainer();
    const { wrapper } = buildTableShell();

    root.replaceChildren(header, wrapper, dataList);
};

export const buildFullUI = ({ containerEl, inTableName, inIsDataListNeeded = true, inIsTableNeeded = true }) => {
    const root = containerEl;
    root.className = "max-w-6xl mx-auto p-2";

    let children = [];

    if (inIsTableNeeded) {
        const { header } = buildHeaderRow({ inTitleText: inTableName });
        const { wrapper } = buildTableShell();

        children.push(header);
        children.push(wrapper);
    };

    if (inIsDataListNeeded) {
        const { container: dataList } = buildDataListContainer();
        children.push(dataList);
    };

    root.replaceChildren(...children);
};