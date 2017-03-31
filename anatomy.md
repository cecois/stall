## Anatomy of Bathroom Stall

#### BackboneJS, Generally
The application is built on [Backbone](http://backbonejs.org), an MVC JavaScript framework. At small-scale that means that one page - index.html - carries all of the html we need and Backbone (BB) responds to all changes in state (including URL changes, etc.) At large scale it means a lot more than that, but here are some key concepts re:BB:

1. Pretty much every individual bit of *functionality* you see on the page is the result of a coupling between a BB model (represented by, typically, a file at js/\<modelname\>-Model.js and a BB view, represented typically as a file at js/\<viewname\>-View.js. These JavaScript files (like pretty much all JavaScripts) are loaded by index.html when the page is requested by the browser. The model is (loosely) "the data" and the view is (loosely) the representation of it. In most cases the view is even in charge of finding the html element in the DOM to display the model's data (btw DOM=Document Object Model - basically the structured page as it exists/is rendered in the browser). So in some dummy View.js one of its keys is "el" and the value set there is "#header" -- that means that the View is going to take all or some of its model's (Model.js) "data" and render it in the html's \<div id="header"\>\</div> element. Basically. Of course there are all manner of potentially fuxked-up exceptions to this rule, but *basically* this is how BackboneJS (and several other similar web frameworks) operate.

Let's take a live example. The app (as it stands in late March 2017) has limited internal navigation right now (by choice) but it does have in its navbar a "Home" tab and an "About" tab. In the old days, clicking the Home tab might have taken the browser to "index.html" and clicking "About" would have taken us to "about.html." And then it was up to us to make sure those files had in them what they needed in order to maintain navigation/look+feel/etc. In our case (and in most modern web apps) we stay on one page and move content in and out as needed.

Here are the first few lines of PanelMenu-View.js:

	el: $("#navContainer .tabbable .nav-tabs"),
	template: Handlebars.templates['PanelMenuViewTpl'],
	events: {
	   "click li": function(e) {
			     7                         var pid = $(e.currentTarget).attr("data-id")
			        8                         appState.set({
					   9                                 slug: pid
					     10                         })
				  11                 }
				    12         },




This app's default state is "#home" so let me walk through what happens when someone clicks the "About" menu item:

1. click - \*!
	* Well, first of all the element clicked on was being *listened to.* For clicks, no less! By a view defined in PanelMenu-View.js. On line 

#### Routing 
