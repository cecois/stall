var GraffitiCollection = Backbone.Collection.extend({
	model: Panel,
	url: function() {
		// currently a static dump of fake data
		return "assets/offline/static.geojson";

		// but it will ultimately be a dynamic query that, in effect, handles the weekly "cleaning"
		// return "http://carto.com/some/query/with/date_added/newer/than/now"
	},
	initialize: function(options) {
		this.listenTo(appState, 'change:query', this.fetch);
		options || (options = {});
	}
	,parse: function(response) {

		var feats = _.each(response.features,function(f,i) {


		});

        // return feats
        return response.features
    }
	// activate: function() {


	// 	_.each(this.models, function(m) {
	// 		if (m.get("id") == appState.get("slug")) {
	// 			m.set({
	// 				active: true
	// 			});
	// 		}

	// 	})

	// 	return this

	// }
	// ,deactivate: function() {
	// 	this.invoke('set', {
	// 		"active": false
	// 	}, {
	// 		silent: true
	// 	});
	// 	return this
	// 	.activate()
	// }

});