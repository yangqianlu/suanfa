// 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。
// 示例:
// 输入: [1,2,3]
// 输出: 3
// [1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]

// 思路 每次最大的不动 其他各加1，结束之后在比对是否相等


let arr = [1, 2, 3];



// n-1个元素都+1，等价于只将一个元素-1，等价于所有的数与最小值的差值的和
const minMoves = function(nums){
  let count = 0;
  const min = Math.min(...nums);
  nums.forEach(val=>{
      count += (val-min)
  })
  return count
}
