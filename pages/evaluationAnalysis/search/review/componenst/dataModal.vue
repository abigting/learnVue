<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    width="800px">
    <div>
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="列表" name="0">列表</el-tab-pane>
        <el-tab-pane label="图表" name="1">图表</el-tab-pane>
        <el-tab-pane label="地图" name="2">地图</el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="close">关闭</el-button>
  </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "dataModal",
    props: ['visible'],
    data() {
      return {
        activeTab:'0'
      }
    },
    methods:{
      close(){
        this.$emit('closeModal', false)
      },
      handleClick(){

      }
    }
  }
</script>

<style scoped>

</style>
