<template>
  <div>
    <div class="nav" @click="handleChangeCollapse">
      功能导航
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <el-submenu v-for="(router,i) in routers" :index="router.path">
        <template slot="title">
          <i class="iconfont iconjiankangtijian"></i>
          <span slot="title">{{router.name}}</span>
        </template>
        <el-menu-item-group v-if="router.children&&router.children.length>0">
          <el-menu-item v-for="(submenu,i) in router.children" :index="submenu.path" @click="navigate(submenu)">{{submenu.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "sider",
    data() {
      return {
        isCollapse: false,
        routers: [
          // {
          //   name: '首页',
          //   icon: 'iconzhuye',
          //   path: '/homePage',
          // },
          {
            name: '体检信息管理',
            icon: 'iconjiankangtijian',
            path: '/info',
            authority: 'info',
            children: [
              {
                name: '从业人员信息',
                authority: 'info_employee',
                path: '/info/employee',
              },
              {
                name: '体检信息',
                authority: 'info_health',
                path: '/info/health',
              },
            ],
          },
          {
            name: '健康证管理',
            icon: 'iconjiankangzhengguanli',
            path: '/healthCertificate',
            authority: 'healthCertificate',
            children: [
              {
                name: '健康证信息',
                authority: 'healthCertificate_info',
                path: '/healthCertificate/info',
              },
              {
                name: '健康证打印',
                authority: 'healthCertificate_print',
                path: '/healthCertificate/print',
              },
            ],
          },
          {
            name: '统计分析',
            icon: 'icontongjifenxi',
            path: '/statistics',
            authority: 'statistics',
            children: [
              {
                name: '从业人员信息',
                authority: 'statistics_employee',
                path: '/statistics/employee',
              },
              {
                name: '健康证信息',
                authority: 'statistics_healthCertificate',
                path: '/statistics/healthCertificate',
              },
            ],
          },
          {
            name: '交换管理',
            icon: 'iconjiaohuan',
            authority: 'exchange',
            path: '/exchange',
            children: [
              {
                name: '省卫生监督系统',
                path: '/exchange/hygiene',
                authority: 'exchange_hygiene',
              },
              {
                name: '地市分级平台',
                path: '/exchange/platform',
                authority: 'exchange_platform',
              },
              {
                name: '体检机构软件',
                path: '/exchange/software',
                authority: 'exchange_software',
              },
            ],
          },
          {
            name: '系统管理',
            icon: 'iconsystem',
            path: '/system',
            authority: 'system',
            children: [
              {
                name: '体检机构管理',
                path: '/system/organ',
                authority: 'system_organ',
              },
              {
                name: '角色管理',
                path: '/system/role',
                authority: 'system_role',
              },
              {
                name: '用户管理',
                path: '/system/user',
                authority: 'system_user',
              },
              {
                name: '体检项管理',
                path: '/system/healthCheck',
                authority: 'system_healthCheck',
              },
              {
                name: '体检类别配置',
                path: '/system/healthCategory',
                authority: 'system_healthCategory',
              },
              {
                name: '数据交换配置',
                path: '/system/dataExchange',
                authority: 'system_dataExchange',
              }
            ],
          },
        ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleChangeCollapse() {
        this.isCollapse = !this.isCollapse
      },
      navigate(submenu){
        this.$router.push(submenu.path)
      }
    }
  }
</script>

<style scoped>
  .nav {
    padding: 12px 16px 12px 24px;
    border-bottom: 1px solid #e4e9f4;
    cursor: pointer;
  }
  .icontishi:before {
    content: "\e634";
  }

  /*@font-face {font-family: "iconfont";*/
  /*  src: url('../assets/fonts/iconfont.eot?t=1588750301482'); !* IE9 *!*/
  /*  src: url('../assets/fonts/iconfont.eot?t=1588750301482#iefix') format('embedded-opentype'), !* IE6-IE8 *!*/
  /*  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),*/
  /*  url('../assets/fonts/iconfont.woff?t=1588750301482') format('woff'),*/
  /*  url('../assets/fonts/iconfont.ttf?t=1588750301482') format('truetype'), !* chrome, firefox, opera, Safari, Android, iOS 4.2+ *!*/
  /*  url('../assets/fonts/iconfont.svg?t=1588750301482#iconfont') format('svg'); !* iOS 4.1- *!*/
  /*}*/

  /*.iconfont {*/
  /*  font-family: "iconfont" !important;*/
  /*  font-size: 16px;*/
  /*  font-style: normal;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*}*/
</style>
