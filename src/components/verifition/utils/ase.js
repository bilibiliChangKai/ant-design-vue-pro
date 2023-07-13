import { encryptPsw } from '@/utils/util'
/**
 * @word 要加密的内容
 * @keyWord String  服务器随机返回的关键字
 *  */
export function aesEncrypt (word, keyWord = 'XwKsGlMcdPMEhR1B') {
  return encryptPsw(word)
}
