import fs from 'fs'


import config from './config.js'
import { log } from 'console'
import { errorPrint } from '../utility/print.js'


export const doesDBExist = () => fs.existsSync(config.DATABASE_DIR + config.DATABASE_NAME)

export const deleteDatabase = () => {fs.unlinkSync(config.DATABASE_DIR + config.DATABASE_NAME)}

const createDatabase = () => {
    fs.writeFileSync(config.DATABASE_DIR + config.DATABASE_NAME, '')
}

export const initialise = () => {
    createDatabase()
    getTableList().forEach(e => {
        log(e, getTableDetails(e))
    });
}
const getTableList = () => {
    return config.TABLES.map(e => e.name)
}

const createTable = () => {

}

const getTableDetails = (table: string) => {
    let foundTable = config.TABLES.filter(e => e.name == table)
    if(foundTable.length != 1) errorPrint(new Error("Invalid table operaion"))
    else return foundTable[0].columns
}
