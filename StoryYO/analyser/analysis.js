const Gramma = require("gramma");
class Article{
  grammerAndSpellCheck(story){
    //console.log(story);
    //return story.replace(/<(?:.|\n)*?>/gm, '');
    let mainText=story.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let sl=sen.length;
    console.log(sen[3]);
    console.log('No of sentences:'+(sl-1));
    Gramma.check('I have been work for 12 day.').then((value) => {
      //console.log(value);
      console.log(value.matches[0]);
    });
  }
  grammar(result){
    return result;
  }
}

module.exports = Article;
