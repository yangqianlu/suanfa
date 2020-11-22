// 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
// value可以是数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。

// 不传参数 是一个浅拷贝
var arr = ['a', 'b'];
var newArr = arr.concat();
console.log(arr);//[ 'a', 'b' ]
console.log(newArr);//[ 'a', 'b' ]

// 连接三个数组
var num1 = [1, 2, 3],
  num2 = [4, 5, 6],
  num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums);

// 将值连接到数组中
var alpha = ['a', 'b']
var newAlpha = alpha.concat(1, 2, [3, 4])
console.log(newAlpha) // [ 'a', 'b', 1, 2, 3, 4 ]


// 嵌套数组
var num1 = [[1]];
var num2 = [2, [3]];
var num3 = [5, [6]];

var nums = num1.concat(num2); // [[1],2,[3]];
num2[1].push('a')
console.log(num2)
console.log(nums) //[ [ 1, 'a' ], 2, [ 3 ] ]


