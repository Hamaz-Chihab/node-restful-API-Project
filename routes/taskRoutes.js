const express = require('express');
const router = express.Router();


router.get('/' , (req , res)=>{
    res.send('task routes are working')
});

//CRUD tasks


module.exports  = router;