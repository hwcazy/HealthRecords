<template>
  <div>
    <Bartitle mytitle="腹泻"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Row>
        <Col span="12">
          <FormItem label="开始时间" prop="starttime">
            <DatePicker type="date" placeholder="选择时间" v-model="formValidate.starttime"></DatePicker>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="结束时间" prop="endtime">
            <DatePicker type="date" placeholder="选择时间" v-model="formValidate.endtime"></DatePicker>
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
            <DatePicker type="date" placeholder="选择时间" v-model="formValidate.Diagnosistime"></DatePicker>
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
        <Input v-model="formValidate.repast" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写病前饮食..."></Input>
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
            <div style="display: inline">
            <InputNumber v-model="formValidate.drugfrequency" placeholder="请填写用药次数"></InputNumber>次
            </div>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="如厕次数" prop="defcationnum">
            <div style="display: inline">
            <InputNumber v-model="formValidate.defcationnum" placeholder="请填写如厕次数"></InputNumber>次
            </div>
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
            <InputNumber v-model="formValidate.workhours" placeholder="请填写工作时长"></InputNumber>
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
            <InputNumber v-model="formValidate.sleephours" placeholder="请填写睡眠时长"></InputNumber>
          </FormItem>
        </Col>
      </Row>


      <Row>
        <Col span="12">
          <FormItem label="体温" prop="animalheat">
            <div style="display: inline">
            <InputNumber v-model="formValidate.animalheat" placeholder="请填写体温"></InputNumber>°C
            </div>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="气温" prop="weather">
            <div style="display: inline">
            <InputNumber v-model="formValidate.weather" placeholder="请填写气温"></InputNumber>°C
            </div>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="饮水量" prop="waternum">
        <div style="display: inline">
        <InputNumber v-model="formValidate.waternum" placeholder="请填写饮水量"></InputNumber>ml
        </div>
      </FormItem>
      <FormItem label="穿衣情况" prop="dress">
        <Input v-model="formValidate.dress" placeholder="请填写穿衣情况"></Input>
      </FormItem>
      <FormItem label="症状" prop="Symptom">
        <Input v-model="formValidate.Symptom" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写症状..."></Input>
      </FormItem>

      <FormItem label="大便形态" prop="stoolform">
        <Input v-model="formValidate.stoolform" placeholder="请填写大便形态"></Input>
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
  import {URI} from '../../../constants/uri'
  import axios from 'axios'
  import Unix from '@/utils/Unix'
  export default {
    components:{
      Bartitle,
      Unix,
    },
    mounted() {
    },
    data(){
      return{
        formValidate: {
          starttime:new Date(),
          endtime:new Date(),
          Diagnosistime:new Date(),
          hospital: '',
          druginfo: '',
          Department: '',
          clinicdedoctor: '',
          recovery: '',
          repast: '',
          Diagnosis: '',

          drugbumber: '',
          drugfrequency: 0,


          watertype: '',
          workhours:0,
          appetite: '',
          sleephours: 0,
          animalheat: 0,
          weather: 0,
          defcationnum: 0,
          waternum: 0,
          Symptom: '',
          stoolform: '',
          remark1: '',
          remark2: '',
          dress: '',

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
                starttime: Unix.unixToDate(this.formValidate.starttime),
                endtime: Unix.unixToDate(this.formValidate.endtime),
                cinichospital: this.formValidate.hospital,
                diagnose: this.formValidate.Diagnosis,
                diagnosistime: Unix.unixToDate(this.formValidate.Diagnosistime),
                clinicdepartment: this.formValidate.Department,
                clinicdedoctor : this.formValidate.clinicdedoctor,
                recovery: this.formValidate.recovery,
                remark : this.formValidate.remark1,
                symptom: this.formValidate.Symptom,
                drug: this.formValidate.druginfo,
                drugnum: this.formValidate.drugbumber,
                drugfrequency : this.formValidate.drugfrequency,
                dress: this.formValidate.dress,
                appetite: this.formValidate.appetite,
                watertype: this.formValidate.watertype,
                waternum: this.formValidate.waternum,
                workhours: this.formValidate.workhours,
                weather: this.formValidate.weather,
                animalheat: this.formValidate.animalheat,
                sleephours: this.formValidate.sleephours,
                remark2: this.formValidate.remark2,
                stoolform: this.formValidate.stoolform,
                defcationnum: this.formValidate.defcationnum,
                repast: this.formValidate.repast,
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
