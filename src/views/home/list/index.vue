<template>
  <div >


    <Carousel autoplay v-model="value2" :autoplay="setting.autoplay"
              :autoplay-speed="setting.autoplaySpeed"
              :dots="setting.dots"
              :radius-dot="setting.radiusDot"
              :trigger="setting.trigger"
              :arrow="setting.arrow">
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539766336445&di=ae8c8a0858ee45ab6f4fdd228ea72b02&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F94%2F17%2F96f58PICHhZ_1024.jpg"/>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539766336453&di=3555bfdcf1c318660b41e4c0cd2899be&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01983b581c5a5ca84a0e282b5381cc.jpg%401280w_1l_2o_100sh.jpg"/>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539766336438&di=9837e6edd9cf3efda935c6087dcee4d8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0160e459ded934a80121ae0cad6316.jpg%401280w_1l_2o_100sh.jpg"/>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539766336431&di=f980d076a4f00dc6ffc782bfabfb3130&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F92%2F71%2F76c58PICKx2_1024.jpg"/>
        </div>
      </CarouselItem>
    </Carousel>

    <router-view class="Router"></router-view>

    <div style="background:#eee;padding:10px;">

      <Card :bordered="false">
        <p slot="title">健康档案</p>
        <Row type="flex">
          <Col span="6" order="1">

            <router-link to="/home/sleepshow">
              <div class="icon">
                <div class="icon_bg" style="background-color: mediumseagreen">
                  <Icon type="md-clock"/>
                </div>
                <span>睡眠</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="2">
            <router-link to="/home/statistics">
              <div class="icon">
                <div class="icon_bg" style="background-color: dodgerblue;">
                  <Icon type="md-color-filter"/>
                </div>
                <span>感冒</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="3">
            <router-link to="/home/diarrhea">
              <div class="icon">
                <div class="icon_bg" style="background-color: #e13d13">
                  <Icon type="logo-freebsd-devil"/>
                </div>
                <span>腹泻</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="4">
            <router-link to="/home/constipation">
              <div class="icon">
                <div class="icon_bg" style="background-color: rebeccapurple">
                  <Icon type="ios-pint"/>
                </div>
                <span>便秘</span>
              </div>

            </router-link>
          </Col>
        </Row>


        <Row type="flex">
          <Col span="6" order="5">
            <router-link to="/home/wine">
              <div class="icon">
                <div class="icon_bg" style="background-color: steelblue">
                  <Icon type="ios-wine"/>
                </div>
                <span>饮酒</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="6">
            <router-link to="/home/diet">
              <div class="icon">
                <div class="icon_bg" style="background-color: maroon">
                  <Icon type="ios-restaurant"/>
                </div>
                <span>饮食</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="7">
            <router-link to="/home/emotional">
              <div class="icon">
                <div class="icon_bg" style="background-color: #f5a623">
                  <Icon type="md-happy"/>
                </div>
                <span>情绪化</span>
              </div>

            </router-link>
          </Col>
          <Col span="6" order="8">
            <router-link to="/home/exercise">
              <div class="icon">
                <div class="icon_bg" style="background-color: cornflowerblue">
                  <Icon type="md-bicycle"/>
                </div>
                <span>锻炼</span>
              </div>
            </router-link>
          </Col>
        </Row>
      </Card>

      <Card :bordered="false" style="top: 10px;margin-bottom: 60px">
        <p slot="title">健康资讯</p>
        <p style="color: #4d5669">即将加入...</p>
      </Card>

    </div>
  </div>


</template>

<script>


  import axios from 'axios'

  export default {

    mounted() {
      //this.GetCode()


    },


    data() {
      return {

        value2: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
        },

        BaseUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?",
        JsApiData: "",

        GetCodes: {
          //公众号的唯一标识
          AppId: "wxa02256ff56d6af5e",
          //授权后重定向的回调链接地址(填当前页)
          GetCodes: "http://www.2016tm.com/dist/",
          //返回类型，请填写code
          Response_type: "code",
          //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid）
          Scope: "snsapi_base",
          //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
          State: "test",
          //必须带此参数
          Wechat_Redirect: "#wechat_redirect"
        },
      }
    },
    methods: {

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

      //通过上面的GetCode()取得code，然后通过code取openid
      GetOpenId(code) {
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
      WxPayBtn(openid) {
        alert("WxPayBtn" + openid)
        this.$http.get("http://www.wuxxxxo.com/wx/weixin/index.php?openid=" + openid + "&body=" + "测试标题" + "&total_fee=" + "1")
          .then(function (success) {

            //打印最终获得的jsapi支付参数
            alert(JSON.stringify(success.body))

            //将jsapi参数存到JsApiData中
            this.JsApiData = JSON.stringify(success.body);

            //调用jsApiCall传入jsapi参数，发起支付
            this.jsApiCall(this.JsApiData)

          }, function (error) {
            alert(JSON.stringify(error))
          })
      },
      //正式发起微信支付
      jsApiCall(jsapi) {
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

<style scoped>


  .icon {
    position: relative;
  }

  .icon i {
    display: block;
    position: relative;
    color: white;
    font-size: 30px;
    top: 10px;
  }

  .icon_bg {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: rebeccapurple;
    background-size: cover;
    position: relative;
    top: 30px;
  }

  span {
    color: #4d5669;
    position: relative;
    top: 20px;
    font-size: 14px;

  }

  a {
    color: #000;
  }

  img {
    height: 200px;
    width: 100%;
  }


</style>
