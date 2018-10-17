<template>
  <div>
    <Bartitle mytitle="个人基本信息"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

      <Card title="基本信息" :padding="0" shadow style="width: 100%;">

        <Row>
          <Col span="12">
            <FormItem label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请填写姓名"></Input>
            </FormItem>
          </Col>

          <Col span="12">
            <FormItem label="性别" prop="gender">
              <RadioGroup v-model="formValidate.gender">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="身份证号" prop="idnumber">
              <Input v-model="formValidate.idnumber" placeholder="请填写身份证号"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="年龄" prop="age">
              <Input v-model="formValidate.age" placeholder="请填写年龄"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="出生日期">

              <FormItem prop="birth_day">
                <DatePicker type="date" placeholder="选择日期" v-model="formValidate.birth_day"></DatePicker>
              </FormItem>

            </FormItem>

          </Col>

          <Col span="12">
            <FormItem label="民族" prop="Nation">
              <Select v-model="formValidate.Nation" placeholder="请选择民族">
                <Option value="汉族">汉族</Option>
                <Option value="布依族">布依族</Option>
                <Option value="壮族">壮族</Option>
                <Option value="苗族">苗族</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="婚姻状况" prop="Maritalstatus">
              <Select v-model="formValidate.Maritalstatus" placeholder="请选择婚姻状况">
                <Option value="未婚">未婚</Option>
                <Option value="已婚">已婚</Option>
                <Option value="离异">离异</Option>
                <Option value="丧偶">丧偶</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="工作单位" prop="workunit">
              <Input v-model="formValidate.workunit" placeholder="请填写工作单位"></Input>
            </FormItem>

          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="职业类型" prop="Careertype">
              <Select v-model="formValidate.Careertype" placeholder="请选择职业类型">
                <Option value="计算机类">计算机类</Option>
                <Option value="经营/管理类">经营/管理类</Option>
                <Option value="财务类">财务类</Option>
                <Option value="销售/业务类">销售/业务类</Option>
                <Option value="市场类">市场类</Option>
                <Option value="秘书类">秘书类</Option>
                <Option value="设计类">设计类</Option>
                <Option value="客户服务类">客户服务类</Option>
                <Option value="行政/人事/培训类">行政/人事/培训类</Option>
                <Option value="文职类">文职类</Option>
                <Option value="工业/工厂类">工业/工厂类</Option>
                <Option value="后勤/服务类">后勤/服务类</Option>
                <Option value="电子/通讯类专业人员">电子/通讯类专业人员</Option>
                <Option value="机械专业人员">机械专业人员</Option>
                <Option value="房地产/建筑专业人员">房地产/建筑专业人员</Option>
                <Option value="金融/经济专业人员">金融/经济专业人员</Option>
                <Option value="文教体卫/法律专业人员">文教体卫/法律专业人员</Option>
                <Option value="其他专业人员">其他专业人员</Option>

              </Select>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="文化程度" prop="DegreeofEducation">
              <Select v-model="formValidate.DegreeofEducation" placeholder="请选择文化程度">
                <Option value="小学">小学</Option>
                <Option value="初中">初中</Option>
                <Option value="高中">高中</Option>
                <Option value="专科">专科</Option>
                <Option value="本科">本科</Option>
                <Option value="硕士研究生">硕士研究生</Option>
                <Option value="博士研究生">博士研究生</Option>
                <Option value="博士后">博士后</Option>
              </Select>
            </FormItem>

          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="电话" prop="phone">
              <Input v-model="formValidate.phone" placeholder="请填写联系电话"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="医疗支付" prop="paytype">
              <Select v-model="formValidate.paytype" placeholder="请选择医疗支付方式">
                <Option value="新农合">新农合</Option>
                <Option value="省医保">省医保</Option>
                <Option value="市医保">市医保</Option>
                <Option value="职工医保">职工医保</Option>
                <Option value="铁路医保">铁路医保</Option>
                <Option value="其他">其他</Option>
              </Select>
            </FormItem>

          </Col>
        </Row>


        <FormItem label="地区" prop="area">
          <Cascader :data="data" v-model="formValidate.area" placeholder="请选择地区" size="small"></Cascader>
        </FormItem>


        <FormItem label="街道地址" prop="Street">
          <Input v-model="formValidate.Street" placeholder="请输入街道地址"></Input>
        </FormItem>


        <Row>
          <Col span="12">

            <FormItem label="电子邮箱" prop="email">
              <Input v-model="formValidate.email" placeholder="请输入电子邮箱"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="家庭背景" prop="frequency">
              <Input v-model="formValidate.frequency" placeholder="请输入家庭背景"></Input>
            </FormItem>

          </Col>
        </Row>
        <FormItem label="单位" prop="contactworkunit">
          <Input v-model="formValidate.contactworkunit" placeholder="请填写单位"></Input>
        </FormItem>


        <Row>
          <Col span="12">

            <FormItem label="联系人" prop="contacter">
              <Input v-model="formValidate.contacter" placeholder="请输入联系人"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="联系电话" prop="contactphone">
              <Input v-model="formValidate.contactphone" placeholder="联系人电话"></Input>
            </FormItem>

          </Col>
        </Row>


        <Row>
          <Col span="12">

            <FormItem label="身高" prop="height">
              <Input v-model="formValidate.height" placeholder="请输入身高"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="体重" prop="weight">
              <Input v-model="formValidate.weight" placeholder="请输入体重"></Input>
            </FormItem>

          </Col>
        </Row>

        <Row>
          <Col span="12">

            <FormItem label="腰围" prop="waistline">
              <Input v-model="formValidate.waistline" placeholder="请输入腰围"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="胸围" prop="bust">
              <Input v-model="formValidate.bust" placeholder="请输入胸围"></Input>
            </FormItem>
          </Col>
        </Row>


        <Row>
          <Col span="12">

            <FormItem label="臀围" prop="hipline">
              <Input v-model="formValidate.hipline" placeholder="请输入臀围"></Input>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="血型" prop="Bloodtype">
              <Select v-model="formValidate.Bloodtype" placeholder="请选择血型">
                <Option value="A型">A型</Option>
                <Option value="B型">B型</Option>
                <Option value="O型">O型</Option>
                <Option value="AB型">AB型</Option>
                <Option value="未知">未知</Option>

              </Select>
            </FormItem>

          </Col>
        </Row>

        <FormItem label="血压" prop="bloodpressure">
          <Input v-model="formValidate.bloodpressure" placeholder="请输入血压"></Input>
        </FormItem>


        <Row>
          <FormItem label="传染病史" prop="historyinfection">
            <Input v-model="formValidate.historyinfection" placeholder="请填写传染病史"></Input>
          </FormItem>


          <Col span="12">
            <FormItem label="药物过敏史1" prop="drugallergy1">
              <Select v-model="formValidate.drugallergy1" placeholder="请选择药物过敏史">
                <Option value="青霉素">青霉素</Option>
                <Option value="链霉素">链霉素</Option>
                <Option value="磺胺类">磺胺类</Option>
                <Option value="普鲁卡因">普鲁卡因</Option>
                <Option value="破伤风抗毒素">破伤风抗毒素</Option>
                <Option value="细胞色素丙">细胞色素丙</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="药物过敏史2" prop="drugallergy2">
              <Select v-model="formValidate.drugallergy2" placeholder="请选择药物过敏史">
                <Option value="青霉素">青霉素</Option>
                <Option value="链霉素">链霉素</Option>
                <Option value="磺胺类">磺胺类</Option>
                <Option value="普鲁卡因">普鲁卡因</Option>
                <Option value="破伤风抗毒素">破伤风抗毒素</Option>
                <Option value="细胞色素丙">细胞色素丙</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="既往史(疾病)1" prop="Pasthistory1">
              <Select v-model="formValidate.Pasthistory1" placeholder="请选择既往史">
                <Option value="哮喘">哮喘</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="糖尿病">糖尿病</Option>
                <Option value="肝病">肝病</Option>
                <Option value="肾病">肾病</Option>
                <Option value="甲亢">甲亢</Option>
                <Option value="甲减">甲减</Option>
                <Option value="痛风">痛风</Option>
                <Option value="偏头痛">偏头痛</Option>
                <Option value="类风湿性关节炎">类风湿性关节炎</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="日期" prop="Pasthistory_day1">
              <DatePicker v-model="formValidate.Pasthistory_day1" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>


        <Row>
          <Col span="12">
            <FormItem label="既往史(疾病)2" prop="Pasthistory2">
              <Select v-model="formValidate.Pasthistory2" placeholder="请选择既往史">
                <Option value="哮喘">哮喘</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="糖尿病">糖尿病</Option>
                <Option value="肝病">肝病</Option>
                <Option value="肾病">肾病</Option>
                <Option value="甲亢">甲亢</Option>
                <Option value="甲减">甲减</Option>
                <Option value="痛风">痛风</Option>
                <Option value="偏头痛">偏头痛</Option>
                <Option value="类风湿性关节炎">类风湿性关节炎</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="日期" prop="Pasthistory_day2">
              <DatePicker v-model="formValidate.Pasthistory_day2" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="外伤及手术史" prop="operation1">
              <Select v-model="formValidate.operation1" placeholder="请选择外伤及手术史">
                <Option value="胸腔">胸腔</Option>
                <Option value="腹腔">腹腔</Option>
                <Option value="头部">头部</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="日期" prop="operationdate1">
              <DatePicker v-model="formValidate.operationdate1" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="外伤及手术史" prop="operation2">
              <Select v-model="formValidate.operation2" placeholder="请选择外伤及手术史">
                <Option value="胸腔">胸腔</Option>
                <Option value="腹腔">腹腔</Option>
                <Option value="头部">头部</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="日期" prop="operationdate2">
              <DatePicker v-model="formValidate.operationdate2" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="输血" prop="transfusion1">
              <Input v-model="formValidate.transfusion1" placeholder="请填写输血量"></Input>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="输血日期" prop="transfusiondate1">
              <DatePicker v-model="formValidate.transfusiondate1" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="输血" prop="transfusion2">
              <Input v-model="formValidate.transfusion2" placeholder="请填写输血量"></Input>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="输血日期" prop="transfusiondate2">
              <DatePicker v-model="formValidate.transfusiondate2" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

      </Card>

      <Card title="家族病史" :padding="0" shadow style="width: 100%;">

        <Row>
          <Col span="12">
            <FormItem label="父亲" prop="father">
              <Select v-model="formValidate.father" placeholder="请选择家族病史">
                <Option value="糖尿病">糖尿病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="血友病">血友病</Option>
                <Option value="哮喘">哮喘</Option>
                <Option value="精神病">精神病</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="母亲" prop="mother">
              <Select v-model="formValidate.mother" placeholder="请选择家族病史">
                <Option value="糖尿病">糖尿病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="血友病">血友病</Option>
                <Option value="哮喘">哮喘</Option>
                <Option value="精神病">精神病</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="兄弟姐妹" prop="Brothersandsisters">
              <Select v-model="formValidate.Brothersandsisters" placeholder="请选择家族病史">
                <Option value="糖尿病">糖尿病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="血友病">血友病</Option>
                <Option value="哮喘">哮喘</Option>
                <Option value="精神病">精神病</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="子女" prop="children">
              <Select v-model="formValidate.children" placeholder="请选择家族病史">
                <Option value="糖尿病">糖尿病</Option>
                <Option value="高血压">高血压</Option>
                <Option value="冠心病">冠心病</Option>
                <Option value="血友病">血友病</Option>
                <Option value="哮喘">哮喘</Option>
                <Option value="精神病">精神病</Option>
                <Option value="其他">其他</Option>
                <Option value="不确定">不确定</Option>

              </Select>
            </FormItem>
          </Col>
        </Row>
      </Card>


      <Card title="生活环境" :padding="0" shadow style="width: 100%;">

        <Row>
          <Col span="12">
            <FormItem label="住房类型" prop="housingtype">
              <Select v-model="formValidate.housingtype" placeholder="请选择住房类型">
                <Option value="商品房">商品房</Option>
                <Option value="廉租房">廉租房</Option>
                <Option value="集资房">集资房</Option>
                <Option value="花园洋房">花园洋房</Option>
                <Option value="其他">其他</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="楼层" prop="floor">
              <Select v-model="formValidate.floor" placeholder="请选择楼层">
                <Option value="1-10层">1-10层</Option>
                <Option value="11-20层">11-20层</Option>
                <Option value="21-30层">21-30层</Option>
                <Option value="30层以上">30层以上</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="住房位置" prop="postion">
              <Select v-model="formValidate.postion" placeholder="请选择住房位置">
                <Option value="市中心">市中心</Option>
                <Option value="城郊区">城郊区</Option>
                <Option value="农村">农村</Option>
                <Option value="其他">其他</Option>
              </Select>
            </FormItem>
          </Col>

        </Row>

        <FormItem label="备注" prop="remark">
          <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="填写备注信息..."></Input>
        </FormItem>


      </Card>


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
        data: [{
          value: '贵州',
          label: '贵州',
          children: [
            {
              value: '遵义',
              label: '遵义',
              children: [
                {
                  value: '汇川区',
                  label: '汇川区',
                },
                {
                  value: '红花岗区',
                  label: '红花岗区',
                }
              ]
            },
            {
              value: '贵阳',
              label: '贵阳',
              children: [
                {
                  value: '云岩区',
                  label: '云岩区',
                },
                {
                  value: '南明区',
                  label: '南明区',
                }
              ]
            }
          ],
        }],

        formValidate: {
          name: '',
          idnumber: '',
          age: '',
          workunit: '',
          phone: '',
          Street: '',
          info: '',
          contactphone: '',
          contacter: '',
          Nation: '',
          gender: '',
          birth_day: new Date(),
          Maritalstatus: '',
          Careertype: '',
          DegreeofEducation: '',
          paytype: '',
          Bloodtype: '',
          remark: '',
          email: '',
          frequency: '',
          waistline: '',
          Pasthistory1: '',
          Pasthistory2: '',
          Pasthistory_day1:new Date(),
          Pasthistory_day2: new Date(),
          father: '',
          mother: '',
          Brothersandsisters: '',
          housingtype: '',
          postion: '',
          floor: '',
          historyinfection: '',
          transfusion1: '',
          transfusiondate1:new Date(),
          transfusion2: '',
          transfusiondate2:new Date(),
          area: [],
          operation1: '',
          operationdate1:new Date(),
          operation2: '',
          operationdate2:new Date(),
          bust: '',
          contactworkunit: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          idnumber: [
            {required: true, message: '身份证号不能为空', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '年龄不能为空', trigger: 'blur'}
          ],
          workunit: [
            {required: true, message: '工作单位不能为空', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '联系电话不能为空', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          info: [
            {required: true, message: '用药信息不能为空', trigger: 'blur'}
          ],

          contacter: [
            {required: true, message: '联系人不能为空', trigger: 'blur'}
          ],
          contactphone: [
            {required: true, message: '联系人电话不能为空', trigger: 'blur'}
          ],
          Nation: [
            {required: true, message: '请选择民族', trigger: 'change'}
          ],
          Maritalstatus: [
            {required: true, message: '请选择婚姻状况', trigger: 'change'}
          ],
          Careertype: [
            {required: true, message: '请选择职业类型', trigger: 'change'}
          ],
          DegreeofEducation: [
            {required: true, message: '请选择文化程度', trigger: 'change'}
          ],
          paytype: [
            {required: true, message: '请选择医疗支付方式', trigger: 'change'}
          ],
          Bloodtype: [
            {required: true, message: '请选择血型', trigger: 'change'}
          ],

          birth_day: [
            {required: true, type: 'date', message: '请选择出生日期', trigger: 'change'}
          ],


        }
      }
    },

    computed: {
      provincesName: function () {
        var provinceName = {};
        for (var i in addrobj) {
          provinceName[i] = addrname[i];
        }
        return provinceName
      },
      citysName: function () {
        var cityName = {};
        for (var i in addrobj[this.province]) {
          cityName[i] = addrname[i]
        }
        return cityName
      },
      countysName: function () {
        var countyName = {};
        for (var i in addrobj[this.province][this.city]) {
          var county = addrobj[this.province][this.city][i];
          countyName[county] = addrname[county]
        }
        return countyName
      },
    },
    watch: {
      'province': function (n, o) {
        if (n != o) this.city = Object.getOwnPropertyNames(this.citysName)[0];
      },
      'city': function (n, o) {
        if (n != o) this.county = Object.getOwnPropertyNames(this.countysName)[0];
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
            axios.post(URI+'/api/HealthSys/UpdateUser', {
              patientno:JSON.parse(sessionStorage.getItem("patientno")),
              username: '',
              password: '',
              name: this.formValidate.name,
              sex: this.formValidate.sex,
              cardno: this.formValidate.idnumber,
              age: this.formValidate.age,
              nation: this.formValidate.nation,
              birthday: Unix.unixToDate(this.formValidate.birth_day),
              marriage: this.formValidate.Maritalstatus,
              workunit: this.formValidate.workunit,

              province: this.formValidate.area[0],
              city: this.formValidate.area[1],
              county: this.formValidate.area[2],

              address: this.formValidate.Street,
              phone: this.formValidate.phone,
              culture: this.formValidate.DegreeofEducation,
              profession: this.formValidate.Careertype,
              email: this.formValidate.email,
              medicalpayers: this.formValidate.paytype,
              contact: this.formValidate.contacter,
              contactphone: this.formValidate.contactphone,
              familybackground: this.formValidate.frequency,
              contactworkunit: this.formValidate.contactworkunit,
              height: this.formValidate.height,
              weight: this.formValidate.weight,
              bust: this.formValidate.bust,
              waist: this.formValidate.waistline,
              hipline: this.formValidate.hipline,
              bloodtype: this.formValidate.Bloodtype,
              bloodpressure: this.formValidate.bloodpressure,
              drugallergy1: this.formValidate.drugallergy1,
              drugallergy2: this.formValidate.drugallergy2,
              pastillnesses1: this.formValidate.Pasthistory1,
              pidate1: Unix.unixToDate(this.formValidate.Pasthistory_day1),
              pastillnesses2: this.formValidate.Pasthistory2,
              pidate2: Unix.unixToDate(this.formValidate.Pasthistory_day2),

              historyinfection:this.formValidate.historyinfection,

              operation1:this.formValidate.operation1,
              operationdate1:Unix.unixToDate(this.formValidate.operationdate1),
              operation2:this.formValidate.operation2,
              operationdate2:Unix.unixToDate(this.formValidate.operationdate2),

              transfusion1:this.formValidate.transfusion1,
              transfusiondate1:Unix.unixToDate(this.formValidate.transfusiondate1),
              transfusion2:this.formValidate.transfusion2,
              transfusiondate2:Unix.unixToDate(this.formValidate.transfusiondate2),

              fatherhistory: this.formValidate.father,
              motherhistory: this.formValidate.mother,
              brotherssistershistory: this.formValidate.Brothersandsisters,
              childrenhistory: this.formValidate.children,
              housingtypes: this.formValidate.housingtype,
              floor: this.formValidate.floor,
              housinglocation: this.formValidate.postion,
              remark: this.formValidate.remark
            }).then((res) => {
              this.$Spin.hide();
              console.log(res)
              if (res.data.msgCode == 0) {
                this.tishi = "更新信息成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                setTimeout(function () {
                  this.showRegister = false
                  this.showLogin = true
                  this.showTishi = false
                }.bind(this), 1000)
              } else if (res.data.msgCode == -1) {
                this.$Message.error(res.data.msg);
              } else {
                this.$Message.error('更新信息失败');
              }
            }).catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            })


          } else {
            this.$Message.error('请确完成所有必填信息!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    },
  }
</script>

<style scoped>

  Form {

    color: cornflowerblue;
    background-color: white;
    margin-right: 15px;
    margin-left: 15px;
  }
</style>
