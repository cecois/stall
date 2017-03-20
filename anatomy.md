## Anatomy of Bathroom Stall

The application is built on [Backbone](http://backbonejs.org), an MVC JavaScript framework. At small-scale that means that one page - index.html - carries all of the html we need and Backbone (BB) responds to all changes in state, URL changes, etc. At large scale it means a lot more than that, but here are some key concepts re:BB:

1. Pretty much every individual bit of *functionality* you see on the page is the result of a coupling between a BB model and a BB view. For example, 