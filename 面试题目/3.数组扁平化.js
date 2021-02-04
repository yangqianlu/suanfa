var arr = [1, [2, [3, 4]]];
const flatter = (arr) => {
  let newArr = [];
  arr.forEach(a => {
    if (Array.isArray(a)) {
      newArr.concat(flatter(a))
    } else {
      newArr.push(a)
    }
  })
  return newArr;
}