<template>
  <div>
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
      <DataModal :visible="visible" @closeModal="closeModal"/>
    </div>
  </div>
</template>

<script>
  import {ACTION} from '../.././../../../constant';
  import list from "../../../../../mixins/list";
  import AddressCascader from "../../../../../components/addressCascader";
  import DataModal from './dataModal';

  export default {
    name: "searchBar",
    mixins: [list],
    components: {AddressCascader, DataModal},
    data() {
      return {
        queryPara: {},
        ACTION:ACTION,
        visible: false
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
        const {id, action} = this.$route.query;
        this.url = `/zjjcpj/exponentStatistics/get?id=${id}`;
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
        this.visible = true
      },
      closeModal(){
        this.visible = false
      }
    }
  }
</script>

<style scoped>

</style>
