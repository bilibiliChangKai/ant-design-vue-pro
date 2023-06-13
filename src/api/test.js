import request from '@/utils/request'

const api = {
  image: 'http://happyhhh.com',

  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getImageUrl (parameter) {
  return request({
    url: api.image,
    method: 'post',
    FormData: parameter
  })
}
