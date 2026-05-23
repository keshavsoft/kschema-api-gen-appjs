// orchestrator
export const buildLedgersMenuItem = () => {
    const li = createLi();
    const a = createAnchor();
    const span = createLabel();
    const svg = createIcon();

    a.append(span, svg);
    li.appendChild(a);

    return li;
};

const createLi = () => {
    return document.createElement("li");
};

const createAnchor = () => {
    const a = document.createElement("a");
    a.id = "LedgersHtmlId";
    a.className =
        "group flex justify-between items-center md:flex-col md:items-center cursor-pointer hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-200";
    return a;
};

const createLabel = () => {
    const span = document.createElement("span");
    span.className = "md:order-2 font-medium";
    span.textContent = "Ledgers";
    return span;
};
const createIcon = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "w-6 h-6 md:order-1 md:mb-1 text-gray-400 group-hover:text-white");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M4 6h16M4 10h16M4 14h10M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
    );

    svg.appendChild(path);

    return svg;
};