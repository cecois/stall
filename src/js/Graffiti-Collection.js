var GraffitiCollection = Backbone.Collection.extend({
	model: Panel,
	url: function() {
		return "assets/offline/static.geojson";
	},
	initialize: function(options) {
		// this.listenTo(appState, 'change:slug', this.deactivate);
		options || (options = {});
	}
		,parse: function(response) {


console.log("response:");console.log(response);

_.each(response.features,function(f){console.log("feature:",f);})
        // var feats = _.each(response.features,function(f,i) {

        // });

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