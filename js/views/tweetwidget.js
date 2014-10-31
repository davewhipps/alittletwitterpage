ALittleTwitterApp.Views.TweetWidget = Backbone.View.extend({

	initialize: function() {
    this.render();
	},

  render: function() {

		this.$el.find('.loading').css('display', 'block');

    var tweets = new ALittleTwitterApp.Collections.Tweets([], {
      twitter_screen_name : this.$el.data("twitter-screen-name")
    });

    tweets.bind('reset', function() {
			this.$el.find('.loading').css('display', 'none');
		}, this);

    tweets.fetch({reset: true});
    
    var tweetsView = new ALittleTwitterApp.Views.Tweets({ collection: tweets });
    $(this.el).append(tweetsView.render().el);

		return this;
  }

});