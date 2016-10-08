# zonpan
Zonnepanelen

From ng-book.pdf page 475

```bash
npm init
npm install yo --save
npm install generator-karma --save
npm install generator-angular --save
npm install cordova --save
./node_modules/cordova/bin/cordova create gapapp io.fullstack.gapapp "GapApp"
cd gapapp
../node_modules/cordova/bin/cordova platform add ios
yo angular
     _-----_     
    |       |    ╭──────────────────────────╮
    |--(o)--|    │    Welcome to Yeoman,    │
   `---------´   │   ladies and gentlemen!  │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

Out of the box I include Bootstrap and some AngularJS recommended modules.

? Would you like to use Gulp (experimental) instead of Grunt? No
? Would you like to use Sass (with Compass)? Yes
? Would you like to include Bootstrap? Yes
? Would you like to use the Sass version of Bootstrap? Yes
? Which modules would you like to include? (Press <space> to select)angular-animate.js, angular-
cookies.js, angular-resource.js, angular-route.js, angular-sanitize.js, angular-touch.js
   create app/styles/main.scss
   create app/index.html
   create bower.json
   create .bowerrc
   create package.json
   create Gruntfile.js
   create README.md
   invoke   angular:common:/home/bvpelt/Develop/zonpan/node_modules/generator-angular/app/index.js
   create     .editorconfig
   create     .gitattributes
   create     .jscsrc
   create     .jshintrc
   create     .yo-rc.json
   create     .gitignore
   create     test/.jshintrc
   create     app/404.html
   create     app/favicon.ico
   create     app/robots.txt
   create     app/views/main.html
   create     app/images/yeoman.png
   invoke   angular:main:/home/bvpelt/Develop/zonpan/node_modules/generator-angular/app/index.js
   create     app/scripts/app.js
   invoke   angular:controller:/home/bvpelt/Develop/zonpan/node_modules/generator-angular/app/index.js
   create     app/scripts/controllers/main.js
   create     test/spec/controllers/main.js
   invoke   karma:app


I'm all done. Running bower install & npm install for you to install the required dependencies. If this fails, try running the command yourself.


   invoke       angular:route
   invoke           angular:controller:/home/bvpelt/Develop/zonpan/node_modules/generator-angular/route/index.js
   create             app/scripts/controllers/about.js
   create             test/spec/controllers/about.js
   invoke           angular:view:/home/bvpelt/Develop/zonpan/node_modules/generator-angular/route/index.js
   create             app/views/about.html
   create     test/karma.conf.js
 conflict     package.json
? Overwrite package.json? (Ynaxdh) [..................] / normalizeTree: sill install loadCurrenbower cached        https://github.com/angular/bower-angular-animate.git#1.5.8npmjs.org/time-gr
bower validate      1.5.8 against https://github.com/angular/bower-angular-animate.git#^1.4.0
bower cached        https://github.com/angular/bower-angular.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular.git#^1.4.0
bower cached        https://github.com/twbs/bootstrap-sass.git#3.3.7
bower validate      3.3.7 against https://github.com/twbs/bootstrap-sass.git#^3.2.0
bower cached        https://github.com/angular/bower-angular-cookies.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-cookies.git#^1.4.0
bower cached        https://github.com/angular/bower-angular-route.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-route.git#^1.4.0
bower cached        https://github.com/angular/bower-angular-resource.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-resource.git#^1.4.0
bower cached        https://github.com/angular/bower-angular-sanitize.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-sanitize.git#^1.4.0
bower cached        https://github.com/angular/bower-angular-touch.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-touch.git#^1.4.0
bower cached        https://github.com/angular/bower-angular-mocks.git#1.5.8
bower validate      1.5.8 against https://github.com/angular/bower-angular-mocks.git#^1.4.0
bower cached        https://github.com/jquery/jquery-dist.git#3.1.1//registry.npmjs.org/time-gr
bower validate      3.1.1 against https://github.com/jquery/jquery-dist.git#1.9.1 - 3
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
bower install       bootstrap-sass-official#3.3.7egistry uri https://registry.npmjs.org/opn
bower install       angular-animate#1.5.8
bower install       angular-cookies#1.5.8
bower install       angular-route#1.5.8
bower install       angular#1.5.8
bower install       jquery#3.1.1
bower install       angular-sanitize#1.5.8
bower install       angular-resource#1.5.8
bower install       angular-mocks#1.5.8
bower install       angular-touch#1.5.8
[      ............] | fetchMetadata: sill mapToRegistry uri https://registry.npmjs.org/utils-m
bootstrap-sass-official#3.3.7 bower_components/bootstrap-sass-official
└── jquery#3.1.1

angular-animate#1.5.8 bower_components/angular-animate
└── angular#1.5.8

angular-cookies#1.5.8 bower_components/angular-cookies
└── angular#1.5.8

angular-route#1.5.8 bower_components/angular-route
└── angular#1.5.8

angular#1.5.8 bower_components/angular

jquery#3.1.1 bower_components/jquery

angular-sanitize#1.5.8 bower_components/angular-sanitize
└── angular#1.5.8

angular-resource#1.5.8 bower_components/angular-resource
└── angular#1.5.8

angular-mocks#1.5.8 bower_components/angular-mocks
└── angular#1.5.8

angular-touch#1.5.8 bower_components/angular-touch
└── angular#1.5.8
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@2.0.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
npm WARN deprecated minimatch@1.0.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated tough-cookie@0.12.1: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
npm WARN deprecated lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
npm WARN prefer global jshint@2.8.0 should be installed with -g

> gifsicle@3.0.4 postinstall /home/bvpelt/Develop/zonpan/gapapp/node_modules/gifsicle
> node lib/install.js

  ✔ gifsicle pre-build test passed successfully

> jpegtran-bin@3.1.0 postinstall /home/bvpelt/Develop/zonpan/gapapp/node_modules/jpegtran-bin
> node lib/install.js

  ✔ jpegtran pre-build test passed successfully

> optipng-bin@3.1.2 postinstall /home/bvpelt/Develop/zonpan/gapapp/node_modules/optipng-bin
> node lib/install.js

  ✔ optipng pre-build test passed successfully
gapapp@ /home/bvpelt/Develop/zonpan/gapapp
├─┬ autoprefixer-core@5.2.1 
│ ├── browserslist@0.4.0 
│ ├── caniuse-db@1.0.30000548 
│ ├── num2fraction@1.2.2 
│ └─┬ postcss@4.1.16 
│   ├── es6-promise@2.3.0 
│   ├── js-base64@2.1.9 
│   └── source-map@0.4.4 
├─┬ grunt@0.4.5 
│ ├── async@0.1.22 
│ ├── coffee-script@1.3.3 
│ ├── colors@0.6.2 
│ ├── dateformat@1.0.2-1.2.3 
│ ├── eventemitter2@0.4.14 
│ ├── exit@0.1.2 
│ ├─┬ findup-sync@0.1.3 
│ │ ├─┬ glob@3.2.11 
│ │ │ ├── inherits@2.0.3 
│ │ │ └── minimatch@0.3.0 
│ │ └── lodash@2.4.2 
│ ├── getobject@0.1.0 
│ ├─┬ glob@3.1.21 
│ │ ├── graceful-fs@1.2.3 
│ │ └── inherits@1.0.2 
│ ├─┬ grunt-legacy-log@0.1.3 
│ │ ├─┬ grunt-legacy-log-utils@0.1.1 
│ │ │ ├── lodash@2.4.2 
│ │ │ └── underscore.string@2.3.3 
│ │ ├── lodash@2.4.2 
│ │ └── underscore.string@2.3.3 
│ ├── grunt-legacy-util@0.2.0 
│ ├── hooker@0.2.3 
│ ├── iconv-lite@0.2.11 
│ ├─┬ js-yaml@2.0.5 
│ │ ├─┬ argparse@0.1.16 
│ │ │ ├── underscore@1.7.0 
│ │ │ └── underscore.string@2.4.0 
│ │ └── esprima@1.0.4 
│ ├── lodash@0.9.2 
│ ├─┬ minimatch@0.2.14 
│ │ ├── lru-cache@2.7.3 
│ │ └── sigmund@1.0.1 
│ ├─┬ nopt@1.0.10 
│ │ └── abbrev@1.0.9 
│ ├── rimraf@2.2.8 
│ ├── underscore.string@2.2.1 
│ └── which@1.0.9 
├─┬ grunt-angular-templates@0.5.9 
│ └─┬ html-minifier@0.6.9 
│   ├─┬ change-case@2.1.6 
│   │ ├── camel-case@1.2.2 
│   │ ├── constant-case@1.1.2 
│   │ ├── dot-case@1.1.2 
│   │ ├── is-lower-case@1.1.3 
│   │ ├── is-upper-case@1.1.2 
│   │ ├── lower-case@1.1.3 
│   │ ├── param-case@1.1.2 
│   │ ├── pascal-case@1.1.2 
│   │ ├── path-case@1.1.2 
│   │ ├── sentence-case@1.1.3 
│   │ ├── snake-case@1.1.2 
│   │ ├── swap-case@1.1.2 
│   │ ├── title-case@1.1.2 
│   │ ├── upper-case@1.1.3 
│   │ └── upper-case-first@1.1.2 
│   ├─┬ clean-css@2.2.23 
│   │ └── commander@2.2.0 
│   ├─┬ cli@0.6.6 
│   │ └─┬ glob@3.2.11 
│   │   └── minimatch@0.3.0 
│   └── relateurl@0.2.7 
├─┬ grunt-concurrent@1.0.1 
│ ├── async@0.9.2 
│ └─┬ pad-stdio@1.0.0 
│   └── lpad@1.0.0 
├── grunt-contrib-clean@0.6.0 
├─┬ grunt-contrib-compass@1.1.1 
│ ├── async@1.5.2 
│ ├─┬ bin-version-check@2.1.0 
│ │ ├─┬ bin-version@1.0.4 
│ │ │ └─┬ find-versions@1.2.1 
│ │ │   ├── array-uniq@1.0.3 
│ │ │   └── semver-regex@1.0.0 
│ │ ├── minimist@1.2.0 
│ │ ├── semver@4.3.6 
│ │ └─┬ semver-truncate@1.1.2 
│ │   └── semver@5.3.0 
│ ├── dargs@2.1.0 
│ ├── onetime@1.1.0 
│ └─┬ tmp@0.0.28 
│   └── os-tmpdir@1.0.2 
├─┬ grunt-contrib-concat@0.5.1 
│ ├─┬ chalk@0.5.1 
│ │ ├── ansi-styles@1.1.0 
│ │ ├── escape-string-regexp@1.0.5 
│ │ ├─┬ has-ansi@0.1.0 
│ │ │ └── ansi-regex@0.2.1 
│ │ ├── strip-ansi@0.3.0 
│ │ └── supports-color@0.2.0 
│ └─┬ source-map@0.3.0 
│   └── amdefine@1.0.0 
├─┬ grunt-contrib-connect@0.9.0 
│ ├── async@0.9.2 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ ├─┬ on-finished@2.3.0 
│ │ │ │ └── ee-first@1.1.1 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├─┬ compressible@2.0.8 
│ │ │ │ └── mime-db@1.24.0 
│ │ │ └── vary@1.0.1 
│ │ ├── connect-timeout@1.6.2 
│ │ ├── content-type@1.0.2 
│ │ ├── cookie@0.1.3 
│ │ ├── cookie-parser@1.3.5 
│ │ ├── cookie-signature@1.0.6 
│ │ ├─┬ csurf@1.8.3 
│ │ │ └─┬ csrf@3.0.3 
│ │ │   ├── base64-url@1.2.2 
│ │ │   ├── rndm@1.2.0 
│ │ │   ├── tsscmp@1.0.5 
│ │ │   └─┬ uid-safe@2.1.1 
│ │ │     └── random-bytes@1.0.0 
│ │ ├── depd@1.0.1 
│ │ ├─┬ errorhandler@1.4.3 
│ │ │ ├─┬ accepts@1.3.3 
│ │ │ │ └── negotiator@0.6.1 
│ │ │ └── escape-html@1.0.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── crc@3.3.0 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ ├── escape-html@1.0.2 
│ │ │ └── unpipe@1.0.0 
│ │ ├── fresh@0.3.0 
│ │ ├─┬ http-errors@1.3.1 
│ │ │ └── statuses@1.3.0 
│ │ ├─┬ method-override@2.3.6 
│ │ │ ├── methods@1.1.2 
│ │ │ └── vary@1.1.0 
│ │ ├─┬ morgan@1.6.1 
│ │ │ └── basic-auth@1.0.4 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ ├─┬ readable-stream@1.1.14 
│ │ │ │ └── isarray@0.0.1 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── parseurl@1.3.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.1 
│ │ ├─┬ serve-favicon@2.3.0 
│ │ │ └── etag@1.7.0 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├── batch@0.5.3 
│ │ │ └── mime-types@2.1.12 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── destroy@1.0.4 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ ├─┬ type-is@1.6.13 
│ │ │ └── media-typer@0.3.0 
│ │ ├── utils-merge@1.0.0 
│ │ └── vhost@3.0.2 
│ ├── connect-livereload@0.5.4 
│ ├── opn@1.0.2 
│ └─┬ portscanner@1.0.0 
│   └── async@0.1.15 
├── grunt-contrib-copy@0.7.0 
├─┬ grunt-contrib-cssmin@0.12.3 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├─┬ clean-css@3.4.20 
│ │ └─┬ commander@2.8.1 
│ │   └── graceful-readlink@1.0.1 
│ └─┬ maxmin@1.1.0 
│   ├─┬ chalk@1.1.3 
│   │ ├── ansi-styles@2.2.1 
│   │ ├─┬ has-ansi@2.0.0 
│   │ │ └── ansi-regex@2.0.0 
│   │ ├── strip-ansi@3.0.1 
│   │ └── supports-color@2.0.0 
│   └─┬ gzip-size@1.0.0 
│     └─┬ browserify-zlib@0.1.4 
│       └── pako@0.2.9 
├─┬ grunt-contrib-htmlmin@0.4.0 
│ ├─┬ html-minifier@0.7.2 
│ │ ├─┬ change-case@2.3.1 
│ │ │ └── lower-case-first@1.0.2 
│ │ ├─┬ clean-css@3.1.9 
│ │ │ ├── commander@2.6.0 
│ │ │ └── source-map@0.1.43 
│ │ └─┬ concat-stream@1.4.10 
│ │   └── typedarray@0.0.6 
│ └─┬ pretty-bytes@1.0.4 
│   ├── get-stdin@4.0.1 
│   └─┬ meow@3.7.0 
│     ├─┬ camelcase-keys@2.1.0 
│     │ └── camelcase@2.1.1 
│     ├── decamelize@1.2.0 
│     ├─┬ loud-rejection@1.6.0 
│     │ ├─┬ currently-unhandled@0.4.1 
│     │ │ └── array-find-index@1.0.2 
│     │ └── signal-exit@3.0.1 
│     ├── map-obj@1.0.1 
│     ├─┬ normalize-package-data@2.3.5 
│     │ ├── hosted-git-info@2.1.5 
│     │ ├─┬ is-builtin-module@1.0.0 
│     │ │ └── builtin-modules@1.1.1 
│     │ └─┬ validate-npm-package-license@3.0.1 
│     │   ├─┬ spdx-correct@1.0.2 
│     │   │ └── spdx-license-ids@1.2.2 
│     │   └── spdx-expression-parse@1.0.4 
│     ├─┬ read-pkg-up@1.0.1 
│     │ ├─┬ find-up@1.1.2 
│     │ │ ├── path-exists@2.1.0 
│     │ │ └─┬ pinkie-promise@2.0.1 
│     │ │   └── pinkie@2.0.4 
│     │ └─┬ read-pkg@1.1.0 
│     │   ├─┬ load-json-file@1.1.0 
│     │   │ ├── graceful-fs@4.1.9 
│     │   │ ├─┬ parse-json@2.2.0 
│     │   │ │ └─┬ error-ex@1.3.0 
│     │   │ │   └── is-arrayish@0.2.1 
│     │   │ └── pify@2.3.0 
│     │   └─┬ path-type@1.1.0 
│     │     └── graceful-fs@4.1.9 
│     ├─┬ redent@1.0.0 
│     │ ├─┬ indent-string@2.1.0 
│     │ │ └── repeating@2.0.1 
│     │ └── strip-indent@1.0.1 
│     └── trim-newlines@1.0.0 
├─┬ grunt-contrib-imagemin@1.0.1 
│ ├── async@1.5.2 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├── gulp-rename@1.2.2 
│ ├─┬ imagemin@4.0.0 
│ │ ├─┬ buffer-to-vinyl@1.1.0 
│ │ │ ├── file-type@3.8.0 
│ │ │ ├─┬ readable-stream@2.1.5 
│ │ │ │ └── isarray@1.0.0 
│ │ │ ├── uuid@2.0.3 
│ │ │ └─┬ vinyl@1.2.0 
│ │ │   ├── clone@1.0.2 
│ │ │   ├── clone-stats@0.0.1 
│ │ │   └── replace-ext@0.0.1 
│ │ ├─┬ concat-stream@1.5.2 
│ │ │ └─┬ readable-stream@2.0.6 
│ │ │   └── isarray@1.0.0 
│ │ ├─┬ imagemin-gifsicle@4.2.0 
│ │ │ ├─┬ gifsicle@3.0.4 
│ │ │ │ ├─┬ bin-build@2.2.0 
│ │ │ │ │ ├── archive-type@3.2.0 
│ │ │ │ │ ├─┬ decompress@3.0.0 
│ │ │ │ │ │ ├─┬ decompress-tar@3.1.0 
│ │ │ │ │ │ │ ├── is-tar@1.0.0 
│ │ │ │ │ │ │ ├── object-assign@2.1.1 
│ │ │ │ │ │ │ ├─┬ strip-dirs@1.1.1 
│ │ │ │ │ │ │ │ ├─┬ chalk@1.1.3 
│ │ │ │ │ │ │ │ │ ├── ansi-styles@2.2.1 
│ │ │ │ │ │ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ │ │ │ │ │ ├── strip-ansi@3.0.1 
│ │ │ │ │ │ │ │ │ └── supports-color@2.0.0 
│ │ │ │ │ │ │ │ ├─┬ is-absolute@0.1.7 
│ │ │ │ │ │ │ │ │ └── is-relative@0.1.3 
│ │ │ │ │ │ │ │ ├── is-natural-number@2.1.1 
│ │ │ │ │ │ │ │ └─┬ sum-up@1.0.3 
│ │ │ │ │ │ │ │   └─┬ chalk@1.1.3 
│ │ │ │ │ │ │ │     ├── ansi-styles@2.2.1 
│ │ │ │ │ │ │ │     ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │ │ │     │ └── ansi-regex@2.0.0 
│ │ │ │ │ │ │ │     ├── strip-ansi@3.0.1 
│ │ │ │ │ │ │ │     └── supports-color@2.0.0 
│ │ │ │ │ │ │ ├─┬ tar-stream@1.5.2 
│ │ │ │ │ │ │ │ ├─┬ bl@1.1.2 
│ │ │ │ │ │ │ │ │ └─┬ readable-stream@2.0.6 
│ │ │ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ │ │ └─┬ readable-stream@2.1.5 
│ │ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ │ └─┬ vinyl@0.4.6 
│ │ │ │ │ │ │   └── clone@0.2.0 
│ │ │ │ │ │ ├─┬ decompress-tarbz2@3.1.0 
│ │ │ │ │ │ │ ├── is-bzip2@1.0.0 
│ │ │ │ │ │ │ ├── object-assign@2.1.1 
│ │ │ │ │ │ │ ├─┬ seek-bzip@1.0.5 
│ │ │ │ │ │ │ │ └── commander@2.8.1 
│ │ │ │ │ │ │ └─┬ vinyl@0.4.6 
│ │ │ │ │ │ │   └── clone@0.2.0 
│ │ │ │ │ │ ├─┬ decompress-targz@3.1.0 
│ │ │ │ │ │ │ ├── is-gzip@1.0.0 
│ │ │ │ │ │ │ ├── object-assign@2.1.1 
│ │ │ │ │ │ │ └─┬ vinyl@0.4.6 
│ │ │ │ │ │ │   └── clone@0.2.0 
│ │ │ │ │ │ ├─┬ decompress-unzip@3.4.0 
│ │ │ │ │ │ │ ├── is-zip@1.0.0 
│ │ │ │ │ │ │ ├── stat-mode@0.2.2 
│ │ │ │ │ │ │ ├─┬ through2@2.0.1 
│ │ │ │ │ │ │ │ └─┬ readable-stream@2.0.6 
│ │ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ │ └─┬ yauzl@2.6.0 
│ │ │ │ │ │ │   ├── buffer-crc32@0.2.5 
│ │ │ │ │ │ │   └─┬ fd-slicer@1.0.1 
│ │ │ │ │ │ │     └── pend@1.2.0 
│ │ │ │ │ │ └─┬ vinyl-assign@1.2.1 
│ │ │ │ │ │   └─┬ readable-stream@2.1.5 
│ │ │ │ │ │     └── isarray@1.0.0 
│ │ │ │ │ ├─┬ download@4.4.3 
│ │ │ │ │ │ ├─┬ caw@1.2.0 
│ │ │ │ │ │ │ ├─┬ get-proxy@1.1.0 
│ │ │ │ │ │ │ │ └─┬ rc@1.1.6 
│ │ │ │ │ │ │ │   └── deep-extend@0.4.1 
│ │ │ │ │ │ │ ├── is-obj@1.0.1 
│ │ │ │ │ │ │ └── object-assign@3.0.0 
│ │ │ │ │ │ ├─┬ filenamify@1.2.1 
│ │ │ │ │ │ │ ├── filename-reserved-regex@1.0.0 
│ │ │ │ │ │ │ ├── strip-outer@1.0.0 
│ │ │ │ │ │ │ └── trim-repeated@1.0.0 
│ │ │ │ │ │ ├─┬ got@5.6.0 
│ │ │ │ │ │ │ ├─┬ create-error-class@3.0.2 
│ │ │ │ │ │ │ │ └── capture-stack-trace@1.0.0 
│ │ │ │ │ │ │ ├── is-plain-obj@1.1.0 
│ │ │ │ │ │ │ ├── is-redirect@1.0.0 
│ │ │ │ │ │ │ ├── is-retry-allowed@1.1.0 
│ │ │ │ │ │ │ ├── lowercase-keys@1.0.0 
│ │ │ │ │ │ │ ├── node-status-codes@1.0.0 
│ │ │ │ │ │ │ ├─┬ readable-stream@2.1.5 
│ │ │ │ │ │ │ │ └── isarray@1.0.0 
│ │ │ │ │ │ │ ├── timed-out@2.0.0 
│ │ │ │ │ │ │ ├── unzip-response@1.0.1 
│ │ │ │ │ │ │ └─┬ url-parse-lax@1.0.0 
│ │ │ │ │ │ │   └── prepend-http@1.0.4 
│ │ │ │ │ │ ├─┬ gulp-decompress@1.2.0 
│ │ │ │ │ │ │ ├─┬ gulp-util@3.0.7 
│ │ │ │ │ │ │ │ ├── array-differ@1.0.0 
│ │ │ │ │ │ │ │ ├── beeper@1.1.0 
│ │ │ │ │ │ │ │ ├─┬ chalk@1.1.3 
│ │ │ │ │ │ │ │ │ ├── ansi-styles@2.2.1 
│ │ │ │ │ │ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ │ │ │ │ │ ├── strip-ansi@3.0.1 
│ │ │ │ │ │ │ │ │ └── supports-color@2.0.0 
│ │ │ │ │ │ │ │ ├── dateformat@1.0.12 
│ │ │ │ │ │ │ │ ├─┬ fancy-log@1.2.0 
│ │ │ │ │ │ │ │ │ ├─┬ chalk@1.1.3 
│ │ │ │ │ │ │ │ │ │ ├── ansi-styles@2.2.1 
│ │ │ │ │ │ │ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │ │ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ │ │ │ │ │ │ ├── strip-ansi@3.0.1 
│ │ │ │ │ │ │ │ │ │ └── supports-color@2.0.0 
│ │ │ │ │ │ │ │ │ └── time-stamp@1.0.1 
│ │ │ │ │ │ │ │ ├─┬ gulplog@1.0.0 
│ │ │ │ │ │ │ │ │ └── glogg@1.0.0 
│ │ │ │ │ │ │ │ ├─┬ has-gulplog@0.1.0 
│ │ │ │ │ │ │ │ │ └── sparkles@1.0.0 
│ │ │ │ │ │ │ │ ├── lodash._reescape@3.0.0 
│ │ │ │ │ │ │ │ ├── lodash._reevaluate@3.0.0 
│ │ │ │ │ │ │ │ ├── lodash._reinterpolate@3.0.0 
│ │ │ │ │ │ │ │ ├─┬ lodash.template@3.6.2 
│ │ │ │ │ │ │ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ │ │ │ │ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ │ │ │ │ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ │ │ │ │ │ │ └── lodash._root@3.0.1 
│ │ │ │ │ │ │ │ │ └── lodash.templatesettings@3.1.1 
│ │ │ │ │ │ │ │ ├─┬ multipipe@0.1.2 
│ │ │ │ │ │ │ │ │ └── duplexer2@0.0.2 
│ │ │ │ │ │ │ │ ├── object-assign@3.0.0 
│ │ │ │ │ │ │ │ ├─┬ through2@2.0.1 
│ │ │ │ │ │ │ │ │ └─┬ readable-stream@2.0.6 
│ │ │ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ │ │ └── vinyl@0.5.3 
│ │ │ │ │ │ │ └─┬ readable-stream@2.1.5 
│ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ ├── is-url@1.2.2 
│ │ │ │ │ │ ├─┬ read-all-stream@3.1.0 
│ │ │ │ │ │ │ └─┬ readable-stream@2.1.5 
│ │ │ │ │ │ │   └── isarray@1.0.0 
│ │ │ │ │ │ ├─┬ readable-stream@2.1.5 
│ │ │ │ │ │ │ └── isarray@1.0.0 
│ │ │ │ │ │ └─┬ ware@1.3.0 
│ │ │ │ │ │   └─┬ wrap-fn@0.1.5 
│ │ │ │ │ │     └── co@3.1.0 
│ │ │ │ │ ├─┬ exec-series@1.0.3 
│ │ │ │ │ │ └── async-each-series@1.1.0 
│ │ │ │ │ └─┬ url-regex@3.2.0 
│ │ │ │ │   └── ip-regex@1.0.3 
│ │ │ │ ├─┬ bin-wrapper@3.0.2 
│ │ │ │ │ ├─┬ bin-check@2.0.0 
│ │ │ │ │ │ └── executable@1.1.0 
│ │ │ │ │ ├── lazy-req@1.1.0 
│ │ │ │ │ └── os-filter-obj@1.0.3 
│ │ │ │ └─┬ logalot@2.1.0 
│ │ │ │   └─┬ squeak@1.3.0 
│ │ │ │     ├─┬ chalk@1.1.3 
│ │ │ │     │ ├── ansi-styles@2.2.1 
│ │ │ │     │ ├─┬ has-ansi@2.0.0 
│ │ │ │     │ │ └── ansi-regex@2.0.0 
│ │ │ │     │ ├── strip-ansi@3.0.1 
│ │ │ │     │ └── supports-color@2.0.0 
│ │ │ │     ├── console-stream@0.1.1 
│ │ │ │     └─┬ lpad-align@1.1.0 
│ │ │ │       ├── longest@1.0.1 
│ │ │ │       └── lpad@2.0.1 
│ │ │ └── is-gif@1.0.0 
│ │ ├─┬ imagemin-jpegtran@4.3.2 
│ │ │ ├── is-jpg@1.0.0 
│ │ │ ├── jpegtran-bin@3.1.0 
│ │ │ └─┬ through2@2.0.1 
│ │ │   └─┬ readable-stream@2.0.6 
│ │ │     └── isarray@1.0.0 
│ │ ├─┬ imagemin-optipng@4.3.0 
│ │ │ ├─┬ exec-buffer@2.0.1 
│ │ │ │ └── tempfile@1.1.1 
│ │ │ ├── is-png@1.0.0 
│ │ │ └── optipng-bin@3.1.2 
│ │ ├─┬ imagemin-svgo@4.2.1 
│ │ │ ├── is-svg@1.1.1 
│ │ │ ├─┬ svgo@0.6.6 
│ │ │ │ ├── colors@1.1.2 
│ │ │ │ ├─┬ csso@2.0.0 
│ │ │ │ │ ├─┬ clap@1.1.1 
│ │ │ │ │ │ └─┬ chalk@1.1.3 
│ │ │ │ │ │   ├── ansi-styles@2.2.1 
│ │ │ │ │ │   ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │   │ └── ansi-regex@2.0.0 
│ │ │ │ │ │   ├── strip-ansi@3.0.1 
│ │ │ │ │ │   └── supports-color@2.0.0 
│ │ │ │ │ └── source-map@0.5.6 
│ │ │ │ ├─┬ js-yaml@3.6.1 
│ │ │ │ │ ├── argparse@1.0.9 
│ │ │ │ │ └── esprima@2.7.3 
│ │ │ │ └── sax@1.2.1 
│ │ │ └─┬ through2@2.0.1 
│ │ │   └─┬ readable-stream@2.0.6 
│ │ │     └── isarray@1.0.0 
│ │ ├── optional@0.1.3 
│ │ ├─┬ readable-stream@2.1.5 
│ │ │ ├── buffer-shims@1.0.0 
│ │ │ ├── core-util-is@1.0.2 
│ │ │ ├── isarray@1.0.0 
│ │ │ ├── process-nextick-args@1.0.7 
│ │ │ ├── string_decoder@0.10.31 
│ │ │ └── util-deprecate@1.0.2 
│ │ ├─┬ stream-combiner2@1.1.1 
│ │ │ ├─┬ duplexer2@0.1.4 
│ │ │ │ └─┬ readable-stream@2.1.5 
│ │ │ │   └── isarray@1.0.0 
│ │ │ └─┬ readable-stream@2.1.5 
│ │ │   └── isarray@1.0.0 
│ │ └─┬ vinyl-fs@2.4.3 
│ │   ├─┬ duplexify@3.4.5 
│ │   │ ├── end-of-stream@1.0.0 
│ │   │ ├─┬ readable-stream@2.1.5 
│ │   │ │ └── isarray@1.0.0 
│ │   │ └── stream-shift@1.0.0 
│ │   ├─┬ glob-stream@5.3.5 
│ │   │ ├── extend@3.0.0 
│ │   │ ├─┬ glob@5.0.15 
│ │   │ │ └── minimatch@3.0.3 
│ │   │ ├─┬ glob-parent@3.0.0 
│ │   │ │ └─┬ is-glob@3.0.0 
│ │   │ │   └── is-extglob@2.0.0 
│ │   │ ├─┬ micromatch@2.3.11 
│ │   │ │ ├─┬ arr-diff@2.0.0 
│ │   │ │ │ └── arr-flatten@1.0.1 
│ │   │ │ ├── array-unique@0.2.1 
│ │   │ │ ├─┬ braces@1.8.5 
│ │   │ │ │ ├─┬ expand-range@1.8.2 
│ │   │ │ │ │ └─┬ fill-range@2.2.3 
│ │   │ │ │ │   ├── is-number@2.1.0 
│ │   │ │ │ │   ├─┬ isobject@2.1.0 
│ │   │ │ │ │   │ └── isarray@1.0.0 
│ │   │ │ │ │   ├── randomatic@1.1.5 
│ │   │ │ │ │   └── repeat-string@1.5.4 
│ │   │ │ │ ├── preserve@0.2.0 
│ │   │ │ │ └── repeat-element@1.1.2 
│ │   │ │ ├─┬ expand-brackets@0.1.5 
│ │   │ │ │ └── is-posix-bracket@0.1.1 
│ │   │ │ ├─┬ extglob@0.3.2 
│ │   │ │ │ └── is-extglob@1.0.0 
│ │   │ │ ├── filename-regex@2.0.0 
│ │   │ │ ├── is-extglob@1.0.0 
│ │   │ │ ├── is-glob@2.0.1 
│ │   │ │ ├─┬ kind-of@3.0.4 
│ │   │ │ │ └── is-buffer@1.1.4 
│ │   │ │ ├── normalize-path@2.0.1 
│ │   │ │ ├─┬ object.omit@2.0.0 
│ │   │ │ │ ├─┬ for-own@0.1.4 
│ │   │ │ │ │ └── for-in@0.1.6 
│ │   │ │ │ └── is-extendable@0.1.1 
│ │   │ │ ├─┬ parse-glob@3.0.4 
│ │   │ │ │ ├─┬ glob-base@0.3.0 
│ │   │ │ │ │ ├── glob-parent@2.0.0 
│ │   │ │ │ │ └─┬ is-glob@2.0.1 
│ │   │ │ │ │   └── is-extglob@1.0.0 
│ │   │ │ │ ├── is-dotfile@1.0.2 
│ │   │ │ │ ├── is-extglob@1.0.0 
│ │   │ │ │ └── is-glob@2.0.1 
│ │   │ │ └─┬ regex-cache@0.4.3 
│ │   │ │   ├── is-equal-shallow@0.1.3 
│ │   │ │   └── is-primitive@2.0.0 
│ │   │ ├─┬ ordered-read-streams@0.3.0 
│ │   │ │ ├── is-stream@1.1.0 
│ │   │ │ └─┬ readable-stream@2.1.5 
│ │   │ │   └── isarray@1.0.0 
│ │   │ ├─┬ to-absolute-glob@0.1.1 
│ │   │ │ └── extend-shallow@2.0.1 
│ │   │ └─┬ unique-stream@2.2.1 
│ │   │   └── json-stable-stringify@1.0.1 
│ │   ├── graceful-fs@4.1.9 
│ │   ├─┬ gulp-sourcemaps@1.6.0 
│ │   │ ├── graceful-fs@4.1.9 
│ │   │ └─┬ through2@2.0.1 
│ │   │   └─┬ readable-stream@2.0.6 
│ │   │     └── isarray@1.0.0 
│ │   ├── is-valid-glob@0.3.0 
│ │   ├─┬ lazystream@1.0.0 
│ │   │ └─┬ readable-stream@2.1.5 
│ │   │   └── isarray@1.0.0 
│ │   ├── lodash.isequal@4.4.0 
│ │   ├─┬ merge-stream@1.0.0 
│ │   │ └─┬ readable-stream@2.1.5 
│ │   │   └── isarray@1.0.0 
│ │   ├─┬ readable-stream@2.1.5 
│ │   │ └── isarray@1.0.0 
│ │   ├─┬ strip-bom@2.0.0 
│ │   │ └── is-utf8@0.2.1 
│ │   ├─┬ strip-bom-stream@1.0.0 
│ │   │ └── first-chunk-stream@1.0.0 
│ │   ├─┬ through2@2.0.1 
│ │   │ └── readable-stream@2.0.6 
│ │   ├─┬ through2-filter@2.0.0 
│ │   │ └─┬ through2@2.0.1 
│ │   │   └─┬ readable-stream@2.0.6 
│ │   │     └── isarray@1.0.0 
│ │   └── vali-date@1.0.0 
│ └── pretty-bytes@3.0.1 
├─┬ grunt-contrib-jshint@0.11.3 
│ └─┬ jshint@2.8.0 
│   ├─┬ console-browserify@1.1.0 
│   │ └── date-now@0.1.4 
│   ├─┬ htmlparser2@3.8.3 
│   │ ├── domelementtype@1.3.0 
│   │ ├── domhandler@2.3.0 
│   │ ├─┬ domutils@1.5.1 
│   │ │ └─┬ dom-serializer@0.1.0 
│   │ │   ├── domelementtype@1.1.3 
│   │ │   └── entities@1.1.1 
│   │ └── entities@1.0.0 
│   ├── lodash@3.7.0 
│   ├─┬ minimatch@2.0.10 
│   │ └─┬ brace-expansion@1.1.6 
│   │   ├── balanced-match@0.4.2 
│   │   └── concat-map@0.0.1 
│   ├── shelljs@0.3.0 
│   └── strip-json-comments@1.0.4 
├─┬ grunt-contrib-uglify@0.7.0 
│ ├── lodash@2.4.2 
│ ├─┬ uglify-js@2.4.24 
│ │ ├── async@0.2.10 
│ │ ├── source-map@0.1.34 
│ │ ├── uglify-to-browserify@1.0.2 
│ │ └─┬ yargs@3.5.4 
│ │   ├── camelcase@1.2.1 
│ │   ├── window-size@0.1.0 
│ │   └── wordwrap@0.0.2 
│ └── uri-path@0.0.2 
├─┬ grunt-contrib-watch@0.6.1 
│ ├── async@0.2.10 
│ ├─┬ gaze@0.5.2 
│ │ └─┬ globule@0.1.0 
│ │   └── lodash@1.0.2 
│ ├── lodash@2.4.2 
│ └─┬ tiny-lr-fork@0.0.5 
│   ├── debug@0.7.4 
│   ├── faye-websocket@0.4.4 
│   ├─┬ noptify@0.0.3 
│   │ └── nopt@2.0.0 
│   └── qs@0.5.6 
├─┬ grunt-filerev@2.3.1 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├── convert-source-map@1.3.0 
│ └── each-async@0.1.3 
├─┬ grunt-google-cdn@0.4.3 
│ ├── bower@1.7.9 
│ └─┬ google-cdn@0.7.0 
│   ├── async@0.9.2 
│   ├─┬ bower@1.3.12 
│   │ ├── archy@0.0.2 
│   │ ├── bower-endpoint-parser@0.2.2 
│   │ ├─┬ bower-json@0.4.0 
│   │ │ ├── deep-extend@0.2.11 
│   │ │ ├── graceful-fs@2.0.3 
│   │ │ └── intersect@0.0.3 
│   │ ├── bower-logger@0.2.2 
│   │ ├─┬ bower-registry-client@0.2.4 
│   │ │ ├── async@0.2.10 
│   │ │ ├── graceful-fs@2.0.3 
│   │ │ ├── lru-cache@2.3.1 
│   │ │ ├── mkdirp@0.3.5 
│   │ │ ├─┬ request@2.51.0 
│   │ │ │ ├─┬ bl@0.9.5 
│   │ │ │ │ └── readable-stream@1.0.34 
│   │ │ │ ├── caseless@0.8.0 
│   │ │ │ ├─┬ combined-stream@0.0.7 
│   │ │ │ │ └── delayed-stream@0.0.5 
│   │ │ │ ├─┬ form-data@0.2.0 
│   │ │ │ │ ├── async@0.9.2 
│   │ │ │ │ └─┬ mime-types@2.0.14 
│   │ │ │ │   └── mime-db@1.12.0 
│   │ │ │ ├── mime-types@1.0.2 
│   │ │ │ ├── oauth-sign@0.5.0 
│   │ │ │ └── qs@2.3.3 
│   │ │ └── request-replay@0.2.0 
│   │ ├─┬ cardinal@0.4.0 
│   │ │ └── redeyed@0.4.4 
│   │ ├── chalk@0.5.0 
│   │ ├── chmodr@0.1.0 
│   │ ├─┬ decompress-zip@0.0.8 
│   │ │ ├─┬ binary@0.3.0 
│   │ │ │ ├── buffers@0.1.1 
│   │ │ │ └─┬ chainsaw@0.1.0 
│   │ │ │   └── traverse@0.3.9 
│   │ │ ├── graceful-fs@3.0.11 
│   │ │ ├── mkpath@0.1.0 
│   │ │ ├── nopt@2.2.1 
│   │ │ ├── q@1.0.1 
│   │ │ └── touch@0.0.2 
│   │ ├─┬ fstream@1.0.10 
│   │ │ └── graceful-fs@4.1.9 
│   │ ├─┬ fstream-ignore@1.0.5 
│   │ │ └── minimatch@3.0.3 
│   │ ├─┬ glob@4.0.6 
│   │ │ └── minimatch@1.0.0 
│   │ ├─┬ graceful-fs@3.0.11 
│   │ │ └── natives@1.1.0 
│   │ ├─┬ handlebars@2.0.0 
│   │ │ ├── optimist@0.3.7 
│   │ │ └─┬ uglify-js@2.3.6 
│   │ │   ├── async@0.2.10 
│   │ │   └── source-map@0.1.43 
│   │ ├─┬ inquirer@0.7.1 
│   │ │ ├─┬ cli-color@0.3.3 
│   │ │ │ ├── d@0.1.1 
│   │ │ │ ├─┬ es5-ext@0.10.12 
│   │ │ │ │ ├── es6-iterator@2.0.0 
│   │ │ │ │ └── es6-symbol@3.1.0 
│   │ │ │ ├─┬ memoizee@0.3.10 
│   │ │ │ │ ├─┬ es6-weak-map@0.1.4 
│   │ │ │ │ │ ├── es6-iterator@0.1.3 
│   │ │ │ │ │ └── es6-symbol@2.0.1 
│   │ │ │ │ ├── event-emitter@0.3.4 
│   │ │ │ │ ├── lru-queue@0.1.0 
│   │ │ │ │ └── next-tick@0.2.2 
│   │ │ │ └── timers-ext@0.1.0 
│   │ │ ├── lodash@2.4.2 
│   │ │ ├── mute-stream@0.0.4 
│   │ │ ├─┬ readline2@0.1.1 
│   │ │ │ └─┬ strip-ansi@2.0.1 
│   │ │ │   └── ansi-regex@1.1.1 
│   │ │ ├── rx@2.5.3 
│   │ │ └── through@2.3.8 
│   │ ├─┬ insight@0.4.3 
│   │ │ ├── async@0.9.2 
│   │ │ ├─┬ configstore@0.3.2 
│   │ │ │ ├── graceful-fs@3.0.11 
│   │ │ │ ├─┬ js-yaml@3.6.1 
│   │ │ │ │ ├── argparse@1.0.9 
│   │ │ │ │ └── esprima@2.7.3 
│   │ │ │ ├── object-assign@2.1.1 
│   │ │ │ ├── user-home@1.1.1 
│   │ │ │ └── xdg-basedir@1.0.1 
│   │ │ ├─┬ inquirer@0.6.0 
│   │ │ │ └── lodash@2.4.2 
│   │ │ ├─┬ lodash.debounce@2.4.1 
│   │ │ │ ├── lodash.isfunction@2.4.1 
│   │ │ │ ├─┬ lodash.isobject@2.4.1 
│   │ │ │ │ └── lodash._objecttypes@2.4.1 
│   │ │ │ └─┬ lodash.now@2.4.1 
│   │ │ │   └── lodash._isnative@2.4.1 
│   │ │ ├── object-assign@1.0.0 
│   │ │ ├─┬ os-name@1.0.3 
│   │ │ │ ├── osx-release@1.1.0 
│   │ │ │ └─┬ win-release@1.1.1 
│   │ │ │   └── semver@5.3.0 
│   │ │ └─┬ tough-cookie@0.12.1 
│   │ │   └── punycode@2.0.0 
│   │ ├── is-root@1.0.0 
│   │ ├── junk@1.0.3 
│   │ ├── lockfile@1.0.2 
│   │ ├── lru-cache@2.5.2 
│   │ ├─┬ mkdirp@0.5.0 
│   │ │ └── minimist@0.0.8 
│   │ ├── mout@0.9.1 
│   │ ├── nopt@3.0.6 
│   │ ├── osenv@0.1.0 
│   │ ├─┬ p-throttler@0.1.0 
│   │ │ └── q@0.9.7 
│   │ ├── promptly@0.2.0 
│   │ ├── q@1.0.1 
│   │ ├─┬ request@2.42.0 
│   │ │ ├── aws-sign2@0.5.0 
│   │ │ ├─┬ bl@0.9.5 
│   │ │ │ └── readable-stream@1.0.34 
│   │ │ ├── caseless@0.6.0 
│   │ │ ├── forever-agent@0.5.2 
│   │ │ ├─┬ form-data@0.1.4 
│   │ │ │ ├── async@0.9.2 
│   │ │ │ └── mime@1.2.11 
│   │ │ ├─┬ hawk@1.1.1 
│   │ │ │ ├── boom@0.4.2 
│   │ │ │ ├── cryptiles@0.2.2 
│   │ │ │ ├── hoek@0.9.1 
│   │ │ │ └── sntp@0.2.4 
│   │ │ ├─┬ http-signature@0.10.1 
│   │ │ │ ├── asn1@0.1.11 
│   │ │ │ ├── assert-plus@0.1.5 
│   │ │ │ └── ctype@0.5.3 
│   │ │ ├── json-stringify-safe@5.0.1 
│   │ │ ├── mime-types@1.0.2 
│   │ │ ├── node-uuid@1.4.7 
│   │ │ ├── oauth-sign@0.4.0 
│   │ │ ├── qs@1.2.2 
│   │ │ ├── stringstream@0.0.5 
│   │ │ ├── tough-cookie@2.3.1 
│   │ │ └── tunnel-agent@0.4.3 
│   │ ├─┬ request-progress@0.3.0 
│   │ │ └── throttleit@0.0.2 
│   │ ├── retry@0.6.0 
│   │ ├─┬ shell-quote@1.4.3 
│   │ │ ├── array-filter@0.0.1 
│   │ │ ├── array-map@0.0.0 
│   │ │ ├── array-reduce@0.0.0 
│   │ │ └── jsonify@0.0.0 
│   │ ├── stringify-object@1.0.1 
│   │ ├─┬ tar-fs@0.5.2 
│   │ │ ├─┬ pump@0.3.5 
│   │ │ │ ├─┬ end-of-stream@1.0.0 
│   │ │ │ │ └── once@1.3.3 
│   │ │ │ └── once@1.2.0 
│   │ │ └─┬ tar-stream@0.4.7 
│   │ │   ├─┬ bl@0.9.5 
│   │ │   │ └── readable-stream@1.0.34 
│   │ │   └── end-of-stream@1.1.0 
│   │ ├── tmp@0.0.23 
│   │ └─┬ update-notifier@0.2.0 
│   │   ├─┬ latest-version@0.2.0 
│   │   │ └─┬ package-json@0.2.0 
│   │   │   ├─┬ got@0.3.0 
│   │   │   │ └── object-assign@0.3.1 
│   │   │   └─┬ registry-url@0.1.1 
│   │   │     └─┬ npmconf@2.1.2 
│   │   │       ├─┬ config-chain@1.1.11 
│   │   │       │ └── proto-list@1.2.4 
│   │   │       ├── ini@1.3.4 
│   │   │       ├── nopt@3.0.6 
│   │   │       └── uid-number@0.0.5 
│   │   ├─┬ semver-diff@0.1.0 
│   │   │ └── semver@2.3.2 
│   │   └─┬ string-length@0.1.2 
│   │     └─┬ strip-ansi@0.2.2 
│   │       └── ansi-regex@0.1.0 
│   ├─┬ cdnjs-cdn-data@0.1.2 
│   │ └── semver@5.0.3 
│   ├─┬ debug@1.0.4 
│   │ └── ms@0.6.2 
│   ├── google-cdn-data@0.1.23 
│   ├── regexp-quote@0.0.0 
│   └── semver@2.3.2 
├─┬ grunt-jscs@1.8.0 
│ ├─┬ jscs@1.13.1 
│ │ ├─┬ chalk@1.0.0 
│ │ │ ├── ansi-styles@2.2.1 
│ │ │ ├─┬ has-ansi@1.0.3 
│ │ │ │ └── ansi-regex@1.1.1 
│ │ │ ├── strip-ansi@2.0.1 
│ │ │ └── supports-color@1.3.1 
│ │ ├─┬ cli-table@0.3.1 
│ │ │ └── colors@1.0.3 
│ │ ├── commander@2.6.0 
│ │ ├── esprima@1.2.5 
│ │ ├── esprima-harmony-jscs@1.1.0-bin 
│ │ ├── estraverse@1.9.3 
│ │ ├─┬ glob@5.0.15 
│ │ │ ├─┬ inflight@1.0.5 
│ │ │ │ └── wrappy@1.0.2 
│ │ │ ├── once@1.3.3 
│ │ │ └── path-is-absolute@1.0.1 
│ │ ├─┬ lodash.assign@3.0.0 
│ │ │ ├─┬ lodash._baseassign@3.2.0 
│ │ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ │ └─┬ lodash.keys@3.1.2 
│ │ │ │   ├── lodash._getnative@3.9.1 
│ │ │ │   ├── lodash.isarguments@3.1.0 
│ │ │ │   └── lodash.isarray@3.0.4 
│ │ │ └─┬ lodash._createassigner@3.1.1 
│ │ │   ├── lodash._bindcallback@3.0.1 
│ │ │   ├── lodash._isiterateecall@3.0.9 
│ │ │   └── lodash.restparam@3.6.1 
│ │ ├── minimatch@2.0.10 
│ │ ├── pathval@0.1.1 
│ │ ├─┬ prompt@0.2.14 
│ │ │ ├── pkginfo@0.4.0 
│ │ │ ├── read@1.0.7 
│ │ │ ├── revalidator@0.1.8 
│ │ │ ├─┬ utile@0.2.1 
│ │ │ │ ├── async@0.2.10 
│ │ │ │ ├── deep-equal@1.0.1 
│ │ │ │ ├── i@0.3.5 
│ │ │ │ └── ncp@0.4.2 
│ │ │ └─┬ winston@0.8.3 
│ │ │   ├── async@0.2.10 
│ │ │   ├── cycle@1.0.3 
│ │ │   ├── eyes@0.1.8 
│ │ │   ├── isstream@0.1.2 
│ │ │   ├── pkginfo@0.3.1 
│ │ │   └── stack-trace@0.0.9 
│ │ ├─┬ vow-fs@0.3.6 
│ │ │ ├─┬ glob@7.1.1 
│ │ │ │ └── minimatch@3.0.3 
│ │ │ └── vow-queue@0.4.2 
│ │ └─┬ xmlbuilder@2.6.5 
│ │   └── lodash@3.10.1 
│ ├── lodash@2.4.2 
│ └── vow@0.4.12 
├─┬ grunt-newer@1.2.0 
│ ├── async@1.5.2 
│ └─┬ rimraf@2.5.4 
│   └─┬ glob@7.1.1 
│     ├── fs.realpath@1.0.0 
│     └── minimatch@3.0.3 
├─┬ grunt-ng-annotate@0.9.2 
│ ├── lodash@2.4.2 
│ └─┬ ng-annotate@0.15.4 
│   ├── acorn@0.11.0 
│   ├── alter@0.2.0 
│   ├── convert-source-map@0.4.1 
│   ├─┬ optimist@0.6.1 
│   │ └── minimist@0.0.10 
│   ├─┬ ordered-ast-traverse@1.1.1 
│   │ └── ordered-esprima-props@1.1.0 
│   ├── simple-fmt@0.1.0 
│   ├── simple-is@0.2.0 
│   ├── source-map@0.1.43 
│   ├── stable@0.1.5 
│   ├── stringmap@0.2.2 
│   ├── stringset@0.2.1 
│   └── tryor@0.1.2 
├─┬ grunt-postcss@0.5.5 
│ ├── bluebird@2.11.0 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ └── diff@1.4.0 
├─┬ grunt-svgmin@2.0.1 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├─┬ each-async@1.1.1 
│ │ └── set-immediate-shim@1.0.1 
│ ├─┬ log-symbols@1.0.2 
│ │ └─┬ chalk@1.1.3 
│ │   ├── ansi-styles@2.2.1 
│ │   ├─┬ has-ansi@2.0.0 
│ │   │ └── ansi-regex@2.0.0 
│ │   ├── strip-ansi@3.0.1 
│ │   └── supports-color@2.0.0 
│ └─┬ svgo@0.5.6 
│   ├─┬ coa@1.0.1 
│   │ └── q@1.4.1 
│   ├── colors@1.1.2 
│   ├─┬ js-yaml@3.3.1 
│   │ ├─┬ argparse@1.0.9 
│   │ │ └── sprintf-js@1.0.3 
│   │ └── esprima@2.2.0 
│   ├─┬ mkdirp@0.5.1 
│   │ └── minimist@0.0.8 
│   ├── sax@1.1.6 
│   └── whet.extend@0.9.9 
├─┬ grunt-usemin@3.1.1 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├─┬ debug@2.2.0 
│ │ └── ms@0.7.1 
│ ├── lodash@3.10.1 
│ └── path-exists@1.0.0 
├─┬ grunt-wiredep@2.0.0 
│ └─┬ wiredep@2.2.2 
│   ├─┬ bower-config@0.5.2 
│   │ ├── graceful-fs@2.0.3 
│   │ └── osenv@0.0.3 
│   ├─┬ glob@4.5.3 
│   │ └── minimatch@2.0.10 
│   ├── lodash@2.4.2 
│   ├── propprop@0.3.1 
│   └─┬ through2@0.6.5 
│     ├── readable-stream@1.0.34 
│     └── xtend@4.0.1 
├── jit-grunt@0.9.1 
├─┬ jshint-stylish@1.0.2 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├── string-length@1.0.1 
│ └── text-table@0.2.0 
└─┬ time-grunt@1.4.0 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ date-time@1.1.0 
  │ └── time-zone@0.1.0 
  ├─┬ figures@1.7.0 
  │ └── object-assign@4.1.0 
  ├── number-is-nan@1.0.1 
  └─┬ pretty-ms@2.1.0 
    ├── is-finite@1.0.2 
    ├── parse-ms@1.0.1 
    └── plur@1.0.0 

Running "wiredep:app" (wiredep) task

Running "wiredep:test" (wiredep) task

Running "wiredep:sass" (wiredep) task

Done, without errors.


Execution Time (2016-10-08 21:25:54 UTC+2)
loading tasks          142ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 50%
loading grunt-wiredep    6ms  ▇▇ 2%
wiredep:app            113ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 40%
wiredep:test             8ms  ▇▇ 3%
wiredep:sass            13ms  ▇▇▇ 5%
Total 283ms

? Overwrite package.json? overwrite
    force     package.json

> phantomjs-prebuilt@2.1.13 install /home/bvpelt/Develop/zonpan/gapapp/node_modules/phantomjs-prebuilt
> node install.js

PhantomJS not found on PATH
Download already available at /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2
Verified checksum of previously downloaded file
Extracting tar contents (via spawned process)
Removing /home/bvpelt/Develop/zonpan/gapapp/node_modules/phantomjs-prebuilt/lib/phantom
Copying extracted folder /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2-extract-1475954772122/phantomjs-2.1.1-linux-x86_64 -> /home/bvpelt/Develop/zonpan/gapapp/node_modules/phantomjs-prebuilt/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /home/bvpelt/Develop/zonpan/gapapp/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs
gapapp@ /home/bvpelt/Develop/zonpan/gapapp
├── jasmine-core@2.5.2 
├─┬ karma@1.3.0 
│ ├── bluebird@3.4.6 
│ ├─┬ chokidar@1.6.0 
│ │ ├─┬ anymatch@1.3.0 
│ │ │ └── arrify@1.0.1 
│ │ ├── async-each@1.0.1 
│ │ ├── glob-parent@2.0.0 
│ │ ├─┬ is-binary-path@1.0.1 
│ │ │ └── binary-extensions@1.7.0 
│ │ ├─┬ is-glob@2.0.1 
│ │ │ └── is-extglob@1.0.0 
│ │ └─┬ readdirp@2.1.0 
│ │   ├── graceful-fs@4.1.9 
│ │   ├── minimatch@3.0.3 
│ │   └─┬ readable-stream@2.1.5 
│ │     └── isarray@1.0.0 
│ ├── colors@1.1.2 
│ ├─┬ combine-lists@1.0.1 
│ │ └── lodash@4.16.4 
│ ├─┬ connect@3.5.0 
│ │ └── finalhandler@0.5.0 
│ ├── core-js@2.4.1 
│ ├── di@0.0.1 
│ ├─┬ dom-serialize@2.2.1 
│ │ ├── custom-event@1.0.0 
│ │ ├── ent@2.2.0 
│ │ └── void-elements@2.0.1 
│ ├─┬ expand-braces@0.1.2 
│ │ ├── array-slice@0.2.3 
│ │ └─┬ braces@0.1.5 
│ │   └─┬ expand-range@0.1.1 
│ │     ├── is-number@0.1.1 
│ │     └── repeat-string@0.2.2 
│ ├── glob@7.1.1 
│ ├── graceful-fs@4.1.9 
│ ├─┬ http-proxy@1.15.1 
│ │ ├── eventemitter3@1.2.0 
│ │ └── requires-port@1.0.0 
│ ├── isbinaryfile@3.0.1 
│ ├── lodash@3.10.1 
│ ├─┬ log4js@0.6.38 
│ │ └── readable-stream@1.0.34 
│ ├── minimatch@3.0.3 
│ ├── qjobs@1.1.5 
│ ├── range-parser@1.2.0 
│ ├── rimraf@2.5.4 
│ ├─┬ socket.io@1.4.7 
│ │ ├─┬ engine.io@1.6.10 
│ │ │ ├─┬ accepts@1.1.4 
│ │ │ │ ├─┬ mime-types@2.0.14 
│ │ │ │ │ └── mime-db@1.12.0 
│ │ │ │ └── negotiator@0.4.9 
│ │ │ ├── base64id@0.1.0 
│ │ │ ├─┬ engine.io-parser@1.2.4 
│ │ │ │ ├── after@0.8.1 
│ │ │ │ ├── arraybuffer.slice@0.0.6 
│ │ │ │ ├── base64-arraybuffer@0.1.2 
│ │ │ │ ├── blob@0.0.4 
│ │ │ │ ├── has-binary@0.1.6 
│ │ │ │ └── utf8@2.1.0 
│ │ │ └─┬ ws@1.0.1 
│ │ │   ├── options@0.0.6 
│ │ │   └── ultron@1.0.2 
│ │ ├── has-binary@0.1.7 
│ │ ├─┬ socket.io-adapter@0.4.0 
│ │ │ └─┬ socket.io-parser@2.2.2 
│ │ │   ├── debug@0.7.4 
│ │ │   └── json3@3.2.6 
│ │ ├─┬ socket.io-client@1.4.6 
│ │ │ ├── backo2@1.0.2 
│ │ │ ├── component-bind@1.0.0 
│ │ │ ├── component-emitter@1.2.0 
│ │ │ ├─┬ engine.io-client@1.6.9 
│ │ │ │ ├── component-inherit@0.0.3 
│ │ │ │ ├── has-cors@1.1.0 
│ │ │ │ ├── parsejson@0.0.1 
│ │ │ │ ├── parseqs@0.0.2 
│ │ │ │ ├── xmlhttprequest-ssl@1.5.1 
│ │ │ │ └── yeast@0.1.2 
│ │ │ ├── indexof@0.0.1 
│ │ │ ├── object-component@0.0.3 
│ │ │ ├─┬ parseuri@0.0.4 
│ │ │ │ └─┬ better-assert@1.0.2 
│ │ │ │   └── callsite@1.0.0 
│ │ │ └── to-array@0.1.4 
│ │ └─┬ socket.io-parser@2.2.6 
│ │   ├── benchmark@1.0.0 
│ │   ├── component-emitter@1.1.2 
│ │   └── json3@3.3.2 
│ ├── source-map@0.5.6 
│ └─┬ useragent@2.1.9 
│   └── lru-cache@2.2.4 
├── karma-jasmine@1.0.2 
├─┬ karma-phantomjs-launcher@1.0.2 
│ └── lodash@4.16.4 
└─┬ phantomjs-prebuilt@2.1.13 
  ├── es6-promise@4.0.5 
  ├─┬ extract-zip@1.5.0 
  │ ├─┬ concat-stream@1.5.0 
  │ │ └─┬ readable-stream@2.0.6 
  │ │   └── isarray@1.0.0 
  │ ├── debug@0.7.4 
  │ ├─┬ mkdirp@0.5.0 
  │ │ └── minimist@0.0.8 
  │ └── yauzl@2.4.1 
  ├─┬ fs-extra@0.30.0 
  │ ├── graceful-fs@4.1.9 
  │ ├─┬ jsonfile@2.4.0 
  │ │ └── graceful-fs@4.1.9 
  │ └── klaw@1.3.0 
  ├── hasha@2.2.0 
  ├── kew@0.7.0 
  ├── progress@1.1.8 
  ├─┬ request@2.74.0 
  │ ├── aws-sign2@0.6.0 
  │ ├── aws4@1.4.1 
  │ ├── caseless@0.11.0 
  │ ├─┬ combined-stream@1.0.5 
  │ │ └── delayed-stream@1.0.0 
  │ ├── forever-agent@0.6.1 
  │ ├─┬ form-data@1.0.1 
  │ │ └─┬ async@2.0.1 
  │ │   └── lodash@4.16.4 
  │ ├─┬ har-validator@2.0.6 
  │ │ ├─┬ chalk@1.1.3 
  │ │ │ ├── ansi-styles@2.2.1 
  │ │ │ ├─┬ has-ansi@2.0.0 
  │ │ │ │ └── ansi-regex@2.0.0 
  │ │ │ ├── strip-ansi@3.0.1 
  │ │ │ └── supports-color@2.0.0 
  │ │ ├── commander@2.9.0 
  │ │ └─┬ is-my-json-valid@2.15.0 
  │ │   ├── generate-function@2.0.0 
  │ │   ├─┬ generate-object-property@1.2.0 
  │ │   │ └── is-property@1.0.2 
  │ │   └── jsonpointer@4.0.0 
  │ ├─┬ hawk@3.1.3 
  │ │ ├── boom@2.10.1 
  │ │ ├── cryptiles@2.0.5 
  │ │ ├── hoek@2.16.3 
  │ │ └── sntp@1.0.9 
  │ ├─┬ http-signature@1.1.1 
  │ │ ├── assert-plus@0.2.0 
  │ │ ├─┬ jsprim@1.3.1 
  │ │ │ ├── extsprintf@1.0.2 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └── verror@1.3.6 
  │ │ └─┬ sshpk@1.10.1 
  │ │   ├── asn1@0.2.3 
  │ │   ├── assert-plus@1.0.0 
  │ │   ├── bcrypt-pbkdf@1.0.0 
  │ │   ├─┬ dashdash@1.14.0 
  │ │   │ └── assert-plus@1.0.0 
  │ │   ├── ecc-jsbn@0.1.1 
  │ │   ├─┬ getpass@0.1.6 
  │ │   │ └── assert-plus@1.0.0 
  │ │   ├── jodid25519@1.0.2 
  │ │   ├── jsbn@0.1.0 
  │ │   └── tweetnacl@0.14.3 
  │ ├── is-typedarray@1.0.0 
  │ ├── oauth-sign@0.8.2 
  │ └── qs@6.2.1 
  ├─┬ request-progress@2.0.1 
  │ └── throttleit@1.0.0 
  └─┬ which@1.2.11 
    └── isexe@1.1.2 

npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.14
[bvpelt@pluto gapapp]$ 
cp config.xml app
```

In Gruntfile.js change line 25

Original
```
 21 
 22   // Configurable paths for the application
 23   var appConfig = {
 24     app: require('./bower.json').appPath || 'app',
 25     dist: 'dist'
 26   };


404     // Copies remaining files to places other tasks can use
405     copy: {
406       dist: {
407         files: [{
408           expand: true,
409           dot: true,
410           cwd: '<%= yeoman.app %>',
411           dest: '<%= yeoman.dist %>',
412           src: [
413             '*.{ico,png,txt}',
414             '*.html',
415             'images/{,*/}*.{webp}',
416             'styles/fonts/{,*/}*.*'
417           ]
418         }, {

```

Changed
```
21 
22   // Configurable paths for the application
23   var appConfig = {
24     app: require('./bower.json').appPath || 'app',
25     dist: 'www'
26   };


404     // Copies remaining files to places other tasks can use
405     copy: {
406       dist: {
407         files: [{
408           expand: true,
409           dot: true,
410           cwd: '<%= yeoman.app %>',
411           dest: '<%= yeoman.dist %>',
412           src: [
413             '*.{ico,png,txt,xml}',
414             '*.html',
415             'images/{,*/}*.{webp}',
416             'styles/fonts/{,*/}*.*'
417           ]
418         }, {

```

In app/index.html change to load jquery and angular from local resources

Original

 3   <head>
 4     <meta charset="utf-8">
 5     <title></title>
 6     <meta name="description" content="">
 7     <meta name="viewport" content="width=device-width">
 8     <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
 9     <!-- build:css(.) styles/vendor.css -->
10     <!-- bower:css -->
11     <!-- endbower -->
12     <!-- endbuild -->
13     <!-- build:css(.tmp) styles/main.css -->
14     <link rel="stylesheet" href="styles/main.css">
15     <!-- endbuild -->
16   </head>


Changed

 3   <head>
 4     <meta charset="utf-8">
 5     <title></title>
 6     <meta name="description" content="">
 7     <meta name="viewport" content="width=device-width">
 8     <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
 9     <!-- build:css(.) styles/vendor.css -->
10     <!-- bower:css -->
11     <!-- endbower -->
12     <!-- endbuild -->
13     <!-- build:css(.tmp) styles/main.css -->
14     <link rel="stylesheet" href="styles/main.css">
       <!-- build:js scripts/library.js -->
       <script src="bower_components/jquery/jquery.js"></script>
       <script src="bower_components/angular/angular.js"></script>
       <!-- endbuild -->
16   </head>

../node_modules/cordova/bin/cordova build

