import axios from "axios";
import { Message } from 'element-ui';
import request from '../utils/request';
//申明数据
export const state = () => ({
  list: [],
  total: 0,
  queryPara:{},
  pagination: {
    page: 1,
    size: 10,
  },
  loading: false
});
//修改数据
export const mutations = {
  updateState(state, payload) {
    Object.keys(payload).forEach((key)=>{
      state[key] = payload[key];
    })
  },
  changePagination(state, payload) {
    state.pagination={
      ...state.pagination,
      ...payload
    }
  },
};

export const actions = {
  //async异步
  async getList({commit, state}, params) {
    commit('updateState', {loading:true});
    // const result = await axios.get('http://223.4.64.26:10000/zjjkz/practitionersBase/find', params);
    const { pagination, queryPara } = state;
    const result = await request.get('/zjjkz/practitionersBase/find',  {params:{...pagination, ...queryPara}});
    if(result){
      const {data} = result;
      const {datas, total} = data;
      commit('updateState', {list:datas, total, loading:false});
    }
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch('core/load')
  }
}
