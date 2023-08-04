import request from '@/utils/requestReal'
import { minifyBts } from './util'

export async function requestTest (url, api, protoJson, dataJson) {
  return new Promise((resolve, reject) => {
    const protobuf = require("protobufjs");

    // 定义 ProtoBuf 消息结构
    const jsonObj = JSON.parse(`{"nested": {"ProtoObj": {"fields": ${protoJson} }}}`)
    const root = protobuf.Root.fromJSON(jsonObj);

    // 获取 Person 消息类型
    const ProtoObj = root.lookupType("ProtoObj");
    
    // 将 JSON 对象转换成 ProtoBuf 消息
    const personMessage = ProtoObj.fromObject(JSON.parse(dataJson));
    
    // 将 ProtoBuf 消息编码为二进制
    const buffer = ProtoObj.encode(personMessage).finish();
    const sendBts = minifyBts(buffer)

    console.log(sendBts); // 输出编码后的二进制数据

    request({
      baseURL: url,
      url: api,
      method: 'post',
      data: sendBts
    }).then(rsp => {
      console.log(rsp)
      resolve(rsp)
    })
    .catch(err => {
      console.error(err)
      reject(err)
    })
  })
}