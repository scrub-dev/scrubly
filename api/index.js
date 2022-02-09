import express from "express";
import figlet from "figlet";
import config from "./config.js";
import { addNew, doesIDExist, incrementHitsCount, lookup, getHitsCount } from "./database/functions.js";
import { initialise } from "./database/initialise.js";
import { makeid } from "./makeid.js";
import { newLogMessage } from "./utils.js";
const app = express()

const apiRegex = /api/
const redirectRegex = /r\/.+/
const statisticsRegex = /stats\/([a-z]+)?/i

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
  newLogMessage(`NEW-${id}-${url}`, 'new')
  res.json({id: id, status: "SUCCESS"})
})

app.get(redirectRegex, (req, res) => {
  const x = lookup(req.path.substring(3))
  if(x === undefined) return res.send("<h1>Invalid Link</h1>")
  incrementHitsCount(req.path.substring(3))
  newLogMessage(`HIT-${req.path.substring(3)}-${x.url}`, 'hit')
  res.redirect(x.url)
})

app.get(statisticsRegex, (req, res) => {
  res.json({hits: getHitsCount(req.path.substring(7))})
})

app.listen(config.port, () => {
  console.log(figlet.textSync(config.name) 
  + "v" + config.version 
  + "\n[ API ] Link Shortner API Service" 
  + "\n[ API ] Running on Port: " + config.port)

  initialise()
})