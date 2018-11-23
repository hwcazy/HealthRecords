<template>
  <div>
    <Bartitle mytitle="感冒统计" operationName="录入" @clickBtn="clickBtn" />
    <div id="myBin" style="width: 100%;height:300px;"></div>
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
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
      this.drawLine();
      this.drawBin();
    },
    data(){
      return{
        msg: 'Welcome to Your Vue.js App',
        coldcount: 0,
        coldday: 0,
        clodsym: 0,



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
            this.clodsym = res.data.data.clodsym;

          }

        })


      },


      drawBin(){
        // 绘制图表。
        this.$echarts.init(document.getElementById('myBin')).setOption({
          title: {text: '本年度感冒症状统计'},
          series: {
            type: 'pie',
            data: [
              {name: '头疼', value: 3},
              {name: '流鼻涕', value: 4},
              {name: '高烧', value: 7}
            ]
          }
        });
      },



      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '本年度感冒症状统计'},
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

  Form{
    color: cornflowerblue;
    background-color: white;
  }

</style>
