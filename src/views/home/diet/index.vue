<template>
  <div>
    <Bartitle mytitle="饮食"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">




        <Row>
          <Col span="12">
            <FormItem label="早餐时间" prop="breakfasttime">
              <TimePicker type="time" placeholder="选择时间" v-model="formValidate.breakfasttime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="早餐时长" prop="breakfastlong">
              <Input v-model="formValidate.breakfastlong" placeholder="请填写早餐时长"></Input>
            </FormItem>
          </Col>
        </Row>

      <FormItem label="早餐餐食情况" prop="breakfaststate">
        <Input v-model="formValidate.breakfaststate" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写早餐餐食情况..."></Input>
      </FormItem>
      <FormItem label="早餐食物情况" prop="breakfastfood">
        <Input v-model="formValidate.breakfastfood" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写早餐食物情况..."></Input>
      </FormItem>


      <Row>
        <Col span="12">
          <FormItem label="午餐时间" prop="lunchtime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.lunchtime"></TimePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="午餐时长" prop="lunchlong">
            <Input v-model="formValidate.lunchlong" placeholder="请填写午餐时长"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="午餐餐食情况" prop="lunchstate">
        <Input v-model="formValidate.lunchstate" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写午餐餐食情况..."></Input>
      </FormItem>
      <FormItem label="午餐食物情况" prop="lunchfood">
        <Input v-model="formValidate.lunchfood" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写午餐食物情况..."></Input>
      </FormItem>



      <Row>
        <Col span="12">
          <FormItem label="晚餐时间" prop="dinnertime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.dinnertime"></TimePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="晚餐时长" prop="dinnerlong">
            <Input v-model="formValidate.dinnerlong" placeholder="请填写晚餐时长"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="晚餐餐食情况" prop="dinnerstate">
        <Input v-model="formValidate.dinnerstate" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写晚餐餐食情况..."></Input>
      </FormItem>
      <FormItem label="晚餐食物情况" prop="dinnerfood">
        <Input v-model="formValidate.dinnerfood" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写晚餐食物情况..."></Input>
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

            breakfasttime:new Date(),
            breakfastlong: '',
            breakfaststate: '',
            breakfastfood: '',

            lunchtime:new Date(),
            lunchlong: '',
            lunchstate: '',
            lunchfood: '',

            dinnertime:new Date(),
            dinnerlong: '',
            dinnerstate: '',
            dinnerfood: '',

            remark: '',

          },
          ruleValidate: {
            breakfastlong: [
              { required: true, message: '早餐时长不能为空', trigger: 'blur' }
            ],
            lunchlong: [
              { required: true, message: '午餐时长不能为空', trigger: 'blur' }
            ],
            dinnerlong: [
              { required: true, message: '晚餐时长不能为空', trigger: 'blur' }
            ],


            breakfasttime: [
              { required: true, type: 'string', message: '请选择早餐时间', trigger: 'change' }
            ],
            lunchtime: [
              { required: true, type: 'string', message: '请选择午餐时间', trigger: 'change' }
            ],
            dinnertime: [
              { required: true, type: 'string', message: '请选择晚餐日期', trigger: 'change' }
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
              axios.post(URI+'/api/HealthSys/BiteRecord',
                {
                  patientno:JSON.parse(sessionStorage.getItem("patientno")),
                  breakfastmeals: this.formValidate.breakfaststate,
                  breakfastfood: this.formValidate.breakfastfood,
                  breakfasttime: this.formValidate.breakfasttime,
                  breakfasthours: this.formValidate.breakfastlong,

                  lunchmeals: this.formValidate.lunchstate,
                  lunchfastfood: this.formValidate.lunchfood,
                  lunchtime: this.formValidate.lunchtime,
                  lunchhours: this.formValidate.lunchlong,

                  suppermeals: this.formValidate.dinnerstate,
                  supperfood: this.formValidate.dinnerfood,
                  suppertime: this.formValidate.dinnertime,
                  supperhours: this.formValidate.dinnerlong,
                  remark : this.formValidate.remark,

                }).then((res) => {
                this.$Spin.hide();
                console.log(res.data)
                this.item = res.data
                if (res.data.msgCode == 0) {
                  this.$Message.success('信息录入成功!');
                  setTimeout(function () {
                    this.$router.push({name: 'home'})
                  }.bind(this), 1000)
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
