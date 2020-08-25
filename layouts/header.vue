<template>
  <div class="header">
    <el-row>
      <el-col :span="12" class="title">
        <img style=" width: 377px; height:64px" src="../assets/imgs/logoWhite.svg" alt="">
      </el-col>
      <el-col :span="12" class="operation">

      </el-col>
    </el-row>
  </div>

</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
  .header{
    height: 64px;
    background: url("../assets/imgs/headerBg.png") #2A6DC8 no-repeat left;
    line-height: 64px;
    padding: 0 32px;
    box-shadow: 0 2px 20px 0 #E0E5EF;
    color: #ffffff;
    width: 100%;
  }
 .title{
   line-height: 60px;
   font-size: 24px;
   font-weight: 800;
   color: rgba(47, 64, 80, 1);
 }
  .operation{
    text-align: right;
  }

</style>
