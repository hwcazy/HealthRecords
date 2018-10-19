<template>
  <div>
    <div class="login-wrap" v-show="showLogin">

      <img src="../../assets/logo.png">

      <h3 style="margin-top: 30px">登录</h3>
      <Input class="input" prefix="ios-contact" placeholder="请输入用户名" style="width: 230px" type="text" v-model="username" size="large"/>
      <Input class="input" prefix="ios-eye" type="password" placeholder="请输入密码" style="width: 230px;margin-bottom: 20px" v-model="password" size="large"/>
      <Button type="primary" :loading="loading1" icon="ios-person-add"  v-on:click="login"  >
        <span v-if="!loading1">登录</span>
        <span v-else>正在登录...</span>
      </Button>


      <span v-on:click="ToRegister" >没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3 style="margin-top: 30px">注册</h3>

      <Input class="input" prefix="ios-contact"  type="text" placeholder="请输入用户名" v-model="newUsername" style="width: 230px" size="large"/>
      <Input class="input" prefix="ios-eye" type="password" placeholder="请输入密码" v-model="newPassword" style="width: 230px;margin-bottom: 20px" size="large" />

      <Button type="primary" :loading="loading2" icon="md-ribbon"  v-on:click="register" >
        <span v-if="!loading2">注册</span>
        <span v-else>正在注册...</span>
      </Button>
      <span v-on:click="ToLogin" >已有账号？马上登录</span>
    </div>


  </div>


</template>

<script>
  import {setCookie, getCookie} from '../../assets/js/cookie.js'
  import axios from 'axios'
  import {URI} from '../../constants/uri'
  export default {
    mounted() {
      if(getCookie('username')){
        this.$router.push('/home')
      }


    },

    created(){
      // this.GetCode()
    },

    data() {
      return {
        loading1: false,
        loading2: false,

        showLogin: true,
        showRegister: false,
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        item: '',

        BaseUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?",
        JsApiData: "",
        GetCodes: {
          //公众号的唯一标识
          AppId: "wxa02256ff56d6af5e",
          //授权后重定向的回调链接地址(填当前页)
          GetCodes: URI+"/dist/",
          //返回类型，请填写code
          Response_type: "code",
          //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid）
          Scope: "snsapi_base",
          //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
          State: "test",
          //必须带此参数
          Wechat_Redirect: "#wechat_redirect"
        }

      }
    },

    methods: {
      //获取code
      GetCode() {
        //如果有code参数，那么GetOpenId获取openid
        console.log("GetQueryString")
        if (this.GetQueryString("code")) {
          console.log("有code")
          this.GetOpenId(this.GetQueryString("code"))
          //没有那么重定向去获取
        } else {
          console.log("没有code")
          /**
           * 具体参考微信获取code文档 ：http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
           * 官方接口：
           * https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
           */
          //重定向去微信来获取code
          window.location = this.ReturnGetCodeUrl()
        }
      },


      //拼接获取code的地址
      ReturnGetCodeUrl() {
        return this.BaseUrl + "appid=" + this.GetCodes.AppId + "&redirect_uri="
          + this.GetCodes.GetCodes + "&response_type="
          + this.GetCodes.Response_type + "&scope=" + this.GetCodes.Scope + "&state="
          + this.GetCodes.State + this.GetCodes.Wechat_Redirect
      },

      //取localStorage数据
      GetStorage(name) {
        return localStorage.getItem(name);
      },

      //写localStorage数据
      SetStorage(name, value) {
        return localStorage.setItem(name, value);
      },

      //获取地址栏code参数
      GetQueryString(name) {
        var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var newUrl = window.location.search.substr(1).match(url);
        if (newUrl != null) {
          return unescape(newUrl[2]);
        } else {
          return false;
        }
      },



      //通过上面的GetCode()取得code，然后通过code取openid
      GetOpenId(code) {
        alert("GetOpenId获得的code为：" + code)

        //判断本地localStorag是否已经有openid，有则不获取，没有就去获取
        if (!this.GetStorage("EWE3234"))

          this.$http.get("http://139.xxx.210.190/tucekeji/index.php/Admin/GetOpenId/GetOpenid?codes=" + code)
            .then(function (success) {

              alert("success中的openid：" + success.data)
              this.SetStorage("EWE3234", JSON.stringify(success.data))



            }, function (error) {
              alert(JSON.stringify(error))
            })
      },




      GetAccesstoken(){
        axios.post(URI+'/api/HealthSys/GetAccesstoken').then((res) => {
          if (res.data.msgCode == 0) {
            sessionStorage.setItem('access_token',JSON.stringify(res.data.access_token));
          }  else {
            this.$Message.error('获取AccessToken授权失败');
          }
        })
      },


      login() {
        if (this.username == "" || this.password == "") {
          alert("请输入用户名或密码")
        } else {

          // 发送一个 POST 请求
          this.loading1 = true;
          axios.post(URI+'/api/HealthSys/Login',
            {
              username: this.username,
              password: this.password
            }).then((res) => {
            this.loading1 = false;
            console.log(res.data)
            this.item = res.data
            if (res.data.msgCode == 0) {
              this.$Message.success('登录成功');
              setCookie('username', this.username, 1000 * 60);
              sessionStorage.setItem('patientno',JSON.stringify(res.data.data.patientno));
              setTimeout(function () {
                this.$router.push({name: 'home'})
              }.bind(this), 50)
            } else if (res.data.msgCode == -1) {
              this.$Message.error('密码输入错误');
            } else {
              this.$Message.error('该用户不存在');
            }

          })
        }
      },
      ToRegister() {
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin() {
        this.showRegister = false
        this.showLogin = true
      },
      register: function () {
        if (this.newUsername == "" || this.newPassword == "") {
          alert("请输入用户名或密码")
        } else {
          this.loading2 = true;
            axios.post(URI+'/api/HealthSys/Register',
            {
            username: this.newUsername,
            password: this.newPassword
          }).then((res) => {
              this.loading2 = false;
            console.log(res)
            if (res.data.msgCode == 0) {
              this.$Message.success('注册成功');
              this.username = ''
              this.password = ''
              setTimeout(function () {
                this.showRegister = false
                this.showLogin = true
              }.bind(this), 1000)
            } else if (res.data.msgCode == -1) {
              this.$Message.error(res.data.msg);
            } else {
              this.$Message.error('注册失败');
            }
          }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          })

        }
      }

    }

  }
</script>

<style scoped>

  .login-wrap {
    text-align: center;
  }

  .input {
    margin-top: 20px;
  }

  p {
    color: red;
  }

  Button {
    width: 230px;
    display: block;
    margin: 0 auto;
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: #41b883;
  }

  img {
    width: 150px;
    height: 150px;
  }


</style>
