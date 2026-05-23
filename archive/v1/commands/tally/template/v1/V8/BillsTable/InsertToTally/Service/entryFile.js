import { startFunc as clientData } from "./readClientData.js"
import { importVoucher } from "@keshavsoft/tallyextract";

const StartFunc = async ({ inPk }) => {
    const dataToPost = clientData({ inPk });

    return await importVoucher(dataToPost);
};

export { StartFunc };