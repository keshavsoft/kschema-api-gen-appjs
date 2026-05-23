import { createItem } from "./createItem.js";
import { getDataFromFetch } from "./getData.js";
import { deleteItem } from "./deleteItem.js";
import { findItem } from "./findItem.js";

export const createServices = ({ tableName }) => {
    return {
        actions: {
            getData: ({ inEndPoint }) => getDataFromFetch({ inEndPoint }),
            create: ({ inEndPoint, payload }) => createItem({ inEndPoint, payload }),
            update: (id, payload) => updateItem({ tableName, id, payload }),
            remove: ({ inEndPoint, id }) => deleteItem({ inEndPoint, id }),
            find: ({ inEndPoint, id }) => findItem({ inEndPoint, id }),
            vertical: {
                save: async ({ inEndPoint, payload }) => {
                    const res = await fetch(inEndPoint, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });

                    return await res;
                }
            },
            vertical: {
                save: async ({ inEndPoint, payload }) => {
                    const res = await fetch(inEndPoint, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });

                    return await res;
                }
            },
            table: {
                delete: async ({ inEndPoint, id }) => {
                    const res = await fetch(`${inEndPoint}/${id}`, {
                        method: "DELETE"
                    });

                    return await res;
                }
            }
        },
    };
};