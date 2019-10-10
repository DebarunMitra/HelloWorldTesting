class Question
{
  constructor(count){
    this.count=count;
    this.qno=[];
    this.questions=[];
  }
  randomNumber(question,length){
    let no=Math.floor(Math.random() * (length-1));
    if(!this.qno.includes(no) && no>0)
    {
      this.qno.push(no);
        //console.log("ranDom: "+no);
        let q=question.filter(item => item.qid===no).map((qset) => {
        //this.questions.push(qset.question)
      //  console.log({"q":qset.question,"a":qset[1],"b":qset[2],"c":qset[3],"d":qset[4],"qset":'per',"qid":qset.qid});
        this.questions[this.count-1]={"q":qset.question,"a":qset[1],"b":qset[2],"c":qset[3],"d":qset[4],"qset":'per',"qid":qset.qid};
      });
        this.count-=1;
        if(this.count===0){
          console.log(this.questions);
          return
        }
         if(this.count>0){
           //console.log("count: "+this.count);
           this.randomNumber(question,length);
         }
      //return no;
    }
    else {
      //console.log("ranDom repeat");
      //console.log("repeat: "+no);
      //return this.randomNumber(number-1);
      this.randomNumber(question,length);
    }
  }
}
module.exports = (app, db) => {
  let noq=10;
//  get random questions
app.get('/ranQue',(req,res)=>{
    //let getQandO=[];
            //for(let i=1;i<=noq;i++){}
              let dbVal;
              db.find({"q_set":"per"},{projection:{"_id":0,"questions":1}},(err, result) => {
                   (err===true)?console.log(err + " this error has occured"):(dbVal=result.toArray());
              });
              dbVal.then(que=>{
              let question=que[0].questions;
              const qno=new Question(noq);
              let getQandO=[],len=que[0].questions.length,no=0;
              let num=qno.randomNumber(question,len);
              // question.slice(0,10).filter(item=>{
              //   let num=qno.randomNumber(len);
              //   console.log("num: "+num);
              //   return (item.qid===num);
              // }).map(qset => {console.log(qset);});
            });
          });

  //check answer
  app.post('/checkAns',(req,res)=>{
    let point=0;
      let reqData=req.body;
      for(let i=0;i<noq;i++){
            if(reqData[i].ans!==null && reqData[i].q_set!==null && reqData[i].qid!==null && reqData[i].opid!==null){
              db.findOne({"q_set":reqData[i].q_set},{projection:{"_id":0,"questions":{$elemMatch:{"qid":reqData[i].qid}}}},(err,result)=>{
                if (err)
                    console.log(err + " this error has occured");
                else {
                  let qans=result.questions[0];
                        if(qans.ans===reqData[i].ans)
                        {
                         point+=1;
                         console.log(point);
                        }
                        if(i===noq-1)
                        {
                        res.send(String(point));
                        console.log("p"+point);
                        }
                }
              });
            }
            console.log("i: "+i);
      }
  });
};
