//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

function firstMap(str){
  var map=new Map;
  for(let i = 0; i < str.length; i++){
    map.set(str[i],(map.get(str[i]) || 0) + 1)
  }
  console.log([...map])
  for(let [key, value] of [...map]){
    if(value === 1){
      return key
    }
  }
}
var str = 'abaccdeff'
console.log(firstMap(str))



let str = 'lllee';
// for 配合indexof
const firstStrIndex = (str) => {
  let strObj = {};
  for(let i = 0; i< str.length; i++) {
    let current = str[i];
    if(strObj[current]) {
      strObj[current] = strObj[current] + 1;
    } else {
      strObj[current] = 1
    }
  }
  for(let [key, val] of Object.entries(strObj)) {
    if(val === 1) return str.indexOf(key)
  }
  return -1
}
console.log(firstStrIndex(str))

// reduce 配合indexOf
let str = 'lllee';
const firstStrIndex = (str) => {
  let arr = str.split('');
  let strObj = arr.reduce((prev, next) => {
    if(prev[next]) {
      prev[next] = prev[next] + 1
    } else {
      prev[next] = 1
    }
    return prev
  } ,{})
  for(let [key, val] of Object.entries(strObj)) {
    if(val === 1) return str.indexOf(key)
  }
  return -1
}
console.log(firstStrIndex(str))

// indexOf搭配lastIndexOf
let str = 'hhol';
const firstStrIndex = (str) => {
  for(let i = 0; i < str.length; i++) {
    let s = str[i];
    if(str.indexOf(s) === str.lastIndexOf(s)) return i
  }
  return -1
}
console.log(firstStrIndex(str))