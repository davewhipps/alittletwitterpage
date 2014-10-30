ALittleTwitterApp.Views.Tweets = Backbone.View.extend({
	tagName: 'ul',

	initialize: function() {
		this.render();
	},

  render: function() {
		this.collection.each(function(tweet){
			var tweetView = new ALittleTwitterApp.Views.Tweet({ model: tweet });
			this.$el.append(tweetView.render().el);
		}, this);

		return this;
  }
});