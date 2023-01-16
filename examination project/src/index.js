const express = require("express")
const mongoose = require("mongoose")
const Route=require("./router/router")
const multer = require("multer")
const app = express()

app.use(express.json())
app.use(multer().any())

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://santoshinikeelu:santoshini@cluster0.zhokymy.mongodb.net/examination`,{
    useNewUrlparser:true
})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log (err))
app.use("/",Route)

app.listen(process.env.PORT||3000,function(){
    console.log("express running on port:",process.env.PORT||3000)
})