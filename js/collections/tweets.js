ALittleTwitterApp.Collections.Tweets = Backbone.Collection.extend({
  model: ALittleTwitterApp.Models.Tweet,
  url: 'twitter-proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=AppDirect&count=30'),
  parse: function(response) {
    console.log('parsing tweets...');
    return response.results;
  }
});