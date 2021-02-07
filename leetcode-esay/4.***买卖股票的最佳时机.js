// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(max,min)


// console.log(Math.min(1, 2))  返回零个或更多个数值的最小值。
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let res = 0; // 最大利润
//   let buy = Number.MAX_VALUE; // 表示最大值
//   for (let price of prices) {
//     buy = Math.min(buy, price);
//     res = Math.max(res, price - buy);
//     console.log(buy, res)
//   }
//   return res;
// };

// console.log(maxProfit(arr))

let arr = [7,1,5,3,6,4];
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) {
    return 0;
  }
  // 有可能不做交易，所以初始值为0
  let res = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      res = Math.max(res, prices[j] - prices[i]);
      console.log(res)
    }
  }
  return res;
};

console.log(maxProfit(arr))