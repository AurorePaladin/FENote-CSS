{
  let obj={
    time:'2017-3-11',
    name:'net',
    _r:123
  };

  let monitor=new Proxy(obj,{
    //拦截(代理)对象属性的读取
    get(target.key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else {
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key];
      }else {
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexof('_')>-1){
        delete target[key];
        return true;
      }else {
        return target[key];
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time');
    }
  });

  console.log('get',monitor.time);

  monitor.time='time'
  monitor.time='mukewang'
  console.log('set',monitor.time);
  console.log('set',monitor.time,monitor);

  console.log('has','name' in monitor,'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // onsole.log('delete',monitor);

  console.log('ownKeys',Object.keys(monitor));//为了不影响结果，上面四行注释掉
}
//get  2018-03-11
//set  2018-03-11
//Proxy {time: "2017-3-11", name: "mukewang", _r: 123}
//has  true false
//Proxy {time: "2017-3-11", name: "mukewang", _r: 123}
//Proxy {time: "2017-3-11", name: "mukewang"}
//ownKeys ["name","_r"]


{
  let obj={
    time:'2017-3-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get'Reflect.obj.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}
//Reflect get   2017-3-11
//Object {time: "2017-3-11", name: "mukewang", _r: 123}
//has true


{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va=this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else {
            throw Error(`不能设置${key}到${value}`)
          }
        }else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }
  const personValidators={
    name(val){
      return typeof val ==='string'
    },
    age(val){
      return typeof val ==='number' && val>18
    }
  }
    class Person{
      constructor(name,age) {
        this.name=name;
        this.age=age;
        return validator(this.personValidators)
      }
    }
    const person =new Person('lilei',30);
    console.info(person);

    person.name='Han meimei';
    console.info(person);
}
//Proxy {name: "lilei",age: 30}
//Proxy {name: "Han meimei",age: 30}
