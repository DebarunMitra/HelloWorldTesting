const router=require('express').Router();

const User=require('../models/User');

router.post('/register', async (req,res)=>{//async wait until the data save into the db.
//  res.send('Register');
//console.log(req);
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  });
  try{
    const savedUser= await user.save();
  //  console.log(savedUser);
    //console.log('success');
    res.send(savedUser);
   }catch(err) {
     res.status(400).send('ERROR: '+err);
   }
});

module.exports=router;
