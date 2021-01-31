// 返回数组的深度
let arr = [1, 2, [3, 6], [3, 4]];

// const deepArr = (array, deep = 0) => {
//   for(let item of array) {
//     if(Array.isArray(item)) {
//       deepArr(item, deep + 1)
//     }
//   }
//   return deep
// }

// 还没理解 先学其他的
var getArrayDeepin = function (array, deepin = 0) {
  if (!Array.isArray(array)) {
    return deepin
  }
  let max = 0
  for (let item of array) {
    let itemDeepin = getArrayDeepin(item, deepin + 1)
    max = max < itemDeepin ? itemDeepin : max
  }
  return max
}
console.log(getArrayDeepin(arr, 0))


