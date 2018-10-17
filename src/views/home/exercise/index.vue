<template>
  <div>
    <Bartitle mytitle="锻炼"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Row>
        <Col span="12">
          <FormItem label="开始时间" prop="starttime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.starttime"></TimePicker>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="结束时间" prop="endtime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.endtime"></TimePicker>
          </FormItem>
        </Col>
      </Row>


      <Row>
        <Col span="12">
          <FormItem label="锻炼时长(h)" prop="exercisetime">
            <Input v-model="formValidate.exercisetime" placeholder="请填写锻炼时长"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="运动类型" prop="motiontype">
            <Select v-model="formValidate.motiontype" placeholder="请选择运动类型">
              <Option value="跑步">跑步</Option>
              <Option value="篮球">篮球</Option>
              <Option value="健身">健身</Option>
              <Option value="骑车">骑车</Option>
              <Option value="其他">其他</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>


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
  import axios from 'axios'
  import {URI} from '../../../constants/uri'
  export default {
    components:{
      Bartitle
    },
    mounted() {
    },
    data(){
      return{
        formValidate: {
          starttime:new Date(),
          endtime: new Date(),
          exercisetime: '',
          motiontype: '',
          remark:'',

        },
        ruleValidate: {
          starttime: [
            { required: true, type: 'string', message: '请选择开始时间', trigger: 'change' }
          ],
          endtime: [
            { required: true, type: 'string', message: '请选择结束时间', trigger: 'change' }
          ],

          exercisetime: [
            { required: true, message: '锻炼时长不能为空', trigger: 'blur' }
          ],
          motiontype: [
            { required: true, message: '请选择运动类型', trigger: 'change' }
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
            axios.post(URI+'/api/HealthSys/ExerciseRecord',
              {
                patientno:JSON.parse(sessionStorage.getItem("patientno")),
                dateentry:'',
                starttime: this.formValidate.starttime,
                endtime: this.formValidate.endtime,
                exercisehours: this.formValidate.exercisetime,
                motiontype: this.formValidate.motiontype,
                remark:this.formValidate.remark
              }).then((res) => {

              this.$Spin.hide();
              console.log(res.data)
              this.item = res.data
              if (res.data.msgCode == 0) {
                this.$Message.success('信息录入成功!');
                setTimeout(function () {
                  this.$router.push({name: 'home'})
                  //this.$router.push({path: 'home', query: {id: 1}})
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
