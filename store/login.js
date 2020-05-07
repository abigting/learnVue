import axios from "axios";
import { Message } from 'element-ui';
import request from '../utils/request';

export const state = () => ({
  list: [],
  userInfo:{}
})

export const mutations = {
  // login (state, { todo }) {
  //   console.log(todo)
  //   // state.list.splice(state.list.indexOf(todo), 1)
  // },
  updateState(state, payload) {
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
    const result = await axios.post('http://223.4.64.26:10000/zjjkz/toLogin', params);
    // const res = request({
    //   method: 'get',
    //   url: '/zjjkz/toLogin',
    //   params
    // });
    if(result){
      const {code, message} = result.data;
      if(code!=='0'){
        this.$axios.setToken('2y7NQqhECNqlf24yEThhRlJI7kQJGmL+sPa+TD2nE8u14SN4Qh1N5QsOHVRsEd3H')
        this.$router.push('/info/employee')
        // Message.warning(message);
      }
    }
    // commit('updateState', result.data);
  },
}
