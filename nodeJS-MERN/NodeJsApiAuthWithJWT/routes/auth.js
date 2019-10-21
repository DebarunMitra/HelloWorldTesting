const router=require('express').Router();
const User=require('../models/User');
const {registerValidation,loginValidation}=require('../validation');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


router.post('/register', async (req,res)=>{//async wait until the data save into the db.
//  res.send('Register');
//validate the data before create new user
  const { error } = registerValidation(req.body);
  if (error){
    //console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
   }//validation returns a big data set, to get error msg, use {error}
   // else{
   //   res.status(200).send('success');
   // }

const emailExist= await User.findOne({email:req.body.email});
  if(emailExist) return   res.status(400).send('Email alrady exists');

//hash password
const salt=await bcrypt.genSalt(10);
const hashPassword=await bcrypt.hash(req.body.password,salt);

   //create a new user
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword
  });
  try{
    const savedUser= await user.save();
  //  console.log(savedUser);
    //console.log('success');
    // res.send(savedUser);
    res.send({user:user._id});
   }catch(err){
     res.status(400).send('ERROR: '+err);
   }
});

router.post('/login', async (req,res)=>{
  const { error } = loginValidation(req.body);
  if (error){  res.status(400).send(error.details[0].message); }

  const user= await User.findOne({email:req.body.email});

  if(!user) return   res.status(400).send('User not found...');
  const validPass=await bcrypt.compare(req.body.password,user.password);
  if(!validPass) return res.status(400).send('Invalid Password');

  //auth-token generate
  const token=jwt.sign({_id: user._id},process.env.TOKEN_KEY);
  res.header('auth-token',token).send(token);


  //res.send('Logged In...');
});


//module.exports=router;//shift to posts.js
