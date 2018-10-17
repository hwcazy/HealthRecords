<template>
  <div>
    <Bartitle mytitle="睡眠统计" operationName="录入" @clickBtn="clickBtn" />
    <div id="myBin" style="width: 100%;height:300px;"></div>
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>

</template>

<script>
  import Bartitle from '@/components/bartitle'
  import axios from 'axios'
  export default {
    name: 'hello',

    components:{
      Bartitle
    },
    mounted() {
      this.drawLine();
      this.drawBin();
    },
    data(){
      return{
        msg: 'Welcome to Your Vue.js App',
        dataStyle : {
          normal: {
            label: {show:false},
            labelLine: {show:false}
          }
        },
        placeHolderStyle : {
          normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
          },
          emphasis : {
            color: 'rgba(0,0,0,0)'
          }
        }
      }
    },

    methods: {




      drawBin(){
        // 绘制图表。
        this.$echarts.init(document.getElementById('myBin')).setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['起床时间','上床时间','入睡时间']
          },
          toolbox: {
            show : false,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'起床时间',
              type:'line',
              stack: '总量',
              data:[8.30, 9.30, 7.02, 6.50, 4.56, 12.23, 11.30]
            },
            {
              name:'上床时间',
              type:'line',
              stack: '总量',
              data:[18.30, 19.30, 17.02, 16.50, 14.56, 22.23, 21.30]
            },
            {
              name:'入睡时间',
              type:'line',
              stack: '总量',
              data:[18.50, 20.30, 20.02, 19.50, 20.56, 24.23, 21.30]
            }

          ]});
      },



      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'), 'macarons');
        // 绘制图表
        myChart.setOption({
          title: {
            text: '睡眠情况如何？',
            subtext: 'From ExcelHome',
            sublink: 'http://www.starcare-hospital.com',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle : {
              color : 'rgba(30,144,255,0.8)',
              fontFamily : '微软雅黑',
              fontSize : 35,
              fontWeight : 'bolder'
            }
          },
          tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient : 'vertical',
            x : document.getElementById('main').offsetWidth / 2,
            y : 45,
            itemGap:12,
            data:['68%的人表示过的不错','29%的人表示生活压力很大','3%的人表示“彻夜无法入眠”']
          },
          toolbox: {
            show : false,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          series : [
            {
              name:'1',
              type:'pie',
              clockWise:false,
              radius : [125, 150],
              itemStyle : this.dataStyle,
              data:[
                {
                  value:68,
                  name:'68%的人表示过的不错'
                },
                {
                  value:32,
                  name:'invisible',
                  itemStyle : this.placeHolderStyle
                }
              ]
            },
            {
              name:'2',
              type:'pie',
              clockWise:false,
              radius : [100, 125],
              itemStyle : this.dataStyle,
              data:[
                {
                  value:29,
                  name:'29%的人表示生活压力很大'
                },
                {
                  value:71,
                  name:'invisible',
                  itemStyle : this.placeHolderStyle
                }
              ]
            },
            {
              name:'3',
              type:'pie',
              clockWise:false,
              radius : [75, 100],
              itemStyle : this.dataStyle,
              data:[
                {
                  value:3,
                  name:'3%的人表示“彻夜无法入眠”'
                },
                {
                  value:97,
                  name:'invisible',
                  itemStyle : this.placeHolderStyle
                }
              ]
            }
          ]
        });
      },
      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'sleep'})
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
