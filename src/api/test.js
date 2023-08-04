import request from '@/utils/requestReal'
const protobuf = require("protobufjs");

export async function requestTest (url, protoJson, data) {
  return new Promise((resolve, reject) => {
    const protobuf = require("protobufjs");

    // 定义 ProtoBuf 消息结构
    // const jsonObj = JSON.parse('{"nested": {"Person": {"fields": {"name": { "type": "string", "id": 1 },"age": { "type": "int32", "id": 2 }}}}}')
    // const root = protobuf.Root.fromJSON(jsonObj);
    
    const jsonObj = JSON.parse(`{"nested": {"ProtoObj": {"fields": ${protoJson} }}}`)
    const root = protobuf.Root.fromJSON(jsonObj);

    // 获取 Person 消息类型
    const ProtoObj = root.lookupType("ProtoObj");
    
    // 将 JSON 对象转换成 ProtoBuf 消息
    const personMessage = ProtoObj.fromObject(data);
    
    // 将 ProtoBuf 消息编码为二进制
    const buffer = ProtoObj.encode(personMessage).finish();
    
    console.log(buffer); // 输出编码后的二进制数据


    // const root = protobuf.Root.fromJSON(json)

    // const req = login_proto.ResetPswdReq.create()
    // req.phoneNumber = phoneNumber
    // req.newPw = pswd
    // req.verCode = code

    // const bts = login_proto.ResetPswdReq.encode(req).finish()
    // const sendBts = minifyBts(bts)

    // request({
    //   url: url,
    //   method: 'post',
    //   data: sendBts
    // }).then(rsp => {
    //   var arrayBuffer = rsp // 注意：不是 oReq.responseText
    //   if (arrayBuffer) {
    //       const uint8Arr = new Uint8Array(arrayBuffer)
    //       const data = login_proto.ResetPswdRsp.decode(uint8Arr, uint8Arr.length)
    //       resolve(data)
    //   } else {
    //     resolve(null)
    //   }
    // })
    // .catch(err => {
    //   console.error(err)
    //   resolve(null)
    // })
  })
}