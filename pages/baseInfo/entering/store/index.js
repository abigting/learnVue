import axios from "axios";
import { Message } from 'element-ui';
import * as common from '../../../../utils/common';
import request from '../../../../utils/request';
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
  },
}
