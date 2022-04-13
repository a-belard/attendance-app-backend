const express = require('express');
const cors = require('cors');
const app  = express()
require("dotenv").config()
require("./models/db_connection")

app.use(cors())
app.use(express.urlencoded({limit:"50mb", extended:"true"}))
app.use(express.json({limit:"50mb"}))

app.listen(process.env.PORT || 5000, console.log("Server running on port " + process.env.PORT ))