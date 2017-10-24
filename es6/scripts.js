import gulp from 'gulp';//引入gulp
import gulpif from 'gulp-if';//对gulp的语句做if判断
import concat from 'gulp-concat';//处理文件拼切 合并
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';//处理gulp基于stream的文件流
import named from 'vinyl-named';//重命名标志
import livereload from 'gulp-livereload';//文件修改后 浏览器自动刷新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from  'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//处理JS CS压缩
import {log,colors} from 'gulp-util';//命令行输出工具
import args from './util/args';//引入 命令行参数进行解析的包
//创建脚本编译的命令任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js']) //函数主体
  .pipe(plumber({       //处理常规的错误逻辑，集中处理错误，改变默认处理机制
    errorHandle:function(){

    }
  }))
  .pipe(named())//对文件重命名
  .pipe(gulpWebpack({  //对JS 进行编译
    module:{
      loaders:[{
        test:/\.js$/,
        loader:'babel'
      }]
    }
  }),null,(err,stats)=>{ //处理错误
    log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
      chunks:false
    }))
  })
  .pipe(gulp.dest('server/public/js')) //编译完后的存放路径
  .pipe(rename({  //编译压缩的过程，重命名 给开发者或用户识别的文件
    basename:'cp',
    extname:'.min.js'
  }))
  .pipe(uglify({compress:{propertise:false},output:{'quote_keys':true}}))//压缩  配置压缩的过程
  .pipe(gulp.dest('server/public/js'))//压缩完后的存放路径
  .pipe(gulpif(args.watch,livereload()))//监听文件变化了后 自动刷新
})
