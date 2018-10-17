<template>
  <div  >
  <div class="header_layout">
    <div class="header">
    </div>
    <span class="nike">莫言</span>
  </div>

    <div style="padding: 10px;background: #f8f8f9">
      <Card title="健康档案" icon="ios-options" :padding="0" shadow style="width: 100%;">
        <CellGroup>
          <Cell title="健康档案" to="/personal/input"   name="4" extra="录入" />
        </CellGroup>
      </Card>
    </div>
  </div>
</template>

<script>
  import {shadowCloneToNewJson} from "../../../utils/clone";
  import axios from 'axios'
    export default {
      mounted() {
        this.queryList()
      },
      data(){
        return{
          switchValue: true
        }
      },

      methods: {
        queryList(){
          console.log('555')
        }

      }

    }
</script>

<style  scoped>
  .header{
    width: 100px;
    height: 100px;
    margin: 0 auto ;
    border-radius: 50%;
    background-color: rebeccapurple;
    background-size: cover;
    background-image: url("../../../assets/logo.png");
    position: relative;
    top: 100px;
    }
  .header_layout{
    align-content: center;
    height: 250px;
    background-color: mediumseagreen;
  }
  .nike{
    position: relative;
    margin: 0 auto ;
    top: 100px;
  }
</style>
