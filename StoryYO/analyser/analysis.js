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
    this.grammar=new Object();
    this.sentenceCount=0;
    this.words=new Object();
  }
  grammerAndSpellCheck(){
    //console.log(story);
    //return story.replace(/<(?:.|\n)*?>/gm, '');
    let mainText=this.storyBody.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let sentencesNo=sen.length;
    // for(let i=0;i<sentencesNo;i++){
    //   this.grammar+=Gramma.check(sen[i]).then((value) => {
    //     console.log(value);
    //     //console.log(value.matches[0]);
    //     //let grammar=value.matches[0];
    //     //this.grammar={"matches":value.matches[0]};
    //       //  console.log(this.grammar.matches);
    //       return value.matches[0]
    //   });
    // }
  //  console.log(this.grammar);
    //return this.grammar;
    //return Promise.resolve(grammar).then((value) =>{console.log(value);return value;});
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
    return ((sentencesNo-1)+':'+(count-1)+':'+paragraphNo);
  }
  contentCheck(){

  }
  newWord(){
    return this.words;
  }
}

module.exports = Article;
