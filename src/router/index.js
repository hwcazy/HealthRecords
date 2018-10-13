import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie';
import {appRouter, routers} from './router'
import routerUtil from '@/utils/routerUtil.js'
import Util from '@/utils/util.js'
import {TOKEN} from "../constants/storage";

Vue.use(VueRouter)

const RouterConfig = {
  mode: 'history',
  base: '/dist/',
  routes: routers
}


const router = new VueRouter(RouterConfig)




export default router

router.beforeEach((to, from, next) => {
  // Util.toDefaultPage([...appRouter], to.name, router, next)
  if (sessionStorage.getItem(TOKEN) && to.name=== 'login') {     // 未登录
    next({
      name: 'login'
    })
  } else {
    Util.toDefaultPage([...appRouter], to.name, router, next)
  }


 /* if (Cookies.get('locking') === '1' && to.name !== 'locking') {    // 锁定状态
    next({
      replace: true,
      name: 'locking'
    })
  } else if (Cookies.get('locking') === '0' && to.name === 'locking') {    // 未锁定状态直接输入url去锁定页面
    next(false)
  } else {
    if (!Cookies.get('user') && to.name !== 'login') {     // 未登录
      next({
        name: 'login'
      })
    } else if (Cookies.get('user') && to.name === 'login') {      // 已登录输入url去登录页跳转到首页
      next({
        name: 'home'
      })
    } else {
      const curRouterObj = Util.getRouterObjByName([...appRouter], to.name)
      if (curRouterObj && curRouterObj.access !== undefined) {
        if (curRouterObj.access === parseInt( Cookies.get('access') )) {     /// 有权限
          Util.toDefaultPage([...appRouter], to.name, router, next)
        } else {  // 没有权限
          next({
            replace: true,
            name: 'error-403'
          });
        }
      } else {
        Util.toDefaultPage([...appRouter], to.name, router, next)
      }
    }
  }*/
  // Util.toDefaultPage([...appRouter], to.name, router, next)
})

router.afterEach((to) => {

})
