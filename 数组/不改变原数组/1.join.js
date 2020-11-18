// join() 方法用于把数组中的所有元素放入一个字符串。
// 元素是通过指定的分隔符进行分隔的。
// array.join(separator) // separator可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

var arr =['hello','world'];
console.log(arr.join()); // hello,world
console.log(arr.join('')); // helloworld
console.log(arr.join('-')); // hello-world

