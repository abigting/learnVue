import request from '@/utils/request'


// 字典表
export function getDictionary(data) {
  return request({
    url: '/api/xnrh-common/api/dic/queryZdbList',
    method: 'post',
    data
  })
}


export function save(data) {
  return request({
    url: '/zjjcpj/formula/save',
    method: 'get',
    data
  })
}
