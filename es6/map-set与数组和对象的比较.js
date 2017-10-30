{
  //数据结构横向对比，增，查，改，删
  let map =new Map();
  let array=[];
  //增
  map.set('t',1);
  array.push({t:1});
  console.info('map-array',may,array);
  // 查
  let map-exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  console.info('map-array',map-exist,array_exist);
  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',may,array);
  // 删
  map.delete('t');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',may,array);
}
//map-array  Map(1) {"t"=>1}
//map-array  true  Object {t:1}
// map-array-modify  Map(1) {"t"=>2}
// map-array-empty   Map(0) {} []


{
  // set和array的对比
  let set=new Set();
  let array=[];
  // 增
  set.add({t:1});
  array.push({t:1});

  console.info('set-array',set,array);
  // 查
  let set_exist=set.has({t:1});
  let array_exist=array.find(item=>item.t);
  console.info('set-array',map-exist,array_exist);
  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array_exist.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);
  // 删
  set.forEach(item=>item.t?set.delete(item):'')
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}
//set-array  Set(1) {Object {t:1} }
//false    Object {t:1}
//set-array-modify set(1)  {Object {t:2}}
//set-array-modify set(0)  {}    {}


{
  //map,set,object的对比
  let item={t:1};
  let map=new Map();
  let set=new Set();
  let obj={};
  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;
  console.info('map-set-obj',obj,map,set);
  //查
  console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  });
  // 改
  map.set('t',2);
  item.t=2;
  obj['t']=2;
  console.info('map-set-obj-modify',obj,map,set);
  // 删
  map.delete('t');
  set.delete('t');
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map,set);

}
//map-set-obj  Object{t:1}  Map(1) {"t" => 1}  Set(1) {Object{t:1}}
//Object {map_exist: true, set_exist: true, obj_exist: true}
//map-set-obj-modify Object{t: 2} Map(1) {"t"=>2} Set(1) {Object {t:2}}
//map-set-obj-empty Object{}  Map(0){}  Set(0){}
