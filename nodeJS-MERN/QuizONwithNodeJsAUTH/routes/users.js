const express=require('express');
const router=express.Router();

//login page
router.get('/login',(req,res)=>res.render('login'));//res.send('Login')

//registration page
router.get('/register',(req,res)=>res.render('register'));

//register handle
router.post('/register',(req,res)=>{
  console.log(req.body);
  res.send('Data Send!');
});

module.exports=router;
