import fs from "fs";
import { ledger } from "@keshavsoft/tallyextract";
const dataPath = "./Data/LedgerNames.json";

const StartFunc = async () => {
    const dataFromTally = await ledger();
    // console.log("aaaaaa : ", dataFromTally.data.collection[0]);

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            LedgerName: element.metadata.name,
            LedgerParentName: element.parent.value,
            LedgerType: element.metadata.type,
            GstRegistrationType: element?.gstregistrationtype?.value,
            PartyGSTIN: element?.partygstin?.value
        }
    });

    fs.writeFileSync(dataPath, JSON.stringify(LocalNewArray));

    return LocalNewArray.length;
};

export { StartFunc };