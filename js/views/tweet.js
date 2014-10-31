ALittleTwitterApp.Views.Tweet = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<img src="<%= user.profile_image_url_https %>" alt="user_image" class="img-rounded"> <a href="https://twitter.com/<%= user.screen_name %>/status/<%= id_str %>" target="_blank"><%= text %></br><%= created_at_formatted %></a>'),

  render: function(){
		var modelJSON = this.model.toJSON();

		modelJSON.created_at_formatted = this.fbStringToDateString(modelJSON.created_at);

		this.$el.html(this.template(modelJSON));
		return this;
  },

	fbStringToDateString: function (tdate) {
		var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (navigator.userAgent.match(/MSIE\s([^;]*)/)) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'));
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + " seconds ago";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 129600) {return "1 day ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff <= 777600) {return "1 week ago";}
    return system_date.toDateString();
	}

});