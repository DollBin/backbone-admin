var gulp = require("gulp");
var inject = require("gulp-inject");
var less = require("gulp-less");
var concat = require("gulp-concat");
var cssnano = require("gulp-cssnano");
var connect = require("gulp-connect");
var es = require('event-stream');
var path = require("path");

const DEST = "./dist";


gulp.task("less", function () {

    return gulp.src("./src/less/bootstrap.less")
        .pipe(concat("AdminDoll.min.css"))
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest(DEST))
        .pipe(connect.reload());

});

gulp.task("html", function () {

    return gulp.src("src/**/*.html",{base:"src"})
        //.pipe(inject(buildLess(),{relative: true}))
        .pipe(gulp.dest(DEST))
        .pipe(connect.reload());

});

gulp.task("base.js", function () {
    return gulp.src([
            "./src/js/require.js",
            "./src/js/require.text.js",
            "./src/js/require.config.js",
            "./src/js/jquery.js",
            "./src/js/underscore.js",
            "./src/js/backbone.js"])
        .pipe(concat("base.min.js"))
        .pipe(gulp.dest(DEST))
        .pipe(connect.reload());
});

gulp.task("app.js", function () {
    return gulp.src("src/app/**/*.js",{base:"src"})
        .pipe(gulp.dest(DEST))
        .pipe(connect.reload());
});

gulp.task("js", ["base.js", "app.js"]);

gulp.task("connect", function () {
    connect.server({
        root: "dist",
        livereload: true
    })
});

gulp.task("watch", function () {
    gulp.watch(['./src/**/*.html'], ["html"]);
    gulp.watch(['./src/less/*.less'], ["less"]);
    gulp.watch(['./src/**/*.js'], ["js"]);
});

gulp.task("server", ["less", "js", "html", "connect", "watch"]);