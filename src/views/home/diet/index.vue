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

            breakfasttime: '',
            breakfastlong: '',
            breakfaststate: '',
            breakfastfood: '',

            lunchtime: '',
            lunchlong: '',
            lunchstate: '',
            lunchfood: '',

            dinnertime: '',
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


            breakfaststate: [
              { required: true, message: '请填写早餐餐食信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            breakfastfood: [
              { required: true, message: '请填写早餐食物信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            lunchstate: [
              { required: true, message: '请填写午餐餐食信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            lunchfood: [
              { required: true, message: '请填写午餐食物信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            dinnerstate: [
              { required: true, message: '请填写晚餐餐食信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            dinnerfood: [
              { required: true, message: '请填写晚餐食物信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur' }
            ],
            remark: [
              { required: true, message: '请填写备注信息', trigger: 'blur' },
              { type: 'string', min: 20, message: '备注信息不少于20个字', trigger: 'blur' }
            ]
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
                  breakfastmeals: this.formValidate.emotionstate,
                  breakfastfood: this.formValidate.remark,
                  breakfasttime: this.formValidate.remark,
                  breakfasthours: this.formValidate.remark,
                  lunchmeals: this.formValidate.remark,
                  lunchfastfood: this.formValidate.remark,
                  lunchtime: this.formValidate.remark,
                  lunchhours: this.formValidate.remark,

                  suppermeals: this.formValidate.remark,
                  supperfood: this.formValidate.remark,
                  suppertime: this.formValidate.remark,
                  supperhours: this.formValidate.remark,
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
    color: cornflowerblue;
    background-color: white;
  }

</style>
