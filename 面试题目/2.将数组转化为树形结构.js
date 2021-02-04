// 初始时，数组的每个元素具有4个树形，其中有id和parent_id,现在我们需要根据这两个id之间的关系，
// 添加一个children树形，使之变成一个树的结构
var menu_list = [{
  id: '1-1',
  menu_name: '权限设置',
  menu_url: 'setting.permission',
  parent_id: '1'
 },{
  id: '1',
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
 },  {
  id: '1-1-1',
  menu_name: '用户管理列表',
  menu_url: 'setting.permission.user_list',
  parent_id: '1-1'
 }, {
  id: '1-1-2',
  menu_name: '用户管理新增',
  menu_url: 'setting.permission.user_add',
  parent_id: '1-1'
 }, {
  id: '1-1-3',
  menu_name: '角色管理列表',
  menu_url: 'setting.permission.role_list',
  parent_id: '1-1'
 }, {
  id: '1-2',
  menu_name: '菜单设置',
  menu_url: 'setting.menu',
  parent_id: '1'
 }, {
  id: '1-2-1',
  menu_name: '菜单列表',
  menu_url: 'setting.menu.menu_list',
  parent_id: '1-2'
 }, {
  id: '1-2-2',
  menu_name: '菜单添加',
  menu_url: 'setting.menu.menu_add',
  parent_id: '1-2'
 }, {
  id: '2',
  menu_name: '订单',
  menu_url: 'order',
  parent_id: 0
 }, {
  id: '2-1',
  menu_name: '报单审核',
  menu_url: 'order.orderreview',
  parent_id: '2'
 }, {
  id: '2-2',
  menu_name: '退款管理',
  menu_url: 'order.refundmanagement',
  parent_id: '2'
 }
]
//思路是先使用 tmp 将数组中的元素处理成 id: {id...menu_name...menu_url...parent_id} 类的格式，然后针对该数据处理成树状结构。
// 利用引用地址一样
const buildTree = (arr) => {
  let tem = {}, res = {};
  arr.forEach(item => {
    tem[item.id] = item;
  })
  for (let key in tem) {
    let cur = tem[key];
    if (cur.parent_id) {
      if(!tem[cur.parent_id].children) {
        tem[cur.parent_id].children = {}
      }
      tem[cur.parent_id].children[key] = cur
    } else {
      res[key] = cur
    }
  }
  return res;
}

console.log(buildTree(menu_list)); //测试代码，menu_list 为前面的数据。
