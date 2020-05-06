import axios from 'axios'
const request = axios.create({
  baseURL: 'http://223.4.64.26:10000',     //基础路径,根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
  timeout: 5000,     //超时时间，5000毫秒,
});

export default request  // 导出自定义的axios对象
