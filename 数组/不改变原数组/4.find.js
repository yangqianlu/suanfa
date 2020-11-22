// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.findIndex((item, i, arr) => { return item === 'ant' }))
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
console.log(beasts.indexOf('ant'))

