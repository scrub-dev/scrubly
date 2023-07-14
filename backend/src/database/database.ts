import {default as db} from 'better-sqlite3'
import config from './config.js'
import {default as config_} from '../utility/config.js'
import { createDatabase, deleteDatabase, doesDBExist } from './initialise.js'
import { DEV_OPTIONS } from '../utility/config.js'
import { debugPrint, iniPrint } from '../utility/print.js'

export class Database {
    private static _database: db.Database

    private constructor(){}

    public static getConn = () => {
        if(!Database._database){
            this._database = new db(config.DATABASE_DIR + config.DATABASE_NAME)
            this._database.pragma("journal_mode = WAL")
        }
        return this._database
    }

    public static createDatabase = () => {
        if(!DEV_OPTIONS.PERSIST_DB && config_.DEV_MODE) {
            debugPrint("Removing previous database")
            deleteDatabase()
          }
          if(!doesDBExist()){
            iniPrint("Initalising database")
            createDatabase()
          }else iniPrint("Database already exists... skipping")
    }
}
