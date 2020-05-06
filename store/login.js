import axios from "axios";
import request from '../utils/request';

export const state = () => ({
  list: []
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
    // const result = await axios.post('http://223.4.64.26:10000/zjjkz/toLogin', params);
    const res = request({
      method: 'get',
      url: '/zjjkz/toLogin'
    });

    // console.log(res, 'result')
    // commit('updateState', result.data);
  },
}
