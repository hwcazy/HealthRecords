<template>
  <div>
    <div class="login-wrap" v-show="showLogin">

      <img src="../../assets/logo.png">

      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>


  </div>


</template>

<script>
  import {setCookie, getCookie} from '../../assets/js/cookie.js'
  import axios from 'axios'

  export default {
    mounted() {
      if(getCookie('username')){
        this.$router.push('/home')
      }
    },
    data() {
      return {
        showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        item: '',
      }
    },

    methods: {
      login() {
        if (this.username == "" || this.password == "") {
          alert("请输入用户名或密码")
        } else {

// 发送一个 POST 请求
          this.$Spin.show();
          setTimeout(() => {
            this.$Spin.hide();
          }, 3000);
          axios.post('http://10.192.48.220:51241/api/HealthSys/Login',
            {
              username: this.username,
              password: this.password
            }).then((res) => {
            this.$Spin.hide();
            console.log(res.data)
            this.item = res.data
            if (res.data.msgCode == 0) {
              this.tishi = "登录成功"
              this.showTishi = true
              setCookie('username', this.username, 1000 * 60)
              setTimeout(function () {
                this.$router.push({path: 'home', query: {id: 1}})
              }.bind(this), 1000)
            } else if (res.data.msgCode == -1) {
              this.tishi = "密码输入错误"
              this.showTishi = true
            } else {
              this.tishi = "该用户不存在"
              this.showTishi = true

            }
          })
        }
      },
      ToRegister() {
        this.showRegister = true
        this.showLogin = false
        this.showTishi = false
      },
      ToLogin() {
        this.showRegister = false
        this.showLogin = true
        this.showTishi = false
      },
      register: function () {
        if (this.newUsername == "" || this.newPassword == "") {
          alert("请输入用户名或密码")
        } else {
          this.$Spin.show();
          setTimeout(() => {
            this.$Spin.hide();
          }, 3000);
          axios.post('http://10.192.48.220:51241/api/HealthSys/Register', {

            username: this.newUsername,
            password: this.newPassword
          }).then((res) => {
            this.$Spin.hide();
            console.log(res)
            if (res.data.msgCode == 0) {
              this.tishi = "注册成功"
              this.showTishi = true
              this.username = ''
              this.password = ''
              setTimeout(function () {
                this.showRegister = false
                this.showLogin = true
                this.showTishi = false
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

  input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #888;
    padding: 10px;
    box-sizing: border-box;
  }

  p {
    color: red;
  }

  button {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
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

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }
</style>
