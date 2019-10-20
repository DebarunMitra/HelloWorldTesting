const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');

const app=express();

//passport config
require('./config/passport')(passport);

//db config
const db=require('./config/keys').MongoURI;

//connection to mongodb
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>console.log('MongoDB Connected...'))
.catch((err) => {console.log(err);})

//ejs
app.use(expressLayouts);
app.set('view engine','ejs');

//bodyparser
app.use(express.urlencoded({extended: true}))

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());


//connect flash
app.use(flash());

//global variavle
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
//app.use('/',require('./routes/index'));


const PORT=5020;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
