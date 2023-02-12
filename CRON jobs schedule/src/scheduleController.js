const jobModel = require("./jobModel")
const cron = require('node-cron')
const Moment = require("moment")

//create schedule
const createSchedule = async function (req, res) {
    try {
        const { text, DateTime } = req.body
        // if (!text) {
        //     return res.status(200).send({ status: false, data: "please provide data" })
        // }
        const data = await jobModel.create( {text,DateTime:cron.schedule('5 * * * * *',()=>{
            console.log( Moment().format("DD MM YYYY  hh:mm:ss"))
        })} )
        return res.status(201).send({ status: true, data: "data created succesfully", data })
    }
    catch (err) {
        return res.status(500).send({ status: false, data: err.message })
    }
}

//get schedule

const getSchedule = async function(req,res){
    try{
const {text} = req.query
const data = await jobModel.find({text})
return res.status(200).send({status:true,data:data})
    } 
    catch(err){
        return res.status(500).send({status:false,data:err.message})
    }
}

module.exports = {
    createSchedule,getSchedule
}