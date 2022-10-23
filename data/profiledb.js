const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')


router.get('/',async(req,res)=>{
    try{
        const profiles = await Profile.find()
        res.json(profiles)
    }catch(err){
        res.send('Error' + err)
    }
})


module.exports = router
