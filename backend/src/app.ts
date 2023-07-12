import chalk from "chalk"
import { debugPrint, figletText, iniPrint, print, printDevOptions } from "./utility/print.js"
import config, { DEV_OPTIONS } from "./utility/config.js"
import { createDatabase, deleteDatabase, doesDBExist } from "./database/initialise.js"

const printWelcome = () => {
  print(figletText(config.NAME) +" v"+ chalk.underline(config.VERSION))
  print(chalk.bold.underline(config.DESC)+ "\n")

  print(chalk.bold(`Port: ${config.PORT}`))
  printDevOptions()
  print("")
}

const initaliseDatabase = () => {
  if(!DEV_OPTIONS.PERSIST_DB) {
    debugPrint("Removing previous database")
    deleteDatabase()
  }
  if(!doesDBExist()){
    iniPrint("Initalising database")
    createDatabase()
  }else iniPrint("Database already exists... skipping")
  iniPrint("Initalisation Complete\n")
}

const run = () => {
  printWelcome()
  initaliseDatabase()
}

run()