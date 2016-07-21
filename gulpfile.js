var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var rimraf = require("rimraf");
var merge = require('merge-stream');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var webpack = require('webpack');

var srcPath = 'july-meetup';
var libPath = 'july-dist';

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

function getFiles(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isFile();
      });
}

gulp.task('clean', function (cb) {
    rimraf(libPath, cb);
});

gulp.task('scripts', ['clean'], function() {
   var folders = getFolders(srcPath);

   //foreach folder
   var tasks = folders.map(function(folder) {
    //foreach file in a folder
      return gulp.src(path.join(srcPath, folder, '/**/*.js'))
        // transpile
        .pipe(babel())
        // write to output
        .pipe(gulp.dest(libPath));
   });

   return tasks;
});

gulp.task('assets', ['clean'], function() {
    var folders = getFolders(srcPath);
    var tasks = folders.map(function(folder) {
     //foreach file in a folder
     return gulp.src(path.join(srcPath, folder, '/**/*.+(scss|css|jpg|jpeg|gif|png)'))
       .pipe(gulp.dest(libPath));
    });
    return tasks;
});

gulp.task('webpack', ['lib'], function(done) {
    webpack(require('./webpack.config.js')).run(function (err, stats) {
        if (err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }
        done();
    });
});

gulp.task('lib', ['clean', 'scripts', 'assets']);
gulp.task('default', ['lib']);

gulp.task('all', ['default', 'webpack']);
