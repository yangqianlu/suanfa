// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

const isValid = (s) => {
  let len = s.length;
  let arr = [];
  if (len % 2) return false;
  for (let i = 0; i < len; i++) {
    let value = s[i];
    switch (value) {
      case "(": {
        arr.push(value);

        break;
      }
      case "{": {
        arr.push(value);
        break;
      }
      case "[": {
        arr.push(value);
        break;
      }
      case ")": {
          // 只要有一次不满足 就终止循环
        if (arr.pop() !== "(") return false;
        break;
      }
      case "}": {
        if (arr.pop() !== "{") return false;
        break;
      }
      case "]": {
        if (arr.pop() !== "[") return false;
      }
    }
  }
  return !arr.length;
};


console.log(isValid("()[]{)"));
console.log(isValid("(("));
console.log(isValid("()"));
