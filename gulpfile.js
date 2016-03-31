var gulp = require("gulp");
var inject = require("gulp-inject");
var less = require("gulp-less");
var concat = require("gulp-concat");
var cssnano = require("gulp-cssnano");
var connect = require("gulp-connect");
var es = require('event-stream');

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

    return gulp.src("./src/index.html")
        //.pipe(inject(buildLess(),{relative: true}))
        .pipe(gulp.dest(DEST))
        .pipe(connect.reload());

});

gulp.task("connect", function () {
    connect.server({
        root: "dist",
        livereload: true
    })
});

gulp.task("watch", function () {
    gulp.watch(['./src/index.html'], ["html"]);
    gulp.watch(['./src/less/*.less'], ["less"]);
});

gulp.task("server", ["less", "html", "connect", "watch"]);