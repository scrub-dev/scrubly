import config from "../config.js"
import { connection } from "./connection.js"
import fs from 'fs'
import { devMessage } from "../utils.js"

export const initialise = () => {
  if(!shouldExecute()) return
  removeDatabaseFile()
  if(!doesDatabaseFileExist()){
    createDatabaseFile()
  }
}

const shouldExecute = () => {
  return config.DEV_MODE && config.DEV_OPTIONS.CLEAN_DB_ON_START
}
const doesDatabaseFileExist = () => {}
const createDatabaseFile = () => {
  devMessage("Created new Database File")
  createDatabaseFolder()
}
const removeDatabaseFile = () => {
  devMessage("Removing previous Database File")
}
const createDatabaseFolder = () => {

}
const doesTableExist = () => {

}
const createRequiredTables = () => {

}
const getTableNames = () => {
  const tables = config.DATABASE_CONFIG.TABLES
  let output = []
  for(const table of Object.entries(tables)) output.push(table[1].name)
  return output
}


const generateTableFromSchema = (tableColumns) => {}
const createTable = (name, colums) => {}


