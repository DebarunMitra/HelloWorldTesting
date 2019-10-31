const Gramma = require("gramma");
const mongoose=require('mongoose');
const User=mongoose.model('users');
const Story=mongoose.model('stories');
class Article{
  constructor(storyId,storyBody,title,topic){
    this.storyId=storyId;
    this.storyBody=storyBody;
    this.title=title;
    this.topic=topic;
    this.noWords=['is','are','am','have','had','was','were','be','been','can','could','shall','should','will','would'];
    this.wordCount=0;
    this.grammar=new Array();
    this.count=0;
    this.sentenceCount=0;
    this.words=new Object();
  }
  grammerAndSpellCheck(){
    //console.log(story);
    //return story.replace(/<(?:.|\n)*?>/gm, '');
    let mainText=this.storyBody.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    var promisValue;
    let sentencesNo=sen.length;
    for(let i=0;i<sentencesNo-1;i++){
    promisValue=Gramma.check(sen[i]).then((value)=>{
    //     console.log(value);
        if(value.matches[0]){
          this.collectMistakes(value.matches[0].message,value.matches[0].shortMessage,value.matches[0].word);
        }
                // console.log(this.grammar);
                return this.grammar;
      });
     }

    // console.log(promisValue);
     let result=promisValue.then((value)=>{console.log(value);});
     // let result=function(promisValue){
     //   return new Promise(function(resolve,reject) {
     //     setTimeout(function() {
     //       console.log('resolving...');
     //       resolve({data:promisValue})
     //     },1000);
     //   });
     // };
    console.log(result);
  }
  wordSentences(){
    let count=0,senWordCount=0,paragraphNo;
    let mainText=this.storyBody.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let para=this.storyBody.split(/<(?:.)*?>/gm);
    paragraphNo=Math.floor(para.length/2);
    let sentencesNo=sen.length;
    for(let i=0;i<sentencesNo;i++){
      let wordCount=sen[i].split(' ');
      count+=wordCount.length;
      for(let j=0;j<wordCount.length;j++){
         let key= wordCount[j].replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        if(!this.words.hasOwnProperty(key)){
          this.words[key]=1;
        }
        else if(this.words.hasOwnProperty(key)){
          let keyValue=this.words[key];
          keyValue+=1;
          this.words[key]=keyValue;
        }
       }
    }
    //  console.log(this.words);
  //  console.log(Object.keys(this.words).length);
    this.wordCount=count-1;
    this.sentenceCount=sentencesNo-1;
    let point=this.point(this.sentenceCount,this.wordCount,paragraphNo);
  //  console.log(point);
    return ((sentencesNo-1)+':'+(count-1)+':'+paragraphNo+':'+point);
  }
  collectMistakes(description,issueType,word){
    //console.log(description+','+issueType+','+word);
    this.grammar[this.count]={"description":description,"issueType":issueType,"word":word};
  //  console.log(this.grammar[this.count]);
    this.count+=1;
  }
  getMistakes(){
    console.log(this.grammar);
    return this.grammar;
  }
  newWord(){
    return this.words;
  }
  point(sen,word,para){
    let time=((word/200)*60 + (word/130)*60)/2;
    let avgWordPerSen=(Object.keys(this.words).length)/sen;
    let paraPoint=avgWordPerSen*para;
    let totalPoint=time+avgWordPerSen+paraPoint;
    //console.log((time+avgWordPerSen+paraPoint));
    return totalPoint.toFixed(3);
  }
}

module.exports = Article;
