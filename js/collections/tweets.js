ALittleTwitterApp.Collections.Tweets = Backbone.Collection.extend({
  
  model: ALittleTwitterApp.Models.Tweet,

  initialize: function(models, options) {
		this.set(models);
		this.twitter_screen_name = options.twitter_screen_name || "AppDirect";
  },

  url: function() {
		return 'twitter-proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?count=30&include_rts=1&screen_name='+this.twitter_screen_name);
  },
  
  parse: function(response) {
    console.log('parsing tweets for: '+this.twitter_screen_name);
    return response;
  },

});