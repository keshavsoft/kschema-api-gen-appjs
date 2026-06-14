export default function parseInput() {
    const [...args] = process.argv.slice(2);

    const flags = Object.fromEntries(
        args
            .filter(a => a.includes("="))
            .map(a => a.split("="))
    );

    return {
        folderName: flags?.folderName || null,
        isAnnounce: flags?.isAnnounce || true,
        showLog: flags?.showLog || false,
        toPath: process.cwd()
    };
};