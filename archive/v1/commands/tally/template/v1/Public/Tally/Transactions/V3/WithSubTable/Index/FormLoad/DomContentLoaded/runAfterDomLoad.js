import { hookAllListeners } from "./AddListeners/start.js";
import { formSearchParamsFunc } from "./formSearchParamsFunc.js";
import { initTable, initVertical } from "../../../../../../../KSTableAi/V25/entry.js";

const runAfterDomLoad = () => {
    buildUi().then();
    hookAllListeners();
};

const buildUi = async () => {
    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    const config = {
        containerId: 'kSTableContainer',
        tableName: "Bill Create",
        mode: "show", // or "show"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "vertical", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V9/BillsTable/Insert",
            update: "",
            delete: "/Api/V9/BillsTable/Delete",
            find: "/Api/V1/BillsTable/find"
        },
        options: {
            firstRow: {
                showSearch: false
            },
            vertical: {
                showVertical: true,
                isDisabled: false,
                showSaveButton: true
            },
            dataList: {
                show: false,
            },
            table: {
                isDisabled: true,
                showTable: true,
                showRowOptions: true,
                showSerial: true,
                showFooter: false,
                footer: {
                    showDataList: true
                }
            },
            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },
        columnsConfig: [
            { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
            { columnName: "InvoiceDate", isRequired: false, defaultValue: "20260327" },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        }
    };

    const configForSubTable = {
        containerId: 'ksSubTableContainer',
        tableName: "Bill Create",
        mode: "create", // or "show" "create"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "table", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V1/ItemsTable/Insert",
            update: "",
            delete: "/Api/V9/BillsTable/Delete",
            read: "/Api/V1/ItemsTable/FilterColumns",
            find: "/Api/V1/BillsTable/find",
            dataListEndpoints: {
                items: "/Api/V1/StockItems/ShowAll"
            }
        },
        options: {
            firstRow: {
                showSearch: false
            },
            vertical: {
                showVertical: false,
                isDisabled: false,
                showSaveButton: true
            },
            dataList: {
                show: true,
            },
            table: {
                isDisabled: false,
                showTable: true,
                showRowOptions: true,
                showSerial: true,
                showFooter: true,
                footer: {
                    showDataList: true
                }
            },
            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },
        columnsConfig: [
            {
                columnName: "ItemName", isRequired: true,
                tableFooterDataListShow: true, dataListSource: "items.StockItemName"
            },
            {
                columnName: "Rate", isRequired: true,
                tableFooterDataListShow: true
            },
            { columnName: "Qty", isRequired: false },
            { columnName: "Amount", isRequired: false },
            { columnName: "TaxPer", isRequired: false },
            { columnName: "Uom", isRequired: false },
            { columnName: "ParentPk", isRequired: false, defaultValue: pkFromParams },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        }
    };

    await initVertical(config);

    await initTable(configForSubTable);
};

export { runAfterDomLoad };
