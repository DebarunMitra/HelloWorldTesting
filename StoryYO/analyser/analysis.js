const Grammarbot = require('grammarbot');
const Gramma = require("gramma");


class Article{
  getStory(story){
    //console.log(story);
    //return story.replace(/<(?:.|\n)*?>/gm, '');
    let mainText=story.replace(/<(?:.|\n)*?>/gm, '');
    let sen=mainText.split('.');
    let sl=sen.length;
    console.log(sen[3]);
    console.log('No of sentences:'+(sl-1));
    Gramma.check('Ram is a good boy').then((value) => {
      //console.log(value);
      console.log(value.matches[0]);
    });
    // const bot = new Grammarbot({
    //   'api_key' : 'KS9C5N3Y',      // (Optional) defaults to node_default
    //   'language': 'en-US',         // (Optional) defaults to en-US
    //   'base_uri': 'api.grammarbot.io', // (Optional) defaults to api.grammarbot.io
    // });
    //
    // // Callback style
    //  bot.check(sen[4], function(error, result) {
    //    if (error){
    //      console.log(error);
    //    }
    //    else{
    //      console.log(JSON.stringify(result));
    //    }
    //  });

    // Async/Await style
    // const result =bot.checkAsync("I can't remember how to go their");
    // console.log(JSON.stringify(result));

  }
  grammar(result){
    return result;
  }
}

module.exports = Article;
