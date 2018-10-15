<template>
  <div>
    <Bartitle mytitle="感冒"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

      <FormItem label="开始时间">
        <Row>
          <Col span="11">
            <FormItem prop="start_date">
              <DatePicker type="date" placeholder="选择日期" v-model="formValidate.start_date"></DatePicker>
            </FormItem>
          </Col>

        </Row>
      </FormItem>
      <FormItem label="结束时间">
        <Row>
          <Col span="11">
            <FormItem prop="end_date">
              <DatePicker type="date" placeholder="选择日期" v-model="formValidate.end_date"></DatePicker>
            </FormItem>
          </Col>

        </Row>
      </FormItem>

      <FormItem label="就诊医院" prop="hospital">
        <Input v-model="formValidate.hospital" placeholder="请填写就诊医院"></Input>
      </FormItem>
      <FormItem label="就诊科室" prop="Department">
        <Input v-model="formValidate.Department" placeholder="请填写就诊科室"></Input>
      </FormItem>
      <FormItem label="就诊医生" prop="doctor">
        <Input v-model="formValidate.doctor" placeholder="请填写就诊医生"></Input>
      </FormItem>

      <FormItem label="就诊时间">
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

      <FormItem label="是否痊愈" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="是">是</Radio>
          <Radio label="否">否</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="诊断" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写诊断信息..."></Input>
      </FormItem>
      <FormItem label="备注" prop="remark">
        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="填写备注信息..."></Input>
      </FormItem>


      <FormItem label="症状" prop="Symptom">
        <Select v-model="formValidate.Symptom" placeholder="请选择症状">
          <Option value="头痛">头痛</Option>
          <Option value="发烧">发烧</Option>
          <Option value="流鼻涕">流鼻涕</Option>
        </Select>
      </FormItem>


      <FormItem label="用药信息" prop="druginfo">
        <Input v-model="formValidate.druginfo" placeholder="请输入用药信息"></Input>
      </FormItem>
      <FormItem label="用药数量" prop="count">
        <Input v-model="formValidate.count" placeholder="请输入用药数量"></Input>
      </FormItem>
      <FormItem label="用药次数" prop="frequency">
        <Input v-model="formValidate.frequency" placeholder="请输入用药次数"  ></Input>
      </FormItem>

      <FormItem label="饮水量" prop="waternum">
        <Input v-model="formValidate.waternum" placeholder="请填写饮水量"></Input>
      </FormItem>

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
          <FormItem label="饭量" prop="Mealamount">
            <Input v-model="formValidate.Mealamount" placeholder="请填写饭量"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="睡眠时长(h)" prop="sleeptime">
            <Input v-model="formValidate.sleeptime" placeholder="请填写睡眠时长"></Input>
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
    components: {
      Bartitle
    },
    mounted() {
    },
    data() {
      return {
        formValidate: {
          hospital: '',
          Department: '',
          doctor: '',
          druginfo: '',
          count: '',
          frequency: '',
          Symptom: '',
          gender: '',
          start_date: '',
          end_date: '',
          date: '',
          time: '',
          remark: '',
          desc: '',
          waternum: '',
          watertype: '',
          workhours: '',
          weather: '',
          animalheat: '',
          appetite: '',
          sleephours: '',
        },
        ruleValidate: {
          hospital: [
            {required: true, message: '就诊医院不能为空', trigger: 'blur'}
          ],
          Department: [
            {required: true, message: '就诊科室不能为空', trigger: 'blur'}
          ],
          doctor: [
            {required: true, message: '就诊医生不能为空', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请选择是否痊愈', trigger: 'change'}
          ],
          druginfo: [
            {required: true, message: '用药信息不能为空', trigger: 'blur'}
          ],
          count: [
            {required: true, message: '用药数量不能为空', trigger: 'blur'}
          ],
          frequency: [
            {required: true, message: '用药次数不能为空', trigger: 'blur'}
          ],

          Symptom: [
            {required: true, message: '请选择症状', trigger: 'change'}
          ],


          start_date: [
            {required: true, type: 'date', message: '请选择开始时间', trigger: 'change'}
          ],
          end_date: [
            {required: true, type: 'date', message: '请选择结束时间', trigger: 'change'}
          ],
          date: [
            {required: true, type: 'date', message: '请选择就诊日期', trigger: 'change'}
          ],
          time: [
            {required: true, type: 'string', message: '请选择就诊时间', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写诊断信息', trigger: 'blur'},
            {type: 'string', min: 20, message: '诊断信息不少于20个字', trigger: 'blur'}
          ],
          remark: [
            {required: true, message: '请填写备注信息', trigger: 'blur'},
            {type: 'string', min: 20, message: '备注信息不少于20个字', trigger: 'blur'}
          ]
        }
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
            axios.post(URI + '/api/HealthSys/ColdRecord',
              {
                patientno: JSON.parse(sessionStorage.getItem("patientno")),
                starttime: this.formValidate.start_date,
                endtime: this.formValidate.end_date,
                clinichospital: this.formValidate.hospital,
                diagnose: this.formValidate.desc,
                diagnosistime: "",
                clinicdepartment: this.formValidate.Department,
                clinicdeDoctor: this.formValidate.Doctor,
                recovery: this.formValidate.recovery,
                remark: this.formValidate.remark,
                symptom: this.formValidate.Symptom,
                drug: this.formValidate.druginfo,
                drugnum: this.formValidate.count,
                drugfrequency: this.formValidate.frequency,
                dress: "",
                appetite: this.formValidate.appetite,
                watertype: this.formValidate.watertype,
                waternum: this.formValidate.waternum,
                workhours: this.formValidate.workhours,
                weather: this.formValidate.weather,
                animalheat: this.formValidate.animalheat,
                sleephours: this.formValidate.sleephours,
                remark2: "",

              }).then((res) => {
              this.$Spin.hide();
              console.log(res.data)
              this.item = res.data
              if (res.data.msgCode == 0) {
                this.$Message.success('信息录入成功!');
                setTimeout(function () {
                  this.$router.push({name: 'statistics'})
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
      handleReset(name) {
        this.$refs[name].resetFields();
      }

    }

  }
</script>

<style scoped>

  Form {
    color: cornflowerblue;
    background-color: white;
  }

</style>
