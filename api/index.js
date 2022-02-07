import express from "express";
import { addNew, lookup } from "./database/databaseConnection.js";
import { makeid } from "./makeid.js";
const app = express()
const port = 9000

const apiRegex = /api/
const redirectRegex = /r\/.+/


app.get(apiRegex, (req, res) => {
  if(!req.query.url) res.send("NO URL")
  let id = makeid(5)
  let url = req.query.url
  console.log(id)
  addNew(id, url)
  res.send(id)
})

app.get(redirectRegex, (req, res) => {
  const x = lookup(req.path.substring(3))
  console.log(x.url)
  res.redirect(x.url)
})

app.listen(port, () => {
  console.log(`API is Running: ${port}`)
})