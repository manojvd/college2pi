const express = require('express')
const router = express.Router()
const Clg = require('../models/clg')


router.get('/',async(req,res)=>{
    try{
        const clgs = await Clg.find().sort({"nirf":-1})
        res.json(clgs)
        console.log(clgs)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const clg = new Clg({
        name : req.body.name,
        rating : req.body.rating,
        nirf : req.body.nirf,
        fees : req.body.fees,
        logo : req.body.logo,
        place : req.body.place,
        course : req.body.course
    });

    try{
        const a1 = await clg.save()   
        res.json(a1)
    }catch(err){
        res.send("error" + err)
    }
})


module.exports = router
