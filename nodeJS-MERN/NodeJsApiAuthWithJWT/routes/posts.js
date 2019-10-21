const router=require('express').Router();

router.get('/',(req,res)=>{
  res.json({
    posts:{
      title:'my first post',
      discripthion:'random data you should not access'
    }
  });
});

module.exports=router;
