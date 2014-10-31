ALittleTwitterApp.Views.Tweet = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<a href="https://twitter.com/<%= user.screen_name %>/status/<%= id_str %>" target="_blank"><%= text %></br><%= created_at_formatted %></a>'),

  render: function(){
		var modelJSON = this.model.toJSON();

		var jsDate = this.fbStringToDate(modelJSON.created_at);
		var jsDate2 = this.fbStringToDateString(modelJSON.created_at);

		modelJSON.created_at_formatted = jsDate2;

		this.$el.html(this.template(modelJSON));
		return this;
  },

	fbStringToDate: function (s) {
		var b = s.split(/[: ]/g);
		var m = {jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11};
		return new Date(Date.UTC(b[7], m[b[1].toLowerCase()], b[2], b[3], b[4], b[5]));
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