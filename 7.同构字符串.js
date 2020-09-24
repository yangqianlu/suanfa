//同构字符串
//如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
// 输入: s = "egg", t = "add"
// 输出: true

// 输入: s = "paper", t = "title"
// 输出: true

function tongGou(s, t) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let currentT = t[i];
    let currentS = s[i];
    console.log(currentS);
    if (obj[currentS] && obj[currentS] !== currentT) {
      return false;
    } else {
      obj[currentS] = currentT;
    }
  }
  return true;
}
let s = "paper";
let t = "title";
console.log(tongGou(s, t));
['e','g','g']

let s = "paper";
let t = "title";
var isIsomorphic2 = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) != t.indexOf(t[i])){
            return false;
        }
    }
    return true;
}
console.log(isIsomorphic2(s,t))

var isIsomorphic = function(s, t) {
    let mapS = {}, mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (!mapS[s[i]]) mapS[s[i]] = t[i];
        if (!mapT[t[i]]) mapT[t[i]] = s[i];
        if (mapS[s[i]] != t[i] || mapT[t[i]] != s[i]) return false;
    }
    return true;
};
isIsomorphic(s, t)