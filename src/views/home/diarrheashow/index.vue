<template>
  <div>
    <Bartitle mytitle="腹泻统计" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">
    <Card   class="card">
      <div style="text-align:center">
        <img style="width: 100%"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543906566&di=429ead315adea7ee0fbd52169f7bb12d&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F52%2Fw444h408%2F20180710%2FnwxH-hezpzwu8776171.jpg">
        <h3 style="color: green">最近一个月腹泻次数（{{ diaday }}）</h3>
      </div>
    </Card>

      <Card   class="card">
        <div style="text-align:center">
          <img style="width: 100%"
               src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2830771056,896760181&fm=26&gp=0.jpg">
          <h3 style="color: green">最近一个月如厕次数（{{ defcationnum }}）</h3>
        </div>
      </Card>

      <Card  class="card">
        <div style="text-align:center">
          <img style="width: 100%"
               src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099278954,1776523890&fm=26&gp=0.jpg">
          <h3 style="color: green">最近一次饮水量（{{ waternum }}）</h3>
        </div>
      </Card>

    </div>




  </div>

</template>

<script>
  import Bartitle from '@/components/bartitle'
  import {URI} from '../../../constants/uri'
  import axios from 'axios'
  export default {
    name: 'hello',

    components:{
      Bartitle
    },
    mounted() {
      this.GetStatistics();

    },
    data(){
      return{
        msg: 'Welcome to Your Vue.js App',
        diaday: 0,
        defcationnum: 0,
        waternum:0



      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountDiarrhea',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.diaday = res.data.data.diaday;
            this.defcationnum = res.data.data.defcationnum;
            this.waternum = res.data.data.waternum;


          }

        })


      },


      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'diarrhea'})
      }

    }



  }
</script>



<style  scoped>

  #content{
    color: cornflowerblue;
    background-color: white;
    width: 100%;
  }
  img {display: block; max-width: 100%;
  }
  .card {
    margin: 10px;
  }
</style>
