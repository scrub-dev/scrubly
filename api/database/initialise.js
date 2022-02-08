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
  createRequiredTables()
}

const shouldExecute = () => {
  return config.DEV_MODE && config.DEV_OPTIONS.CLEAN_DB_ON_START
}
const doesDatabaseFileExist = () => {}
const createDatabaseFile = () => {
  devMessage("Created new Database File")
  createDatabaseFolder()

  const databaseName = config.DATABASE_CONFIG.DATABASE_FOLDER + config.DATABASE_CONFIG.DATABASE_NAME
  fs.writeFileSync(databaseName, '', (err) => {if(err) throw err})
}

const removeDatabaseFile = () => {
  devMessage("Removing previous Database File")
}

const createDatabaseFolder = () => {
  if(!fs.existsSync(config.DATABASE_CONFIG.DATABASE_FOLDER)) fs.mkdirSync(config.DATABASE_CONFIG.DATABASE_FOLDER)
}

const doesTableExist = (table) => {
  const sql = `SELECT EXISTS (SELECT * from sqlite_master WHERE type = 'table' and name = ?)`
  const res = connection().prepare(sql).get(table)
  return !!res[Object.keys(res)]
}

const createRequiredTables = () => {
  getTableNames().forEach(e => {
    if(!doesTableExist()){
      const table = getTableData(e)
      createTable(table.name, table.schema)
    }
  })
}

const getTableData = (name) => {
  const tables = config.DATABASE_CONFIG.TABLES
  for (const table of Object.entries(tables)) {
    if (table[1].name.toLowerCase() === name.toLowerCase()) return table[1]
  }
  return false
}

const getTableNames = () => {
  const tables = config.DATABASE_CONFIG.TABLES
  let output = []
  for(const table of Object.entries(tables)) output.push(table[1].name)
  return output
}

const generateTableFromSchema = (tableColumns) => {
  let columns = []
  for(const [name, type] of Object.entries(tableColumns)){
    columns.push(`${name.toLowerCase()} ${type.toUpperCase()}`)
  }
  return `(${columns.join(", ")})`
}

const createTable = (name, columns) => {
  let tableString =  `CREATE TABLE IF NOT EXISTS ${name}`
  tableString += generateTableFromSchema(columns)
  connection().exec(tableString)
}