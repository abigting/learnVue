<template>
  <div>
    <el-form :inline="true" ref="queryPara" :model="queryPara" class="demo-form-inline">
      <el-form-item label="健康建设主体：">
        <AddressCascader v-model="queryPara.areaCode" @change="getAddressValue" level="1"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="showDetail(ACTION.ADD)">新增</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-text="加载中"
        element-loading-spinner="el-icon-loading"
        style="width: 100%">
        <el-table-column
          prop="areaName"
          label="健康建设主体名称"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="areaCode"
          label="行政区划代码"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="foundTime"
          align="center"
          label="领导小组成立日期">
        </el-table-column>
        <el-table-column
          prop="unitNum"
          align="center"
          label="健康建设部门数">
        </el-table-column>
        <el-table-column
          prop="operation"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="showDetail(scope.row, ACTION.REVIEW)" type="text" size="small">查看</el-button>
            <el-button @click="showDetail(scope.row, ACTION.EDIT)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :total="total"
        :current-page="pagination.page"
        layout="total, prev, pager, next, sizes"
        @size-change="sizeChange"
        @current-change="pageChange"
        :page-size="pagination.size"
      />
    </div>
  </div>
</template>

<script>
  import {ACTION} from '../../../../constant';
  // import initData from "@/mixins/initData";
  import list from "../../../../mixins/list";
  import AddressCascader from "../../../../components/addressCascader";
  import request from "../../../../utils/request";

  export default {
    name: "searchBar",
    mixins: [list],
    components: {AddressCascader},
    data() {
      return {
        queryPara: {},
        ACTION:ACTION
      }
    },
    created() {
      // this.$store.dispatch('infoEmployee/getList',this.queryPara)

      this.$nextTick(() => {
        this.search();
      });

    },
    methods: {
      search() {
        this.url = '/zjjcpj/jbxx/getBaseInfo';
        this.pageChange(1);
        this.getList(this.queryPara);
      },
      onSubmit() {
        this.$store.commit('infoEmployee/update', {});
      },
      getAddressValue(value){
        this.queryPara ={
          ...this.queryPara,
          areaCode: value
        }
      },
      async showDetail(item, action) {
        this.$router.push('/baseInfo/entering/detail')

        // const res = await request('/zjjcpj/formula/save', request({
        //   url: '/zjjcpj/formula/getList',
        //   method: 'get',
        //   params:{
        //     type:'1'
        //   }
        // }));


        // this.$store.commit('infoEmployee/update', {
        //   visible: true,
        //   action: action,
        //   currentItem: {}
        // });
      }
    }
  }
</script>

<style scoped>

</style>
