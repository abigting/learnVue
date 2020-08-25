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
          prop="code"
          label="指数代码"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="指数名称"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="provinceExponentValue"
          align="center"
          label="当年综合指数得分">
        </el-table-column>
        <el-table-column
          prop="unitNum"
          align="center"
          label="健康建设部门数">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          align="center"
          label="创建部门">
        </el-table-column>
        <el-table-column
          prop="operation"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="showDetail(scope.row, ACTION.REVIEW)" type="text" size="small">查看</el-button>
            <el-button @click="showDetail(scope.row, ACTION.EDIT)" type="text" size="small">趋势图</el-button>
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
  import list from "../../../../mixins/list";
  import AddressCascader from "../../../../components/addressCascader";

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
        this.url = '/zjjcpj/exponentStatistics/find';
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
        this.$router.push(`/evaluationAnalysis/search/review?id=${item.id}`)
      }
    }
  }
</script>

<style scoped>

</style>
