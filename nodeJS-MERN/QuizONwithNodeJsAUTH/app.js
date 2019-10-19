const express=require('express');
const app=express();

//routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/users'));
//app.use('/',require('./routes/index'));


const PORT=5020;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
