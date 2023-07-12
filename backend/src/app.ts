import chalk from "chalk"
import { figletText, print, printBool, printDevOptions } from "./utility/print.js"
import config from "./utility/config.js"
import { TDevOptions } from "./utility/types.js"
const run = () => {
  print(figletText(config.NAME) +" v"+ chalk.underline(config.VERSION))
  printDevOptions()
}

run()