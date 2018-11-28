<template>
  <div>
    <Bartitle mytitle="感冒统计" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">
    <Card  class="card">
      <div style="text-align:center">
        <img style="width: 100%"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543228720456&di=72f9490f51e81f03e4c7312782d0c405&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5366d0160924ab187cd73ec23ffae6cd7a890b06.jpg">
        <h3 style="color: green">最近一个月感冒次数（{{ coldcount }}）</h3>
      </div>
    </Card>


    <div id="myBin" style="width: 100%;height:300px;"></div>

    </div>

    <!-- <div id="myChart" :style="{width: '100%', height: '300px'}"></div> -->
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
        coldcount: 0,
        coldday: 0,
        symptom:[]



      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountCold',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.coldcount = res.data.data.coldcount;
            this.coldday = res.data.data.coldday;
            this.symptom = res.data.data.symptom;

            this.drawBin();
          }

        })


      },


      drawBin(){
        // 绘制图表。
        this.$echarts.init(document.getElementById('myBin')).setOption({
          title: {text: '有哪些症状'},
          series: {
            type: 'pie',
            data: this.symptom
          }
        });
      },



      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '本年度感冒症状'},
          tooltip: {},
          xAxis: {
            data: ["头疼", "流鼻涕", "咳嗽", "高烧", "咽痛"]
          },
          yAxis: {},
          series: [{
            name: '次数',
            type: 'bar',
            data: [1, 3, 1, 2, 4]
          }]
        });
      },
      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'cold'})
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
