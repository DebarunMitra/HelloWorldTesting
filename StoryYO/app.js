const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');

//load model
require('./models/User');

//passport config
require('./config/passport')(passport);

//load routes
const auth=require('./routes/auth');

//load keys
const keys=require('./config/keys');

//map global promises
mongoose.Promise=global.Promise;

//mongoose connection
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>console.log('MongoDB connected...')).catch((err) =>console.log(err));


const app=express();

app.get('/',(req,res)=>{
  res.send('Its Working');
});

//user routes
app.use('/auth',auth);

const port=process.env.PORT || 5020;

app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
})
