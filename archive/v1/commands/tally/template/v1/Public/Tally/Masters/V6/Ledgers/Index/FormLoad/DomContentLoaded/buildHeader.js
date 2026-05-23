import { initHeader } from "../../../../../../../header/v1/initHeader.js";

const buildHeader = () => {
    const headerConfig = {
        items: [
            {
                text: "Ledgers",
                id: "LedgersHtmlId",
                icon: [
                    "M4 6h16",
                    "M4 10h16",
                    "M4 14h10",
                    "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                ]
            },
            {
                text: "StockItems",
                id: "StockItemsHtmlId",
                icon: [
                    "M3 7l9 4 9-4",
                    "M3 7l9-4 9 4",
                    "M3 7v10l9 4 9-4V7",
                    "M12 11v10"
                ]
            },
            {
                text: "Transactions",
                id: "1",
                icon: [

                    "M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
                    "M14 2v6h6",
                    "M8 12h8",
                    "M8 16h8"
                ],
                href: "../../../Transactions/V3/Create/index.html"
            },
            {
                text: "FromTally",
                id: "ImportHtmlId",
                icon: [
                    "M4 6h16",
                    "M4 10h16",
                    "M4 14h10",
                    "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                ]
            }
        ]
    };

    initHeader(headerConfig);
};


export { buildHeader };