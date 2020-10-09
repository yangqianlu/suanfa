// 给定一个字符串找到它的第一个不重复的字符，并返回它的索引，如果不存在就返回-1

// 示例：
// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2

let str = "loveleetcode";
// const firstUniqChar = (str) => {
//   let res = {};
//   for (let i = 0; i < str.length; i++) {
//     let current = str[i];
//     res[current] = res[current] ? res[current] + 1 : 1;
//   }
//   //   for (let key in res) {
//   //     if (res[key] === 1) {
//   //       let idx = str.indexOf(key);
//   //       return idx
//   //     }
//   //   }
//   for (let i = 0; i <str.length; i++) {
//     let current = str[i];
//     if (res[current] == 1) {
//         return i
//     }
//   }
//   return -1
// };

// 优秀
// var firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//             return i
//         }
//     }
//     return -1
// };

// var firstUniqChar = function (s) {
//     let map = new Map();
//     for (let i = 0; i < s.length; i++) {
//       let count = map.get(s[i]) || 0;
//       map.set(s[i], count + 1);
//     }
//     for (let i = 0; i < s.length; i++) {
//       if (map.get(s[i]) === 1) return i;
//     }
//     return -1;
// };

var firstUniqChar = function (s) {
    let map =new Map();
    for (let i = 0; i < s.length; i++) {
        let count = map.get(s[i]) || 0;
        map.set(s[i], count + 1);
    }
    for(let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1
}
console.log(firstUniqChar(str));


