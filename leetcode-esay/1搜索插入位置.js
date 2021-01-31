
let arr = [2,3,5,6];
let target = 7;
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if(nums.indexOf(target) > -1) {
      return index;
  } else {
      for (let [idx, val] of nums.entries()) {
          if(val > target) {
              return idx ? idx : 0;
          }
          if(idx === nums.length - 1) {
            return nums.length;
          }
      }
  }
};
console.log(searchInsert(arr, target))



const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length; 
};