

.PHONY: default

default: help

.PHONY: help
help:
	@echo "help"

.PHONY: all
all: initialize
	@echo "Ready building $<"

initialize:	node_modules bower_components javascript_sources css_sources

.PHONY: node_modules
node_modules:
	npm install

.PHONY: bower_modules
bower_modules:
	bower init

.PHONY: javascript_sources
javascript_sources: src/js/angular.js src/js/jquery.min.js src/js/angular-sanitize.js src/js/angular-animate.js src/js/ui-bootstrap-tpls.js

src/js/angular.js: bower_components/angular/angular.js
	cp $< $@

src/js/jquery.min.js: bower_components/jquery/dist/jquery.min.js
	cp $< $@

src/js/angular-sanitize.js: bower_components/angular-sanitize/angular-sanitize.js
	cp $< $@

src/js/angular-animate.js: bower_components/angular-animate/angular-animate.js
	cp $< $@

src/js/ui-bootstrap-tpls.js: bower_components/angular-bootstrap/ui-bootstrap-tpls.js
	cp $< $@

.PHONY: css_sources
css_sources: src/css/bootstrap.css

src/css/bootstrap.css: bower_components/bootstrap/dist/css/bootstrap.css
	cp $< $@



