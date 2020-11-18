let arr1 = [1, 2, 3, 4, 6,2];
let arr2 = [2, 3, 5, 2];

// const intersect = (nums1, nums2) => {
//   let map = {};
//   let res = [];
//   for (let num1 of nums1) { //存在nums1数字出现的次数
//     map[num1] = map[num1] ? map[num1]+1 : 1;
//   }
//   for (let num2 of nums2) { //遍历nums2看看有没有数字在nums1中出现过
//     let val = map[num2]; 
//     if (val) { //出现
//       res.push(num2) //添加
//       map[num2]--; // 匹配就少一个
//     }

//   }
//   return res
// };


/**
 * 已经匹配的给删了
 * @param {*} nums1 
 * @param {*} nums2 
 */
const intersect = (nums1, nums2) => {
  let res = [];
  for (let num1 of nums1){
    let index = nums2.indexOf(num1);
    if (index > -1) {
      res.push(num1);
      nums2.splice(index, 1);
    }
  }
  return res
}
 
console.log(intersect(arr2,arr1))