import yargs from 'yargs';//引入 yargs 这个包 处理命令行参数

const args = yargs
//区分开发环境 和 线上环境
.option('production',{
  boolean:true,
  default:false,//默认开发环境
  describe:'min all scripts'
})
//监听开发环境修改的文件
.option('watch',{
  boolean:true,
  default:false,
  describe:'watch all files'
})
//详细输出命令行执行的日志
.option('verbose',{
  boolean:true,
  default:false,
  describe:'log'
})
//处理参数 强制生成sourcemaps
.option('sourcemaps',{
  describe:'foce the creation of sroucemaps'
})
//设置服务器端口
.option('port',{
  string:true,
  default:8080,
  describe:'server port'
})
//对输入的命令行内容以字符串作为解析
.argv
