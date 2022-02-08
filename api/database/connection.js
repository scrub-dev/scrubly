import Database from 'better-sqlite3'

export const connection = () => {return new Database('./database/db.db')}