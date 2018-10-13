<template>
  <div>
    <Bartitle mytitle="情绪化"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">



          <FormItem label="情绪状态" prop="emotionstate">
            <Select v-model="formValidate.emotionstate" placeholder="请选择情绪状态">
              <Option value="高兴">高兴</Option>
              <Option value="生气">生气</Option>
              <Option value="平和">平和</Option>

            </Select>
          </FormItem>


      <FormItem label="备注" prop="remark">
        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写备注信息..."></Input>
      </FormItem>





      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>

</template>

<script>
  import Bartitle from '@/components/bartitle'
  import {shadowCloneToNewJson} from "../../../utils/clone";
  import axios from 'axios'
  export default {
    components:{
      Bartitle
    },
    mounted() {
    },
    data(){
      return{
        formValidate: {
          emotionstate: '',

        },
        ruleValidate: {
          emotionstate: [
            { required: true, type: 'string', message: '请选择情绪状态', trigger: 'change' }
          ],


        }
      }
    },

    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
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
