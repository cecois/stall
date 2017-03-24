var GraffitiView = Backbone.View.extend({
	// tagName: "ul",
	// el: "#menu-basemaps-wrapper",
	events: {
		// "click .mnu-basemap-item": "switch",
	},
	// template: Handlebars.templates['BaseMapsMenuViewTpl'],
	initialize: function() {
		GLJ = L.geoJson().addTo(map);
		this.collection.bind('sync', this.render, this);
		// this.collection.bind('reset', this.render, this);
		// this.listenTo(appState,'change:baselayer', this.render, this);
		// this.render()
	}
	,render: function() {
		GLJ.clearLayers();
		GLJ.clearAllEventListeners();
		var gjz = this.collection.toJSON();

		function on_each(feature, layer) {

			// var mjid = MILLERIA.fromto(feature.properties.mjid,"cartodb")

			// var corresp = cxPosts.findWhere({location:mjid})
			// if(typeof corresp !== 'undefined'){
				// var tiedtitle = corresp.get("title")
				// var popupContent = '<h4>alkdfnalknf</h4><div>associated with: bablouldnt even be here.'
				// }
				// layer.bindPopup(popupContent).on("popupopen", function(p) {
				// 	p.target.setStyle(MILLERIA.stylize(p.target.feature,1,0))
				// }).on("popupclose", function(p) {
				// 	p.target.setStyle(MILLERIA.stylize(p.target.feature,0,0))
				// })
            // layer.on("popupopen",function(p){
            //     p.target.bringToFront()
            // })
        } //oneachfeature
        L.geoJson(gjz, {
        	style: function(fea, lay) {
        		return UTIL.get_style(fea)
        	},
        	onEachFeature: on_each,
        	pointToLayer: function(feature, latlng) {
                // return L.circleMarker(latlng, {radius: 8,fillColor: "#ff7800",color: "#000",weight: 1,opacity: 1,fillOpacity: 0.8});
                var myIcon = L.divIcon({className: 'stall-div-1',html:feature.properties.name});

return L.marker(latlng, {icon: myIcon}).addTo(map);
            }

        }).addTo(GLJ)
        if(GLJ.getBounds().isValid()!==false){
        	map.fitBounds(GLJ.getBounds());}
        	return this
            // .pop()
        }
    });