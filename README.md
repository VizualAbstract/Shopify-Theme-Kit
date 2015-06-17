# Shopify + Grunt + Timber

Get organized for your next Shopify theme project, featuring the [Timber (v2.1.2)](https://github.com/Shopify/Timber) base theme by Shopify.

![Shopify + Grunt + Timber](http://host.coreycapetillo.com/git/media/shopify-grunt-timber.png)


## Features

* Timber utilized as a submodule
* Seperate Sass files for Timber's master `timber.scss.css`
* Concacts and copies files into the assets folder

## NPM Packages

* grunt-contrib-watch
* grunt-contrib-imagemin
* grunt-contrib-concat
* grunt-contrib-jshint

## Instructions

* Run `git clone git@github.com:MrPopperRx/Shopify-Theme-Kit.git`
* Run `npm install` to install NPM packages
* Run `grunt watch` to compile files and begin watching the assets folder
* Replace reference to `timber.scss.css` in **theme/layout/theme.liquid** on line `31` with `styles.scss.css`
* Add `{{ 'main.js' | asset_url | script_tag }}` to **theme/layout/theme.liquid** on line `382`

## Additional Resources

* **Timber Documentation:** To learn more about how to use Timber, checkout what's available on the [documentation site](http://shopify.github.io/Timber/).
* **Shopify Theme Gem:** If you have the [Shopify Theme Gem](https://github.com/Shopify/shopify_theme) installed, you can `cd theme` and run the `theme watch` command to enable real-time editing of your theme files.