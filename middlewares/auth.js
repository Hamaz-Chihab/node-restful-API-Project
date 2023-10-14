const jwt = require('jsonwebtoken');//to compare the token we get from the API call
const User = require('../models/User.js');//to check the ID avaliable in the token

const auth = async(req ,res, next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        // if (req.headers.authorization) {
        //     const token = req.headers.authorization.split(' ')[1];
        //     // const token = req.header('Authorization').replace('Bearer','');//this is an Invalid token format

        //     // rest of your code
        // } else {
        //     res.status(401).send({ error: 'Authorization header is missing' });
        // }
        // const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user = await User.findOne({//extract the ID from decoded-object 
            _id: decoded._id,
        })
        if(!user){
            throw new Error('Unable to login , invalid credentials');
        }

        req.user = user;
        req.token = token;
        next();
    } catch (err){
        console.log(err);
        res.status(401).send({error: err.message});
    }
}
module.exports = auth ;