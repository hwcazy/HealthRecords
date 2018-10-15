//
// import axios from 'axios'
// import router from '@/router'
// import iView from 'iview'
// import {TOKEN, USERINFO, FRONT_USER_ID} from '@/constants/storage'
// import {CONTEXTPATH} from '@/constants/prefix'
//
// let count = 0
//
// axios.interceptors.request.use(function (config) {
//   ++count
//   iView.LoadingBar.error()
//
//   config.url = CONTEXTPATH + config.url
//   config.headers.token = sessionStorage.getItem(TOKEN)
//   return config
// })
//
// axios.interceptors.response.use(function (res) {
//   // console.log(res)
//   handleResult(res.data)
//   return res.data
// }, function (error) {
//   // alert(JSON.stringify(error.response.status))
//   handleResult(error.response)
// })
//
//
//
// function handleResult(res) {
//   if (--count <= 0) {
//     iView.LoadingBar.finish()
//   }
//   if (res.status === 200) {
//     return
//   }
//   if (res.status === 401) {
//     iView.Notice.error({
//       title: '错误',
//       desc: '账号过期，请重新登录'
//     })
//     router.push('/login')
//     return
//   }
//
//   iView.Notice.error({
//     title: '错误',
//     desc: res.message
//   })
//
//   if (res.status === 406) {
//     iView.Notice.error({
//       title: res.message,
//       desc: res.msg
//     })
//   }
//
//
// }
