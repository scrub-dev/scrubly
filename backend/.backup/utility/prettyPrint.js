"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.figletPrint = exports.debugLog = exports.print = void 0;
const config_1 = __importDefault(require("./config"));
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const log = console.log;
const err = console.error;
const print = () => {
};
exports.print = print;
const debugLog = (str) => {
    let header = chalk_1.default.bold.blue;
    let text = chalk_1.default.bold.white;
    if (config_1.default.DEV_MODE && config_1.default.DEV_OPTIONS.PRINT_DEBUG_MESSAGES)
        console.log(`${header("[DEBUG]")} ${text(str)}`);
};
exports.debugLog = debugLog;
const figletPrint = (str, opts) => {
    let defaultOptions = {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    };
    return figlet_1.default.textSync(str, Object.assign(Object.assign({}, opts), defaultOptions));
};
exports.figletPrint = figletPrint;
