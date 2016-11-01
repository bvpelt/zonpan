

.PHONY: default

default: help

.PHONY: help
help:
	@echo "help"

.PHONY: all
all: initialize build
	@echo "Ready building $<"

initialize:	dirstruct node_modules bower_components javascript_sources css_sources font_sources

.PHONY: dirstruct
dirstruct:
	mkdir -p dist/js dist/css dist/fonts dist/html

.PHONY: node_modules
node_modules:
	npm install

.PHONY: bower_modules
bower_modules:
	bower init

.PHONY: javascript_sources
javascript_sources: dist/js/angular.js dist/js/jquery.min.js dist/js/angular-sanitize.js dist/js/angular-animate.js dist/js/ui-bootstrap-tpls.js

dist/js/angular.js: bower_components/angular/angular.js
	cp $< $@

dist/js/jquery.min.js: bower_components/jquery/dist/jquery.min.js
	cp $< $@

dist/js/angular-sanitize.js: bower_components/angular-sanitize/angular-sanitize.js
	cp $< $@

dist/js/angular-animate.js: bower_components/angular-animate/angular-animate.js
	cp $< $@

dist/js/ui-bootstrap-tpls.js: bower_components/angular-bootstrap/ui-bootstrap-tpls.js
	cp $< $@

.PHONY: css_sources
css_sources: dist/css/bootstrap.css

dist/css/bootstrap.css: bower_components/bootstrap/dist/css/bootstrap.css
	cp $< $@

.PHONY: font_sources
font_sources: dist/fonts/glyphicons-halflings-regular.eot  dist/fonts/glyphicons-halflings-regular.woff \
              dist/fonts/glyphicons-halflings-regular.svg  dist/fonts/glyphicons-halflings-regular.woff2 \
              dist/fonts/glyphicons-halflings-regular.ttf

dist/fonts/glyphicons-halflings-regular.eot: bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot
	cp $< $@

dist/fonts/glyphicons-halflings-regular.woff: bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff
	cp $< $@

dist/fonts/glyphicons-halflings-regular.svg: bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg
	cp $< $@

dist/fonts/glyphicons-halflings-regular.woff2: bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2
	cp $< $@

dist/fonts/glyphicons-halflings-regular.ttf: bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf
	cp $< $@

build: zoncss zonhtml zonjs
	@echo "Ready with build"

.PHONY: zoncss
zoncss: dist/css/zonpan.css

dist/css/zonpan.css: src/css/zonpan.css
	cp $< $@

.PHONY: zonhtml
zonhtml: dist/html/index.html

dist/html/index.html: src/html/index.html
	cp $< $@

.PHONY: zonjs
zonjs: dist/js/zonpan-controller.js dist/js/zonpan-service.js

dist/js/zonpan-controller.js: src/js/zonpan-controller.js
	cp $< $@

dist/js/zonpan-service.js: src/js/zonpan-service.js
	cp $< $@

