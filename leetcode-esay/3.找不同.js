// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

// let s = "abcd", t = "abcde"; //result: e
// let s = "abcd", t = "abced"; //result: e
// let s = "", t = "y"  //result: y
// let s = "a", t = "aa" //result: a
let s = "ae", t = "aea" //result: a


// const findTheDifference = (s, t) => {
//   let arrT = t.split('');
//   // 如果s是空串 直接返回t的值
//   if(!s.length) return t
//   for(let i = 0; i < s.length; i++) {
//     let cur =s[i]
//     // t中存在
//     let idx = arrT.indexOf(cur);
//     if(idx > -1);
//     // 就删除
//     arrT.splice(idx, 1)
//   }
//   // 剩下的就是不同的
//   return arrT[0]
// }

const findTheDifference = (s, t) => {
  // 如果s是空串 直接返回t的值
  if(!s.length) return t;
  // 两个字符串拼在一起 出现的次数为奇数 说明就是多余的拿个字符
  let str = s.concat(t)
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1
    } else {
      obj[str[i]] = 1
    }
  }
  for(let [key, val] of Object.entries(obj)) {
    if(val % 2) return key
  }
}

console.log(findTheDifference(s, t))