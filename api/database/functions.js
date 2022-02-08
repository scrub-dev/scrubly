import { connection } from "./connection.js"
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

