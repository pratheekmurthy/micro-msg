const express = require('express')
const configureDB = require('./config/database')
const router = require('./config/routes')
var cors = require('cors');
const app =express()
const port = 3076

app.use(express.json())
app.use(cors())

configureDB()
app.use(router)



app.listen(port,()=>{
    console.log("server is running on ",port)
})