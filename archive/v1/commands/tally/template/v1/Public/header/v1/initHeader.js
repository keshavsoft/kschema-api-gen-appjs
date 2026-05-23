import { buildMenuItem } from "./buildMenuItem.js";

export const initHeader = (config = {}) => {
    const menu = document.getElementById("menu");
    if (!menu) return;

    menu.innerHTML = "";

    const classes = {
        liClass: config.liClass || "md:text-center",
        aClass: config.aClass || `flex justify-between items-center bg-gray-700 px-4 py-2 rounded-md
     hover:bg-gray-600 active:bg-gray-500 active:scale-95
     transition-all duration-150
     md:flex-col md:justify-center md:items-center
     lg:bg-transparent lg:px-2 lg:py-1`,
        spanClass: config.spanClass || "ml-3 text-right w-full text-base md:w-auto md:text-center md:ml-0 lg:text-lg",
        svgClass: config.svgClass || "text-gray-300 w-6 h-6 lg:w-7 lg:h-7"
    };

    (config.items || []).forEach(item => {
        const li = buildMenuItem(
            {
                inTextToShow: item.text,
                inHtmlId: item.id,
                inIconPaths: item.icon,
                inHref: item.href
            },
            classes
        );

        menu.appendChild(li);
    });
};