// 输入: "the sky is blue"
// 输出: "blue is sky the"

function reverStr(str) {
  return str.split(' ').reverse().join(' ')
}
console.log(reverStr("the sky is blue"))