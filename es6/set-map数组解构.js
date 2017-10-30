{
  let list =new Set();
  list.add(5);
  list.add(7);
  console.log('size',list.size);//list.size 类似于 list.lenth
}
//size 2


{
  let arr = [1,2,3,4,5];
  let list =new Set(arr);

  console.log('size',list.size);
}
//size 5

{
  let list =new Set();
  list.add(1);
  list.add(2);
  list.add(1);//没有成功添加进去  重复的元素不会添加进去也不会报错

  console.log('list',list);

  let arr=[1,2,3,1,2];
  let list2=new Set(arr);//去重的特性

  console.log('unique',list2);
}
//{1 2}
//{ 1 2 3}

{
  let arr=['add','delete','clear','has'];//添加  删除  清空  判断是否有这个元素
  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('list'.list);
}
//has true
//{'delete','clear','has'}
//Set()

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  }

  for(let key of list.values()){
    console.log('value',value);
  }

  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}
//keys add     keys delete     keys clear     keys has
//value add    value delete    value clear    value has
//entries add add  entries delete delete  entries clear clear entries has has
//add delete clear has


{
let weakList= new WeakSet();//支持的数据类型不同 1.只能是对象 2.弱引用 3.不能使用方法
let arg={};

weakList.add(arg);

console.log('weakList',weakList);
}
//weakList { Object{} }


{
  let map = new Map();
  let arr =['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}
//map  Map  {["123"] => 456} 456


{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}
//map args   Map {"a" => 123 , "b" => 456}
//size 2
//delete true  Map {"b" => 456}
//clear undefined   Map {}


{
  let  weakmap = new WeakMap();
  
  let o={
    weak.map.set(o,123);
    console.log(weakmap.get(o));
  }
}
//123
