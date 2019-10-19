const express=require('express');
const expressLayouts=require('express-ejs-layouts');

const app=express();

//ejs
app.use(expressLayouts);
app.set('view engine','ejs');


//routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/users'));
//app.use('/',require('./routes/index'));


const PORT=5020;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
