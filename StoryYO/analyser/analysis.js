const Gramma = require("gramma");
const mongoose=require('mongoose');
const User=mongoose.model('users');
const Story=mongoose.model('stories');
class Article{
  constructor(storyBody,title,topic){
    this.storyBody=storyBody;
    this.title=title;
    this.topic=topic;
  }
  grammerAndSpellCheck(){
    //console.log(story);
    //return story.replace(/<(?:.|\n)*?>/gm, '');
    let mainText=this.storyBody.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let sl=sen.length;
    console.log(sen[3]);
    console.log('No of sentences:'+(sl-1));
    Gramma.check('I have been work for 12 day.').then((value) => {
      //console.log(value);
      console.log(value.matches[0]);
    });
  }
  wordSentences(){

  }
  contentCheck(){

  }
  newWord(){

  }
}

module.exports = Article;
