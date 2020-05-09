<template>
 <div>
   <el-table
     :data="tableData"
     v-loading="loading"
     element-loading-text="加载中"
     element-loading-spinner="el-icon-loading"
     style="width: 100%">
     <el-table-column
       prop="name"
       label="姓名"
       width="180">
     </el-table-column>
     <el-table-column
       prop="registerNo"
       label="用户登记号"
       width="180">
     </el-table-column>
     <el-table-column
       prop="idCard"
       label="证件号码">
     </el-table-column>
     <el-table-column
       prop="sex"
       label="性别">
     </el-table-column>
     <el-table-column
       prop="companyName"
       label="单位名称">
     </el-table-column>
     <el-table-column
       prop="type"
       label="类别">
     </el-table-column>
     <el-table-column
       prop="registerTime"
       label="登记日期">
     </el-table-column>
     <el-table-column
       prop="operation"
       label="操作">
       <template slot-scope="scope">
         <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
         <el-button type="text" size="small">编辑</el-button>
       </template>
     </el-table-column>
   </el-table>
   <el-pagination
     background
     layout="prev, pager, next"
     :total="total"
     @current-change="handleTableChange"
   >
   </el-pagination>
 </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {

      }
    },
    computed: {
      tableData () {
        return this.$store.state.infoEmployee.list
      },
      total(){
        return this.$store.state.infoEmployee.total
      },
      loading(){
        return this.$store.state.infoEmployee.loading
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleTableChange(page){
        this.$store.commit('infoEmployee/changePagination',{page});
        this.$store.dispatch('infoEmployee/getList')
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      // console.log('a is: ' + this.a)
    }
  }
</script>

<style scoped>

</style>
