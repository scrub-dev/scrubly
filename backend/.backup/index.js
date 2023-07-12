"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./utility/config"));
const prettyPrint_1 = require("./utility/prettyPrint");
const run = () => {
    prettyPrint_1.figletPrint(config_1.default.NAME);
    console.log(config_1.default.VERSION);
};
run();
