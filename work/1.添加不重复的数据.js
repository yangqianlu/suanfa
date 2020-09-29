< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
</head>
        <body>
          <script>


              //利用对象的特性 当有重复属性的时候，会覆盖之前老的
              // function setData(id,data){
              //     const drillDatas = {
              //         [id]:{
              //              drillData: data
              //         }
              //     };
              //     const oldDrillData = JSON.parse(localStorage.getItem('drillData'));
              //     if (!oldDrillData) {
              //       localStorage.setItem('drillData', JSON.stringify(drillDatas));
              //     } else {
              //      oldDrillData[id]={drillData: data}
              //       localStorage.setItem('drillData', JSON.stringify(oldDrillData));
              //     }
              // }
              // setData(1,{name:'aaa'})
              // setData(2,{name:'bbb'})
              // setData(1,{name:'ccc'}) //{"1":{"drillData":{"name":"ccc"}},"2":{"drillData":{"name":"bbb"}}}		


              //数组对象形式，当数组中有对象chartId已经存在，则覆盖，否则新增
              function setData(id, data) {
                const drillDatas = [{ chartId: id, drillData: data }];
                const oldDrillData = JSON.parse(localStorage.getItem('drillData'));
                if (!oldDrillData) {
                  localStorage.setItem('drillData', JSON.stringify(drillDatas));
                } else {
                  let idx = -1;
                  for (let i = 0; i < oldDrillData.length; i++) {
                    if (oldDrillData[i].chartId === +id) {
                      oldDrillData[i] = { chartId: id, drillData: data };
                      idx = i;
                      break;
                    }
                  }
                  if (idx === -1 && id !== undefined) {
                    oldDrillData.push({ chartId: id, drillData: data });
                  }
                  localStorage.setItem('drillData', JSON.stringify(oldDrillData));
                }
              }
setData(1,{name:'aaa'})
setData(2,{name:'bbb'})
setData(1,{name:'ccc'})
    </script>
        </body>
</html>