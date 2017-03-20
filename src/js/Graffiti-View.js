var GraffitiView = Backbone.View.extend({
	// tagName: "ul",
	// el: "#menu-basemaps-wrapper",
	events: {
		// "click .mnu-basemap-item": "switch",
	},
	// template: Handlebars.templates['BaseMapsMenuViewTpl'],
	initialize: function() {

		// this.collection.bind('change:active', this.render, this);
		// this.listenTo(appState,'change:baselayer', this.render, this);
		this.render()
	}
	,render: function() {
		// $(this.el).html(this.template({

		// 	rows: this.collection.toJSON()

		// }));
		return this
	}
});