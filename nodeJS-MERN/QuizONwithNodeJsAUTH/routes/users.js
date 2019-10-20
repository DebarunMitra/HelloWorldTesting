const express=require('express');
const router=express.Router();

//login page
router.get('/login',(req,res)=>res.render('login'));//res.send('Login')

//registration page
router.get('/register',(req,res)=>res.render('register'));

//register handle
router.post('/register',(req,res)=>{
  //console.log(req.body);
  //res.send('Data Send!');
  const {name,email,password,password2}=req.body;
  let errors=[];

  //check required fields
  if(!name || !email || !password || !password2){
    errors.push({msg:'Please enter all fiends'});
  }
  //password check
  if(password!==password2){
    errors.push({msg:'Passwords are not match'});
  }
  //check pass length
  if(password.length<6){
    errors.push({msg:'Passwords should be  at least  6 charecters'});
  }

  if(errors.length>0){
    res.render('register',{
      errors,name,email,password,password2
    });
  }
  else{
    res.send('pass');
  }
});

module.exports=router;
