// 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

// 如果 n 是快乐数就返回 True ；不是，则返回 False 。


function sum(n) {
  let sum = 0;
  n = n + "";
  for (let num of n) {
    sum += num * num;
  }
  return sum;
}
//用个对象来记录出现过的值, 一旦再次出现就说明是无限循环了
const isHappy = (n) => {
  let obj = {};
  let res = sum(n);
  while (res != 1) {
    if (res in obj) return false;
    obj[res] = 1;
    res = sum(res);
  }
  return true;
};

//除10求余来取每一位的值
function sum2(n) {
  let sum = 0;
  while (n) {
    const value = n % 10;
    sum += value * value;
    n = parseInt(n / 10);
  }
  return sum;
}
var isHappy2 = function (n) {
  // 无缓存破解
  if (n === 1) return true;
  const list = new Set();
  while (!list.has(n)) {
    list.add(n);
    let sum = sum2(n);
    if (sum === 1) return true;
    n = sum;
  }
  return false;
};
isHappy2(91);