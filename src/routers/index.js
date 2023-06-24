// 1. 定义路由组件.
// 也可以从其他文件导入
import 'regenerator-runtime/runtime'
import {createRouter,createWebHistory} from 'vue-router'
const Main = { template: '<div>Main</div>' }
const Carousel={template: '<div>Carousel</div>'}
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Main },
  { path: '/Carousel', component: Carousel },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router =createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// 现在，应用已经启动了！
export default router;



//获取线索
// async getClue=>(){
//   if(this.query.isRelateClue){
//       const res=await this.$ajax.sales.fetchClueList({
//           // queryType:6,
//           // pageNo:1,
//           // pageSize:150,
//           // groupID:this.query.customerID,
//       })
//       if(res?.success){
//         const[clueInfo={}]=res?.data??[]
//         const {address,contactMobile,storeName}=clueInfo
//         const formInfo={
//           // shopName,
//           // address,
//           // contactMobile,
//         }
//         this.formInfo={
//           ...this.formInfo,
//           ...formInfo,
//         }
//       }
//     }
//   },
// //基于客户id获取线索列表
// fetchClueList;(data)=>ajax({
//   url:'/crm/v4/clue',
//   data,
// })