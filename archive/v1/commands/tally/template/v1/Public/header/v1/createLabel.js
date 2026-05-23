export const createLabel = (
    { inTextToShow = "" },
    cls = ""
) => {
    const span = document.createElement("span");
    span.className = cls;
    span.textContent = inTextToShow;
    return span;
};