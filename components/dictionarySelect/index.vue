<template>
  <el-select v-model="queryForm.fyjg" placeholder="请选择复议结果" :disabled="disabled">
    <el-option
      v-for="item in dictionary[38]"
      :key="item.code"
      :label="item.value"
      :value="item.code"
    ></el-option>
  </el-select>
</template>

<script>
    export default {
      name: "index",
      props: ['disabled'],
      data(){
          return{

          }
      }
    }
</script>

<style scoped>

</style>
