const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/' , (req , res)=>{
    res.send('User routes are working')
});

//register a user :
router.post('/register',async(req, res)=>{
    try{
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save(); 
        res.status(201).send({user , message: "User Created seccessfully"});
    }catch (err) {
        console.log(err);
        console.log(req.body);
        res.status(400).send({error: err.message});
    }
});


//login a user 
router.post('/login',async(req, res)=>{
   try{
    const {name, email, password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        throw new Error('Unable to login , invalid credentials');
    }
   
    const isMatch = await bcrypt.compare(password, user.password);//compared the password provided with the hashed password saved in Data Base 
   
    if (!isMatch){
        throw new Error('Unable to login , invalid credentials');
    }

    const token = jwt.sign({
        _id: user._id.toString()
    },process.env.JWT_SECRET_KEY);

    res.send({user,token, massage :"logged in successfully"});
    }
    catch (err){
        console.log(err);
        res.status(400).send({error: err.message});
    }
});


module.exports  = router;