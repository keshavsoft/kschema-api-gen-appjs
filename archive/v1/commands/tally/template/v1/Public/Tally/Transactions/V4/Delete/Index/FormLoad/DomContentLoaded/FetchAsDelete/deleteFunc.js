import getUrlJson from './getUrl.json' with {type: 'json'};

let deleteFunc = async ({ inQuery }) => {
    let jVarLocalGetEndPoint = getUrlJson.deleteEndPoint;

    // 👉 attach query params
    let finalUrl = `${jVarLocalGetEndPoint}?${new URLSearchParams(inQuery)}`;

    let response = await fetch(finalUrl, {
        method: "DELETE"   // IMPORTANT
    });

    return await response;
};

export { deleteFunc };

