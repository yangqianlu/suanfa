// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//思路：先按从小到大排序，然后找到最后一个0的索引，splice进行删除 删除的元素push到数组末尾
var arr = [1, 9,0,3,4,2,0,8,0];
// let sortArr = arr.sort((a, b) => a - b); 
// let index = sortArr.lastIndexOf(0) 
// sortArr.push(...sortArr.splice(0,index+1))
// console.log(sortArr)
// console.log(moveZeroes(arr))


var moveZeroes = function(nums) {
  let j = 0; // 记录0的索引
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
  return nums    
};

console.log(moveZeroes(arr))


//ES6交换两个变量的值
let a=5;
let b=3;
[a,b]=[b,a]
console.log(a,b)
