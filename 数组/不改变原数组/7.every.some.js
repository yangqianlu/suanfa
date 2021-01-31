// 检测数组中所有元素是否都符合条件

// 如果数组中检测到有一个元素不满足，则返回false，且剩余的元素不再进行检测
// 如果都满足，返回true

// 注意every不会对空数组进行检测
console.log([].every(item=>item>0)) // true
console.log([].some(item=>item>0)) // false

