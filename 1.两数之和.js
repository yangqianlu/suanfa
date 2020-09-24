// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

const twoSum =(nums,target)=>{
  let i=nums.length;
  while(i>0){
    let last=nums.pop();
    let index=nums.indexOf(target-last);
    if(index>-1){
      return [index,nums.length]
    }
    i--;
  }
}

console.log(twoSum([2, 3, 7, 6, 5, 1, 8], 9))