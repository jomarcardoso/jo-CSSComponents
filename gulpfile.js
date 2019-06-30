const gulp = require('gulp');
const gulpSass = require('gulp-sass');

function css(){
  return gulp.src('./assets/css/**/*.scss')
    .pipe(gulpSass({
      outputStyle: 'expanded'
    }).on('error', gulpSass.logError))
    .pipe(gulp.dest('./assets/css/'));
}

function watch() {
    gulp.watch(['./assets/css/**/*.scss'], css);
}

exports.default = gulp.series(css, watch);
