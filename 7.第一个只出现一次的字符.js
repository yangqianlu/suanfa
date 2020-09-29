//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

var str = 'abaccdeff'
function firstStr(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    let val = str[i]
    obj[val] = (val in obj) ? obj[val] + 1 : 1
  }
  //for 可以使用return 或者 break终止循环
  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) return key
  }
  // forEach不能使用return跳出循环
  // Object.entries(obj).forEach(([key, value]) => {
  // })
}



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
