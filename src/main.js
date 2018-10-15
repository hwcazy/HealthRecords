// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css'
import './interceptor/axios.interceptor'
import '@/filter'

//引入基本模板
import echarts from 'echarts' //引入echarts


Vue.prototype.$echarts = echarts //引入组件



Vue.use(iView)


iView.Notice.config({
  duration: 5
})
iView.LoadingBar.config({
  height: 4
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name
    this.$store.commit('updateMenulist');
  }
})
