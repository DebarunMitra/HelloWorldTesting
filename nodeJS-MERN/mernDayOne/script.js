const express=require('express');
const mongodb=require('mongodb').MongoClient;
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

const db=require('./config/db');

const path=require('path');//to access public directory

app.use(express.urlencoded({extended:true}));
app.use(express.json());


/*database connection 1 start*/
// mongodb.connect(db.url,{
//   useNewUrlParser:true, useUnifiedTopology: true
// }).then(()=>{
//   console.log('Database Connected Successfully');
// }).catch((err) => {
//   console.log('Unable to connect with Database',err);
// });
/*database connection 1 stop*/


const port=5020;

app.use(cors());//initializing cors middleware
app.use(bodyParser.json());//initializing bodyParser middleware


// const PostRoutes=require('./routesJs/apiJs/post');
// app.use('/api/posts',PostRoutes);

//console.log(PostRoutes);

// app.listen(port,()=>{
//   console.log('Server stared on port: ', port);
// });

/*database connection 2 stop*/

mongodb.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err)
        return console.log(err);
    const database =db.db("restaurant").collection("rest-collection");
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('Wabba dubba lub dub');
    });
});
//cmd global package to auto run the script: sudo npm install nodemon -g
/*database connection 2 stop*/

/*initialize public directory*/
// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'public/index.html'));
// });
