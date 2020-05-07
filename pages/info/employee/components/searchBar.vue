<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="queryPara.name" placeholder="请填写姓名"></el-input>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input v-model="queryPara.idCard" placeholder="请填写证件号码"></el-input>
      </el-form-item>
<!--      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "searchBar",
    data(){
      return{
        queryPara: {
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
