const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create Schema
const UserSchema=new Schema({
  googleID:{
    type:String,
    required:true//here it is true, if I have other then it is false
  },
  email:{
    type:String,
    required:true
  },
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  images :{
    type:String
  }
});

mongoose.model('users',UserSchema);
