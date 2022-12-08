const express = require('express')
const route = require('./routes/route')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://santoshinikeelu:santoshini@cluster0.zhokymy.mongodb.net/test",{
    useNewUrlParser:true
})


.then(()=>console.log("mongoDB is connected"))
.catch((err)=>console.log(err.message))

app.use('/',route)

app.listen(process.env.PORT||3000,function(){
    console.log("express running on PORT :",process.env.PORT||3000)
})
