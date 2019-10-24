const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const User=mongoose.model('users');
const Story=mongoose.model('stories');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

// Stories Index
router.get('/', (req, res) => {
//  res.render('stories/index');
Story.find({status:'public'}).populate('user').then(stories=>{
  res.render('stories/index',{
    stories:stories
  });
  });
});

// Add Story Form
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('stories/add');
});

//process add Story
router.post('/',(req,res)=>{
  //console.log(req.body);
  let allowComments;
  if(req.body.allowComments){
    allowComments=true;
  }else{
    allowComments=false;
  }
  //story object created
  const newStory={
    title:req.body.title,
    body:req.body.body,
    status:req.body.status,
    allowComments:allowComments,
    user:req.user.id
  };
  //save story object into the db
    new Story(newStory).save().then((story) => {
      res.redirect(`/stories/show/${story.id}`);
      console.log(story.id);
    }).catch((err) =>console.log('Story Error:'+err));
});

module.exports = router;
