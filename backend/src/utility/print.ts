import figlet from "figlet";
import { TDevOptions, TFigletOptions } from "./types.js";
import config, {DEV_OPTIONS} from "./config.js";
import chalk from 'chalk'
import { evenPad } from "./padding.js";

const log = console.log
const err = console.error

export const print = (text: string, header?: string) => header ? log(`${header} ${text}`) : log(text)
export const debugLog = (str: string) => {
    if(config.DEV_MODE && DEV_OPTIONS.PRINT_DEBUG_MESSAGES) print("[DEBUG]", str)
}


export const figletText = (str: string, opts?: TFigletOptions) => {

    let defaultOptions: TFigletOptions = {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    }
    return figlet.textSync(str, {...opts, ...defaultOptions})
}

export const printBool = (val: boolean, padLength?: number) => {
    if(!padLength) padLength = 0
    return val ? chalk.bold.green(evenPad("Enabled", padLength, "start")) : chalk.bold.red(evenPad("Disabled", padLength, "start"))
}

export const printDevOptions = () => {

    const printDevOption = (opt: string, val: boolean, optPadLen:number, padLength: number) => {
        log(`${evenPad(opt, optPadLen, "end")} | ${printBool(val, padLength)}`)
    }

    const padLength: number = 10
    let maxPadLength = Math.max(...Object.keys(DEV_OPTIONS).map(e => e.length))

    print(`${chalk.bold("Developer Mode")} ${printBool(config.DEV_MODE)} \n`)
    if(!config.DEV_MODE) return

    print(chalk.bold.blueBright.underline(`${evenPad("Option", maxPadLength, "end")} | ${evenPad("Value", padLength, "start")}`))

    let values = Object.values(DEV_OPTIONS)
    Object.keys(DEV_OPTIONS)
        .map((e,i) => [e, values[i]])
        .forEach(e => printDevOption(e[0], e[1], maxPadLength, padLength))
}

export const debugPrint = (str: string) => print(str, chalk.bold.magenta(`[DEBUG]`))
export const iniPrint = (str: string) => print(str, chalk.bold.magenta(`[ INI ]`))
export const errorPrint = (text: Error | string, ) =>  err(`${chalk.bold.red("[ERROR]")} ${text}`)
