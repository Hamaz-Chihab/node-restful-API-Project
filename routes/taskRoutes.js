const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const Task = require('../models/Task');


router.get('/test',auth , (req , res)=>{
    res.json({
        message : 'task routes are working',
        user : req.user
    });
});
//CRUD tasks for authenticated users:

//create a task : 
router.post('/taskcreate',auth,async (req, res)=>{
    try{
        const task = new Task({
            ...req.body,
            owner : req.user._id
        });
        await task.save();
        res.status(201).json({taskn ,message:"Task Created Successfully"});
    }
    catch(err){
        res.status(400).send({error : err.message});
    }
});

//get User Task 
router.get('/gettask',auth,async(req, res)=>{
    try{
        const tasks = await Task.find({
            owner : req.user._id
        });
        res.status(200).json({tasks, count :tasks.length,message:"Tasks fetched Successfully"});
    }catch(err){
        res.status(500).send({error :err.message});
    }
});

//fetch a task by Id 
router.get('/:id',auth,async (req, res)=>{
    const taskid = req.params.id;
    
    try{
        const task = await Task.findOne({
            _id : taskid,
            owner  :req.user._id
        });
        if(!task){
            return res.status(400).json({message: "Task not found"});
        }
        res.status(200).json({task ,message :"Task fetched Successfully"});
    }catch(err){
        res.status(500).send({error :err.message});
    }
});
module.exports  = router;