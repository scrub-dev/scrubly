import fs from 'fs'
import {Database} from './database.js'

import config from './config.js'
import {errorPrint, iniPrint } from '../utility/print.js'


export const doesDBExist = () => fs.existsSync(config.DATABASE_DIR + config.DATABASE_NAME)
export const deleteDatabase = () => {fs.unlinkSync(config.DATABASE_DIR + config.DATABASE_NAME)}
const createDatabaseFile = () => fs.writeFileSync(config.DATABASE_DIR + config.DATABASE_NAME, '')
const getTableList = () => config.TABLES.map(e => e.name)

export const createDatabase = () => {
    createDatabaseFile()
    getTableList().forEach(e => createTable(e, getTableDetails(e)));
}

const createTable = (tableName: string, tableDetails: string[][] | undefined) => {
    if(!tableDetails) return

    let columns = []
    for (let [name, type] of tableDetails){
        columns.push(`${name.toLowerCase()} ${type.toUpperCase()}`)
    }
    let columnString = `(${columns.join(", ")})`

    let tableString = `CREATE TABLE IF NOT EXISTS ${tableName} ${columnString}`
    Database.getConn().exec(tableString)
    iniPrint(`Creating Table: ${tableName}`)
}

const getTableDetails = (table: string) => {
    let foundTable = config.TABLES.filter(e => e.name == table)
    if(foundTable.length != 1) errorPrint("Invalid table operation")
    else return foundTable[0].columns
}
