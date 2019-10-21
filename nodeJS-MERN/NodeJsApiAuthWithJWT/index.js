const express=require('express');
const app=express();


//import routes

const authRoute=require('./routes/auth');

//route middleware
app.use('/api/user',authRoute);


const PORT=5020;
app.listen(PORT,()=>console.log('Server up and running...'));
