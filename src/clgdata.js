const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/college2pidb'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected..')
})

app.use(express.json())

const clgdataRouter = require('../data/clgdb')
app.use('/', clgdataRouter)

const profiledataRouter = require('../data/profiledb')
app.use('/profiledb', profiledataRouter)

app.listen(3000,()=>{
    console.log('Server started')
})



