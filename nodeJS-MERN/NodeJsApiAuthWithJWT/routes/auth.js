const router=require('express').Router();

const User=require('../models/User');

//validation
const Joi=require('@hapi/joi');

const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};


router.post('/register', async (req,res)=>{//async wait until the data save into the db.
//  res.send('Register');
//validate the data before create new user
const { error } = registerValidation(req.body);
  if (error){
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
   }//validation returns a big data set, to get error msg, use {error}

  // const user=new User({
  //   name:req.body.name,
  //   email:req.body.email,
  //   password:req.body.password
  // });
  // try{
  //   const savedUser= await user.save();
  // //  console.log(savedUser);
  //   //console.log('success');
  //   res.send(savedUser);
  //  }catch(err) {
  //    res.status(400).send('ERROR: '+err);
  //  }
});

module.exports=router;
