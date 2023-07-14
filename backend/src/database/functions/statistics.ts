import { Database } from "../database.js"

export const addHit = (slug: string) => {
    let sqlText = `
        UPDATE STATS
        SET hits = @hits
        WHERE slug = @slug
    `
    Database.getConn()
        .prepare(sqlText)
        .run({"slug":slug, "hits": getHitCount(slug)  + 1})
}

const addHitRecord = (slug: string) => {
    let startingVal = 0
    let sqlText = `
        INSERT INTO hits
        VALUE (@slug, @hits)
    `
    Database.getConn()
        .prepare(sqlText)
        .run({"slug": slug, "hits": startingVal})
    return startingVal
}
export const getHitCount = (slug: string): number => {
    let sqlText = `
        SELECT hits FROM STATS
        WHERE STATS = ?
    `
    let res = Database.getConn()
        .prepare(sqlText)
        .get(slug)

    if(res == 0) addHitRecord(slug)
    return typeof res == "number" ? res : 0
}