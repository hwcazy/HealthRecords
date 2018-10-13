<template>
    <div>

      <img src="../image/main_img.jpg" height="280" width="100%" />
      <router-view class="Router"></router-view>
      <Row type="flex" >
        <Col span="6" order="1"><router-link to="/home/sleep">
          睡眠</router-link></Col>
        <Col span="6" order="2"><router-link to="/home/cold">
          感冒</router-link></Col>
        <Col span="6" order="3"><router-link to="/home/diarrhea">
          腹泻</router-link></Col>
        <Col span="6" order="4"><router-link to="/home/constipation">
          便秘</router-link></Col>
      </Row>


      <Row type="flex" >
        <Col span="6" order="5"><router-link to="/home/wine">
          饮酒</router-link></Col>
        <Col span="6" order="6"><router-link to="/home/diet">
          饮食</router-link></Col>
        <Col span="6" order="7"><router-link to="/home/emotional">
          情绪化</router-link></Col>
        <Col span="6" order="8"><router-link to="/home/exercise">
          锻炼</router-link></Col>
      </Row>

    </div>



</template>

<script>
  import {shadowCloneToNewJson} from "../../../utils/clone";
  import axios from 'axios'
    export default {
      mounted(){
        //this.GetCode()

      },
      data() {
        return {
          BaseUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?",
          JsApiData:"",

          GetCodes:{
            //公众号的唯一标识
            AppId:"wxa02256ff56d6af5e",
            //授权后重定向的回调链接地址(填当前页)
            GetCodes:"http://www.2016tm.com/dist/",
            //返回类型，请填写code
            Response_type: "code",
            //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid）
            Scope: "snsapi_base",
            //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
            State:"test",
            //必须带此参数
            Wechat_Redirect:"#wechat_redirect"
          },
        }
      },
      methods: {

        //拼接获取code的地址
        ReturnGetCodeUrl(){
          return this.BaseUrl + "appid=" + this.GetCodes.AppId + "&redirect_uri="
            + this.GetCodes.GetCodes + "&response_type="
            + this.GetCodes.Response_type + "&scope=" + this.GetCodes.Scope + "&state="
            + this.GetCodes.State + this.GetCodes.Wechat_Redirect
        },

        //取localStorage数据
        GetStorage(name){
          return localStorage.getItem(name);
        },

        //写localStorage数据
        SetStorage(name, value){
          return localStorage.setItem(name, value);
        },

        //获取地址栏code参数
        GetQueryString(name){
          var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var newUrl = window.location.search.substr(1).match(url);
          if (newUrl != null) {
            return unescape(newUrl[2]);
          } else {
            return false;
          }
        },

        //获取code
        GetCode(){
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

        //通过上面的GetCode()取得code，然后通过code取openid
        GetOpenId(code){
          alert("GetOpenId获得的code为：" + code)

          //判断本地localStorag是否已经有openid，有则不获取，没有就去获取
          if (!this.GetStorage("EWE3234"))

            this.$http.get("http://139.xxx.210.190/tucekeji/index.php/Admin/GetOpenId/GetOpenid?codes=" + code)
              .then(function (success) {

                alert("success中的openid：" + success.data)
                this.SetStorage("EWE3234", JSON.stringify(success.data))

                this.WxPayBtn(this.GetStorage("EWE3234"))

              }, function (error) {
                alert(JSON.stringify(error))
              })
        },
        //从服务器去拿最终的jsapi支付参数
        WxPayBtn(openid){
          alert("WxPayBtn"+openid)
          this.$http.get("http://www.wuxxxxo.com/wx/weixin/index.php?openid=" + openid + "&body=" + "测试标题" + "&total_fee=" + "1")
            .then(function (success) {

              //打印最终获得的jsapi支付参数
              alert(JSON.stringify(success.body))

              //将jsapi参数存到JsApiData中
              this.JsApiData = JSON.stringify(success.body);

              //调用jsApiCall传入jsapi参数，发起支付
              this.jsApiCall(this.JsApiData)

            },function (error) {
              alert(JSON.stringify(error))
            })
        },
        //正式发起微信支付
        jsApiCall(jsapi){
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            jsapi,
            function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                alert("支付成功")

                //你的业务逻辑

              } else {
                alert("支付失败")
                alert(JSON.stringify(res.err_msg))
              }
            }
          );
        }
      }

    }
</script>

<style  scoped>

  .ivu-col-order-1 {
    height: 80px;
    line-height: 80px;
    background-color: darkseagreen;
  }
  .ivu-col-order-2 {
    height: 80px;
    line-height: 80px;
    background-color: deepskyblue;
  }
  .ivu-col-order-3 {
    height: 80px;
    line-height: 80px;
    background-color: coral;
  }
  .ivu-col-order-4 {
    line-height: 80px;
    height: 80px;
    background-color: cornflowerblue;
  }
  .ivu-col-order-5 {
    height: 80px;
    line-height: 80px;
  background-color: pink;
  }
  .ivu-col-order-6 {
    height: 80px;
    line-height: 80px;
    background-color: lightskyblue;
  }
  .ivu-col-order-7 {
    height: 80px;
    line-height: 80px;
    background-color: mediumseagreen;
  }
  .ivu-col-order-8 {
    height: 80px;
    line-height: 80px;
    background-color: gold;
  }


</style>
