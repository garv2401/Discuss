const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:Number
})

export const User=mongoose.model('User',UserSchema);
export default User;