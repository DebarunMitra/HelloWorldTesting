module.exports = (app, db) => {
    // app.post("/", (req, res) => {
    //     const note = { text: req.body.text, title: req.body.title };
    //     db.collection('notes').insert(note, (err, result) => {
    //         if (err)
    //             console.log(err + " this error has occured");
    //         else
    //             console.log(result);
    //
    //     });
    //     res.status(200).send('Bon Jour');
    //
    // });

//get request
    app.get("/", (req, res) => {
      //res.send('<h1>Hello World</h1>');
        db.findOne({"restaurant_id":"40356649"}, (err, result) => {
            if (err)
                console.log(err + " this error has occured");
            else {
                res.send(result);
                console.log(result);
            }
        });
   });

//delete node
app.delete('/:id',(req,res)=>{
  db.deleteOne({"restaurant_id":req.params.id}, (err, result) => {
      if (err)
          console.log(err + " this error has occured to delete");
      else {
          console.log("delete Successfully");
      }
  });
});

//update node //30075445
app.put('/user/:id/:name/:restaurant_id',(req, res)=>{
	db.update({"restaurant_id": req.params.id},{
			   	  "name":req.params.name,
				  "restaurant_id": req.params.restaurant_id
        },(err, result)=>{
			 	if(err)
        console.log(err);
				else
        console.log('Update Successfully');
			 });
   });

app.post('/addRes/:id/:name/:cuisine',(req,res)=>{
  db.insert({
    "name":req.params.name,
    "restaurant_id":req.params.id,
    "cuisine":req.params.cuisine
  },(err,result)=>{
    if(err)
    console.log(err);
    else
    res.send('<h1>Restaurent Inserted Successfully</h1>');
    console.log('Insert Successfully');
  });
});
};
