//Array
{
  let arr =Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty=',empty);
}
//arry=[3,4,7,9,11]
//empty=[]



//Array.from
{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){//es5的方法
    console.log(item.textContent);//Content 原生JS获取dom节点的一个方法
  })

  console.log(Array.from([1,3,5],function(item){return item*2}));//转换这个数组的同时进行了遍历，每个数组都乘以2
}
//输出页面上所有 <P></P>标签 里的内容
//[2,6,10]

//填充数组的功能
{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3));//起始位置1开始 到 3 截止 都要被7替换
}
//fill-7    [7,7,7]
//fill,pos  ["a",7,7]


//keys values entries
{
  for(let index of['1','c','ks'].keys()){ //keys这个方法返回的这个数组所有下标的集合
    console.log('keys',index);
  }
  for(let value of['1','c','ks'].values()){
    console.log('values',value);//有兼容性问题 要用 babel-polyfill
  }
  for(let [index,value] of['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}
//keys       0
//keys       1
//keys       2
//values     1
//values     c
//values     ks
//values   0  1
//values   1  c
//values   2  ks


//当前数组内部的成员复制到其他位置上
{
  console.log([1,2,3,4,5].copyWithin(0,3,4));//替换的位置从下标0开始替换 读取的数据从下标3开始 截止位置是下标4之前
}
//[4,2,3,4,5]


//查找一个元素是不是在某个数组中
{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));//find只找到第一个符合条件的就返回值并截止
  console.log([1,2,3,4,5,6].findIdex(function(item){return item>3}));//findIndex只找到第一个符合条件的就返回 下标 并截止
}
//4
//3

{
  console.log('number',[1,2,NaN].includes(1));//寻找某个值 包含返回 true
  console.log('number',[1,2,NaN].includes(NaN));
}
//number true
//number true
