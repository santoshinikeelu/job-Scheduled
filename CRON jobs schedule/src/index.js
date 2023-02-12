const express = require('express')
const cors = require("cors")
const Route = require("./route/routes")
const mongoose = require("mongoose")
const Moment = require("moment")




const app = express()
app.use(express.json())
app.use('*',cors())

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://santoshinikeelu:santoshini@cluster0.zhokymy.mongodb.net/jobSchedule`,{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',Route)

app.listen((process.env.PORT || 3000), function () {
    console.log("express app running on port : " + (process.env.PORT || 3000))
})
