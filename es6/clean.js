import gulp from 'gulp';//引入gulp
import del from 'del';//删除参数的包
import args from './util/args';//引入 命令行参数进行解析的包
//创建清空任务
gulp.task('clean',()=>{
  return del(['sever/public','sever/views'])//清空public views
})
