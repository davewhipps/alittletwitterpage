window.ALittleTwitterApp = {
	Models: {
		Tweet: {}
	},
	Collections: {
		Tweets: {}
	},
	Views: {
		Tweet: {},
		Tweets: {}
	},

	Routers: {

	},

	init: function() {
		//new ALittleTwitterApp.Routers.Home();
		Backbone.history.start();
	}
};

$(document).ready(ALittleTwitterApp.init);
