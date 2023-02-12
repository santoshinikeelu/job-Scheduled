const express = require("express")
const route = express.Router()
const ScheduleController = require("../scheduleController")

//create schedule
route.post("/createSchedule",ScheduleController.createSchedule)

//get schedule
route.get("/getSchedule",ScheduleController.getSchedule)

//some error path
route.all('/*',function(req,res){
    return res.status(400).send({status:false,msg:"Please give right path"})
})

module.exports = route