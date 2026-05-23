import { deleteFunc } from './deleteFunc.js';
// import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFetchAsGet = async ({ inQuery }) => {
    debugger;
    let localResponse = await deleteFunc({ inQuery });

    return await localResponse;
    // StartFuncFromAfterFetch({ inResponse: localResponse });
};

export { startFetchAsGet };
