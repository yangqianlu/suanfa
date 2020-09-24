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