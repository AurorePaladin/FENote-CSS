import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//对gulp的语句做if判断
import gutil from 'gulp-util';//常用工具 函数集合
import args from './util/args';//引入 命令行参数进行解析的包
//创建浏览器任务
gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();//判定如果不是处于监听状态下 返回 回调函数
  gulp.watch('app/**/*.js',['scripts']);//app目录下js里的文件发生改变 自动调用scripts这个文件写入server
  gulp.watch('app/**/*.ejs',['pages']);//同上
  gulp.watch('app/**/*.css',['css']);//同上
})
