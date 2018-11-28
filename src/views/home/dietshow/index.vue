<template>
  <div>
    <Bartitle mytitle="饮食情况" operationName="录入" @clickBtn="clickBtn" />

    <div id="content">
    <Card   class="card">
      <div style="text-align:center">
        <img style="width: 100%"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543913889&di=1814b35125a4049b19a8e2e19479bfd8&imgtype=jpg&er=1&src=http%3A%2F%2Fimages2.looquan.com%2FUploads%2Flu%2F154137332044129.jpg">
        <h3 style="color: green">最近一个月总餐数量（{{ biteCount }}）</h3>
      </div>
    </Card>

      <Card   class="card">
        <div style="text-align:center">
          <img style="width: 100%"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543319605264&di=2cd2b961175f2bc1be8fd6b7fcb74a15&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180911%2Fea975ab277974e21ba41b6fda7701851.jpeg">
          <h3 style="color: green">最近一个月是否吃早餐（{{ breakPar }}）</h3>
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
        biteCount: 0,
        breakPar: 0,




      }
    },

    methods: {


      GetStatistics() {
        // 发送一个 POST 请求

        axios.post(URI + '/api/HealthSys/CountBite',
          {
            patientno: JSON.parse(sessionStorage.getItem("patientno")),
          }).then((res) => {
          console.log(res.data)
          this.item = res.data
          if (res.data.msgCode == 0) {
            this.biteCount = res.data.data.biteCount;
            this.breakPar = res.data.data.breakPar;



          }

        })


      },


      clickBtn(vaule) {
        console.log(vaule)
        this.$router.push({name: 'diet'})
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
