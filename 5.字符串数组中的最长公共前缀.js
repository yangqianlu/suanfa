// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

var arr = ["flower", "flow", "flight"];
// var longestCommonPrefix = function(strs) {
//     let str = strs[0]
//     if(!str) return ''
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//       let flag = strs.every(item => item[i] == str[i])
//       if (flag) {
//         res += str[i]
//       }else {
//         return res
//       }
//     }
//     return res
//   };
  

// console.log(longestCommonPrefix(arr))



// function longCommonPrefix(arr){
//     let firstItem = arr[0];
//     if(!firstItem) return ''
//     let res = '';
//     for(let i = 0;i < firstItem.length; i++){
//         let flag = arr.every((item) => item[i] === firstItem[i])
//         if(flag){
//             res += firstItem[i]
//         }else{
//             return res
//         }
//     }
//     return res
// }

// console.log(longCommonPrefix(arr))



var arr = ["flower", "flow", "flight"];
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let cc = '';
    for(let i = 0; i< strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            // charAt() 方法可返回指定位置的字符。
            if(strs[j].charAt(i) !== strs[0][i] ) {
                return cc
            }
        }
        cc += strs[0][i]
    }
    return cc;
};
