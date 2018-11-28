<template>
  <div>
    <Bartitle mytitle="运动状况" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">

      <div id="myChart" :style="{width: '100%', height: '400px'}"></div>

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
        motiontype1: 0,
        motiontype2: 0,
        motiontype3: 0,
        motiontype4: 0,
        motiontype5: 0,

      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountExercise',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.motiontype1 = res.data.data.motiontype1;
            this.motiontype2 = res.data.data.motiontype2;
            this.motiontype3 = res.data.data.motiontype3;
            this.motiontype4 = res.data.data.motiontype4;
            this.motiontype5 = res.data.data.motiontype5;
            this.drawChart();
          }

        })


      },
      drawChart(){
        this.$echarts.init(document.getElementById('myChart')).setOption(
          {
            title : {
              text: '本月运动状况',
              subtext: '分析图',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x : 'center',
              y : 'bottom',
              data:['跑步','篮球','健身','骑车','其他']
            },
            toolbox: {
              show : false,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            series : [
              {
                name:'面积模式',
                type:'pie',
                radius : [20, 110],
                center : ['50%', 200],
                roseType : 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                itemStyle : {
                  normal : {
                    label : {
                      show : false
                    },
                    labelLine : {
                      show : false
                    }
                  },
                  emphasis : {
                    label : {
                      show : true
                    },
                    labelLine : {
                      show : true
                    }
                  }
                },
                data:[
                  {value:this.motiontype1, name:'跑步'},
                  {value:this.motiontype2, name:'篮球'},
                  {value:this.motiontype3, name:'健身'},
                  {value:this.motiontype4, name:'骑车'},
                  {value:this.motiontype5, name:'其他'}
                ]
              }
            ]
          }
          )},

      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'emotional'})
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
