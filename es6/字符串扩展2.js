{
  let str="string";
  console.log('includes',str.includes("r"));
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith("str"));
  console.log('end',str.endsWith("ng"));
}
//includes true
//includes false
//start true
//end  true


//重复复制方法
{
  let str="abc";
  console.log(str.repeat(2));
}
//abcabc


//模板字符串
{
  let name="list";
  let info="hello world";
  let m=`i am ${name,${info}}`;
  console.log(m);
}
//i am list, hello world

//es7草案 有用的两个API 补白
{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}
//01
//10

//标签模板
{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v 1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}
//i am ,,,listhello world

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
//Hi\n3
//Hi
//3
