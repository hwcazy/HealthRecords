<template>
  <div>
    <Bartitle mytitle="便秘"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <FormItem label="开始时间" prop="starttime">
        <DatePicker type="date" placeholder="选择时间" v-model="formValidate.starttime"></DatePicker>
      </FormItem>

      <FormItem label="结束时间" prop="endtime">
        <DatePicker type="date" placeholder="选择时间" v-model="formValidate.endtime"></DatePicker>
      </FormItem>


      <FormItem label="诊断时间" prop="Diagnosistime">
        <DatePicker type="date" placeholder="选择时间" v-model="formValidate.Diagnosistime"></DatePicker>
      </FormItem>
      <FormItem label="就诊医院" prop="hospital">
        <Input v-model="formValidate.hospital" placeholder="请填写就诊医院"></Input>
      </FormItem>

      <Row>
        <Col span="12">
          <FormItem label="就诊科室" prop="Department">
            <Input v-model="formValidate.Department" placeholder="请填写就诊科室"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="就诊医生" prop="clinicdedoctor">
            <Input v-model="formValidate.clinicdedoctor" placeholder="请填写就诊医生"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="是否痊愈" prop="recovery">
        <Select v-model="formValidate.recovery" placeholder="请选择是否痊愈">
          <Option value="是">是</Option>
          <Option value="否">否</Option>

        </Select>
      </FormItem>


      <FormItem label="病前饮食" prop="repast">
        <Input v-model="formValidate.repast" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写病前饮食..."></Input>
      </FormItem>


      <FormItem label="诊断" prop="Diagnosis">
        <Input v-model="formValidate.Diagnosis" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写诊断..."></Input>
      </FormItem>


      <FormItem label="备注" prop="remark1">
        <Input v-model="formValidate.remark1" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写备注信息..."></Input>
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

      <FormItem label="如厕时间">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>

      <Row>
        <Col span="12">
          <FormItem label="饮食状况" prop="dietetic">
            <Select v-model="formValidate.dietetic" placeholder="请选择饮食状况">
              <Option value="好">好</Option>
              <Option value="一般">一般</Option>
              <Option value="不好">不好</Option>

            </Select>
          </FormItem>

        </Col>

        <Col span="12">
          <FormItem label="类型" prop="dietetictype">
            <Input v-model="formValidate.dietetictype" placeholder="请填写类型"></Input>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="饭食含纤维类型" prop="fibretype">
        <Select v-model="formValidate.fibretype" placeholder="请选择饭食含纤维类型">
          <Option value="粗纤维">粗纤维</Option>
          <Option value="细纤维">细纤维</Option>
          <Option value="不知">不知</Option>
          <Option value="其他">其他</Option>
        </Select>
      </FormItem>

      <FormItem label="吃饭顿数" prop="dinenum">
        <Input v-model="formValidate.dinenum" placeholder="请填写吃饭顿数"></Input>
      </FormItem>

      <Row>
        <Col span="12">
          <FormItem label="饭量" prop="appetite">
            <Input v-model="formValidate.appetite" placeholder="请填写饭量"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="吃饭时长(h)" prop="dinehours">
            <Input v-model="formValidate.dinehours" placeholder="请填写吃饭时长"></Input>
          </FormItem>
        </Col>
      </Row>



      <FormItem label="大便颜色" prop="defecatecolor">
        <Input v-model="formValidate.defecatecolor" placeholder="请填写大便颜色"></Input>
      </FormItem>
      <FormItem label="症状" prop="Symptom">
        <Input v-model="formValidate.Symptom" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写症状..."></Input>
      </FormItem>

      <FormItem label="大便形态" prop="stoolform">
        <Input v-model="formValidate.stoolform" placeholder="请填写大便形态"></Input>
      </FormItem>
      <FormItem label="大便量" prop="stoolnum">
        <Input v-model="formValidate.stoolnum" placeholder="请填写大便量"></Input>
      </FormItem>


      <FormItem label="如厕次数" prop="defcationnum">
        <Input v-model="formValidate.defcationnum" placeholder="请填写如厕次数"></Input>
      </FormItem>

      <FormItem label="备注" prop="remark2">
        <Input v-model="formValidate.remark2" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写备注信息..."></Input>
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
  import Unix from '@/utils/Unix'

  export default {
    components: {
      Bartitle,
      Unix,
    },
    mounted() {
    },
    data() {
      return {
        formValidate: {
          starttime: new Date(),
          endtime: new Date(),
          Diagnosistime: new Date(),
          hospital: '',
          druginfo: '',
          Department: '',
          clinicdedoctor: '',
          recovery: '',
          repast: '',
          Diagnosis: '',
          date: new Date(),
          time: new Date(),
          drugbumber: '',
          drugfrequency: '',
          toiletcount: '',
          dietetic: '',
          fibretype: '',
          dietetictype: '',
          appetite: '',
          dinehours: '',
          animalheat: '',
          weather: '',
          defcationnum: '',
          dinenum: '',
          Symptom: '',
          stoolform: '',
          remark1: '',
          remark2: '',
          defecatecolor: '',
          stoolnum: '',

        },
        ruleValidate: {}
      }
    },

    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {

            this.$Spin.show();
            setTimeout(() => {
              this.$Spin.hide();
            }, 3000);
            axios.post(URI + '/api/HealthSys/ConstipationRecord',
              {
                patientno: JSON.parse(sessionStorage.getItem("patientno")),
                starttime: Unix.unixToDate(this.formValidate.starttime),
                endtime: Unix.unixToDate(this.formValidate.endtime),
                cinichospital: this.formValidate.hospital,
                diagnose: this.formValidate.Diagnosis,
                defcationtime: Unix.unixToDate(this.formValidate.date) + " " + this.formValidate.time,
                diagnosistime: Unix.unixToDate(this.formValidate.Diagnosistime),
                clinicdepartment: this.formValidate.Department,
                clinicdedoctor: this.formValidate.clinicdedoctor,
                recovery: this.formValidate.recovery,
                remark: this.formValidate.remark1,
                symptom: this.formValidate.Symptom,
                drug: this.formValidate.druginfo,
                drugnum: this.formValidate.drugbumber,
                drugfrequency: this.formValidate.drugfrequency,
                defecatecolor: this.formValidate.defecatecolor,
                appetite: this.formValidate.appetite,
                dinenum: this.formValidate.dinenum,
                dietetictype: this.formValidate.dietetictype,
                dinehours: this.formValidate.dinehours,
                remark2: this.formValidate.remark2,
                stoolform: this.formValidate.stoolform,
                defcationnum: this.formValidate.defcationnum,
                repast: this.formValidate.repast,
                dietetic: this.formValidate.dietetic,
                fibretype: this.formValidate.fibretype,
                stoolnum: this.formValidate.stoolnum,
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
            this.$Message.error('信息录入失败!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }

    }

  }
</script>

<style scoped>

  Form {
    margin-top: 20px;
    color: cornflowerblue;
    background-color: white;
    margin-right: 15px;
  }

</style>
