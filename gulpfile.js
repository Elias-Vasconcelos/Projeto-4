const gulp = require('gulp');
const GulpSass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(GulpSass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}


exports.default = styles ;