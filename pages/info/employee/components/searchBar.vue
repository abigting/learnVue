<template>
  <div>
    <el-form :inline="true" :model="queryPara" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="queryPara.name" placeholder="请填写姓名"></el-input>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input v-model="queryPara.idCard" placeholder="请填写证件号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="showDetal()">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {ACTION} from '../../../../constant'
  import Detail from './detail'
  export default {
    name: "searchBar",
    components: {
      Detail
    },
    data(){
      return{
        queryPara: {
        }
      }
    },
    created() {
      this.$store.dispatch('infoEmployee/getList',this.queryPara)
    },
    methods: {
      onSubmit() {
        this.$store.commit('infoEmployee/update',{});
      },
      showDetal(action){
        this.$store.commit('infoEmployee/update',{
          visible: true,
          action: action,
          currentItem:{}
        });
      }
    }
  }
</script>

<style scoped>

</style>
