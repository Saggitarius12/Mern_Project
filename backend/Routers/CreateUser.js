const express = require("express")
const router = express.Router();

const User = require('../models/User')

const{body,validationResult} = require('express-validator');

router.post("/createuser",[body('email','Incorrect email').isEmail(),body('name').isLength({min: 5}),body('password','Incorrect Password').isLength({min:5})],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
        await User.create({name:"Prem",password:"123456",email:"shyaamdas121@gmail.com",location:"India"})
    
    res.json({success:true})

    } catch(error){
        console.log(error)
        res.json({success:false});
    }
    
})

module.exports = router;

