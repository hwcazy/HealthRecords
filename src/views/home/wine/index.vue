<template>
  <div>
    <Bartitle mytitle="饮酒"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Row>
        <Col span="12">
          <FormItem label="酒类型" prop="type">
            <Select v-model="formValidate.type" placeholder="请选择酒类型">
              <Option value="白酒">白酒</Option>
              <Option value="啤酒">啤酒</Option>
              <Option value="红酒">红酒</Option>
              <Option value="泡酒">泡酒</Option>
              <Option value="其他">其他</Option>
            </Select>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="饮酒次数" prop="count">
            <Input v-model="formValidate.count" placeholder="请填写入饮酒次数"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="饮酒时间" prop="time">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="饮酒量" prop="amount">
            <Input v-model="formValidate.amount" placeholder="请填写饮酒量"></Input>
          </FormItem>
        </Col>
      </Row>



      <Row>
        <Col span="12">
          <FormItem label="酒后反应" prop="reflect">
            <Input v-model="formValidate.reflect" placeholder="请填写酒后反应"></Input>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="饮酒度数" prop="Degrees">
            <Input v-model="formValidate.Degrees" placeholder="请填写饮酒度数"></Input>
          </FormItem>
        </Col>
      </Row>


      <FormItem label="饮酒品牌" prop="brand">
        <Input v-model="formValidate.brand" placeholder="请填写饮酒品牌"></Input>
      </FormItem>


      <FormItem label="餐饮情况" prop="Diet">
        <Input v-model="formValidate.Diet" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写餐饮情况..."></Input>
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
            type: '',
            count: '',
            time: new Date(),
            amount: '',
            reflect: '',
            Degrees: '',
            brand: '',
            Diet: '',
            remark: '',



          },
          ruleValidate: {
            type: [
              { required: true, type: 'string', message: '请选择酒类型', trigger: 'change' }
            ],

            count: [
              { required: true, message: '饮酒次数不能为空', trigger: 'blur' }
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
              axios.post(URI+'/api/HealthSys/DrinkRecord',
                {
                  patientno:JSON.parse(sessionStorage.getItem("patientno")),
                  winetype: this.formValidate.type,
                  drinkingtime: this.formValidate.time,
                  drinkingnum: this.formValidate.count,
                  drinkingcapacity: this.formValidate.amount,
                  drinkingreaction: this.formValidate.reflect,
                  catering: this.formValidate.Diet,
                  drinkingdegree: this.formValidate.Degrees,
                  drinkingbrand: this.formValidate.brand,
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
