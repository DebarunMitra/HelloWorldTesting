const path=require('path');//to access public directory
class Question
{
  constructor(count){
    this.count=count;
    this.qno=[];
    this.questions=[];
    this.point=0;
  }
  randomQueSet(qsetId,question,length){
    let no=Math.floor(Math.random() * (length-1));
    if(!this.qno.includes(no) && no>0)
    {
      this.qno.push(no);
        let q=question.filter(item => item.qid===no).map((qset) => {
        this.questions[this.count-1]={"q":qset.question,"a":qset[1],"b":qset[2],"c":qset[3],"d":qset[4],"qset":qsetId,"qid":qset.qid};
      });
        this.count-=1;
        if(this.count===0){
          return this.questions;
        }
        if(this.count>0){
           return this.randomQueSet(qsetId,question,length);
         }
    }else {
        return this.randomQueSet(qsetId,question,length);
    }
  }
  checkAns(qsetId,question,length,uans,ual){
    if(ual===-1){
     return this.point;
    }
    else{
      if(uans[ual]!==null){
        let uaQid=uans[ual].qid,uaAns=uans[ual].ans;
        this.point=question.filter(item => item.qid===uaQid).map((qset)=>{
         if(qset.ans===uaAns){
              this.point+=1;ual-=1;
              return this.checkAns(qsetId,question,length,uans,ual);
         }
         else{
             ual-=1;
             return this.checkAns(qsetId,question,length,uans,ual);
           }
        });
        return this.point;
      }
      else {
        ual-=1;
        return this.checkAns(qsetId,question,length,uans,ual);
      }
    }
  }
}
module.exports = (app, db) => {
  var noq=8,topic;

  //select Question set


  //randon question answar set
  app.post('/ranQue',(req,res)=>{
    //console.log(req.body.topic);
              let dbVal;
              topic=req.body.topic;
              db.find({"q_set":topic},{projection:{"_id":0,"questions":1}},(err, result) => {
                   (err===true)?console.log(err + " this error has occured"):(dbVal=result.toArray());
              });
              dbVal.then(que=>{
              let question=que[0].questions;
              const qno=new Question(noq);
              let len=que[0].questions.length,no=0;
              let getQandO=qno.randomQueSet(topic,question,len);
              //console.log(JSON.stringify(getQandO));
              res.send(JSON.stringify(getQandO));
            });
          });

  //check answer
  app.post('/checkAns',(req,res)=>{
    let reqData=req.body;
    topic=reqData[0].q_set;
    if(reqData){
      let userAns;
      db.find({"q_set":topic},{projection:{"_id":0,"questions":1}},(err, result) => {
           (err===true)?console.log(err + " this error has occured"):(userAns=result.toArray());
      });
        userAns.then(que=>{
        let question=que[0].questions;
        const qno=new Question(noq);
        let len=que[0].questions.length,no=0;
        let point=qno.checkAns(topic,question,len,reqData,reqData.length-1);
       res.send(String(point));
      });
    }
  });
};
