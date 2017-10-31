{
  //基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}
//执行   timeout1      (控制台先输出'执行',一秒钟后输出'timeout1')


{
  let ajax=function() {
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}
//执行2  promise timeout2      (控制台先输出'执行2',一秒钟后输出'promise timeout2')


{
  let ajax=function() {
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };
  ajax()
   .then(function(){
  return new Promise(function(resolve,reject){
    setTimeout(function () {
      resolve()
    }, 1000);
  });
})
  .then(function(){
   console.log('timeout3');
})
}
//执行3   timeout2      (控制台先输出'执行3',一秒钟后输出'timeout3')


{
  let ajxa=function(num){
    console.log('执行4');
    return new new Promise(function(resolve, reject) {
      if(num>5){
        resolve()
      }else {
        throw new Error('出错了')
      }
    });
  }
  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}
//执行4 log 6
//catch 出错了


{
  //所有图片加载完再加载页面
  function loadImg(src){
    return new new Promise((resolve, reject)=>{
      let img=document.creatElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }
  Promise.all([
    loadImg('http://*.***.com/***/*****.png'),
    loadImg('http://*.***.com/***/*****.png'),
    loadImg('http://*.***.com/***/*****.png')
  ]).then(showImgs)

}
//（3张图片）

{
  //有一个图片加载完就添加到页面
  function loadImg(src){
    return new new Promise((resolve, reject)=>{
      let img=document.creatElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(img){
    let p=document.creatElement('p');
    p.appendChild(img);
    document.body.appendChild(p)
  }
  Promise.race([
    loadImg('http://*.***.com/***/*****.png'),
    loadImg('http://*.***.com/***/*****.png'),
    loadImg('http://*.***.com/***/*****.png')
  ]).then(showImgs)

}
