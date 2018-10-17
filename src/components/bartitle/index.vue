<template>
  <div class="title">
    <div class="back">
      <span @click="back" class="icon"><Icon type="ios-arrow-back" /> </span>
     <span style="font-size: 16px">{{ mytitle }}</span>
      <span  class="operation" @click="myClick">{{ operationName }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      mytitle:{
        type: String,
        required: true
      },
      operationName:{
        type: String,
        required: false
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
      },
      myClick(){
        this.$emit('clickBtn','5')
      },

    }

  }
</script>

<style  scoped>
.title{
  background-color: #47cb89;
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

  }
  .operation{
    position: absolute;
    right: 0;
    margin-right: 15px;
  }
</style>
