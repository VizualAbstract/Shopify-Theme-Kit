Shopify + Grunt + Timber
===

Shopify + Grunt + Timber (v2.1.2)

### Features

* Timber utilized as a submodule
* Seperate Sass files for Timber's master `timber.scss.css`
* Concacts and copies files into the assets folder

### NPM Packages
* grunt-contrib-watch
* grunt-contrib-imagemin
* grunt-contrib-concat
* grunt-contrib-jshint

### Instructions
* Run `git clone git@github.com:MrPopperRx/Shopify-Theme-Kit.git`
* Run `npm install` to install NPM packages
* Run `grunt watch` to compile files and begin watching `/assets/`
* Replace reference to **timber.scss.css** in `theme/layout/theme.liquid` on line `31` with **styles.scss.css**
* Add `{{ 'main.js' | asset_url | script_tag }}` to `theme/layout/theme.liquid` on line `382`