import figlet from "figlet";
import config from "./config.js";
const log = console.log;
const err = console.error;
export const print = (header, text) => (header) ? log(`${header} ${text}`) : log(text);
export const debugLog = (str) => {
    if (config.DEV_MODE && config.DEV_OPTIONS.PRINT_DEBUG_MESSAGES)
        print("[DEBUG]", (str));
};
export const figletText = (str, opts) => {
    let defaultOptions = {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    };
    return figlet.textSync(str, { ...opts, ...defaultOptions });
};
