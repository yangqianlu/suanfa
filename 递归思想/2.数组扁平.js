var arr = [1, [2, [3, 4]]];
// const flat = (arr) => {
//   while(arr.some(item =>Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr
// }
// console.log(flat(arr))


// const flat = (arr) => {
//   return arr.reduce((prev, next) => {
//     return prev.concat(Array.isArray(next) ? flat(next) : next)
//   }, [])
// }
// console.log(flat(arr))

const flat = (arr) => {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if(Array.isArray(cur)){
      res = [...res, ...flat(cur)];
    } else {
      res.push(cur);
    }
  }
  return res;
}
console.log(flat(arr))