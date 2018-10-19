<template>
  <div>
    <Bartitle mytitle="睡眠"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Row>

        <Col span="12">
          <FormItem label="起床时间" prop="Wakingtime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.Wakingtime"></TimePicker>
          </FormItem>
        </Col>



        <Col span="12">
          <FormItem label="上床时间" prop="Bedtime">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.Bedtime"></TimePicker>
          </FormItem>
        </Col>
      </Row>



      <Row>
        <Col span="12">
          <FormItem label="入睡时间" prop="Timetofallasleep">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.Timetofallasleep"></TimePicker>
          </FormItem>
        </Col>




        <Col span="12">
          <FormItem label="入眠时长(h)" prop="Longsleeptime">
            <InputNumber v-model="formValidate.Longsleeptime" placeholder="请填写入眠时长"></InputNumber>
          </FormItem>
        </Col>
      </Row>



      <Row>
        <Col span="12">
          <FormItem label="睡眠深浅" prop="Sleepdepth">
            <Select v-model="formValidate.Sleepdepth" placeholder="请选择睡眠深浅">
              <Option value="深睡眠">深睡眠</Option>
              <Option value="浅睡眠">浅睡眠</Option>
            </Select>
          </FormItem>
        </Col>



        <Col span="12">
          <FormItem label="工作时长(h)" prop="Longworkingtime">
            <InputNumber v-model="formValidate.Longworkingtime" placeholder="请填写工作时长"></InputNumber>
          </FormItem>
        </Col>
      </Row>


      <Row>
        <Col span="12" >
          <FormItem label="起夜次数" prop="urinate" style="width: 60px">
            <div style="display: inline">
            <InputNumber v-model="formValidate.urinate" placeholder="请填写起夜次数"></InputNumber>
              次
            </div>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="情绪" prop="emotion">
            <Select v-model="formValidate.emotion" placeholder="请选择情绪">
              <Option value="高兴">高兴</Option>
              <Option value="平和">平和</Option>
              <Option value="生气">生气</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>


      <Row>
        <Col span="12">
          <FormItem label="是否饮食" prop="isdiet">
            <Select v-model="formValidate.isdiet" placeholder="请选择是否饮食">
              <Option value="是">是</Option>
              <Option value="否">否</Option>
            </Select>
          </FormItem>

        </Col>

        <Col span="12">
          <FormItem label="是否服药" prop="isTakemedicine">
            <Select v-model="formValidate.isTakemedicine" placeholder="请选择是否服药">
              <Option value="是">是</Option>
              <Option value="否">否</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>

      <FormItem label="是否饮酒" prop="isWine">
        <Select v-model="formValidate.isWine" placeholder="请选择是否饮酒">
          <Option value="是">是</Option>
          <Option value="否">否</Option>
        </Select>
      </FormItem>

      <FormItem label="睡前活动" prop="Bedtimeactivity">
        <Input v-model="formValidate.Bedtimeactivity" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写睡前活动..."></Input>
      </FormItem>

      <FormItem label="睡眠情况" prop="sleepquality">
        <Input v-model="formValidate.sleepquality" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写睡眠情况..."></Input>
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
            Wakingtime: new Date(),
            Bedtime: new Date(),
            Timetofallasleep: new Date(),
            Longsleeptime:0,
            Sleepdepth: '',
            Longworkingtime: 0,
            urinate:0,
            emotion: '',
            isdiet: '',
            isTakemedicine: '',
            isWine: '',
            Bedtimeactivity: '',
            sleepquality: '',
            remark: '',

          },
          ruleValidate: {
            Wakingtime: [
              { required: true, type: 'string', message: '请选择起床时间', trigger: 'change' }
            ],
            Bedtime: [
              { required: true, type: 'string', message: '请选择上床时间', trigger: 'change' }
            ],
            Timetofallasleep: [
              { required: true, type: 'string', message: '请选择入睡时间', trigger: 'change' }
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
              axios.post(URI+'/api/HealthSys/SleepRecord',
                {
                  patientno:JSON.parse(sessionStorage.getItem("patientno")),
                  sleepquality: this.formValidate.sleepquality,
                  getuptime: this.formValidate.Wakingtime,
                  bedtime: this.formValidate.Bedtime,
                  approximatebedtime: this.formValidate.Timetofallasleep,
                  sleephours: this.formValidate.Longsleeptime,
                  sleepdepth: this.formValidate.Sleepdepth,
                  bedtimeactivities: this.formValidate.Bedtimeactivity,
                  workinghours: this.formValidate.Longworkingtime,
                  sentiment: this.formValidate.emotion,
                  takemedicine: this.formValidate.isTakemedicine,
                  sleepdrink: this.formValidate.isWine,
                  sleepdiet: this.formValidate.isdiet,
                  nightnum: this.formValidate.urinate,
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
              this.$Message.error('信息录入失败!');
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
