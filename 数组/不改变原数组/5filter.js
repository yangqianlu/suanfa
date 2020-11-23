// 不会改变愿数组，返回过滤后的新数组

// 下例使用 filter() 根据搜索条件来过滤数组内容。
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
var searchList = fruits.filter(f => f.includes('ap'));
console.log(searchList,'searchList')

// 数组去重

var arr = [1,2,3,4,5,2,3,4]

let newArr = arr.filter((a, index) => arr.indexOf(a) === index);
console.log(newArr)