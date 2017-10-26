import gulp from 'gulp';//引入gulp
import gulpSequence from 'gulp-sequence';//处理任务之间先后顺序
//顺序=> 1.清空 2.拷贝css 3.编译模板 4.执行脚本 数组 5.browser 6.serve 顺序不能打乱
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
