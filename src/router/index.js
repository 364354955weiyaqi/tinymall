import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component:() => import('../views/home/Home')
    },
    {
      path:'/category',
      component:() => import('../views/cate/Cate')
    },
    {
      path:'/cart',
      component:() => import('../views/cart/Cart')
    },
    {
      path:'/profile',
      component:() => import('../views/profile/Profile')
    }
  ],
  mode:'history'
})

export default router
