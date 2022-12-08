
const express= require('express')
const mongoose = require('mongoose')
const Router= express()
const controller= require('../controller')


Router.get("/coin",controller)

module.exports=Router