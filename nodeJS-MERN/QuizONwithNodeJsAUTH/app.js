const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');

const app=express();

//db config
const db=require('./config/keys').MongoURI;

//connection to mongodb
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>console.log('MongoDB Connected...'))
.catch((err) => {console.log(err);})

//ejs
app.use(expressLayouts);
app.set('view engine','ejs');


//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
//app.use('/',require('./routes/index'));


const PORT=5020;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
