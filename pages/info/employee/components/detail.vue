<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    width="30%"
    :before-close="handleClose">
    <el-row :gutter="20">
      <el-col :span="grid"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-form :model="formData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="证件类型" prop="cardType">
        <el-input v-model="formData.cardType" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="证件号码" prop="idCard">
        <el-input v-model="formData.idCard" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model.number="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-input v-model="formData.sex" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="单位类型" prop="companyType">
        <el-input v-model="formData.companyType" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="单位名称" prop="companyName">
        <el-input v-model.number="formData.companyName"></el-input>
      </el-form-item>

      <el-form-item label="统一社会信用代码" prop="companyCreditCode">
        <el-input v-model="formData.companyCreditCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="行政区划" prop="companyAddrCode">
        <el-input v-model="formData.companyAddrCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="companyAddr">
        <el-input v-model.number="formData.companyAddr"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="type">
        <el-input v-model.number="formData.companyAddr"></el-input>
      </el-form-item>

      <el-form-item label="文化程度" prop="education">
        <el-input v-model="formData.education" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="工龄（年）" prop="workYear">
        <el-input v-model="formData.workYear" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="companyAddr">
        <el-input v-model.number="formData.companyAddr"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="type">
        <el-input v-model.number="formData.companyAddr"></el-input>
      </el-form-item>

      <el-form-item label="登记日期" prop="education">
        <el-input v-model="formData.education" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="工龄（年）" prop="workYear">
        <el-input v-model="formData.workYear" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="formData.age"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="contactPhone">
        <el-input v-model.number="formData.contactPhone"></el-input>
      </el-form-item>

      <el-form-item label="登记日期" prop="registerTime">
        <el-input v-model="formData.registerTime" autocomplete="off"></el-input>
      </el-form-item>
<!--      <el-form-item label="承诺书" prop="workYear">-->
<!--        <el-input v-model="formData.workYear" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import {getGrid} from '../../../../utils/common'
  export default {
    name: "detail",
    data() {
      return{
        formData:{

        },
        grid:getGrid(),
        rules: {
          // pass: [
          //   { validator: validatePass, trigger: 'blur' }
          // ],
        },
        name:null,
        age:1,
        sez:1
      }
    },
    created() {
      const res={name:'xxx'};

    },
    computed: {
      // scope.row
      visible () {
        return this.$store.state.infoEmployee.visible
      },
    },
    methods:{
      dialogVisible(done){
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClose(){
        this.$store.commit('infoEmployee/update',{visible: false})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
