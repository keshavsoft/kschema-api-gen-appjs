import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const startFunc = ({ inPk }) => {
    let LocalCustomerData = pullFindRow({ inPk });
    let LocalItemsData = pullForeignTableData({ inPk });

    return {
        customerDetails: LocalCustomerData,
        allinventoryentries: LocalItemsData
    };
};

const pullForeignTableData = ({ inPk }) => {
    // const targetPath = `./${ParamsJson.DataPath}/${ParamsJson.ForeignkeyTables[0]}.json`;
    const targetPath = `./Data/ItemsTable.json`;

    try {
        const LocalFileData = fs.readFileSync(targetPath);
        const LocalFileDataAsJson = JSON.parse(LocalFileData);

        const filteredRows = LocalFileDataAsJson.filter(element => element.ParentPk === inPk);

        return filteredRows;
    } finally {
        globalThis.__IMPORT_RUNNING__ = false;
    }
};

const pullFindRow = ({ inPk }) => {
    const targetPath = `./Data/BillsTable.json`;

    // const targetPath = `./${ParamsJson.DataPath}/${ParamsJson.TableName}.json`;

    try {
        const LocalFileData = fs.readFileSync(targetPath);
        const LocalFileDataAsJson = JSON.parse(LocalFileData);

        const LocalFindRow = LocalFileDataAsJson.find(element => element.pk === parseInt(inPk));

        return LocalFindRow;
    } finally {
        globalThis.__IMPORT_RUNNING__ = false;
    }
};


export { startFunc };