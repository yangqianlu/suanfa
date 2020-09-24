// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]

let arr = [1, 2, 3, 4, 5, 6, 7];
function rotateArr(arr, k) {
    let prevArr = arr.slice(0, k + 1);
    let nextArr = arr.slice(k + 1);
    let result = [...nextArr, ...prevArr]
    console.log(result)
}
rotateArr(arr, 3)



var rotate1 = (arr, k) =>{
    for(let i = 0; i < k; i++){
        arr.unshift(arr.pop()) 
    }
    return arr
}
console.log(rotate1(arr, 3))

var rotate2 = (arr, k) =>{
    arr.splice(0, 0 ,...arr.splice(arr.length - k))
    console.log(arr)
}
rotate2(arr)


// var rotate = function(nums, k) {
//     nums.splice(0, 0, ...nums.splice(nums.length - k));
// };