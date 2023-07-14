import chalk from "chalk"
import {figletText, print, printDevOptions } from "./utility/print.js"
import config from "./utility/config.js"
import { Server } from "./server/server.js"
import { Database } from "./database/database.js"

const printWelcome = () => {
  print(figletText(config.NAME) +" v"+ chalk.underline(config.VERSION))
  print(chalk.bold.underline(config.DESC)+ "\n")

  print(chalk.bold(`Port: ${config.PORT}`))
  printDevOptions()
  print("")
}

const run = () => {
  printWelcome()
  Database.createDatabase()
  Server.getInstance().listen()
}

run()