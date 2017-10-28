{
  function test(x,y='world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}
//默认值 hello world
//默认值 hello kill

{
  let a='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');
  test2();
}
//作用域 kill kill
//undefined undefined

{
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}
//rest 1
//rest 2
//rest 3
//rest 4
//rest a

{
  console.log(...[1,2,4]);
  console.log('a'...[1,2,4]);
}
//1 2 4
//a 1 2 4


//箭头函数
{
  let arrow = v => v*2;//arrow函数名  v函数参数   v*2函数返回值
  let arrow2 =() => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());//做箭头函数的时候记得要用this绑定
}
//arrow 6
//5


//伪调用    性能的优化中 提升性能
{
  function tail(X){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x);
  }
  fx(123);
}
//tail 123
