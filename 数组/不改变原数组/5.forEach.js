// 不对未初始化的值进行任何操作（稀疏数组）
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;
arraySparse.forEach(function (element) {
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);


// 将 for 循环转换为 forEach 
const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i])
// }

// after
items.forEach((item) => {
  if (item !== 'item1') {
    copy.push({
      name: item
    })
  }
})
console.log(copy);


