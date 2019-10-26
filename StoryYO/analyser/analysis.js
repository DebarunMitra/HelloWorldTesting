const Gramma = require("gramma");
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
  words(){

  }
  contentCheck(){

  }
  addNewWord(){
    
  }
}

module.exports = Article;
