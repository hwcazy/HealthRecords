<template>
  <div>
    <Bartitle mytitle="腹泻"/>
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
          <FormItem label="就诊医院" prop="hospital">
            <Input v-model="formValidate.hospital" placeholder="请填写就诊医院"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="诊断时间" prop="Diagnosistime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.Diagnosistime"></TimePicker>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="就诊科室" prop="Department">
            <Input v-model="formValidate.Department" placeholder="请填写就诊科室"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="就诊医生" prop="Doctor">
            <Input v-model="formValidate.Doctor" placeholder="请填写就诊医生"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="是否痊愈" prop="recovery">
        <Select v-model="formValidate.recovery" placeholder="请选择是否痊愈">
          <Option value="是">是</Option>
          <Option value="否">否</Option>

        </Select>
      </FormItem>


      <FormItem label="病前饮食" prop="Predisease">
        <Input v-model="formValidate.Predisease" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写病前饮食..."></Input>
      </FormItem>


      <FormItem label="诊断" prop="Diagnosis">
        <Input v-model="formValidate.Diagnosis" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写诊断..."></Input>
      </FormItem>


      <FormItem label="备注" prop="remark1">
        <Input v-model="formValidate.remark1" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写备注信息..."></Input>
      </FormItem>



      <Row>
        <Col span="12">
          <FormItem label="用药信息" prop="druginfo">
            <Input v-model="formValidate.druginfo" placeholder="请填写用药信息"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="用药数量" prop="drugbumber">
            <Input v-model="formValidate.drugbumber" placeholder="请填写用药数量"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="用药次数" prop="drugfrequency">
            <Input v-model="formValidate.drugfrequency" placeholder="请填写用药次数"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="如厕次数" prop="toiletcount">
            <Input v-model="formValidate.toiletcount" placeholder="请填写如厕次数"></Input>
          </FormItem>
        </Col>
      </Row>



      <Row>
        <Col span="12">
          <FormItem label="饮水类型" prop="watertype">
            <Select v-model="formValidate.watertype" placeholder="请选择饮水类型">
              <Option value="热水">热水</Option>
              <Option value="冷水">冷水</Option>
              <Option value="温水">温水</Option>

            </Select>
          </FormItem>

        </Col>

        <Col span="12">
          <FormItem label="工作时长(h)" prop="workhours">
            <Input v-model="formValidate.workhours" placeholder="请填写工作时长"></Input>
          </FormItem>
        </Col>
      </Row>

          <Row>
        <Col span="12">
          <FormItem label="饭量" prop="appetite">
            <Input v-model="formValidate.appetite" placeholder="请填写饭量"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="睡眠时长(h)" prop="sleephours">
            <Input v-model="formValidate.sleephours" placeholder="请填写睡眠时长"></Input>
          </FormItem>
        </Col>
      </Row>


      <Row>
        <Col span="12">
          <FormItem label="体温" prop="animalheat">
            <Input v-model="formValidate.animalheat" placeholder="请填写体温"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="气温" prop="weather">
            <Input v-model="formValidate.weather" placeholder="请填写气温"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="饮水量" prop="waternum">
        <Input v-model="formValidate.waternum" placeholder="请填写饮水量"></Input>
      </FormItem>
      <FormItem label="症状" prop="Symptom">
        <Input v-model="formValidate.Symptom" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写症状..."></Input>
      </FormItem>

      <FormItem label="备注" prop="remark2">
        <Input v-model="formValidate.remark2" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写备注信息..."></Input>
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
          starttime: '',
          endtime: '',
          Diagnosistime: '',
          hospital: '',
          druginfo: '',
          Department: '',
          Doctor: '',
          recovery: '',
          Predisease: '',
          Diagnosis: '',

          drugbumber: '',
          drugfrequency: '',
          toiletcount: '',

          watertype: '',
          workhours: '',
          appetite: '',
          sleephours: '',
          animalheat: '',
          weather: '',

          waternum: '',
          Symptom: '',

          remark1: '',
          remark2: '',

        },
        ruleValidate: {



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
            axios.post(URI+'/api/HealthSys/DiarrheaRecord',
              {
                patientno:JSON.parse(sessionStorage.getItem("patientno")),
                starttime: this.formValidate.starttime,
                endtime: this.formValidate.endtime,
                cinichospital: this.formValidate.hospital,
                diagnose: this.formValidate.Diagnosis,
                diagnosistime: this.formValidate.Diagnosistime,
                clinicdepartment: this.formValidate.Department,
                clinicdeDoctor : this.formValidate.Doctor,
                recovery: this.formValidate.recovery,
                remark : this.formValidate.remark1,
                symptom: this.formValidate.Symptom,
                drug: this.formValidate.druginfo,
                drugnum: this.formValidate.drugbumber,
                drugfrequency : this.formValidate.drugfrequency,
                dress: "",
                appetite: this.formValidate.appetite,
                watertype: this.formValidate.watertype,
                waternum: this.formValidate.waternum,
                workhours: this.formValidate.workhours,
                weather: this.formValidate.weather,
                animalheat: this.formValidate.animalheat,
                sleephours: this.formValidate.sleephours,
                remark2: this.formValidate.remark2,
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
