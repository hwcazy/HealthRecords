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
  import {URI} from '../../../constants/uri'
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
          remark: '',
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

            this.$Spin.show();
            setTimeout(() => {
              this.$Spin.hide();
            }, 3000);
            axios.post(URI+'/api/HealthSys/EmotionalRecord',
              {
                patientno:JSON.parse(sessionStorage.getItem("patientno")),
                emotionalstate: this.formValidate.emotionstate,
                remark: this.formValidate.remark,

              }).then((res) => {
              this.$Spin.hide();
              console.log(res.data)
              this.item = res.data
              if (res.data.msgCode == 0) {
                this.$Message.success('信息录入成功!');
                setTimeout(function () {
                  this.$router.push({name: 'home'})
                }.bind(this), 50)
              } else if (res.data.msgCode == -1) {
              } else {
              }
            })


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
    margin-top: 20px;
    color: cornflowerblue;
    background-color: white;
    margin-right: 15px;
  }

</style>
