import Database from 'better-sqlite3'

const connection = () => {

  const db = new Database('./database/db.db')
  return db
}

export const addNew = (id, url) => {
  const sql = `INSERT INTO redirects VALUES (@id, @url)`
  const stmt = connection().prepare(sql)
  stmt.run({
    "id": id,
    "url": url
  })
}

export const lookup = (id) => {
  const sql = `SELECT url FROM redirects WHERE id = ?`
  return connection().prepare(sql).get(id) 
}

export const test = () => {
  const sql = `SELECT * FROM sqlite_master`
  console.log(connection().prepare(sql).all())
}