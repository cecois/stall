(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['BaseMapsMenuViewTpl'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<li class=\"mnu-basemap-item\" data-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n<img class=\""
    + escapeExpression(lambda((depth0 != null ? depth0.active : depth0), depth0))
    + "\" src=\"images/thumbs/"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + ".png\" height=\"\" width=\"\">\n</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"list-inline\" id=\"mnu-basemaps\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
templates['PanelMenuViewTpl'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"col-md-2 "
    + escapeExpression(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"active","hash":{},"data":data}) : helper)))
    + "\">\n\n	"
    + escapeExpression(((helper = (helper = helpers.displayname || (depth0 != null ? depth0.displayname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayname","hash":{},"data":data}) : helper)))
    + "\n\n</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['SubmitFormViewTpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"col-lg-12\">\n	<div class=\"input-group col-lg-12\">\n\n		<textarea id=\"graffiti-submission\" class=\"col-lg-12\" rows=\"1\" placeholder=\"say anything\" required></textarea>\n\n		<div id=\"bt-query\" class=\"btn btn-default col-sm-12\" type=\"\">Submit</div>\n		\n	</div><!-- /input-group -->\n</div><!-- /.col-lg-6 -->\n\n\n";
},"useData":true});
})();