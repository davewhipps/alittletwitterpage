window.ALittleTwitterApp = {
	Models: {
		Tweet: {}
	},
	Collections: {
		Tweets: {}
	},
	Views: {
		Tweet: {},
		Tweets: {},
		TweetWidget: {}
	},

	Routers: {

	},

	init: function() {
		//new ALittleTwitterApp.Routers.Home();
		Backbone.history.start();
	}
};

$(function() {
	ALittleTwitterApp.init();
	
  $(".tweetwidget").each(function(index, tweetWidgetDiv) {
    var tweetWidget = new ALittleTwitterApp.Views.TweetWidget({ el: tweetWidgetDiv });
  });
});