<template>
  <div>
    <Bartitle mytitle="睡眠情况" operationName="录入" @clickBtn="clickBtn"/>
    <!-- <div id="myBin" style="width: 100%;height:300px;"></div> -->
    <div id="content">

      <Card style="width:max-content;margin: 10px">
        <div style="text-align:center">
          <img style="width: 100%"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542893856729&di=ae3508d011d409806c94b28f841fb880&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F377adab44aed2e736da093d88d01a18b86d6fafd.jpg">
          <h3 style="color: green">最近一个月服药天数（{{ takemedicine }}）</h3>
        </div>
      </Card>

      <Card style="width:max-content;margin: 10px">
        <p slot="title">最近一个月情绪状况</p>
        <CellGroup>
          <Cell  style="color: green">高兴{{ sentiment1 }}(天)</Cell>
          <Cell  style="color: green">平和{{ sentiment2 }}(天)</Cell>
          <Cell  style="color: green">生气{{ sentiment3 }}(天)</Cell>
        </CellGroup>
      </Card>


        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>

    </div>
  </div>

</template>


<script>
  import Bartitle from '@/components/bartitle'
  import {URI} from '../../../constants/uri'
  import axios from 'axios'

  export default {
    name: 'hello',

    components: {
      Bartitle
    },
    mounted() {

      //this.drawBin();
      this.GetStatistics();
    },
    data() {
      return {
        takemedicine: 0,
        sentiment1: 0,
        sentiment2: 0,
        sentiment3: 0,
        sleepdepth1: 0,
        sleepdepth2: 0,
        sleepdepth3: 0,

        msg: 'Welcome to Your Vue.js App',
        dataStyle: {
          normal: {
            label: {show: false},
            labelLine: {show: false}
          }
        },
        placeHolderStyle: {
          normal: {
            color: 'rgba(0,0,0,0)',
            label: {show: false},
            labelLine: {show: false}
          },
          emphasis: {
            color: 'rgba(0,0,0,0)'
          }
        }
      }
    },

    methods: {

      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountSleep',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.takemedicine = res.data.data.takemedicine;
            this.sentiment1 = res.data.data.sentiment1;
            this.sentiment2 = res.data.data.sentiment2;
            this.sentiment3 = res.data.data.sentiment3;
            this.sleepdepth1 = res.data.data.sleepdepth1;
            this.sleepdepth2 = res.data.data.sleepdepth2;
            this.sleepdepth3 = res.data.data.sleepdepth3;
            this.drawLine();
          }

        })


      },

      drawBin() {
        // 绘制图表。
        this.$echarts.init(document.getElementById('myBin')).setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['起床时间', '上床时间', '入睡时间']
          },
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '起床时间',
              type: 'line',
              stack: '总量',
              data: [8.30, 9.30, 7.02, 6.50, 4.56, 12.23, 11.30]
            },
            {
              name: '上床时间',
              type: 'line',
              stack: '总量',
              data: [18.30, 19.30, 17.02, 16.50, 14.56, 22.23, 21.30]
            },
            {
              name: '入睡时间',
              type: 'line',
              stack: '总量',
              data: [18.50, 20.30, 20.02, 19.50, 20.56, 24.23, 21.30]
            }

          ]
        });
      },


      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'), 'macarons');
        // 绘制图表
        myChart.setOption({
          title: {
            text: '睡眠情况如何？',
            subtext: '了解星颐康',
            sublink: 'http://www.starcare-hospital.com',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle: {
              color: 'rgba(30,144,255,0.8)',
              fontFamily: '微软雅黑',
              fontSize: 20,
              fontWeight: 'bolder'
            }
          },
          tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: document.getElementById('main').offsetWidth / 2,
            y: 45,
            itemGap: 12,
            data: ['深度睡眠', '浅度睡眠', '无法入睡']
          },
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '1',
              type: 'pie',
              clockWise: false,
              radius: [125, 150],
              itemStyle: this.dataStyle,
              data: [
                {
                  value: this.sleepdepth1,
                  name: '深度睡眠'
                },
                {
                  value: 100 - this.sleepdepth1,
                  name: '深度睡眠',
                  itemStyle: this.placeHolderStyle
                }
              ]
            },
            {
              name: '2',
              type: 'pie',
              clockWise: false,
              radius: [100, 125],
              itemStyle: this.dataStyle,
              data: [
                {
                  value: this.sleepdepth2,
                  name: '浅度睡眠'
                },
                {
                  value: 100 - this.sleepdepth2,
                  name: '浅度睡眠',
                  itemStyle: this.placeHolderStyle
                }
              ]
            },
            {
              name: '3',
              type: 'pie',
              clockWise: false,
              radius: [75, 100],
              itemStyle: this.dataStyle,
              data: [
                {
                  value: this.sleepdepth3,
                  name: '无法入睡'
                },
                {
                  value: 100 - this.sleepdepth3,
                  name: '无法入睡',
                  itemStyle: this.placeHolderStyle
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


<style scoped>

  content {
    color: cornflowerblue;
    background-color: gray;
  }

</style>
