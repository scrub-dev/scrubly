import express from "express";
import figlet from "figlet";
import { addNew, doesIDExist, lookup } from "./database/databaseConnection.js";
import { makeid } from "./makeid.js";
const app = express()
const port = 9000

const apiRegex = /api/
const redirectRegex = /r\/.+/


app.get(apiRegex, (req, res) => {
  if(!req.query.url) return res.json({status: "FAILED", message: "No URL Provided to create a link for!"})

  let id = ""
  if(req.query.customlink){
    if(doesIDExist(req.query.customlink)) return res.json({status: "FAILED", message: "Custom Link already exists!"})
    if(req.query.customlink.length < 0 || req.query.customlink.length > 16 ) return res.json({status: "FAILED", message: "Invalid Custom Link"})
    id = req.query.customlink
  }else{
    let uidFlag = false
    while(uidFlag === false){
      const tempID = makeid(5)
      if(!doesIDExist(tempID)) {
        uidFlag = true
        id = tempID
      }
    }
  }

  let url = req.query.url
  addNew(id, url)
  res.json({id: id, status: "SUCCESS"})
})

app.get(redirectRegex, (req, res) => {
  const x = lookup(req.path.substring(3))
  res.redirect(x.url)
})

app.listen(port, () => {
  console.log(figlet.textSync("Scrubly") 
  + "v0.1" 
  + "\nLink Shortner API Service" 
  + "\nRunning on Port: " + port)
})