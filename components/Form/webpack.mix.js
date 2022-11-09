
/**
 * Laravel Mix 6 / Webpack Build Tooling
 * 
 * @documentation
 *  https://laravel-mix.com/docs/6.0/versioning
 */

// mix to build
const mix = require('./../../node_modules/laravel-mix');
// output directory
mix.setPublicPath('./js');
// external react loading
mix.webpackConfig({
  externals: {
    "jquery": "jQuery",
  }
});
// @todo - include linting
// build js
mix.js('src/Index.js', 'js');