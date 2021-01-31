
// 第一种
// let arr = [
//   { name: "A", data: [1, 2, 3, 4, 5] },
//   { name: "B", data: [1, 2, 3, 4, 5] },
//   { name: "C", data: [1, 2, 3, 4, 5] },
// ];

// let total = [];
// for (let i = 0; i < arr[0].data.length; i++) {
//   let res = 0;
//   for (let j = 0; j < arr.length; j++) {
//     res = res + arr[j].data[i];
//     if (j === arr.length - 1) {
//       total.push(res);
//     }
//   }
// }
// console.log(total);

// 第二种
// var arr1 = [1, 2, 3],
//   arr2 = [4, 5, 6];
// var result = arr1.map(function (item, index) {
//   return item + arr2[index];
// });
// console.log(result);


// 第三种
// var arr1 = [1, 2, 3, 4, 5, undefined];
// var arr2 = [11, 12, 13, 14, 15, 1];
// var arr3 = [10, 21, 31, 41, 51, 61];
// var sum = { arr1, arr2, arr3 };
// //保存结果的数组
// var result = [];
// for (var key in sum) {
//   //遍历数组的每一项
//   sum[key].forEach((val,index)=>{
//     if(!result[index]) result[index] = 0;
//     if(!val) val = 0;
//     result[index] += val;
//   })
// }
// //打印结果
// console.log(result); //[22, 35, 47, 59, 71, 83]



//第四种
let arr = [
  { name: "A", data: [1, 2, 3, 4, 5] },
  { name: "B", data: [1, 2, 3, 4, 5] },
  { name: "C", data: [1, 2, 3, 4, 5] },
];

function getTotal(arr) {
  let total = [];
  for(let item of arr) {
    item.data.forEach((val, index) => {
      if(!total[index]) total[index] = 0;
      if(!val) val = 0;
      total[index] += val;
    })
  }
  return total;
}

console.log(getTotal(arr))




