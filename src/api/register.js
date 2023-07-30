import request from '@/utils/requestReal'
import { login_proto } from '@/proto/login_proto/login_proto'
import { minifyBts } from './util'

const userApi = {
  Register: '/api/get-machine-verify',
  ResetPswd: '/api/reset-pswd'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export async function register (phoneNumber, pswd, code) {
  return new Promise((resolve, reject) => {
    const req = login_proto.UserRegisterReq.create()
    req.phoneNumber = phoneNumber
    req.pswd = pswd
    req.verCode = code

    const bts = login_proto.UserRegisterReq.encode(req).finish()
    const sendBts = minifyBts(bts)

    request({
      url: userApi.Register,
      method: 'post',
      data: sendBts
    }).then(rsp => {
      var arrayBuffer = rsp // 注意：不是 oReq.responseText
      if (arrayBuffer) {
          const uint8Arr = new Uint8Array(arrayBuffer)
          const data = login_proto.UserRegisterRsp.decode(uint8Arr, uint8Arr.length)
          resolve(data)
      } else {
        resolve(null)
      }
    })
    .catch(err => {
      console.error(err)
      resolve(null)
    })
  })
}
export async function resetPswd (phoneNumber, pswd, code) {
  return new Promise((resolve, reject) => {
    const req = login_proto.ResetPswdReq.create()
    req.phoneNumber = phoneNumber
    req.newPw = pswd
    req.verCode = code

    const bts = login_proto.ResetPswdReq.encode(req).finish()
    const sendBts = minifyBts(bts)

    request({
      url: userApi.ResetPswd,
      method: 'post',
      data: sendBts
    }).then(rsp => {
      var arrayBuffer = rsp // 注意：不是 oReq.responseText
      if (arrayBuffer) {
          const uint8Arr = new Uint8Array(arrayBuffer)
          const data = login_proto.ResetPswdRsp.decode(uint8Arr, uint8Arr.length)
          resolve(data)
      } else {
        resolve(null)
      }
    })
    .catch(err => {
      console.error(err)
      resolve(null)
    })
  })
}
