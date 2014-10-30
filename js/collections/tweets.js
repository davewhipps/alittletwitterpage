ALittleTwitterApp.Collections.Tweets = Backbone.Collection.extend({
  model: ALittleTwitterApp.Models.Tweet,
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=30&screen_name=',
  parse: function(response) {
    console.log('parsing tweets...');
    return response.results;
  }
});