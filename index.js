const express = require('express')
const app =express()
const configureDB = require('./config/database')
const port = 3076

app.use(express.json())

configureDB()

app.listen(port,()=>{
    console.log("server is running on ",port)
})