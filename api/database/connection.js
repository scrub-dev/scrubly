import Database from 'better-sqlite3'
import config from '../config.js'

export const connection = () => {return new Database('./database/db.db')}

export const addNew = (id, url) => {
  const sql = `INSERT INTO redirects VALUES (@id, @url)`
  const stmt = connection().prepare(sql)
  stmt.run({"id": id, "url": url})
}

export const lookup = (id) => {
  const sql = `SELECT url FROM redirects WHERE id = ?`
  return connection().prepare(sql).get(id) 
}

export const doesIDExist = (id) => {
  const sql = `SELECT EXISTS (SELECT * FROM redirects WHERE id = ?)`
  const res = connection().prepare(sql).get(id)
  return !!res[Object.keys(res)]
} 

const getHitsCount = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const sql = `SELECT hits FROM ${table} WHERE id = ?`
  return connection().prepare(sql).get(id).hits
}

export const incrementHitsCount = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const sql = `UPDATE ${table} SET hits = @hits WHERE id = @id`
  const stmt = connection().prepare(sql)
  stmt.run({id: id, hits: getHitsCount(id) + 1})
}

