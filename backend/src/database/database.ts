import {default as db} from 'better-sqlite3'
import config from './config.js'

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
}
