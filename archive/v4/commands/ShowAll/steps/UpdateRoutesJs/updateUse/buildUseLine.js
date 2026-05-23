const buildUseLine = (funcName) => {
    return `app.use("/ShowAll", ${funcName});`;
};

export default buildUseLine;