const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const passport=require('passport');

//user model
const User=require('../models/User');


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
      errors,name,email,password,password2/*{name:name,emsil:email,password:password,password2:password2}, we are using shorthand*/
    });
  }
  else{
    //res.send('pass');
    //validation passed
    User.findOne({email:email}).then(user=>{
      if(user){
        //user exist
            errors.push({msg:'User Already registered'});
            res.render('register',{
              errors,name,email,password,password2
            });
      }else{
        const newUser=new User({
          name,email,password
        });
      //  console.log(newUser);
      //  res.send('hello newUser');
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                req.flash('success_msg','You are now registered and can log in');
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

//login handeler
router.post('/login', (req, res, next) => {
 passport.authenticate('local', {
   successRedirect: '/dashboard',
   failureRedirect: '/users/login',
   failureFlash: true
 })(req, res, next);
});

// Logout handeler
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});


module.exports=router;
