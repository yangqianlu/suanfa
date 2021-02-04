
let arr = [2,3,5,6];
let target = 7;
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if(index > -1) {
      return index;
  } else {
    // 不存在

      for (let [idx, val] of nums.entries()) {
          if(val > target) {
              return idx
          }
          if(idx === nums.length - 1) {
            return nums.length;
          }
      }
  }
};
console.log(searchInsert(arr, target))

// 如果存在就返回索引 如果不存在 找到最近一个比目标值大的值的返回它的索引 都小于目标值，则返回数组的长度
// const searchInsert = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (target <= nums[i]) {
//       return i;
//     }
//   }
//   return nums.length; 
// };