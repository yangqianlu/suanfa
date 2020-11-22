// map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
console.log(array1)
// expected output: Array [2, 8, 18, 32]

let arr = []
let arr1 = arr.map(a => a)
console.log(arr1) // []