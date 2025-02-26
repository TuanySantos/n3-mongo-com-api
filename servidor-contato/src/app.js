const express = require("express")
const app = express()

const database = require('./model/database')
database.connect()

// middleware
const bodyParser = require("body-parser")

//rotas
const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/contatos", contatos)
app.use(bodyParser.json())


module.exports = app
