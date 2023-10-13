const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {type:String , require: true},
    email: {type:String,require:true,unique:true},
    password: {type:String,require:true}
});//define the user attributes

userSchema.pre('save',async function(next){  // sets up a pre-save hook on the userSchema
    const user = this ;//'this' refers to the user document that's about to be saved

    if(user.isModified('password')){  //checks if the password field on the user document has been modified.
        user.password = await bcrypt.hash(user.password,8);  //hashes the new password using bcrypt
    //await :This allows you to work with the result of the asynchronous operation(the hashing) after it has completed.
    }
    next();
});
const User = mongoose.model('User',userSchema);
module.exports = User;
