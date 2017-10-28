//二进制和八进制
{
  console.log(0b111110111);//二进制 以 0b开头 不区分大小写
  console.log(0o767);//八进制 以 0o开头 不区分大小写
}
//503
//503


//判断这个值是否在 有效范围 内
{
  console.log('15',Number.ifFinite(15));
  console.log('NaN',Number.ifFinite(NaN));
  console.log('1/0',Number.ifFinite(1/0));
  console.log('NaN',Number.isNaN(NaN));//判断是不是一个NaN
  console.log('0',Number.isNaN(0));
}
//15 true
//NaN false
//1/0 false
//NaN true
//0 false


//判断是不是一个整数
{
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25.1'));
  console.log('25.1',Number.isInteger('25'));
}
//25     true
//25.0   true
//25.1   false
//25.1   false
//25.1   false


//判断一个数是不是在-2的53次方 和 2的53方 之间的
{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}
//9007199254740991  -9007199254740991
//10 true
//a false


//判断带小数的整数部分并返回
{
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
}
//4.1  4
//4.9   4


//判断一个数是 正数(返回1) ,0(返回0) 还是 负数(返回-1)  NaN
{
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));//可以把字符串转成数字
  console.log('foo',Math.sign('foo'));
}
//-5    -1
//0     0
//5     1
//50    1
//foo   NaN


//立方根的计算
{
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
//-1   -1
//8    2
