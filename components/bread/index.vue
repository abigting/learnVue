<template>
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!--    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <el-breadcrumb-item v-for="(_, index) in pathSnippets">{{BREADCRUMBNAMEMAP[`/${pathSnippets.slice(0, index + 1).join('/')}`]}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import {BREADCRUMBNAMEMAP} from "../../constant";

  export default {
    name: "index",
    data() {
      return {
        pathSnippets:[],
        BREADCRUMBNAMEMAP:[]
      }
    },
    components: {
      BREADCRUMBNAMEMAP
    },
    // 组件创建
    created() {
      this.BREADCRUMBNAMEMAP = BREADCRUMBNAMEMAP;
      const pathSnippets = this.$route.path.split('/').filter((i) => i);
      this.pathSnippets = pathSnippets
    },
    // 监听路由
    watch: {
      $route(to, from) {
        const pathSnippets = to.path.split('/').filter((i) => i);
        this.pathSnippets = pathSnippets
      }
    },
  }
</script>

<style scoped>
 .bread{
   margin: 0 0 12px 0;
 }
</style>
