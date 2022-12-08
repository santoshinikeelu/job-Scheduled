const axios = require('axios')
const model = require('./model')
const mongoose = require('mongoose')

const getCoin = async function(req,res){
    try{
        let option={
            method:"get",
            url:`https://api.coincap.io/v2/assets`
        }
        let result=await axios(option)
        let data = result.data.data
        data=data.sort((x,y)=>{
            return x.changePercent24Hr-y.changePercent24Hr
        })
        await model.deleteMany({})
        for(i=0;i<data.length;i++)
        var coins=await model.findOne({name:data[i].name},{symbol:data[i].symbol})
        if(!coins){
        var coinData = await model.insertMany(data)
        return res.status(200).send({status:true,msg:result.data})
        }
    }
    catch(err){
      return res.status(500).send({staus:false,message:"internal server error ",error:err.message})
    }
}

module.exports=getCoin