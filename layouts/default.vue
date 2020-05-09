<template>
  <div v-if="$nuxt.$route.path==='/'">
    <nuxt/>
  </div>
  <div v-else>
    <el-container>
      <el-header height="64px">
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sider/>
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Header from './header'
  import Sider from './sider'

  export default {
    name: "index",
    data() {
      return {}
    },
    components: {
      Header,
      Sider
    },
    mounted() {
      // this.path = $nuxt.$route.path;
    }
  }
</script>
<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .el-header {
    padding: 0;
  }
</style>
