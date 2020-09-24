//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 输入: 123
// 输出: 321

// 输入: -123
// 输出: -321

// 输入: 120
// 输出: 21

var reverse = function(x) {
    let now = Math.abs(x).toString().split("").reverse().join("");
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};

console.log(reverse(120))

