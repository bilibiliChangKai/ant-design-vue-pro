import request from '@/utils/requestReal'
import { login_proto } from '@/proto/login_proto/login_proto'
import { minifyBts } from './util'

const userApi = {
  GetCapture: '/api/get-machine-verify',
  SendCode: '/api/send-machine-verify-result'
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
export async function getCapture () {
  return new Promise((resolve, reject) => {
    const req = login_proto.GetMachineVerifyReq.create()
    const bts = login_proto.GetMachineVerifyReq.encode(req).finish()

    request({
      url: userApi.GetCapture,
      method: 'post',
      data: bts
    }).then(rsp => {
      var arrayBuffer = rsp // 注意：不是 oReq.responseText
      if (arrayBuffer) {
          const uint8Arr = new Uint8Array(arrayBuffer)
          const data = login_proto.GetMachineVerifyRsp.decode(uint8Arr, uint8Arr.length)
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
export async function sendCode (id, code) {
  return new Promise((resolve, reject) => {
    const req = login_proto.SendMachineVerifyResultReq.create()
    req.codeId = id
    req.ans = code

    const bts = login_proto.SendMachineVerifyResultReq.encode(req).finish()
    const sendBts = minifyBts(bts)

    request({
      url: userApi.SendCode,
      method: 'post',
      data: sendBts
    }).then(rsp => {
      var arrayBuffer = rsp // 注意：不是 oReq.responseText
      if (arrayBuffer) {
          const uint8Arr = new Uint8Array(arrayBuffer)
          const data = login_proto.SendMachineVerifyResultRsp.decode(uint8Arr, uint8Arr.length)
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
