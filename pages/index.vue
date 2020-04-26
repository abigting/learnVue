<template>
  <div class="login">
    <div class="header">
      <div class="imgBox">
        <img src="../assets/imgs/logoBlack.svg" alt="">
      </div>
    </div>
    <div class="content">
      <div class="formBox">
        <el-form ref="form" :model="form" label-width="80px">
          <div class="inputWrapper">
            <p>用户名</p>
            <el-input v-model="form.name"></el-input>
          </div>
          <div class="inputWrapper">
            <p>密码</p>
            <el-input v-model="form.name"></el-input>
          </div>
          <div class="inputWrapper">
            <p>验证码</p>
            <el-input v-model="form.name" style="width:64%"></el-input>
            <img  src="http://223.4.64.26:8888/zjjkz/common/getCodeImage" alt="" class="checkCodeImg">
          </div>
          <el-button class="submitBtn" type="primary" @click="onSubmit">立即创建</el-button>
        </el-form>
      </div>
    </div>
    <div class="footer">
     <span>
          浙江创得信息技术有限公司
        </span>
      <span>
          服务电话：0571-85776903
       </span>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  export default {
    data() {
      return {
        form: {
          name: '',
        },
        para:0,
        checkCodeUrl:`/zjjkz/common/getCodeImage`
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
  .login {

  }

  .header {
    height: 64px;
  }

  .imgBox {
    width: 1200px;
    margin: 0 auto;
    padding: 8px 0;
  }

  .content {
    background: url("../assets/imgs/loginBg.svg") no-repeat center;
    background-size: cover;
    width: 100vw;
    height: calc(100vh - 234px);
  }

  .formBox {
    width: 324px;
    background: hsla(0, 0%, 100%, .5);
    box-shadow: 0 2px 30px 0 rgba(77, 106, 150, .5);
    border-radius: 8px;
    padding: 20px 24px 34px;
    position: absolute;
    top: 42%;
    right: 14%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .inputWrapper {
    margin-bottom: 14px;
    margin-top: 8px;
  }

  .formBox p {
    margin-bottom: 4px;
    color: #FFFFFF;
  }

  .footer {
    height: 170px;
    font-size: 14px;
    color: rgba(88, 94, 119, 1);
    padding: 24px 0;
    text-align: center;
  }

  .checkCodeImg {
    display: inline-block;
    width: 34%;
    height: 38px;
    margin-top: 1px;
    border: 1px solid #fff;
    vertical-align: middle;
    float: right;
    cursor: pointer;
  }

  .footer > span {
    margin: 0 12px;
  }

  .submitBtn {
    width: 100%;
    margin-top: 18px;
  }
</style>
