let gulp = require('gulp');
let sass = require('gulp-sass');
const pump = require('pump');
//创建任务
gulp.task('compileSass',function(){
    //执行任务时 会执行这里的代码
    //找出sass文件
    gulp.src(['./src/sass/*.scss'])//返回一个文件流（文件在内存中的状态）
    .pipe(sass({outputStyle:'compact'}).on('error',sass.logError)) //编译scss->css
    .pipe(gulp.dest('./src/css')) //输出到硬盘
    console.log(1)
});
gulp.task('autoSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});


//创建任务 优化
gulp.task('compressJs',()=>{
    pump([
        gulp.src('path'),
        uglify(),
        gulp.dest('path')

    ],cb)
})

//文件有修改  自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
    browserSync({
        server:'./src',
        port:1222,
        file:['./src/sass/**/*.html','./src/css/*.css']
    });
    gulp.watch('path',[])
})