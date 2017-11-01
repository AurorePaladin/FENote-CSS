{
  // generator基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}
//Object {value: "a",done: false}
//Object {value: "b",done: false}
//Object {value: "c",done: false}
//Object {value: undefined,done: true}

{
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}
//value 1
//value 2
//value 3


{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
//Object {value: "A",done: false}
//Object {value: "B",done: false}
//Object {value: "C",done: false}
//Object {value: "A",done: false}
//Object {value: "B",done: false}


// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }


{
  let draw=function(count){
    console.info(`剩余${count}次`)
  }

  let residue=function* (count){
    while (count>0) {
      count--;
      yield draw(count);
    }
  }
  let star=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    star.next();
  },false)
}
//点击抽奖按钮 剩余click--(5)次


{
  // 长轮询
  let ajax=function* (){
    yield new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({code:0})
      }, 200);
    })
  }

  let pull=function(){
    let generator=ajax();//实例化
    let step=generator.next();//取得generator的步骤 进行一次通信
    step.value.then(function(d){
      if(d.code!=0){
        setTimeout(function () {
          console.info('wait');
        }, 1000);
      }else {
        console.info(d);
      }
    }）
  }

  pull();
}
//Object {code:0}
