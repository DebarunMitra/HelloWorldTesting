const path=require('path');//to access public directory
const mongoose = require('mongoose');
const Questions = mongoose.model('questions');
const Question=require('./Question');
module.exports = (app, db) => {
  var noq=8,topic;

  app.post('/registration',(req,res)=>{
    console.log(req.body);

    res.send(JSON.stringify(req.body));
  });

  //randon question answar set
  app.post('/ranQue',(req,res)=>{
              var dbVal;
              topic=req.body.topic;
              Questions.find({"q_set":topic},{"_id": 0,"questions": 1},(err,result)=>{
                if(err===true)
                  console.log(err + " this error has occured");
                  else {
                    let question=result[0].questions;
                    const qno=new Question(noq);
                    let len=result[0].questions.length;
                    let getQandO=qno.randomQueSet(topic,question,len);
                    //console.log(JSON.stringify(getQandO));
                    res.send(JSON.stringify(getQandO));
                  }
              });
          });

  //check answer
  app.post('/checkAns',(req,res)=>{
    let reqData=req.body;
    topic=reqData[0].q_set;
    if(reqData){
      let userAns;
      Questions.find({"q_set":topic},{"_id":0,"questions":1},(err, result) => {
        if(err===true)
          console.log(err + " this error has occured");
          else {
            let question=result[0].questions;
            const qno=new Question(noq);
            let len=result[0].questions.length;
            let pointAns=qno.checkAns(topic,question,len,reqData,reqData.length-1);
            //console.log(pointAns);
            res.send(JSON.stringify(pointAns));
          }
      });
    }
  });
};
