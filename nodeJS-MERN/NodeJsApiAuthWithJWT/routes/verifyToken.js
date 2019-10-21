const jwt=require('jsonwebtoken');
//function auth(req,res,next){
module.exports=function (req,res,next){//import it in posts
  const token=req.header('auth-token');
  if(!token) return res.status(401).send('Access Denied');
  try{
    const verified=jwt.verify(token,process.env.TOKEN_KEY);
    req.user=verified;
    next();
  }
  catch(err){
      if(!token) return res.status(400).send('Invalid Token');
  }
}
