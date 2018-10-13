<template>
  <div class="wrap">
    555
  </div>
</template>
<script type="text/ecmascript-6">
  import systemNames from '@/jsons/systems.json'
  import {shadowCloneToNewJson} from "../../../../utils/clone";
    export default {
      props:{
            mymodal:[String,Boolean],
            childItem:[String,Boolean,Object],
            initData:[String,Boolean,Object,Number],
            title1:[String,Boolean,Object,Number],
      },
      mounted(){


      },
      data () {
        return {
          isOpen: this.mymodal,
          title:this.title1,
          formValidate: {
            name: this.initData.name,
            contactPerson: this.initData.contactPerson,
            mobile: this.initData.mobile,

          },
          ruleValidate: {
            name: [
              { required: true, message: '厂家不能为空', trigger: 'blur' }
            ],
            contactPerson: [
              { required: true, message: '联系人不能为空', trigger: 'blur' },
            ],
            mobile: [
              { required: true, message: '手机号码不能为空', trigger: 'blur' },
            ],

          }
        }
      },
      methods: {
        ok(name) {


        },
        cancel(name) {
          this.$refs[name].resetFields();
          this.$emit('cancel')
        },
        mycancel(name) {
          this.$emit('cancel')
          this.$refs[name].resetFields();
        },
        myok(name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$emit('ok',this.formValidate)
            } else {

            }
          })
        },
      },
      watch:{
        mymodal:function () {
          this.title=this.title,
          this.formValidate.name=this.initData.name,
          this.formValidate.id=this.initData.id,
          this.formValidate.contactPerson=this.initData.contactPerson,
          this.formValidate.mobile=this.initData.mobile,
          this.isOpen=this.mymodal
        }
      },
    }
</script>
