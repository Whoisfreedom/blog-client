import request from '@/utils/http'

export function getList(data) {
  return request({
    url: '/article/searchArticles',
    method: 'post',
    data: data
  })
}
export function getCodeList() {
  return request({
    url: '/article/articleType',
    method: 'get'
  })
}

// 根据id查询
export function articleById(data) {
  return request({
    url: '/article/articleById',
    method: 'post',
    data: data
  })
}


