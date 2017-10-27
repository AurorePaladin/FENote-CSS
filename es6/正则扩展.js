{
  let regex=new RegExp('xyz','i');
  let regex2=new RegExp(/xyz/i);
  console.log(regex.test('xyz123'),regex2.test('xyz123'));

  let regex3=new RegExp(/xyz/ig,'i');
  console.log(regex3.flags);
}
//regex=true regex2=true es5
//regex3=i es6 后面的修饰符会覆盖掉前面的正则表达式

{
  let s='bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;

  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));

  console.log(a1.sticky,a2.sticky);//判断正则对线带y修饰符的 开启是true
}
//one  ['bbb',index:0,input:"bbb_bb_b"]  ['bbb',index:0,input:"bbb_bb_b"]
//two  ['bb',index:4,input:"bbb_bb_b"]   null
//false true

{
  console.log('u-1',/^\uD843D/.test('\uD83D\uDC2A'));
  console.log('u-2',/^\uD843D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a'));//. 匹配小于两个字节的字符
  console.log(/\u{61}/u.test('a'));//大于两个字节的字符 加u 才能识别

  console.log(`\u{20BB7}`);

  let s='𠮷';

  console.log('u'/^.$/.test(s));
  console.log('u-2'/^.$/u.test(s));

  console.log('test',/𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
}
//u-1=true
//u-2=false
//false
//true
//𠮷
//u=false
//u-2=true
//test=false
//test-2=true
