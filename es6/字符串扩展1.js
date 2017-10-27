{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);
}
//a    a
//s    口7
//s    𠮷

{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}
//length   2
//0  乱码？
//1  乱码？
//at0  55362
//at1  57271
//length 3
//code0 134071
//code0 20bb7
//code1 57271
//code2  a

{
  console.log(String.fromCharCode("0x20bb7")); //es5 方法
  console.log(String.fromCodePoint("0x20bb7"));//es6 方法
}
//乱码
//𠮷

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  //es5 乱码
  //es5 乱码
  //es5 a
  //es5 b
  //es5 c
  for(let code of str){
    console.log('es6',code);
  }
  //es6 𠮷
  //es6 a
  //es6 b
  //es6 c
}
