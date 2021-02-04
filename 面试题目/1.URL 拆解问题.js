/*
* 实现一个 parseParem 函数，将 url 转化为指定结果
*
* --- 测试用例 ---
*
* 输入：url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
* 输出：
{
user:'anonymous',
id:[123,456],// 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
city:'北京',// 中文需解码
enabled: true // 未指定值的 key 约定为 true
}
*/

const parseParem = (url) => {
  // user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled
   const arr = url.split('?')[1].split('&');
   // [ 'user=anonymous','id=123','id=456','city=%E5%8C%97%E4%BA%AC','enabled' ]
   const res = {};
   arr.forEach((e) => {
       let key = e.split('=')[0], value = e.split('=')[1];
       if (value === undefined) {
           res[key] = true;
       } else {
           if (key in res) {
               Array.isArray(res[key]) ? res[key].push(value) : res[key] = [res[key]].concat(value);
           } else {
               res[key] = decodeURI(value)
           }
       }
   })
   return res;
}

parseParem(
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"
);
