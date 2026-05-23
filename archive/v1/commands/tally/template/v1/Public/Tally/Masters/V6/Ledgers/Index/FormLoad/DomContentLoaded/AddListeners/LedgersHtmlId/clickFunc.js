// import { initTableOnly } from "../../../../../../../../../KSTableAi/V25/entry.js";

const clickFuncToRun = () => {
    buildUi().then();
};

const buildUi = async () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "LedgerNames",
        mode: "create", // or "show" "create"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "table", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V9/ItemsTable/Insert",
            update: "",
            delete: "/Api/V9/BillsTable/Delete",
            read: "/Api/V1/LedgerNames/ShowAll",
            find: "/Api/V9/BillsTable/find"
        },
        options: {
            firstRow: {
                showSearch: true
            },
            vertical: {
                showVertical: true,
                isDisabled: false,
                showSaveButton: true
            },
            dataList: {
                show: true,
            },
            table: {
                isDisabled: false,
                showTable: true,
                showRowOptions: false,
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
            {
                columnName: "LedgerName"
            },
            {
                columnName: "LedgerParentName"
            },
            {
                columnName: "LedgerType"
            }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        },
        callbacks: {
            table: {
                onDelete: async ({ toDeletePk }) => {
                    const fromDelete = await startFetchAsGet({
                        inQuery: {
                            ParentPk: toDeletePk
                        }
                    });

                    return await fromDelete;
                }
            }
        }
    };

    // await initTableOnly(config);

    // window.KSTable.initTableOnly(config);
    await callKSTable(config);
};

const callKSTable = async (config) => {
    if (window.KSTable?.initTableOnly) {
        console.log("table loaded from window.KSTable");

        return window.KSTable.initTableOnly(config); // extension or CDN
    } else {
        const { initTableOnly } = await import("../../../../../../../../../KSTableAi/V25/entry.js"); // local
        return initTableOnly(config);
    };
};

export { clickFuncToRun };