<style  scoped>
  .frame-main{
    background-color: #2d8cf0;
    line-height: 48px;
    height: 48px;
    color: white;
    font-size: 14px;
    text-align: center;
  }
  .main{
    text-align: center;
  }
  .nav{
    line-height: 48px;
    height: 48px;
    background-color: #e8eaec;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
  .router-link-active{
    color: #2d8cf0;
  }
  a{
    color: #808695;
  }
</style>

<template>
  <div class="frame-main">
    <div>
      <div class="single-page">
        <router-view class="Router"></router-view>
        <div class="main"  >
          <div class="nav" v-show="show" >
            <Row style="border:1px solid #c5c8ce;border-radius: 3px">
              <Col span="8"  style="background-color: white;">
                <router-link to="/home/list" ><Icon type="ios-home" size="16"/>首页</router-link>
              </Col>
              <Col span="8"  style="background-color: white">
                <router-link to="/experience/list"><Icon type="ios-body" size="16"/>体检系统</router-link>
              </Col>
              <Col span="8"  style="background-color: white;">
                <router-link to="/personal/list"><Icon type="ios-person" size="16"/>个人中心</router-link>
              </Col>
            </Row>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Util from '@/utils/util'
  import {USERINFO} from "../../constants/storage";

  export default {
    data() {
      return {
        show:true,

      }
    },
    computed: {

    },
    methods: {

    },
    beforeDestroy(){
      this.show = false

    },
    mounted() {
      this.show = true;

    },

    watch: {
      $route(to,from){
        console.log(to.path);
        if(to.path!=='/home/list'&& to.path!=='/experience/list'&&to.path!=='/personal/list' ){
          this.show = false
        }else {
          this.show = true
        }
        // if(to.path!=='/experience/list' ){
        //
        // }
        // if(to.path!=='/personal/list' ){
        //
        // }
      }
    }
  }
</script>
