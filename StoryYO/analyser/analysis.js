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
    let sl=sen.length;
    console.log(sen[3]);
    console.log('No of sentences:'+(sl-1));
    let grammar=Gramma.check('I have been work for 12 day.').then((value) => {
      //console.log(value);
      //console.log(value.matches[0]);
      //let grammar=value.matches[0];
      this.grammar={"matches":value.matches[0]};
          console.log(this.grammar.matches);
    });
    console.log(this.grammar);
  //  return grammar;
    //return Promise.resolve(grammar).then((value) =>{console.log(value);return value;});
  }
  wordSentences(){
    let count=0,senWordCount=0,paragraphNo;
    let mainText=this.storyBody.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let para=this.storyBody.split(/<(?:.)*?>/gm);
    paragraphNo=Math.floor(para.length/2);
  }
  contentCheck(){

  }
  newWord(){
    return this.words;
  }
}

module.exports = Article;
