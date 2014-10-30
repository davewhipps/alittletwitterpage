ALittleTwitterApp.Views.Tweet = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<strong><%= text %></strong>'),

  render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
  }
});