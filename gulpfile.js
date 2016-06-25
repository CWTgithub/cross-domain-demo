var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connectA', function () {
  connect.server({
    root: "./domain_a",
    port: 8000,
    livereload: true
  });
});

gulp.task('connectB', function () {
  connect.server({
    root: './domain_b',
    port: 8001,
    livereload: true
  });
});

gulp.task('connectC', function () {
  connect.server({
    root: './domain_c',
    port: 8002,
    livereload: true
  });
});



gulp.task('default', ["connectA","connectB","connectC"]);