import md5 from 'md5'
import aesjs from 'aes-js'
import { Base64 } from 'js-base64'
const pkcs7 = require('pkcs7')

export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateRandomString () {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters[randomIndex]
  }

  return randomString
}

function encryptAES (data, key) {
  // 将密钥转换为字节数组
  const keyBytes = aesjs.utils.hex.toBytes(key)
  const iv = aesjs.utils.hex.toBytes(key)

  // 创建 AES-CBC 加密器
  const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, iv)

  // 将明文数据转换为字节数组
  const dataBytes = aesjs.utils.utf8.toBytes(data)

  // 对数据进行填充
  const paddedBytes = pkcs7.pad(dataBytes)

  // 对填充后的数据进行加密
  const encryptedBytes = aesCbc.encrypt(paddedBytes)

  // 将加密后的字节数组转换为十六进制字符串
  const encryptedBase64 = Base64.fromUint8Array(encryptedBytes)

  return encryptedBase64
}

export function encryptPsw (username, password) {
  const md5Psw = md5(password)
  const S2 = md5(username + md5Psw)

  // 生成随机密钥和时间戳
  const randomKey = generateRandomString() // 随机生成 16 个字节的密钥
  const timestamp = Math.trunc(Date.now() / 1000)  // 这里使用秒的时间戳

  // 拼接需要加密的数据
  const dataToEncrypt = username + ';' + md5Psw + ';' + timestamp + ';' + randomKey

  // 使用 AES 加密数据
  const encryptedData = encryptAES(dataToEncrypt, S2)

  return encryptedData
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE () {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
export function scorePassword (pass) {
  let score = 0
  if (!pass) {
    return score
  }
  // award every unique letter until 5 repetitions
  const letters = {}
  for (let i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1
      score += 5.0 / letters[pass[i]]
  }

  // bonus points for mixing it up
  const variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass)
  }

  let variationCount = 0
  for (var check in variations) {
      variationCount += (variations[check] === true) ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
}

export function checkPassword (pass) {
  if (!pass || pass.length < 8) {
    return false
  }

  // bonus points for mixing it up
  const variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass)
  }

  let variationCount = 0
  for (var check in variations) {
      variationCount += (variations[check] === true) ? 1 : 0
  }

  return variationCount >= 2
}
