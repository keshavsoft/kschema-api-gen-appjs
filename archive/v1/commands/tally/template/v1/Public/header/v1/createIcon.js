export const createIcon = (
    { inIconPaths = [] },
    cls = ""
) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("class", cls);
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");

    inIconPaths.forEach(d => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        svg.appendChild(path);
    });

    return svg;
};