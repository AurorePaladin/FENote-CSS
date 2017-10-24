import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//对gulp的语句做if判断
import liveserver from 'gulp-live-server';//启动脚本作为服务器的包
import args from './util/args';//引入 命令行参数进行解析的包

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();//判定如果不是处于监听状态下 返回 回调函数

  var server = liveserver.new(['--harmony','server/bin/www']);//如果处于监听状态下 创建一个服务器
  server.start();//启动服务器

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){//监听 public和 views目录下的.js .ejs发生改变浏览器自动刷新
    server.notify.apply(server,[file]);//改动传给服务器 作 相应的处理
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){//监听需要重启的目录下的文件
    server.start.bind(server)()//变化的文件 重启
  });
})
