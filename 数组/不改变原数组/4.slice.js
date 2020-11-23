// 返回新数组 这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
// 如果省略 begin，则 slice 从索引 0 开始。
// 如果 end 被省略，则 slice 会一直提取到原数组末尾。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice())  //浅拷贝一份