const getIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("pk");
};

const loadInitialData = async ({
    config,
    services,
    dataStore,
    endPoints
}) => {
    const { data } = config;

    // 1. Static data
    if (Array.isArray(data)) {
        dataStore.setData(data);
        return;
    }

    // 2. Read API
    if (endPoints?.read) {
        const dataFromFetch = await services.actions.getData({
            inEndPoint: endPoints.read
        });

        if (!Array.isArray(dataFromFetch)) {
            throw new Error("read endpoint must return array");
        }

        dataStore.setData(dataFromFetch);
    }
// debugger;
    // 3. Find API (dynamic id)
    if (endPoints?.find) {
        const id = getIdFromUrl();

        if (id) {
            const dataFromFetch = await services.actions.find({
                inEndPoint: endPoints.find,
                id
            });

            dataStore.setFindData(dataFromFetch);
        }
    }
};

export { loadInitialData };