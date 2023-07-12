import config from "./config"
import chalk from 'chalk'
import figlet from 'figlet'
import {TFigletOptions} from './types'

const log = console.log
const err = console.error

export const print = () => {
}

export const debugLog = (str : string) => {

    let header = chalk.bold.blue
    let text = chalk.bold.white

    if(config.DEV_MODE && config.DEV_OPTIONS.PRINT_DEBUG_MESSAGES) console.log(`${header("[DEBUG]")} ${text(str)}`)
}

export const figletPrint = (str: string, opts?:TFigletOptions) => {

    let defaultOptions: TFigletOptions = {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    }

    return figlet.textSync(str, {...opts, ...defaultOptions})
}