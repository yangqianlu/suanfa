// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

// 输入：num = 8
// 输出：4
// 解释：
// 步骤 1） 8 是偶数，除以 2 得到 4 。
// 步骤 2） 4 是偶数，除以 2 得到 2 。
// 步骤 3） 2 是偶数，除以 2 得到 1 。
// 步骤 4） 1 是奇数，减 1 得到 0 。


var numberOfSteps = function (n) {
  let c = 0;
  while (n != 0) {
    c++;
    if (n % 2 == 0) {
      n = n /2;
    } else {
      n--;
    }
  }
  return c;
};
console.log(numberOfSteps(8))