import request from "../utils/request";
import * as baseInfoService from "../services/baseInfo";
export default {
  data() {
    return {
      loading: false,
      tableData: [{
        areaName:'name'
      }],
      pagination: {
        page: 1,
        size: 10,
      },
      total: 0,
    }
  },
  methods: {
    sizeChange(value) {
      this.pagination = {
        ...this.pagination,
        size: value
      };
      this.getList()
    },
    pageChange(value) {
      this.pagination = {
        ...this.pagination,
        page: value
      };
      this.getList()
    },
    async getList(payload) {
      this.loading = true;
      const params ={ ...this.pagination, ...payload };
      const res = await request(this.url, {
        method: 'get',
        params,
      });
      if(res){
        const { datas, total } = res;
        this.tableData = datas;
        this.loading = false;
        this.total = total;
      }
    },
  }
}
