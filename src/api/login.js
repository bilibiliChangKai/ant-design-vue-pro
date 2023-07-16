import request from '@/utils/request'
import { login_proto } from '@/proto/login_proto/login_proto'

const userApi = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav'
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
export async function login (loginData) {
  return new Promise((resolve, reject) => {
    const usePswd = loginData['password'] !== undefined
    debugger
    if (usePswd) {
      const req = login_proto.UserPswdLoginReq.create()
      req.phoneNumber = loginData.username
      req.a1 = loginData.password

      const bts = login_proto.UserPswdLoginReq.encode(req).finish()

      request({
        url: userApi.Login,
        method: 'post',
        data: bts
      }).then(rsp => {
        var arrayBuffer = rsp // 注意：不是 oReq.responseText
        if (arrayBuffer) {
            const uint8Arr = new Uint8Array(arrayBuffer)
            const data = login_proto.UserPswdLoginRsp.decode(uint8Arr, uint8Arr.length)
            resolve(data)
        } else {
          resolve(null)
        }
      })
      .catch(err => {
        console.error(err)
        resolve(null)
      })
    } else {
      const req = login_proto.UserPhoneLoginReq.create()
      req.phoneNumber = loginData.mobile
      req.verCode = loginData.captcha

      const bts = login_proto.UserPhoneLoginReq.encode(req).finish()

      request({
        url: userApi.Login,
        method: 'post',
        data: bts
      }).then(rsp => {
        var arrayBuffer = rsp // 注意：不是 oReq.responseText
        if (arrayBuffer) {
            const uint8Arr = new Uint8Array(arrayBuffer)
            const data = login_proto.UserPhoneLoginRsp.decode(uint8Arr, uint8Arr.length)
            resolve(data)
        } else {
          resolve(null)
        }
      })
      .catch(err => {
        console.error(err)
        resolve(null)
      })
    }
  })
}

// #TODO: 发送验证码
export async function getSmsCaptcha (phoneNumber, codeType) {
  return new Promise((resolve, reject) => {
    const req = login_proto.SendTextVerCodeReq.create()
    req.phoneNumber = phoneNumber
    req.verType = codeType

    const bts = login_proto.SendTextVerCodeReq.encode(req).finish()

    request({
      url: userApi.SendSms,
      method: 'post',
      data: bts
    }).then(rsp => {
      var arrayBuffer = rsp // 注意：不是 oReq.responseText
      if (arrayBuffer) {
          const uint8Arr = new Uint8Array(arrayBuffer)
          const data = login_proto.SendTextVerCodeRsp.decode(uint8Arr, uint8Arr.length)
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

export function getInfo () {
  return request({
    url: userApi.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getCurrentUserNav () {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function logout () {
  return request({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return request({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter
  })
}
