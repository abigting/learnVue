import axios from "axios";
import { Message } from 'element-ui';
import request from '../utils/request';

export const state = () => ({
  list: [],
  userInfo:{}
})

export const mutations = {
  updateState(state, payload) {
    state.list = payload
  },
}

export const actions = {
  //async异步
  async getList({commit}, params) {
    const result = await axios.get('http://223.4.64.26:10000/zjjkz/practitionersBase/find', params);
    if(result){
      const {code, message} = result.data;
      if(code!=='0'){

      }
    }
    // commit('updateState', result.data);
  },
}
