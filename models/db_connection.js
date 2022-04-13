const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb connection established successfully.."))
.catch(err => console.log(err))