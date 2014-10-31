ALittleTwitterApp.Views.Tweet = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<%= text %> </br> <%= created_at %> </br> <%= created_at %>'),

  render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
  }
});