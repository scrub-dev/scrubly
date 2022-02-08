import { connection } from "./connection.js"
import config from "../config.js"

export const addNew = (id, url) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_REDIRECTS.name
  const sql = `INSERT INTO '${table}' VALUES (@id, @url)`
  connection().prepare(sql).run({"id": id, "url": url})
}

export const lookup = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_REDIRECTS.name
  const sql = `SELECT url FROM '${table}' WHERE id = ?`
  return connection().prepare(sql).get(id) 
}

export const doesIDExist = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_REDIRECTS.name
  const sql = `SELECT EXISTS (SELECT * FROM '${table}' WHERE id = ?)`
  const res = connection().prepare(sql).get(id)
  return !!res[Object.keys(res)]
} 

export const getHitsCount = (id) => {
  if(!doesStatEntryExist(id)) createStatEntry(id)
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const sql = `SELECT hits FROM '${table}' WHERE id = ?`
  return connection().prepare(sql).get(id).hits
}

export const incrementHitsCount = (id) => {
  if(!doesStatEntryExist(id)) createStatEntry(id)
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const sql = `UPDATE '${table}' SET hits = @hits WHERE id = @id`
  const stmt = connection().prepare(sql)
  stmt.run({id: id, hits: getHitsCount(id) + 1})
}

const doesStatEntryExist = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const sql = `SELECT EXISTS (SELECT * FROM '${table}' WHERE id = ?)`
  const res = connection().prepare(sql).get(id)
  return !!res[Object.keys(res)]
}

const createStatEntry = (id) => {
  const table = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.name
  const schema = config.DATABASE_CONFIG.TABLES.TABLE_STATISTICS.schema
  const sql = `INSERT INTO ${table} VALUES ${generateFromSchemaWithoutTypeWithCharPrefix(schema, "@")}`
  console.log(sql)
  connection().prepare(sql).run({"id": id, "hits": 0})
}

const generateFromSchemaWithoutTypeWithCharPrefix = (tableColumns, prefix) => {
  const columns = []
  for (const [columnName] of Object.entries(tableColumns)) {
    columns.push(`${prefix}${columnName.toLowerCase()}`)
  }
  return ' ( ' + columns.join(', ') + ' )'
}

