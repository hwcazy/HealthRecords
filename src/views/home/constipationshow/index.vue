<template>
  <div>
    <Bartitle mytitle="便秘统计" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">
    <Card   class="card">
      <div style="text-align:center">
        <img style="width: 100%"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543907257&di=b5ca6d20e245831339f845d607aae2fd&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.clm02.com%2Fezvivi.com%2F233147%2F233147_3.jpeg">
        <h3 style="color: green">最近一次便秘总天数（{{ conday }}）</h3>
      </div>
    </Card>

      <Card  class="card">
        <div style="text-align:center">
          <img style="width: 100%"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543907191&di=918525bff7bcd78fb31273dbf9abb903&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181007%2Fb4a94e75eb2343fb9da49c8df9b655c0.jpeg">
          <h3 style="color: green">最近一次纤维摄取量情况（{{ fibretype }}）</h3>
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
        conday: 0,
        fibretype: 0,




      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountConstipation',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.conday = res.data.data.conday;
            this.fibretype = res.data.data.fibretype;



          }

        })


      },


      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'constipation'})
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
