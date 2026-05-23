// orchestrator
export const buildMenuItem = ({
    inTextToShow,
    inHtmlId,
    inIconPaths,
    inHref
}) => {
    const textToShow = inTextToShow;
    const htmlId = inHtmlId;
    const iconPaths = inIconPaths;

    const li = createLi();
    const a = createAnchor({ inHtmlId: htmlId, inHref });
    const span = createLabel({ inTextToShow: textToShow });
    const svg = createIcon({ inIconPaths: iconPaths });

    a.append(svg, span);
    li.appendChild(a);

    return li;
};

const createLi = () => {
    const htmlLi = document.createElement("li");

    htmlLi.className = "md:text-center";

    return htmlLi;


};

// createAnchor
const createAnchor = ({ inHtmlId = "htmlId",
    inHref = "#"
}) => {
    const a = document.createElement("a");
    a.id = inHtmlId;
    a.href = inHref;
    // a.className =
    //     "group flex items-center md:flex-col md:items-center gap-0 md:gap-1 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500";

    a.className = `flex justify-between items-center bg-gray-700 px-4 py-2 rounded-md
     hover:bg-gray-600 active:bg-gray-500 active:scale-95
     transition-all duration-150
     md:flex-col md:justify-center md:items-center
     lg:bg-transparent lg:px-2 lg:py-1`;

    return a;
};

// createLabel (no transform → no height change)
const createLabel = ({ inTextToShow = "Menu1" }) => {
    const span = document.createElement("span");
    span.className =
        "ml-3 text-right w-full text-base md:w-auto md:text-center md:ml-0 lg:text-lg";

    span.textContent = inTextToShow;

    return span;
};

// createIcon (safe transform: no layout shift)
const createIcon = ({ inIconPaths = [] }) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttribute(
    //     "class",
    //     "w-6 h-6 md:order-1 md:mb-0 text-gray-400 group-hover:text-white transition-all duration-200 transform group-hover:scale-95 group-hover:-translate-y-0.5"
    // );


    svg.setAttribute(
        "class",
        "text-gray-300 w-6 h-6 lg:w-7 lg:h-7"
    );


    //                                 <svg class="text-gray-300 w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor"


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



//                         <li class="md:text-center">
//                             <a id="LedgersHtmlId"
//                              href="#" class="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-md
// hover:bg-gray-600 active:bg-gray-500 active:scale-95
// transition-all duration-150
// md:flex-col md:justify-center md:items-center
// lg:bg-transparent lg:px-2 lg:py-1">

//                                 <!-- LEFT: ICON -->
//                                 <svg class="text-gray-300 w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor"
//                                     viewBox="0 0 24 24">
//                                     <path
//                                         d="M4 6h16M4 10h16M4 14h10M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
//                                 </svg>

//                                 <!-- RIGHT: LABEL -->
//                                 <span class="ml-3 text-right w-full text-base
//                                      md:w-auto md:text-center md:ml-0
//                                      lg:text-lg
//                                      ">Ledgers</span>

//                             </a>
//                         </li>
