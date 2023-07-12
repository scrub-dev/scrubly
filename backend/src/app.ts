import chalk from "chalk"
import { debugPrint, figletText, iniPrint, print, printDevOptions } from "./utility/print.js"
import config, { DEV_OPTIONS } from "./utility/config.js"
import { deleteDatabase, doesDBExist, initialise } from "./database/initialise.js"
import { log } from "console"

const printWelcome = () => {
  print(figletText(config.NAME) +" v"+ chalk.underline(config.VERSION))
  print(chalk.bold.underline(config.DESC)+ "\n")

  print(chalk.bold(`Port: ${config.PORT}`))
  printDevOptions()
  print("\n")
}

const initaliseDatabase = () => {
  if(doesDBExist() && !DEV_OPTIONS.PERSIST_DB) {
    debugPrint("Removing previous database")
    deleteDatabase()
  }
  else {
    iniPrint("Initalising database")
    initaliseDatabase()
  }
}



const run = () => {
  printWelcome()
  initialise()
}

run()