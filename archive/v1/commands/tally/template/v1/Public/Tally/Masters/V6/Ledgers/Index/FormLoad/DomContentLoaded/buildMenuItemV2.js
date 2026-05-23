// orchestrator
export const buildMenuItem = ({
    inTextToShow,
    inHtmlId,
    inIconPaths
}) => {
    const textToShow = inTextToShow;
    const htmlId = inHtmlId;
    const iconPaths = inIconPaths;

    const li = createLi();
    const a = createAnchor({ inHtmlId: htmlId });
    const span = createLabel({ inTextToShow: textToShow });
    const svg = createIcon({ inIconPaths: iconPaths });

    a.append(span, svg);
    li.appendChild(a);

    return li;
};

const createLi = () => {
    return document.createElement("li");
};


// createAnchor
const createAnchor = ({ inHtmlId = "htmlId" }) => {
    const a = document.createElement("a");
    a.id = inHtmlId;
    a.className =
        "group flex justify-between items-center md:flex-col md:items-center gap-1 md:gap-2 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500";
    return a;
};

// createLabel
const createLabel = ({ inTextToShow = "Menu1" }) => {
    const span = document.createElement("span");
    span.className =
        "md:order-2 font-medium transition-transform duration-200 group-hover:scale-90";
    span.textContent = inTextToShow;
    return span;
};

// createIcon
const createIcon = ({ inIconPaths = [] }) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute(
        "class",
        "w-6 h-6 md:order-1 md:mb-1 text-gray-400 group-hover:text-white transition-transform duration-200 group-hover:scale-90"
    );
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    inIconPaths.forEach(d => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        svg.appendChild(path);
    });

    return svg;
};