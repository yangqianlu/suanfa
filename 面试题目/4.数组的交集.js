// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];

// reduce + includes
const intersection = (nums1, nums2) => {
  return [...new Set(nums1)].reduce((prev, next) =>  nums2.includes(next) ? [...prev, current] : prev, [])
};

// filter + includes
const intersection = (nums1, nums2) => {
  return [...new Set(nums1)].filter(item => nums2.includes(item));
};


var intersection = function(nums1, nums2) {
  return nums1.filter((v, i) => nums2.includes(v) && nums1.lastIndexOf(v) === i)
};