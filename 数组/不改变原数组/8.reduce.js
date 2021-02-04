// reduce 接受四个参数
// 累计器 函数的返回值分配给累计器
// 当前值
// 当前索引
// 源数组

// 如果数组为空且没有提供initialValue，会抛出TypeError 。
[].reduce((prev, next) => {});
// TypeError
// 如果数组仅有一个元素（无论位置如何）并且没有提供initialValue，那么此唯一值将被返回并且callback不会被执行。 
let res = [ { x: 2 }].reduce((prev, next) => {
 return prev.x + next.x
});
console.log(res) // {x: 2}

let res = [ { x: 2 }, { x: 22 }, { x: 42 } ].reduce((prev, next) => {
  console.log(prev, next)
  // {x: 2}, {x: 22}
  // undefined, {x: 42}
});
console.log(res) // undefined

let res = [1,2,3 ].reduce((prev, next) => {
  console.log(prev, next)
  // 1, 2
  // undefined 3
});
console.log(res)

// 累加对象数组里的值
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},0)

console.log(sum) // logs 6

// 数组去重
// let arr =[1, 2, 3, 1, 2];
// let newArr = arr.reduce((prev, next) => {
//   if(!prev.includes(next)) {
//     return prev.concat(next)
//   } {
//     return prev
//   }
// }, [])
// console.log(newArr)

// 计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let calcName = names.reduce((obj, next) => {
  if(!obj[next]) {
    obj[next] = 1;
  } else {
    obj[next] += 1;
  }
  return obj
}, {})
console.log(calcName)

// 将多维数组转化为一维
let arr = [[0, 1], [2, 3], [4,[5,6,7]]];
let newFlatArr = (arr) => {
  return arr.reduce((newArr, next) => newArr.concat(Array.isArray(next) ? newFlatArr(next) : next), [])
}
console.log(newFlatArr(arr));

