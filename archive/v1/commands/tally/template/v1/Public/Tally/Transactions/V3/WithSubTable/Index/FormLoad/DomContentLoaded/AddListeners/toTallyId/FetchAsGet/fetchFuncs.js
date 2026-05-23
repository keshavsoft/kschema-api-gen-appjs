import { formSearchParamsFunc } from "./formSearchParamsFunc.js";
import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    const pkToPost = formSearchParamsFunc({ inKeyName: "pk" });

    let jVarLocalGetEndPoint = `${getUrlJson.GetEndPoint}/${pkToPost}`;

    let response = await fetch(jVarLocalGetEndPoint);

    return await response;
};

export { StartFunc };

