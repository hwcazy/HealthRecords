<template>
  <div>
    <Bartitle mytitle="个人基本信息"/>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

      <Card title="基本信息" :padding="0" shadow style="width: 100%; padding-right: 10px">

        <Row>
          <Col span="12">
            <FormItem label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请填写姓名"></Input>
            </FormItem>
          </Col>

          <Col span="12">
            <FormItem label="性别" prop="sex">
              <RadioGroup v-model="formValidate.sex">
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
              <div style="display: inline">
                <InputNumber v-model="formValidate.age" placeholder="请填写年龄" style="width: 60px;"></InputNumber>
                岁
              </div>
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

          </Col>
        </Row>

        <FormItem label="民族" prop="nation">
          <Select v-model="formValidate.nation" placeholder="请选择民族" size="large">
            <Option :value="item.id" v-for="(item,index) in items" :key="index">{{item.name}}</Option>
          </Select>
        </FormItem>


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
          <Cascader :data="data" v-model="formValidate.area" placeholder="请选择地区" size="large"></Cascader>
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
        <FormItem label="联系人单位" prop="contactworkunit">
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
              <div style="display: inline">
                <InputNumber v-model="formValidate.height" placeholder="请输入身高" style="width: 60px;"></InputNumber>
                cm
              </div>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="体重" prop="weight">
              <div style="display: inline">
                <InputNumber v-model="formValidate.weight" placeholder="请输入体重" style="width: 60px;"></InputNumber>
                kg
              </div>
            </FormItem>

          </Col>
        </Row>

        <Row>
          <Col span="12">

            <FormItem label="腰围" prop="waistline">
              <div style="display: inline">
                <InputNumber v-model="formValidate.waistline" placeholder="请输入腰围" style="width: 60px;"></InputNumber>
                cm
              </div>
            </FormItem>

          </Col>
          <Col span="12">
            <FormItem label="胸围" prop="bust">
              <div style="display: inline">
                <InputNumber v-model="formValidate.bust" placeholder="请输入胸围" style="width: 60px;"></InputNumber>
                cm
              </div>
            </FormItem>
          </Col>
        </Row>


        <Row>
          <Col span="12">

            <FormItem label="臀围" prop="hipline">
              <div style="display: inline">
                <InputNumber v-model="formValidate.hipline" placeholder="请输入臀围" style="width: 60px;"></InputNumber>
                cm
              </div>
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
          <div style="display: inline">
            <InputNumber v-model="formValidate.bloodpressure" placeholder="请输入血压"></InputNumber>
            mmHg
          </div>
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
              <div style="display: inline">
                <InputNumber v-model="formValidate.transfusion1" placeholder="请填写输血量"
                             style="width: 60px;"></InputNumber>
                ml
              </div>
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
              <div style="display: inline">
                <InputNumber v-model="formValidate.transfusion2" placeholder="请填写输血量"
                             style="width: 60px;"></InputNumber>
                ml
              </div>
            </FormItem>
          </Col>
          <Col span="12">

            <FormItem label="输血日期" prop="transfusiondate2">
              <DatePicker v-model="formValidate.transfusiondate2" type="date" placeholder="选择日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>

      </Card>

      <Card title="家族病史" :padding="0" shadow style="width: 100%;;margin-top: 10px; padding-right: 10px">

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

            <FormItem label="子女" prop="childrenhistory">
              <Select v-model="formValidate.childrenhistory" placeholder="请选择家族病史">
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


      <Card title="生活环境" :padding="0" shadow style="width: 100%;margin-top: 10px; padding-right: 10px">

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

        items: [{"id": "01", "name": "汉族"}, {"id": "02", "name": "蒙古族"}, {"id": "03", "name": "回族"},
          {"id": "04", "name": "藏族"}, {"id": "05", "name": "维吾尔族"}, {"id": "06", "name": "苗族"},
          {"id": "07", "name": "彝族"}, {"id": "08", "name": "壮族"}, {"id": "09", "name": "布依族"},
          {"id": "10", "name": "朝鲜族"}, {"id": "11", "name": "满族"}, {"id": "12", "name": "侗族"},
          {"id": "13", "name": "瑶族"}, {"id": "14", "name": "白族"}, {"id": "15", "name": "土家族"},
          {"id": "16", "name": "哈尼族"}, {"id": "17", "name": "哈萨克族"}, {"id": "18", "name": "傣族"},
          {"id": "19", "name": "黎族"}, {"id": "20", "name": "傈僳族"}, {"id": "21", "name": "佤族"},
          {"id": "22", "name": "畲族"}, {"id": "23", "name": "高山族"}, {"id": "24", "name": "拉祜族"},
          {"id": "25", "name": "水族"}, {"id": "26", "name": "东乡族"}, {"id": "27", "name": "纳西族"},
          {"id": "28", "name": "景颇族"}, {"id": "29", "name": "柯尔克孜族"}, {"id": "30", "name": "土族"},
          {"id": "31", "name": "达斡尔族"}, {"id": "32", "name": "仫佬族"}, {"id": "33", "name": "羌族"},
          {"id": "34", "name": "布朗族"}, {"id": "35", "name": "撒拉族"}, {"id": "36", "name": "毛难族"},
          {"id": "37", "name": "仡佬族"}, {"id": "38", "name": "锡伯族"}, {"id": "39", "name": "阿昌族"},
          {"id": "40", "name": "普米族"}, {"id": "41", "name": "塔吉克族"}, {"id": "42", "name": "怒族"},
          {"id": "43", "name": "乌孜别克族"}, {"id": "44", "name": "俄罗斯族"}, {"id": "45", "name": "鄂温克族"},
          {"id": "46", "name": "崩龙族"}, {"id": "47", "name": "保安族"}, {"id": "48", "name": "裕固族"},
          {"id": "49", "name": "京族"}, {"id": "50", "name": "塔塔尔族"}, {"id": "51", "name": "独龙族"},
          {"id": "52", "name": "鄂伦春族"}, {"id": "53", "name": "赫哲族"}, {"id": "54", "name": "门巴族"},
          {"id": "55", "name": "珞巴族"}, {"id": "56", "name": "基诺族"}],

        data: [{
          'value': '520000',
          'label': '贵州省',
          'children': [{
            'value': '520100',
            'label': '贵阳市',
            'children': [{
              'value': '520102',
              'label': '南明区'
            },
              {
                'value': '520103',
                'label': '云岩区'
              },
              {
                'value': '520111',
                'label': '花溪区'
              },
              {
                'value': '520112',
                'label': '乌当区'
              },
              {
                'value': '520113',
                'label': '白云区'
              },
              {
                'value': '520114',
                'label': '小河区'
              },
              {
                'value': '520121',
                'label': '开阳县'
              },
              {
                'value': '520122',
                'label': '息烽县'
              },
              {
                'value': '520123',
                'label': '修文县'
              },
              {
                'value': '520181',
                'label': '清镇市'
              }
            ]
          },
            {
              'value': '520200',
              'label': '六盘水市',
              'children': [{
                'value': '520201',
                'label': '钟山区'
              },
                {
                  'value': '520203',
                  'label': '六枝特区'
                },
                {
                  'value': '520221',
                  'label': '水城县'
                },
                {
                  'value': '520222',
                  'label': '盘　县'
                }
              ]
            },
            {
              'value': '520300',
              'label': '遵义市',
              'children': [{
                'value': '520302',
                'label': '红花岗区'
              },
                {
                  'value': '520303',
                  'label': '汇川区'
                },
                {
                  'value': '520321',
                  'label': '遵义县'
                },
                {
                  'value': '520322',
                  'label': '桐梓县'
                },
                {
                  'value': '520323',
                  'label': '绥阳县'
                },
                {
                  'value': '520324',
                  'label': '正安县'
                },
                {
                  'value': '520325',
                  'label': '道真仡佬族苗族自治县'
                },
                {
                  'value': '520326',
                  'label': '务川仡佬族苗族自治县'
                },
                {
                  'value': '520327',
                  'label': '凤冈县'
                },
                {
                  'value': '520328',
                  'label': '湄潭县'
                },
                {
                  'value': '520329',
                  'label': '余庆县'
                },
                {
                  'value': '520330',
                  'label': '习水县'
                },
                {
                  'value': '520381',
                  'label': '赤水市'
                },
                {
                  'value': '520382',
                  'label': '仁怀市'
                }
              ]
            },
            {
              'value': '520400',
              'label': '安顺市',
              'children': [{
                'value': '520402',
                'label': '西秀区'
              },
                {
                  'value': '520421',
                  'label': '平坝县'
                },
                {
                  'value': '520422',
                  'label': '普定县'
                },
                {
                  'value': '520423',
                  'label': '镇宁布依族苗族自治县'
                },
                {
                  'value': '520424',
                  'label': '关岭布依族苗族自治县'
                },
                {
                  'value': '520425',
                  'label': '紫云苗族布依族自治县'
                }
              ]
            },
            {
              'value': '522200',
              'label': '铜仁地区',
              'children': [{
                'value': '522201',
                'label': '铜仁市'
              },
                {
                  'value': '522222',
                  'label': '江口县'
                },
                {
                  'value': '522223',
                  'label': '玉屏侗族自治县'
                },
                {
                  'value': '522224',
                  'label': '石阡县'
                },
                {
                  'value': '522225',
                  'label': '思南县'
                },
                {
                  'value': '522226',
                  'label': '印江土家族苗族自治县'
                },
                {
                  'value': '522227',
                  'label': '德江县'
                },
                {
                  'value': '522228',
                  'label': '沿河土家族自治县'
                },
                {
                  'value': '522229',
                  'label': '松桃苗族自治县'
                },
                {
                  'value': '522230',
                  'label': '万山特区'
                }
              ]
            },
            {
              'value': '522300',
              'label': '黔西南布依族苗族自治州',
              'children': [{
                'value': '522301',
                'label': '兴义市'
              },
                {
                  'value': '522322',
                  'label': '兴仁县'
                },
                {
                  'value': '522323',
                  'label': '普安县'
                },
                {
                  'value': '522324',
                  'label': '晴隆县'
                },
                {
                  'value': '522325',
                  'label': '贞丰县'
                },
                {
                  'value': '522326',
                  'label': '望谟县'
                },
                {
                  'value': '522327',
                  'label': '册亨县'
                },
                {
                  'value': '522328',
                  'label': '安龙县'
                }
              ]
            },
            {
              'value': '522400',
              'label': '毕节地区',
              'children': [{
                'value': '522401',
                'label': '毕节市'
              },
                {
                  'value': '522422',
                  'label': '大方县'
                },
                {
                  'value': '522423',
                  'label': '黔西县'
                },
                {
                  'value': '522424',
                  'label': '金沙县'
                },
                {
                  'value': '522425',
                  'label': '织金县'
                },
                {
                  'value': '522426',
                  'label': '纳雍县'
                },
                {
                  'value': '522427',
                  'label': '威宁彝族回族苗族自治县'
                },
                {
                  'value': '522428',
                  'label': '赫章县'
                }
              ]
            },
            {
              'value': '522600',
              'label': '黔东南苗族侗族自治州',
              'children': [{
                'value': '522601',
                'label': '凯里市'
              },
                {
                  'value': '522622',
                  'label': '黄平县'
                },
                {
                  'value': '522623',
                  'label': '施秉县'
                },
                {
                  'value': '522624',
                  'label': '三穗县'
                },
                {
                  'value': '522625',
                  'label': '镇远县'
                },
                {
                  'value': '522626',
                  'label': '岑巩县'
                },
                {
                  'value': '522627',
                  'label': '天柱县'
                },
                {
                  'value': '522628',
                  'label': '锦屏县'
                },
                {
                  'value': '522629',
                  'label': '剑河县'
                },
                {
                  'value': '522630',
                  'label': '台江县'
                },
                {
                  'value': '522631',
                  'label': '黎平县'
                },
                {
                  'value': '522632',
                  'label': '榕江县'
                },
                {
                  'value': '522633',
                  'label': '从江县'
                },
                {
                  'value': '522634',
                  'label': '雷山县'
                },
                {
                  'value': '522635',
                  'label': '麻江县'
                },
                {
                  'value': '522636',
                  'label': '丹寨县'
                }
              ]
            },
            {
              'value': '522700',
              'label': '黔南布依族苗族自治州',
              'children': [{
                'value': '522701',
                'label': '都匀市'
              },
                {
                  'value': '522702',
                  'label': '福泉市'
                },
                {
                  'value': '522722',
                  'label': '荔波县'
                },
                {
                  'value': '522723',
                  'label': '贵定县'
                },
                {
                  'value': '522725',
                  'label': '瓮安县'
                },
                {
                  'value': '522726',
                  'label': '独山县'
                },
                {
                  'value': '522727',
                  'label': '平塘县'
                },
                {
                  'value': '522728',
                  'label': '罗甸县'
                },
                {
                  'value': '522729',
                  'label': '长顺县'
                },
                {
                  'value': '522730',
                  'label': '龙里县'
                },
                {
                  'value': '522731',
                  'label': '惠水县'
                },
                {
                  'value': '522732',
                  'label': '三都水族自治县'
                }
              ]
            }]
        }
        ],

        formValidate: {
          name: '',
          idnumber: '',
          age: 0,
          workunit: '',
          phone: '',
          Street: '',
          info: '',
          contactphone: '',
          contacter: '',
          nation: '',
          sex: '',
          birth_day: new Date(),
          Maritalstatus: '',
          Careertype: '',
          DegreeofEducation: '',
          paytype: '',
          Bloodtype: '',
          remark: '',
          email: '',
          frequency: '',
          province: "",
          city: "",
          county: "",
          Pasthistory1: '',
          Pasthistory2: '',
          Pasthistory_day1: new Date(),
          Pasthistory_day2: new Date(),
          father: '',
          mother: '',
          Brothersandsisters: '',
          housingtype: '',
          postion: '',
          floor: '',
          historyinfection: '',
          transfusion1: 0,
          transfusiondate1: new Date(),
          transfusion2: 0,
          transfusiondate2: new Date(),
          area: [],
          operation1: '',
          operationdate1: new Date(),
          operation2: '',
          operationdate2: new Date(),
          waistline: 0,
          bust: 0,
          height: 0,
          weight: 0,
          hipline: 0,
          bloodpressure: 0,
          drugallergy1: '',
          drugallergy2: '',
          contactworkunit: '',
          childrenhistory: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          idnumber: [
            {required: true, message: '身份证号不能为空', trigger: 'blur'}
          ],
          area: [
            {required: true,type: 'array', message: '请选择地区', trigger: 'blur'}
          ],
          age: [
            {required: true, type: 'number', message: '年龄不能为空', trigger: 'change'}
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
          nation: [
            {required: true, message: '请选择民族', trigger: 'blur'}
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

    computed:
      {
        provincesName: function () {
          var provinceName = {};
          for (var i in addrobj) {
            provinceName[i] = addrname[i];
          }
          return provinceName
        }
        ,
        citysName: function () {
          var cityName = {};
          for (var i in addrobj[this.province]) {
            cityName[i] = addrname[i]
          }
          return cityName
        }
        ,
        countysName: function () {
          var countyName = {};
          for (var i in addrobj[this.province][this.city]) {
            var county = addrobj[this.province][this.city][i];
            countyName[county] = addrname[county]
          }
          return countyName
        }
        ,
      }
    ,
    watch: {
      'province':

        function (n, o) {
          if (n != o) this.city = Object.getOwnPropertyNames(this.citysName)[0];
        }

      ,
      'city':

        function (n, o) {
          if (n != o) this.county = Object.getOwnPropertyNames(this.countysName)[0];
        }
    }
    ,
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Spin.show();
            setTimeout(() => {
              this.$Spin.hide();
            }, 3000);
            axios.post(URI + '/api/HealthSys/UpdateUser', {
              patientno: JSON.parse(sessionStorage.getItem("patientno")),
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
              pastillnesses3: "",
              pidate3: "",
              pastillnesses4: "",
              pidate4: "",
              pastillnesses5: "",
              pidate5: "",

              historyinfection: this.formValidate.historyinfection,

              operation1: this.formValidate.operation1,
              operationdate1: Unix.unixToDate(this.formValidate.operationdate1),
              operation2: this.formValidate.operation2,
              operationdate2: Unix.unixToDate(this.formValidate.operationdate2),
              operation3: "",
              operationdate3: "",

              transfusion1: this.formValidate.transfusion1,
              transfusiondate1: Unix.unixToDate(this.formValidate.transfusiondate1),
              transfusion2: this.formValidate.transfusion2,
              transfusiondate2: Unix.unixToDate(this.formValidate.transfusiondate2),

              fatherhistory: this.formValidate.father,
              motherhistory: this.formValidate.mother,
              brotherssistershistory: this.formValidate.Brothersandsisters,
              childrenhistory: this.formValidate.childrenhistory,
              housingtypes: this.formValidate.housingtype,
              floor: this.formValidate.floor,
              housinglocation: this.formValidate.postion,
              remark: this.formValidate.remark
            }).then((res) => {
              this.$Spin.hide();
              console.log(res)
              if (res.data.msgCode == 0) {
                this.$Message.success("更新信息成功");
                setTimeout(function () {
                  this.$router.push({name: 'personal'})
                }.bind(this), 50)
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
      }
      ,
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
    ,
  }
</script>

<style scoped>

  Form {

    color: cornflowerblue;
    background-color: #e8eaec;
    padding-right: 10px;
    padding-top: 10px;
    padding-left: 10px;
  }
</style>
