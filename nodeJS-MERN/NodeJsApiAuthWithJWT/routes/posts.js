const router=require('express').Router();

const verify=require('./verifyToken');

//router.get('/',(req,res)=>{
router.get('/', verify ,(req,res)=>{
  res.send(req.user);//check the user id & token form auth-token
  //User.findOne({_id:req.user})----using query we can find the user data also...
  // res.json({
  //   posts:{
  //     title:'my first post',
  //     discripthion:'random data you should not access'
  //   }
//  });
});

module.exports=router;
