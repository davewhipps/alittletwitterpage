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
};

$(function() {
	
	// Try to restore the column order
	var ns = $.initNamespaceStorage('alittletwitterapp');
	if (ns.localStorage.isSet('columnOrder')) {
		var columnOrder = ns.localStorage.get('columnOrder');
		$(".tweetwidget").each(function(index, tweetWidgetDiv) {
			var twitterScreenName = columnOrder[index];
			if (!_.isUndefined(twitterScreenName)) {
				$(tweetWidgetDiv).data('twitter-screen-name', twitterScreenName);
			}
		});
  }

  // Create the tweet widgets
  $(".tweetwidget").each(function(index, tweetWidgetDiv) {
    var tweetWidget = new ALittleTwitterApp.Views.TweetWidget({ el: tweetWidgetDiv });
  });

  // Handle Edit Mode
	$('#collapseOne').on('shown.bs.collapse', function () {
		$(".sortable-columns").sortable({ axis: "x",  cursor: "ew-resize" });

		// Write out the new column order when sorting has finished
		$(".sortable-columns" ).on( "sortstop", function( event, ui ) {
			var columnOrder = [];
			$(".tweetwidget").each(function(index, tweetWidgetDiv) {
					columnOrder[index] = $(tweetWidgetDiv).data('twitter-screen-name');
				}
			);
			ns.localStorage.set('columnOrder', columnOrder);
		});

		$(".tweetwidget").addClass("resortable");
	});

	$('#collapseOne').on('hidden.bs.collapse', function () {
		$(".sortable-columns").sortable("destroy");
		$(".tweetwidget").removeClass("resortable");
	});



});