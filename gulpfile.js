var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
//We don't use webpack-dev-server because it doesn't work with pre-loaded sourcemaps
var browserSync = require('browser-sync').create();

//Update on changes
gulp.task('browser-sync', function () {
   browserSync.init({
      server: {
         baseDir: "./wwwroot"
      }
   });
   gulp.watch(["wwwroot/*.html", "wwwroot/*.js"]).on('change', browserSync.reload);
});

//Packs the files for entry / test, keeps the source maps generated from visual studio
gulp.task('auto-pack-files', function (callback) {
   return webpack({
      debug: true,
      devtool: "#source-map",
      watch: true,
      entry: {
         main: "./src/entry.js",
         test: "./src/test.js"
      },
      output: {
         filename: "./wwwroot/[name].bundle.js"
      }, module: {
         preLoaders: [
           {
              test: /\.js$/,
              loader: "source-map-loader"
           }
         ]
      }

   }, function (err, stats) {
      if (err) {
         throw new gutil.PluginError("webpack", err);
         callback();
      }
      gutil.log("[webpack]", stats.toString({
         // output options
      }));
   });
});