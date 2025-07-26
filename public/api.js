const express = require("express")
const cors = require("cors")
const path = require("path");
const fs = require("fs")

const commonRouter = require(path.resolve(__dirname, "../router/common_user/index.js"))
        
const app = express()

const SERVER_PORT = 3000
 
app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "../app/view/"))

app.use("/public", express.static(__dirname))

app.use("/client", commonRouter)

app.get("/", (req, res) => {
    res.render("home/index");
})

app.get("/api-docs", (req, res) => {
    res.render("documentation/index");
})


app.get("/404", (req, res) => {
    res.status(404).json({message: "Page not found!", info: "Hello! My name is Eugenio, i have created this mini API for getting most or all of contries in the wold, \n I special created this API Server for my country `Mozambique`"})
})


app.use((req, res) =>{
    res.redirect("/404")
}) 

app.listen(SERVER_PORT, () => { 
    console.log("Servidor rodando...");
})

