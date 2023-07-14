import { Database } from "../database.js"

export const createLink = (slug: string, link: string) => {
    let sqlText = `
        INSERT INTO REDIRECTS
        VALUES (@slug, @link)
    `
    Database.getConn()
        .prepare(sqlText)
        .run({"slug":slug, "link":link})
}
export const slugExists = (slug: string) => {
    let sqlText = `
        SELECT COUNT(1)
        FROM REDIRECTS
        WHERE slug = ?`
    return Database.getConn()
        .prepare(sqlText)
        .get(slug)
}
export const getLinks = () => {
    let sqlText = `
        SELECT * FROM REDIRECTS
    `
    return Database.getConn()
        .prepare(sqlText)
        .get()
}