import Vue from 'vue'
import vueRouter from 'vue-router'
import Product from './components/product.vue'
import About from './components/about.vue'
import BigData from './components/bigData.vue'
import Mall from './components/mall.vue'
import News from './components/news.vue'
import Recruit from './components/recruit.vue'
//三级
import Baogao from './components/bigdata/baogao.vue'
import List from './components/bigdata/list.vue'
import Talk from './components/bigdata/talk.vue'

Vue.use(vueRouter)
let router=new vueRouter({
  routes:[{
    path:'/',
    redirect:'/product'
  },
    {
    path:'/product',
    name:'Product',
    component:Product
  },
  {
    path:'/about',
    name:'About',
    component:About
  }, {
    path:'/bigData',
    name:'BigData',
    component:BigData,
    children:[{
      path:'/bigData',
      redirect:'/bigData/talk'
    },
    {
      path:'/bigData/talk',
      name:'Talk',
      component:Talk
    },
    {
      path:'/bigData/list',
      name:'List',
      component:List
    },{
      path:'/bigData/baogao',
      name:'Baogao',
      component:Baogao
    }]
  }, {
    path:'/mall',
    name:'Mall',
    component:Mall
  }, {
    path:'/news',
    name:'News',
    component:News
  }, {
    path:'/recruit',
    name:'Recruit',
    component:Recruit
  }]
})
export default router