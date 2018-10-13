<template>
  <div class="title">
    <div class="back">
      <span @click="back" class="icon"><Icon type="ios-arrow-back" /> </span>
     <span>{{ mytitle }}</span>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props:{
      mytitle:{
        type: String,
        required: true
      }
    },
    mounted() {

    },
    data(){
      return{

      }
    },

    methods: {
      back(){
        this.$router.push('/home/list');
      }

    }

  }
</script>

<style  scoped>
.title{
  background-color: cornflowerblue;
  position: relative;
  height: 50px;
  width: 100%;
}
  .back{
   position: relative;
  }
  .icon{
    position: absolute;
    left: 0;
    margin-left: 15px;
    margin-left: 15px;
  }
</style>
