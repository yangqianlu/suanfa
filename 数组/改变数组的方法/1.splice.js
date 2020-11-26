// splice()
// 如果给它传递一个参数，则该方法仅执行删除操作，参数值指定删除元素的起始下标，（包含该下标元素），splice() 方法将删除后面所有元素。

// 从第 2 位开始删除所有元素
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.splice(2)
console.log(res, '==res=='); // [3, 4, 5, 6]
console.log(arr, '==arr=='); // [1, 2]