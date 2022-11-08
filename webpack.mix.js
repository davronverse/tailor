/**
 * Laravel Mix 6 / Webpack Build Tooling
 * Builds Global CSS From Flowbite & jQuery
 */

// include laravel-mix-tailwind
require('laravel-mix-tailwind');
// setup mixf
const mix = require('laravel-mix');
const local = require('./src/js/utils/local-config');
// build directory
mix.setPublicPath('./dist');
// set tailwind
mix.tailwind();
// build css
mix.sass('src/scss/app.scss', 'css');
mix.options({
  processCssUrls: false
})
// build js
mix.js('src/js/app.js', 'js');
mix.webpackConfig({
  externals: {
    "jquery": "jQuery",
  }
});
// copy images
mix.copyDirectory('src/img', 'dist/img');
// copy fonts
mix.copyDirectory('src/fonts', 'dist/fonts');
// prod tasks
if (mix.inProduction()) {
  mix.version();
  mix.sourceMaps();
}
// local proxy
//if (local.proxy) {
mix.browserSync({
  server: {
    baseDir: "./",
    directory: true
  },
  https: true,
  injectChanges: true,
  open: false,
  files: [
    'dist/**/*.{css,js}',
    'components/**/src/*.{js}',
    'components/**/*',
    'components/**/*.{php,html}'
  ]
});
//}