<template>
  <div>
    <Bartitle mytitle="饮酒统计" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">
    <Card   class="card">
      <div style="text-align:center">
        <img style="width: 100%"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543316725184&di=c3bd8a423b071b53c84e32160a1c534c&imgtype=0&src=http%3A%2F%2Fngdsb.hinews.cn%2Fresfile%2F2018-04-15%2F016%2F3605394_ngdsbtp_1523713700220_s.jpg">
        <h3 style="color: green">最近30天平均饮酒量（{{ avgcapacity }}）ml</h3>
      </div>
    </Card>

      <div id="myChart" :style="{width: '100%', height: '450px'}"></div>


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
        avgcapacity: 0,
        winetype1: 0,
        winetype2: 0,
        winetype3: 0,
        winetype4: 0,

        labelTop : {
          normal : {
            label : {
              show : true,
              position : 'center',
              formatter : '{b}',
              textStyle: {
                baseline : 'bottom'
              }
            },
            labelLine : {
              show : false
            }
          }
        },labelFromatter : {
          normal : {
            label : {
              formatter : function (params){
                return 100 - params.value + '%'
              },
              textStyle: {
                baseline : 'top'
              }
            }
          },
        },labelBottom : {
          normal : {
            color: '#ccc',
            label : {
              show : true,
              position : 'center'
            },
            labelLine : {
              show : false
            }
          },
          emphasis: {
            color: 'rgba(0,0,0,0)'
          }
        },
        radius : [40, 55]



      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountDrink',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.avgcapacity = res.data.data.avgcapacity;
            this.winetype1 = res.data.data.winetype1;
            this.winetype2 = res.data.data.winetype2;
            this.winetype3 = res.data.data.winetype3;
            this.winetype4 = res.data.data.winetype4;
            this.drawChart();


          }

        })


      },
      drawChart(){
        this.$echarts.init(document.getElementById('myChart')).setOption( {
            legend: {
              x : 'center',
              y : 'center',
              data:[
                '白酒','红酒',
                '啤酒','自酿'
              ]
            },
            title : {
              text: '饮酒类型分析',
              subtext: '本月饮酒',
              x: 'center'
            },
            toolbox: {
              show : false,
              feature : {
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel'],
                  option: {
                    funnel: {
                      width: '20%',
                      height: '30%',
                      itemStyle : {
                        normal : {
                          label : {
                            formatter : function (params){
                              return 'other\n' + params.value + '%\n'
                            },
                            textStyle: {
                              baseline : 'middle'
                            }
                          }
                        },
                      }
                    }
                  }
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            series : [
              {
                type : 'pie',
                center : ['30%', '30%'],
                radius : this.radius,
                x: '0%', // for funnel
                itemStyle : this.labelFromatter,
                data : [
                  {name:'其他', value:100-this.winetype1, itemStyle : this.labelBottom},
                  {name:'白酒', value:this.winetype1,itemStyle : this.labelTop}
                ]
              },

              {
                type : 'pie',
                center : ['70%', '30%'],
                radius : this.radius,
                x:'40%', // for funnel
                itemStyle : this.labelFromatter,
                data : [
                  {name:'其他', value:100-this.winetype2, itemStyle : this.labelBottom},
                  {name:'红酒', value:this.winetype2,itemStyle : this.labelTop}
                ]
              },


              {
                type : 'pie',
                center : ['30%', '70%'],
                radius : this.radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle : this.labelFromatter,
                data : [
                  {name:'其他', value:100-this.winetype3, itemStyle : this.labelBottom},
                  {name:'啤酒', value:this.winetype3,itemStyle : this.labelTop}
                ]
              },

              {
                type : 'pie',
                center : ['70%', '70%'],
                radius : this.radius,
                y: '55%',   // for funnel
                x:'40%', // for funnel
                itemStyle : this.labelFromatter,
                data : [
                  {name:'其他', value:100-this.winetype4, itemStyle : this.labelBottom},
                  {name:'自酿', value:this.winetype4,itemStyle : this.labelTop}
                ]
              }


            ]
          })},

      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'wine'})
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
