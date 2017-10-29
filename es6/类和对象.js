{
  // 基本定义和生成实例
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  let v_parent=new Parent('v');
  console.log('构造函数和示例',v_parent);
}
//构造函数和示例 Parent {name:"v"}


{
  {
    // 继承
    class Parent{
      constructor(name='mukewang'){
        this.name=name;
      }
    }
    class Child extends Parent{

    }

    console.log('继承'，new Child());
}
//继承 Child {name:"mukewang"}


{
  {
    // 继承传递参数
    class Parent{
      constructor(name='mukewang'){
        this.name=name;
      }
    }
    class Child extends Parent{
      constructor(name='child'){ //child 是默认值
        super(name);
        this.type='child';
      }
    }

    console.log('继承传递参数'，new Child());
}
//继承 _Child {name:"child", type:"child"}


{
  // getter,setter
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    get longName(){
      return 'mk'+this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v =new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}
//getter   mkmukewang
//setter   mkhello


{
  //类的静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }
  Parent.tell();
}
//tell


{
  //静态属性
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
    Parent.type='test';
    console.log('静态属性',Parent.type);
  }
}
//静态属性 test
