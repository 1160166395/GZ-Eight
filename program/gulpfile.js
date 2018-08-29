const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    // .pipe(sass())
    // .pipe(gulp.dest('./dist'))
})
gulp.task('autobuild', function(){
    gulp.watch('./src/*.html', function(){
        gulp.src('./src/*.html').pipe(connect.reload())
    })
    gulp.watch('./src/js/*.js', ['rjs']);
    gulp.watch('./src/scss/*.scss', ['sass']);
})

gulp.task('default',['sass']);