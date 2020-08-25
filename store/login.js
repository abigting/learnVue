import axios from "axios";
import { Message } from 'element-ui';
import * as common from '../utils/common';
import request from '../utils/request';
export const state = () => ({
  list: [],
  userInfo:{}
})

export const mutations = {
  update(state, payload) {
    state.list = payload
  },
  remove(state, {todo}) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  //async异步
  async login({commit}, params) {
    // const res = await request.post('/zjjkz/toLogin', params);
    const res = await request.post('/zjjcpj/toLogin', params);
    // const res = request({
    //   method: 'get',
    //   url: '/zjjkz/toLogin',
    //   params
    // });
    // console.log(result, 'result')
    if(res){
      const { authority, ...rest } = res;
      localStorage.setItem('authority', authority);
      let lastAreaCode = rest.areaCode ? rest.areaCode.split(',') : [];
      if (lastAreaCode.length > 0) {
        lastAreaCode = lastAreaCode[lastAreaCode.length - 1];
      } else lastAreaCode = '';
      rest.lastAreaCode = lastAreaCode;
      common.setCookie('userInfo', rest);
      // this.$axios.setToken('2y7NQqhECNqlf24yEThhRlJI7kQJGmL+sPa+TD2nE8u14SN4Qh1N5QsOHVRsEd3H')
      // this.$router.push('/info/employee')
      setTimeout(() => {
        // 为了清空state中的缓存数据，比如行政区划的初始化
        window.location.href = '/baseInfo/entering';
      }, 300);
      // Message.warning(message);
    }
    // commit('update', result.data);
  },
}
