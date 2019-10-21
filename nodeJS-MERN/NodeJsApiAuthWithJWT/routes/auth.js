const router=require('express').Router();
const User=require('../models/User');
const {registerValidation}=require('../validation');
const bcrypt=require('bcryptjs');


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
     res.send(savedUser);
   }catch(err){
     res.status(400).send('ERROR: '+err);
   }
});

module.exports=router;
