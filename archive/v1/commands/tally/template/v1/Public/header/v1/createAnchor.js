export const createAnchor = (
    { inHtmlId = "", inHref = "#" },
    cls = ""
) => {
    const a = document.createElement("a");
    a.id = inHtmlId;
    a.href = inHref;
    a.className = cls;
    return a;
};