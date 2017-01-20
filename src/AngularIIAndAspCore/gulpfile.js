/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require("gulp");
var rimraf = require('rimraf');
var root_path = { webroot: "./wwwroot/" };

//library source
root_path.nmSrc = "./node_modules/";

//library destination
root_path.nmDest = root_path.webroot + "lib-npm/";

gulp.task('clean', function (cb) {
    return rimraf(root_path.nmDest, cb);
});

gulp.task('copy-lib-npm', function () {
    return gulp.src(root_path.nmSrc + '**/*')
            .pipe(gulp.dest(root_path.nmDest));
});

gulp.task("perform-all", ['clean', 'copy-lib-npm']);
 

//gulp.task("copy-rxjs", function () {
//    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
//        base: root_path.nmSrc + '/rxjs/bundles/'
//    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
//});

 

