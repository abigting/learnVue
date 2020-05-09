import axios from "axios";
import {Message} from 'element-ui';
import {getUserInfo} from './common';

let request = axios.create({
  // baseURL: 'http://223.4.64.26:10000',     //基础路径,根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
  // timeout: 5000,     //超时时间，5000毫秒,
});

request.defaults.headers.common["token"] = getUserInfo().token;
request.interceptors.request.use(function (config) {
  // config.headers.token = TOKEN;
  // config.headers.get.token = TOKEN;
  // console.log(config.headers, 'config.headers');
  return config;
}, function (err) {
  return Promise.reject(err);
});
request.interceptors.response.use(async function (res) {
  const result = await res;
  const {data} = result;
  const {code, message} = data;
  if (code === '0') {
    return data;
  } else {
    Message.warning(message);
    if (code === '6666') {
      window.location.href = '/';
    }
  }
}, function (err) {
  return err;
});
export default request;
