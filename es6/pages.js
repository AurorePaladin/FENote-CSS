import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//对gulp的语句做if判断
import livereload from 'gulp-livereload';//文件修改后 浏览器自动刷新
import args from './util/args';//引入 命令行参数进行解析的包

gulp.task('pages',()=>{  //创建任务
  return gulp.src('app/**/*.ejs')//打开文件 /**/ 表示app下各个嵌套目录
  .pipe(gulp.dest('server'))//拷贝到server
  .pipe(gulpif(args.watch,livereload()))//监听是否要更新
})
