
//把对象转数组

let obj={
  name:'yql',
  age:18,
  color:[{id:1,name:'red'},{id:2,name:'blue'},{id:null,name:'我是错误的id'}]
}
// let choices={}
// for(let key in obj){
//     if(Array.isArray(obj[key])){
//        let idx= obj[key].map(o=>o.id).indexOf(null)
//        if(idx>-1){
//            obj[key][idx].id='null'
//        }
//     }
//     choices[key]=obj[key]
// }

//2.搭配forEach与解构,获取键值对
// Object.entries(obj).forEach(([key,value])=>{
//     console.log(key,value)
// })

//3.搭配for of与结构，获取键值对
let choices={}
for(let [key,value] of Object.entries(obj)){
  if(Array.isArray(value)){
      let idx=value.map(o=>o.id).indexOf(null)
      if(idx>-1){
          value[idx].id='null'
      }
  }
  choices[key]=value
}
console.log(choices)