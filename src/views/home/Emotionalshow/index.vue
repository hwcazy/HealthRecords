<template>
  <div>
    <Bartitle mytitle="情绪状况" operationName="录入" @clickBtn="clickBtn" />

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
        emotionalstate1: 0,
        emotionalstate2: 0,
        emotionalstate3: 0,



      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountEmotional',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.emotionalstate1 = res.data.data.emotionalstate1;
            this.emotionalstate2 = res.data.data.emotionalstate2;
            this.emotionalstate3 = res.data.data.emotionalstate3;
            this.drawChart();
          }

        })


      },
      drawChart(){
        this.$echarts.init(document.getElementById('myChart')).setOption(
          {
            title : {
              text: '本月情绪状况',
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
              data:['高兴','生气','平和']
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
                name:'半径模式',
                type:'pie',
                radius : [20, 110],
                center : ['50%', 200],
                roseType : 'radius',
                width: '40%',       // for funnel
                max: 40,            // for funnel
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
                  {value:this.emotionalstate1, name:'高兴'},
                  {value:this.emotionalstate2, name:'生气'},
                  {value:this.emotionalstate3, name:'平和'}

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
