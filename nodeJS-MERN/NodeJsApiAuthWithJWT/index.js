const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');


//import routes
const authRoute=require('./routes/auth');
//const postRoute=require('./routes/posts');



dotenv.config();

//db connect
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true,useUnifiedTopology: true},()=>console.log('DB connected...'));

//middleware
app.use(express.json());
app.use(bodyParser.json());


//route middleware
app.use('/api/user',authRoute);
//app.use('/api/posts',postRoute);//get auth-token


const PORT=5020;
app.listen(PORT,()=>console.log('Server up and running...'));
