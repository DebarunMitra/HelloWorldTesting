//All CRUD operations are done here
const express=require('express');
const router=express.Router();

const Post=require('../../modelJs/Post');

//all the post
router.get('/',(req,res,next)=>{
  Post.find()
  .then((posts)=>{
    res.json(posts);
  })
  .catch(err=>console.log(err))
});

router.post('/add',(req,res,next)=>{
  const title=req.body.title;
  const body=req.body.body;
  let newPost=new Post({
    "title":"title",
    "body":"body"
  });
  newPost.save()
  .then(post=>res.json(post))
  .catche(err=>console.log(err));
})


module.exports=router
