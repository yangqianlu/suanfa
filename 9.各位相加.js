// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
// 输入: 38
// 输出: 2 
// 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

function sum2(n) {
    let sum = 0;
    while (n) {
      const value = n % 10;
      n = parseInt(n / 10);
      sum += value + n;
    }
    return sum;
  }


  var addDigits = function (n) {
    // 无缓存破解
    
    if (n<10) return n;

    while (n>=10) {
         n = sum2(n)
    }
    return n;
  };
  console.log(addDigits(9318));