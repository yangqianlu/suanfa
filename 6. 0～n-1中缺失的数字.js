var arr = [0, 1, 2, 3, 5, 7]
function findNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = arr[i + 1]
    if (current + 1 !== next) {
      return current + 1
    }
  }
}



var missingNumber = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid === nums[mid]) {
      left = mid + 1;
    } else if (mid < nums[mid]) {
      right = mid - 1;
    }
  }

  return left;
};

console.log(missingNumber(arr))