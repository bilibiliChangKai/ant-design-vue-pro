/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.login_proto = (function () {
    /**
     * Namespace login_proto.
     * @exports login_proto
     * @namespace
     */
    var login_proto = {}

    login_proto.Login = (function () {
        /**
         * Constructs a new Login service.
         * @memberof login_proto
         * @classdesc Represents a Login
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Login (rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
        }

        (Login.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Login

        /**
         * Creates new Login service using the specified rpc implementation.
         * @function create
         * @memberof login_proto.Login
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Login} RPC service. Useful where requests and/or responses are streamed.
         */
        Login.create = function create (rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited)
        }

        /**
         * Callback as used by {@link login_proto.Login#getMachineVerify}.
         * @memberof login_proto.Login
         * @typedef GetMachineVerifyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.GetMachineVerifyRsp} [response] GetMachineVerifyRsp
         */

        /**
         * Calls GetMachineVerify.
         * @function getMachineVerify
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IGetMachineVerifyReq} request GetMachineVerifyReq message or plain object
         * @param {login_proto.Login.GetMachineVerifyCallback} callback Node-style callback called with the error, if any, and GetMachineVerifyRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.getMachineVerify = function getMachineVerify (request, callback) {
            return this.rpcCall(getMachineVerify, $root.login_proto.GetMachineVerifyReq, $root.login_proto.GetMachineVerifyRsp, request, callback)
        }, 'name', { value: 'GetMachineVerify' })

        /**
         * Calls GetMachineVerify.
         * @function getMachineVerify
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IGetMachineVerifyReq} request GetMachineVerifyReq message or plain object
         * @returns {Promise<login_proto.GetMachineVerifyRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#sendMachineVerifyResult}.
         * @memberof login_proto.Login
         * @typedef SendMachineVerifyResultCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.SendMachineVerifyResultRsp} [response] SendMachineVerifyResultRsp
         */

        /**
         * Calls SendMachineVerifyResult.
         * @function sendMachineVerifyResult
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.ISendMachineVerifyResultReq} request SendMachineVerifyResultReq message or plain object
         * @param {login_proto.Login.SendMachineVerifyResultCallback} callback Node-style callback called with the error, if any, and SendMachineVerifyResultRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.sendMachineVerifyResult = function sendMachineVerifyResult (request, callback) {
            return this.rpcCall(sendMachineVerifyResult, $root.login_proto.SendMachineVerifyResultReq, $root.login_proto.SendMachineVerifyResultRsp, request, callback)
        }, 'name', { value: 'SendMachineVerifyResult' })

        /**
         * Calls SendMachineVerifyResult.
         * @function sendMachineVerifyResult
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.ISendMachineVerifyResultReq} request SendMachineVerifyResultReq message or plain object
         * @returns {Promise<login_proto.SendMachineVerifyResultRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#sendTextVerCode}.
         * @memberof login_proto.Login
         * @typedef SendTextVerCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.SendTextVerCodeRsp} [response] SendTextVerCodeRsp
         */

        /**
         * Calls SendTextVerCode.
         * @function sendTextVerCode
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.ISendTextVerCodeReq} request SendTextVerCodeReq message or plain object
         * @param {login_proto.Login.SendTextVerCodeCallback} callback Node-style callback called with the error, if any, and SendTextVerCodeRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.sendTextVerCode = function sendTextVerCode (request, callback) {
            return this.rpcCall(sendTextVerCode, $root.login_proto.SendTextVerCodeReq, $root.login_proto.SendTextVerCodeRsp, request, callback)
        }, 'name', { value: 'SendTextVerCode' })

        /**
         * Calls SendTextVerCode.
         * @function sendTextVerCode
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.ISendTextVerCodeReq} request SendTextVerCodeReq message or plain object
         * @returns {Promise<login_proto.SendTextVerCodeRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#userPswdLogin}.
         * @memberof login_proto.Login
         * @typedef UserPswdLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.UserPswdLoginRsp} [response] UserPswdLoginRsp
         */

        /**
         * Calls UserPswdLogin.
         * @function userPswdLogin
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserPswdLoginReq} request UserPswdLoginReq message or plain object
         * @param {login_proto.Login.UserPswdLoginCallback} callback Node-style callback called with the error, if any, and UserPswdLoginRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.userPswdLogin = function userPswdLogin (request, callback) {
            return this.rpcCall(userPswdLogin, $root.login_proto.UserPswdLoginReq, $root.login_proto.UserPswdLoginRsp, request, callback)
        }, 'name', { value: 'UserPswdLogin' })

        /**
         * Calls UserPswdLogin.
         * @function userPswdLogin
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserPswdLoginReq} request UserPswdLoginReq message or plain object
         * @returns {Promise<login_proto.UserPswdLoginRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#userPhoneLogin}.
         * @memberof login_proto.Login
         * @typedef UserPhoneLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.UserPhoneLoginRsp} [response] UserPhoneLoginRsp
         */

        /**
         * Calls UserPhoneLogin.
         * @function userPhoneLogin
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserPhoneLoginReq} request UserPhoneLoginReq message or plain object
         * @param {login_proto.Login.UserPhoneLoginCallback} callback Node-style callback called with the error, if any, and UserPhoneLoginRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.userPhoneLogin = function userPhoneLogin (request, callback) {
            return this.rpcCall(userPhoneLogin, $root.login_proto.UserPhoneLoginReq, $root.login_proto.UserPhoneLoginRsp, request, callback)
        }, 'name', { value: 'UserPhoneLogin' })

        /**
         * Calls UserPhoneLogin.
         * @function userPhoneLogin
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserPhoneLoginReq} request UserPhoneLoginReq message or plain object
         * @returns {Promise<login_proto.UserPhoneLoginRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#userRegister}.
         * @memberof login_proto.Login
         * @typedef UserRegisterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.UserRegisterRsp} [response] UserRegisterRsp
         */

        /**
         * Calls UserRegister.
         * @function userRegister
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserRegisterReq} request UserRegisterReq message or plain object
         * @param {login_proto.Login.UserRegisterCallback} callback Node-style callback called with the error, if any, and UserRegisterRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.userRegister = function userRegister (request, callback) {
            return this.rpcCall(userRegister, $root.login_proto.UserRegisterReq, $root.login_proto.UserRegisterRsp, request, callback)
        }, 'name', { value: 'UserRegister' })

        /**
         * Calls UserRegister.
         * @function userRegister
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IUserRegisterReq} request UserRegisterReq message or plain object
         * @returns {Promise<login_proto.UserRegisterRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link login_proto.Login#resetPswd}.
         * @memberof login_proto.Login
         * @typedef ResetPswdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {login_proto.ResetPswdRsp} [response] ResetPswdRsp
         */

        /**
         * Calls ResetPswd.
         * @function resetPswd
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IResetPswdReq} request ResetPswdReq message or plain object
         * @param {login_proto.Login.ResetPswdCallback} callback Node-style callback called with the error, if any, and ResetPswdRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Login.prototype.resetPswd = function resetPswd (request, callback) {
            return this.rpcCall(resetPswd, $root.login_proto.ResetPswdReq, $root.login_proto.ResetPswdRsp, request, callback)
        }, 'name', { value: 'ResetPswd' })

        /**
         * Calls ResetPswd.
         * @function resetPswd
         * @memberof login_proto.Login
         * @instance
         * @param {login_proto.IResetPswdReq} request ResetPswdReq message or plain object
         * @returns {Promise<login_proto.ResetPswdRsp>} Promise
         * @variation 2
         */

        return Login
    })()

    /**
     * VerType enum.
     * @name login_proto.VerType
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} LoginVerify=1 LoginVerify value
     * @property {number} RegisterVerify=2 RegisterVerify value
     * @property {number} ResetPsWdVerify=3 ResetPsWdVerify value
     */
    login_proto.VerType = (function () {
        var valuesById = {}; var values = Object.create(valuesById)
        values[valuesById[0] = 'Invalid'] = 0
        values[valuesById[1] = 'LoginVerify'] = 1
        values[valuesById[2] = 'RegisterVerify'] = 2
        values[valuesById[3] = 'ResetPsWdVerify'] = 3
        return values
    })()

    login_proto.EmptyReq = (function () {
        /**
         * Properties of an EmptyReq.
         * @memberof login_proto
         * @interface IEmptyReq
         */

        /**
         * Constructs a new EmptyReq.
         * @memberof login_proto
         * @classdesc Represents an EmptyReq.
         * @implements IEmptyReq
         * @constructor
         * @param {login_proto.IEmptyReq=} [properties] Properties to set
         */
        function EmptyReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * Creates a new EmptyReq instance using the specified properties.
         * @function create
         * @memberof login_proto.EmptyReq
         * @static
         * @param {login_proto.IEmptyReq=} [properties] Properties to set
         * @returns {login_proto.EmptyReq} EmptyReq instance
         */
        EmptyReq.create = function create (properties) {
            return new EmptyReq(properties)
        }

        /**
         * Encodes the specified EmptyReq message. Does not implicitly {@link login_proto.EmptyReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.EmptyReq
         * @static
         * @param {login_proto.IEmptyReq} message EmptyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            return writer
        }

        /**
         * Encodes the specified EmptyReq message, length delimited. Does not implicitly {@link login_proto.EmptyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.EmptyReq
         * @static
         * @param {login_proto.IEmptyReq} message EmptyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes an EmptyReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.EmptyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.EmptyReq} EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.EmptyReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes an EmptyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.EmptyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.EmptyReq} EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies an EmptyReq message.
         * @function verify
         * @memberof login_proto.EmptyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            return null
        }

        /**
         * Creates an EmptyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.EmptyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.EmptyReq} EmptyReq
         */
        EmptyReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.EmptyReq) { return object }
            return new $root.login_proto.EmptyReq()
        }

        /**
         * Creates a plain object from an EmptyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.EmptyReq
         * @static
         * @param {login_proto.EmptyReq} message EmptyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyReq.toObject = function toObject () {
            return {}
        }

        /**
         * Converts this EmptyReq to JSON.
         * @function toJSON
         * @memberof login_proto.EmptyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return EmptyReq
    })()

    login_proto.EmptyRsp = (function () {
        /**
         * Properties of an EmptyRsp.
         * @memberof login_proto
         * @interface IEmptyRsp
         */

        /**
         * Constructs a new EmptyRsp.
         * @memberof login_proto
         * @classdesc Represents an EmptyRsp.
         * @implements IEmptyRsp
         * @constructor
         * @param {login_proto.IEmptyRsp=} [properties] Properties to set
         */
        function EmptyRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * Creates a new EmptyRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {login_proto.IEmptyRsp=} [properties] Properties to set
         * @returns {login_proto.EmptyRsp} EmptyRsp instance
         */
        EmptyRsp.create = function create (properties) {
            return new EmptyRsp(properties)
        }

        /**
         * Encodes the specified EmptyRsp message. Does not implicitly {@link login_proto.EmptyRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {login_proto.IEmptyRsp} message EmptyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            return writer
        }

        /**
         * Encodes the specified EmptyRsp message, length delimited. Does not implicitly {@link login_proto.EmptyRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {login_proto.IEmptyRsp} message EmptyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes an EmptyRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.EmptyRsp} EmptyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.EmptyRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes an EmptyRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.EmptyRsp} EmptyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies an EmptyRsp message.
         * @function verify
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            return null
        }

        /**
         * Creates an EmptyRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.EmptyRsp} EmptyRsp
         */
        EmptyRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.EmptyRsp) { return object }
            return new $root.login_proto.EmptyRsp()
        }

        /**
         * Creates a plain object from an EmptyRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.EmptyRsp
         * @static
         * @param {login_proto.EmptyRsp} message EmptyRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRsp.toObject = function toObject () {
            return {}
        }

        /**
         * Converts this EmptyRsp to JSON.
         * @function toJSON
         * @memberof login_proto.EmptyRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return EmptyRsp
    })()

    login_proto.GetMachineVerifyReq = (function () {
        /**
         * Properties of a GetMachineVerifyReq.
         * @memberof login_proto
         * @interface IGetMachineVerifyReq
         */

        /**
         * Constructs a new GetMachineVerifyReq.
         * @memberof login_proto
         * @classdesc Represents a GetMachineVerifyReq.
         * @implements IGetMachineVerifyReq
         * @constructor
         * @param {login_proto.IGetMachineVerifyReq=} [properties] Properties to set
         */
        function GetMachineVerifyReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * Creates a new GetMachineVerifyReq instance using the specified properties.
         * @function create
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {login_proto.IGetMachineVerifyReq=} [properties] Properties to set
         * @returns {login_proto.GetMachineVerifyReq} GetMachineVerifyReq instance
         */
        GetMachineVerifyReq.create = function create (properties) {
            return new GetMachineVerifyReq(properties)
        }

        /**
         * Encodes the specified GetMachineVerifyReq message. Does not implicitly {@link login_proto.GetMachineVerifyReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {login_proto.IGetMachineVerifyReq} message GetMachineVerifyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMachineVerifyReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            return writer
        }

        /**
         * Encodes the specified GetMachineVerifyReq message, length delimited. Does not implicitly {@link login_proto.GetMachineVerifyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {login_proto.IGetMachineVerifyReq} message GetMachineVerifyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMachineVerifyReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a GetMachineVerifyReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.GetMachineVerifyReq} GetMachineVerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMachineVerifyReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.GetMachineVerifyReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a GetMachineVerifyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.GetMachineVerifyReq} GetMachineVerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMachineVerifyReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a GetMachineVerifyReq message.
         * @function verify
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMachineVerifyReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            return null
        }

        /**
         * Creates a GetMachineVerifyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.GetMachineVerifyReq} GetMachineVerifyReq
         */
        GetMachineVerifyReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.GetMachineVerifyReq) { return object }
            return new $root.login_proto.GetMachineVerifyReq()
        }

        /**
         * Creates a plain object from a GetMachineVerifyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.GetMachineVerifyReq
         * @static
         * @param {login_proto.GetMachineVerifyReq} message GetMachineVerifyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMachineVerifyReq.toObject = function toObject () {
            return {}
        }

        /**
         * Converts this GetMachineVerifyReq to JSON.
         * @function toJSON
         * @memberof login_proto.GetMachineVerifyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMachineVerifyReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return GetMachineVerifyReq
    })()

    login_proto.GetMachineVerifyRsp = (function () {
        /**
         * Properties of a GetMachineVerifyRsp.
         * @memberof login_proto
         * @interface IGetMachineVerifyRsp
         * @property {string|null} [codeId] GetMachineVerifyRsp codeId
         * @property {string|null} [base64Img] GetMachineVerifyRsp base64Img
         * @property {number|null} [retCode] GetMachineVerifyRsp retCode
         */

        /**
         * Constructs a new GetMachineVerifyRsp.
         * @memberof login_proto
         * @classdesc Represents a GetMachineVerifyRsp.
         * @implements IGetMachineVerifyRsp
         * @constructor
         * @param {login_proto.IGetMachineVerifyRsp=} [properties] Properties to set
         */
        function GetMachineVerifyRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * GetMachineVerifyRsp codeId.
         * @member {string} codeId
         * @memberof login_proto.GetMachineVerifyRsp
         * @instance
         */
        GetMachineVerifyRsp.prototype.codeId = ''

        /**
         * GetMachineVerifyRsp base64Img.
         * @member {string} base64Img
         * @memberof login_proto.GetMachineVerifyRsp
         * @instance
         */
        GetMachineVerifyRsp.prototype.base64Img = ''

        /**
         * GetMachineVerifyRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.GetMachineVerifyRsp
         * @instance
         */
        GetMachineVerifyRsp.prototype.retCode = 0

        /**
         * Creates a new GetMachineVerifyRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {login_proto.IGetMachineVerifyRsp=} [properties] Properties to set
         * @returns {login_proto.GetMachineVerifyRsp} GetMachineVerifyRsp instance
         */
        GetMachineVerifyRsp.create = function create (properties) {
            return new GetMachineVerifyRsp(properties)
        }

        /**
         * Encodes the specified GetMachineVerifyRsp message. Does not implicitly {@link login_proto.GetMachineVerifyRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {login_proto.IGetMachineVerifyRsp} message GetMachineVerifyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMachineVerifyRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.codeId != null && Object.hasOwnProperty.call(message, 'codeId')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.codeId) }
            if (message.base64Img != null && Object.hasOwnProperty.call(message, 'base64Img')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.base64Img) }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 3, wireType 0 = */24).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified GetMachineVerifyRsp message, length delimited. Does not implicitly {@link login_proto.GetMachineVerifyRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {login_proto.IGetMachineVerifyRsp} message GetMachineVerifyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMachineVerifyRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a GetMachineVerifyRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.GetMachineVerifyRsp} GetMachineVerifyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMachineVerifyRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.GetMachineVerifyRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.string()
                    break
                case 2:
                    message.base64Img = reader.string()
                    break
                case 3:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a GetMachineVerifyRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.GetMachineVerifyRsp} GetMachineVerifyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMachineVerifyRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a GetMachineVerifyRsp message.
         * @function verify
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMachineVerifyRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.codeId != null && message.hasOwnProperty('codeId')) {
 if (!$util.isString(message.codeId)) { return 'codeId: string expected' }
}
            if (message.base64Img != null && message.hasOwnProperty('base64Img')) {
 if (!$util.isString(message.base64Img)) { return 'base64Img: string expected' }
}
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a GetMachineVerifyRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.GetMachineVerifyRsp} GetMachineVerifyRsp
         */
        GetMachineVerifyRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.GetMachineVerifyRsp) { return object }
            var message = new $root.login_proto.GetMachineVerifyRsp()
            if (object.codeId != null) { message.codeId = String(object.codeId) }
            if (object.base64Img != null) { message.base64Img = String(object.base64Img) }
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a GetMachineVerifyRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.GetMachineVerifyRsp
         * @static
         * @param {login_proto.GetMachineVerifyRsp} message GetMachineVerifyRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMachineVerifyRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.codeId = ''
                object.base64Img = ''
                object.retCode = 0
            }
            if (message.codeId != null && message.hasOwnProperty('codeId')) { object.codeId = message.codeId }
            if (message.base64Img != null && message.hasOwnProperty('base64Img')) { object.base64Img = message.base64Img }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this GetMachineVerifyRsp to JSON.
         * @function toJSON
         * @memberof login_proto.GetMachineVerifyRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMachineVerifyRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return GetMachineVerifyRsp
    })()

    login_proto.SendMachineVerifyResultReq = (function () {
        /**
         * Properties of a SendMachineVerifyResultReq.
         * @memberof login_proto
         * @interface ISendMachineVerifyResultReq
         * @property {string|null} [codeId] SendMachineVerifyResultReq codeId
         * @property {string|null} [ans] SendMachineVerifyResultReq ans
         */

        /**
         * Constructs a new SendMachineVerifyResultReq.
         * @memberof login_proto
         * @classdesc Represents a SendMachineVerifyResultReq.
         * @implements ISendMachineVerifyResultReq
         * @constructor
         * @param {login_proto.ISendMachineVerifyResultReq=} [properties] Properties to set
         */
        function SendMachineVerifyResultReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * SendMachineVerifyResultReq codeId.
         * @member {string} codeId
         * @memberof login_proto.SendMachineVerifyResultReq
         * @instance
         */
        SendMachineVerifyResultReq.prototype.codeId = ''

        /**
         * SendMachineVerifyResultReq ans.
         * @member {string} ans
         * @memberof login_proto.SendMachineVerifyResultReq
         * @instance
         */
        SendMachineVerifyResultReq.prototype.ans = ''

        /**
         * Creates a new SendMachineVerifyResultReq instance using the specified properties.
         * @function create
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {login_proto.ISendMachineVerifyResultReq=} [properties] Properties to set
         * @returns {login_proto.SendMachineVerifyResultReq} SendMachineVerifyResultReq instance
         */
        SendMachineVerifyResultReq.create = function create (properties) {
            return new SendMachineVerifyResultReq(properties)
        }

        /**
         * Encodes the specified SendMachineVerifyResultReq message. Does not implicitly {@link login_proto.SendMachineVerifyResultReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {login_proto.ISendMachineVerifyResultReq} message SendMachineVerifyResultReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMachineVerifyResultReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.codeId != null && Object.hasOwnProperty.call(message, 'codeId')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.codeId) }
            if (message.ans != null && Object.hasOwnProperty.call(message, 'ans')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.ans) }
            return writer
        }

        /**
         * Encodes the specified SendMachineVerifyResultReq message, length delimited. Does not implicitly {@link login_proto.SendMachineVerifyResultReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {login_proto.ISendMachineVerifyResultReq} message SendMachineVerifyResultReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMachineVerifyResultReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a SendMachineVerifyResultReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.SendMachineVerifyResultReq} SendMachineVerifyResultReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMachineVerifyResultReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.SendMachineVerifyResultReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.string()
                    break
                case 2:
                    message.ans = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a SendMachineVerifyResultReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.SendMachineVerifyResultReq} SendMachineVerifyResultReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMachineVerifyResultReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a SendMachineVerifyResultReq message.
         * @function verify
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMachineVerifyResultReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.codeId != null && message.hasOwnProperty('codeId')) {
 if (!$util.isString(message.codeId)) { return 'codeId: string expected' }
}
            if (message.ans != null && message.hasOwnProperty('ans')) {
 if (!$util.isString(message.ans)) { return 'ans: string expected' }
}
            return null
        }

        /**
         * Creates a SendMachineVerifyResultReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.SendMachineVerifyResultReq} SendMachineVerifyResultReq
         */
        SendMachineVerifyResultReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.SendMachineVerifyResultReq) { return object }
            var message = new $root.login_proto.SendMachineVerifyResultReq()
            if (object.codeId != null) { message.codeId = String(object.codeId) }
            if (object.ans != null) { message.ans = String(object.ans) }
            return message
        }

        /**
         * Creates a plain object from a SendMachineVerifyResultReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.SendMachineVerifyResultReq
         * @static
         * @param {login_proto.SendMachineVerifyResultReq} message SendMachineVerifyResultReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMachineVerifyResultReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.codeId = ''
                object.ans = ''
            }
            if (message.codeId != null && message.hasOwnProperty('codeId')) { object.codeId = message.codeId }
            if (message.ans != null && message.hasOwnProperty('ans')) { object.ans = message.ans }
            return object
        }

        /**
         * Converts this SendMachineVerifyResultReq to JSON.
         * @function toJSON
         * @memberof login_proto.SendMachineVerifyResultReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMachineVerifyResultReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return SendMachineVerifyResultReq
    })()

    login_proto.SendMachineVerifyResultRsp = (function () {
        /**
         * Properties of a SendMachineVerifyResultRsp.
         * @memberof login_proto
         * @interface ISendMachineVerifyResultRsp
         * @property {number|null} [retCode] SendMachineVerifyResultRsp retCode
         */

        /**
         * Constructs a new SendMachineVerifyResultRsp.
         * @memberof login_proto
         * @classdesc Represents a SendMachineVerifyResultRsp.
         * @implements ISendMachineVerifyResultRsp
         * @constructor
         * @param {login_proto.ISendMachineVerifyResultRsp=} [properties] Properties to set
         */
        function SendMachineVerifyResultRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * SendMachineVerifyResultRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @instance
         */
        SendMachineVerifyResultRsp.prototype.retCode = 0

        /**
         * Creates a new SendMachineVerifyResultRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {login_proto.ISendMachineVerifyResultRsp=} [properties] Properties to set
         * @returns {login_proto.SendMachineVerifyResultRsp} SendMachineVerifyResultRsp instance
         */
        SendMachineVerifyResultRsp.create = function create (properties) {
            return new SendMachineVerifyResultRsp(properties)
        }

        /**
         * Encodes the specified SendMachineVerifyResultRsp message. Does not implicitly {@link login_proto.SendMachineVerifyResultRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {login_proto.ISendMachineVerifyResultRsp} message SendMachineVerifyResultRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMachineVerifyResultRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 2, wireType 0 = */16).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified SendMachineVerifyResultRsp message, length delimited. Does not implicitly {@link login_proto.SendMachineVerifyResultRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {login_proto.ISendMachineVerifyResultRsp} message SendMachineVerifyResultRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMachineVerifyResultRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a SendMachineVerifyResultRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.SendMachineVerifyResultRsp} SendMachineVerifyResultRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMachineVerifyResultRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.SendMachineVerifyResultRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 2:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a SendMachineVerifyResultRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.SendMachineVerifyResultRsp} SendMachineVerifyResultRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMachineVerifyResultRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a SendMachineVerifyResultRsp message.
         * @function verify
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMachineVerifyResultRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a SendMachineVerifyResultRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.SendMachineVerifyResultRsp} SendMachineVerifyResultRsp
         */
        SendMachineVerifyResultRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.SendMachineVerifyResultRsp) { return object }
            var message = new $root.login_proto.SendMachineVerifyResultRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a SendMachineVerifyResultRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @static
         * @param {login_proto.SendMachineVerifyResultRsp} message SendMachineVerifyResultRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMachineVerifyResultRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this SendMachineVerifyResultRsp to JSON.
         * @function toJSON
         * @memberof login_proto.SendMachineVerifyResultRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMachineVerifyResultRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return SendMachineVerifyResultRsp
    })()

    login_proto.SendTextVerCodeReq = (function () {
        /**
         * Properties of a SendTextVerCodeReq.
         * @memberof login_proto
         * @interface ISendTextVerCodeReq
         * @property {string|null} [phoneNumber] SendTextVerCodeReq phoneNumber
         * @property {login_proto.VerType|null} [verType] SendTextVerCodeReq verType
         */

        /**
         * Constructs a new SendTextVerCodeReq.
         * @memberof login_proto
         * @classdesc Represents a SendTextVerCodeReq.
         * @implements ISendTextVerCodeReq
         * @constructor
         * @param {login_proto.ISendTextVerCodeReq=} [properties] Properties to set
         */
        function SendTextVerCodeReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * SendTextVerCodeReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof login_proto.SendTextVerCodeReq
         * @instance
         */
        SendTextVerCodeReq.prototype.phoneNumber = ''

        /**
         * SendTextVerCodeReq verType.
         * @member {login_proto.VerType} verType
         * @memberof login_proto.SendTextVerCodeReq
         * @instance
         */
        SendTextVerCodeReq.prototype.verType = 0

        /**
         * Creates a new SendTextVerCodeReq instance using the specified properties.
         * @function create
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {login_proto.ISendTextVerCodeReq=} [properties] Properties to set
         * @returns {login_proto.SendTextVerCodeReq} SendTextVerCodeReq instance
         */
        SendTextVerCodeReq.create = function create (properties) {
            return new SendTextVerCodeReq(properties)
        }

        /**
         * Encodes the specified SendTextVerCodeReq message. Does not implicitly {@link login_proto.SendTextVerCodeReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {login_proto.ISendTextVerCodeReq} message SendTextVerCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendTextVerCodeReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, 'phoneNumber')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.phoneNumber) }
            if (message.verType != null && Object.hasOwnProperty.call(message, 'verType')) { writer.uint32(/* id 2, wireType 0 = */16).int32(message.verType) }
            return writer
        }

        /**
         * Encodes the specified SendTextVerCodeReq message, length delimited. Does not implicitly {@link login_proto.SendTextVerCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {login_proto.ISendTextVerCodeReq} message SendTextVerCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendTextVerCodeReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a SendTextVerCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.SendTextVerCodeReq} SendTextVerCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendTextVerCodeReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.SendTextVerCodeReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string()
                    break
                case 2:
                    message.verType = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a SendTextVerCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.SendTextVerCodeReq} SendTextVerCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendTextVerCodeReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a SendTextVerCodeReq message.
         * @function verify
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendTextVerCodeReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) {
 if (!$util.isString(message.phoneNumber)) { return 'phoneNumber: string expected' }
}
            if (message.verType != null && message.hasOwnProperty('verType')) {
 switch (message.verType) {
                default:
                    return 'verType: enum value expected'
                case 0:
                case 1:
                case 2:
                case 3:
                    break
                }
}
            return null
        }

        /**
         * Creates a SendTextVerCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.SendTextVerCodeReq} SendTextVerCodeReq
         */
        SendTextVerCodeReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.SendTextVerCodeReq) { return object }
            var message = new $root.login_proto.SendTextVerCodeReq()
            if (object.phoneNumber != null) { message.phoneNumber = String(object.phoneNumber) }
            switch (object.verType) {
            case 'Invalid':
            case 0:
                message.verType = 0
                break
            case 'LoginVerify':
            case 1:
                message.verType = 1
                break
            case 'RegisterVerify':
            case 2:
                message.verType = 2
                break
            case 'ResetPsWdVerify':
            case 3:
                message.verType = 3
                break
            }
            return message
        }

        /**
         * Creates a plain object from a SendTextVerCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.SendTextVerCodeReq
         * @static
         * @param {login_proto.SendTextVerCodeReq} message SendTextVerCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendTextVerCodeReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.phoneNumber = ''
                object.verType = options.enums === String ? 'Invalid' : 0
            }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) { object.phoneNumber = message.phoneNumber }
            if (message.verType != null && message.hasOwnProperty('verType')) { object.verType = options.enums === String ? $root.login_proto.VerType[message.verType] : message.verType }
            return object
        }

        /**
         * Converts this SendTextVerCodeReq to JSON.
         * @function toJSON
         * @memberof login_proto.SendTextVerCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendTextVerCodeReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return SendTextVerCodeReq
    })()

    login_proto.SendTextVerCodeRsp = (function () {
        /**
         * Properties of a SendTextVerCodeRsp.
         * @memberof login_proto
         * @interface ISendTextVerCodeRsp
         * @property {number|null} [retCode] SendTextVerCodeRsp retCode
         */

        /**
         * Constructs a new SendTextVerCodeRsp.
         * @memberof login_proto
         * @classdesc Represents a SendTextVerCodeRsp.
         * @implements ISendTextVerCodeRsp
         * @constructor
         * @param {login_proto.ISendTextVerCodeRsp=} [properties] Properties to set
         */
        function SendTextVerCodeRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * SendTextVerCodeRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.SendTextVerCodeRsp
         * @instance
         */
        SendTextVerCodeRsp.prototype.retCode = 0

        /**
         * Creates a new SendTextVerCodeRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {login_proto.ISendTextVerCodeRsp=} [properties] Properties to set
         * @returns {login_proto.SendTextVerCodeRsp} SendTextVerCodeRsp instance
         */
        SendTextVerCodeRsp.create = function create (properties) {
            return new SendTextVerCodeRsp(properties)
        }

        /**
         * Encodes the specified SendTextVerCodeRsp message. Does not implicitly {@link login_proto.SendTextVerCodeRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {login_proto.ISendTextVerCodeRsp} message SendTextVerCodeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendTextVerCodeRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified SendTextVerCodeRsp message, length delimited. Does not implicitly {@link login_proto.SendTextVerCodeRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {login_proto.ISendTextVerCodeRsp} message SendTextVerCodeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendTextVerCodeRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a SendTextVerCodeRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.SendTextVerCodeRsp} SendTextVerCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendTextVerCodeRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.SendTextVerCodeRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a SendTextVerCodeRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.SendTextVerCodeRsp} SendTextVerCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendTextVerCodeRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a SendTextVerCodeRsp message.
         * @function verify
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendTextVerCodeRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a SendTextVerCodeRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.SendTextVerCodeRsp} SendTextVerCodeRsp
         */
        SendTextVerCodeRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.SendTextVerCodeRsp) { return object }
            var message = new $root.login_proto.SendTextVerCodeRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a SendTextVerCodeRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.SendTextVerCodeRsp
         * @static
         * @param {login_proto.SendTextVerCodeRsp} message SendTextVerCodeRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendTextVerCodeRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this SendTextVerCodeRsp to JSON.
         * @function toJSON
         * @memberof login_proto.SendTextVerCodeRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendTextVerCodeRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return SendTextVerCodeRsp
    })()

    login_proto.UserPswdLoginReq = (function () {
        /**
         * Properties of a UserPswdLoginReq.
         * @memberof login_proto
         * @interface IUserPswdLoginReq
         * @property {string|null} [phoneNumber] UserPswdLoginReq phoneNumber
         * @property {string|null} [a1] UserPswdLoginReq a1
         */

        /**
         * Constructs a new UserPswdLoginReq.
         * @memberof login_proto
         * @classdesc Represents a UserPswdLoginReq.
         * @implements IUserPswdLoginReq
         * @constructor
         * @param {login_proto.IUserPswdLoginReq=} [properties] Properties to set
         */
        function UserPswdLoginReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserPswdLoginReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof login_proto.UserPswdLoginReq
         * @instance
         */
        UserPswdLoginReq.prototype.phoneNumber = ''

        /**
         * UserPswdLoginReq a1.
         * @member {string} a1
         * @memberof login_proto.UserPswdLoginReq
         * @instance
         */
        UserPswdLoginReq.prototype.a1 = ''

        /**
         * Creates a new UserPswdLoginReq instance using the specified properties.
         * @function create
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {login_proto.IUserPswdLoginReq=} [properties] Properties to set
         * @returns {login_proto.UserPswdLoginReq} UserPswdLoginReq instance
         */
        UserPswdLoginReq.create = function create (properties) {
            return new UserPswdLoginReq(properties)
        }

        /**
         * Encodes the specified UserPswdLoginReq message. Does not implicitly {@link login_proto.UserPswdLoginReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {login_proto.IUserPswdLoginReq} message UserPswdLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPswdLoginReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, 'phoneNumber')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.phoneNumber) }
            if (message.a1 != null && Object.hasOwnProperty.call(message, 'a1')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.a1) }
            return writer
        }

        /**
         * Encodes the specified UserPswdLoginReq message, length delimited. Does not implicitly {@link login_proto.UserPswdLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {login_proto.IUserPswdLoginReq} message UserPswdLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPswdLoginReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserPswdLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserPswdLoginReq} UserPswdLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPswdLoginReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserPswdLoginReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string()
                    break
                case 2:
                    message.a1 = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserPswdLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserPswdLoginReq} UserPswdLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPswdLoginReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserPswdLoginReq message.
         * @function verify
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPswdLoginReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) {
 if (!$util.isString(message.phoneNumber)) { return 'phoneNumber: string expected' }
}
            if (message.a1 != null && message.hasOwnProperty('a1')) {
 if (!$util.isString(message.a1)) { return 'a1: string expected' }
}
            return null
        }

        /**
         * Creates a UserPswdLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserPswdLoginReq} UserPswdLoginReq
         */
        UserPswdLoginReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserPswdLoginReq) { return object }
            var message = new $root.login_proto.UserPswdLoginReq()
            if (object.phoneNumber != null) { message.phoneNumber = String(object.phoneNumber) }
            if (object.a1 != null) { message.a1 = String(object.a1) }
            return message
        }

        /**
         * Creates a plain object from a UserPswdLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserPswdLoginReq
         * @static
         * @param {login_proto.UserPswdLoginReq} message UserPswdLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPswdLoginReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.phoneNumber = ''
                object.a1 = ''
            }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) { object.phoneNumber = message.phoneNumber }
            if (message.a1 != null && message.hasOwnProperty('a1')) { object.a1 = message.a1 }
            return object
        }

        /**
         * Converts this UserPswdLoginReq to JSON.
         * @function toJSON
         * @memberof login_proto.UserPswdLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPswdLoginReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserPswdLoginReq
    })()

    login_proto.UserPswdLoginRsp = (function () {
        /**
         * Properties of a UserPswdLoginRsp.
         * @memberof login_proto
         * @interface IUserPswdLoginRsp
         * @property {number|null} [retCode] UserPswdLoginRsp retCode
         */

        /**
         * Constructs a new UserPswdLoginRsp.
         * @memberof login_proto
         * @classdesc Represents a UserPswdLoginRsp.
         * @implements IUserPswdLoginRsp
         * @constructor
         * @param {login_proto.IUserPswdLoginRsp=} [properties] Properties to set
         */
        function UserPswdLoginRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserPswdLoginRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.UserPswdLoginRsp
         * @instance
         */
        UserPswdLoginRsp.prototype.retCode = 0

        /**
         * Creates a new UserPswdLoginRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {login_proto.IUserPswdLoginRsp=} [properties] Properties to set
         * @returns {login_proto.UserPswdLoginRsp} UserPswdLoginRsp instance
         */
        UserPswdLoginRsp.create = function create (properties) {
            return new UserPswdLoginRsp(properties)
        }

        /**
         * Encodes the specified UserPswdLoginRsp message. Does not implicitly {@link login_proto.UserPswdLoginRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {login_proto.IUserPswdLoginRsp} message UserPswdLoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPswdLoginRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified UserPswdLoginRsp message, length delimited. Does not implicitly {@link login_proto.UserPswdLoginRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {login_proto.IUserPswdLoginRsp} message UserPswdLoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPswdLoginRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserPswdLoginRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserPswdLoginRsp} UserPswdLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPswdLoginRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserPswdLoginRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserPswdLoginRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserPswdLoginRsp} UserPswdLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPswdLoginRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserPswdLoginRsp message.
         * @function verify
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPswdLoginRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a UserPswdLoginRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserPswdLoginRsp} UserPswdLoginRsp
         */
        UserPswdLoginRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserPswdLoginRsp) { return object }
            var message = new $root.login_proto.UserPswdLoginRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a UserPswdLoginRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserPswdLoginRsp
         * @static
         * @param {login_proto.UserPswdLoginRsp} message UserPswdLoginRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPswdLoginRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this UserPswdLoginRsp to JSON.
         * @function toJSON
         * @memberof login_proto.UserPswdLoginRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPswdLoginRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserPswdLoginRsp
    })()

    login_proto.UserPhoneLoginReq = (function () {
        /**
         * Properties of a UserPhoneLoginReq.
         * @memberof login_proto
         * @interface IUserPhoneLoginReq
         * @property {string|null} [phoneNumber] UserPhoneLoginReq phoneNumber
         * @property {string|null} [verCode] UserPhoneLoginReq verCode
         */

        /**
         * Constructs a new UserPhoneLoginReq.
         * @memberof login_proto
         * @classdesc Represents a UserPhoneLoginReq.
         * @implements IUserPhoneLoginReq
         * @constructor
         * @param {login_proto.IUserPhoneLoginReq=} [properties] Properties to set
         */
        function UserPhoneLoginReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserPhoneLoginReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof login_proto.UserPhoneLoginReq
         * @instance
         */
        UserPhoneLoginReq.prototype.phoneNumber = ''

        /**
         * UserPhoneLoginReq verCode.
         * @member {string} verCode
         * @memberof login_proto.UserPhoneLoginReq
         * @instance
         */
        UserPhoneLoginReq.prototype.verCode = ''

        /**
         * Creates a new UserPhoneLoginReq instance using the specified properties.
         * @function create
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {login_proto.IUserPhoneLoginReq=} [properties] Properties to set
         * @returns {login_proto.UserPhoneLoginReq} UserPhoneLoginReq instance
         */
        UserPhoneLoginReq.create = function create (properties) {
            return new UserPhoneLoginReq(properties)
        }

        /**
         * Encodes the specified UserPhoneLoginReq message. Does not implicitly {@link login_proto.UserPhoneLoginReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {login_proto.IUserPhoneLoginReq} message UserPhoneLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPhoneLoginReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, 'phoneNumber')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.phoneNumber) }
            if (message.verCode != null && Object.hasOwnProperty.call(message, 'verCode')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.verCode) }
            return writer
        }

        /**
         * Encodes the specified UserPhoneLoginReq message, length delimited. Does not implicitly {@link login_proto.UserPhoneLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {login_proto.IUserPhoneLoginReq} message UserPhoneLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPhoneLoginReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserPhoneLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserPhoneLoginReq} UserPhoneLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPhoneLoginReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserPhoneLoginReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string()
                    break
                case 2:
                    message.verCode = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserPhoneLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserPhoneLoginReq} UserPhoneLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPhoneLoginReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserPhoneLoginReq message.
         * @function verify
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPhoneLoginReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) {
 if (!$util.isString(message.phoneNumber)) { return 'phoneNumber: string expected' }
}
            if (message.verCode != null && message.hasOwnProperty('verCode')) {
 if (!$util.isString(message.verCode)) { return 'verCode: string expected' }
}
            return null
        }

        /**
         * Creates a UserPhoneLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserPhoneLoginReq} UserPhoneLoginReq
         */
        UserPhoneLoginReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserPhoneLoginReq) { return object }
            var message = new $root.login_proto.UserPhoneLoginReq()
            if (object.phoneNumber != null) { message.phoneNumber = String(object.phoneNumber) }
            if (object.verCode != null) { message.verCode = String(object.verCode) }
            return message
        }

        /**
         * Creates a plain object from a UserPhoneLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserPhoneLoginReq
         * @static
         * @param {login_proto.UserPhoneLoginReq} message UserPhoneLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPhoneLoginReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.phoneNumber = ''
                object.verCode = ''
            }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) { object.phoneNumber = message.phoneNumber }
            if (message.verCode != null && message.hasOwnProperty('verCode')) { object.verCode = message.verCode }
            return object
        }

        /**
         * Converts this UserPhoneLoginReq to JSON.
         * @function toJSON
         * @memberof login_proto.UserPhoneLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPhoneLoginReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserPhoneLoginReq
    })()

    login_proto.UserPhoneLoginRsp = (function () {
        /**
         * Properties of a UserPhoneLoginRsp.
         * @memberof login_proto
         * @interface IUserPhoneLoginRsp
         * @property {number|null} [retCode] UserPhoneLoginRsp retCode
         */

        /**
         * Constructs a new UserPhoneLoginRsp.
         * @memberof login_proto
         * @classdesc Represents a UserPhoneLoginRsp.
         * @implements IUserPhoneLoginRsp
         * @constructor
         * @param {login_proto.IUserPhoneLoginRsp=} [properties] Properties to set
         */
        function UserPhoneLoginRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserPhoneLoginRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.UserPhoneLoginRsp
         * @instance
         */
        UserPhoneLoginRsp.prototype.retCode = 0

        /**
         * Creates a new UserPhoneLoginRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {login_proto.IUserPhoneLoginRsp=} [properties] Properties to set
         * @returns {login_proto.UserPhoneLoginRsp} UserPhoneLoginRsp instance
         */
        UserPhoneLoginRsp.create = function create (properties) {
            return new UserPhoneLoginRsp(properties)
        }

        /**
         * Encodes the specified UserPhoneLoginRsp message. Does not implicitly {@link login_proto.UserPhoneLoginRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {login_proto.IUserPhoneLoginRsp} message UserPhoneLoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPhoneLoginRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified UserPhoneLoginRsp message, length delimited. Does not implicitly {@link login_proto.UserPhoneLoginRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {login_proto.IUserPhoneLoginRsp} message UserPhoneLoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPhoneLoginRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserPhoneLoginRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserPhoneLoginRsp} UserPhoneLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPhoneLoginRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserPhoneLoginRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserPhoneLoginRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserPhoneLoginRsp} UserPhoneLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPhoneLoginRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserPhoneLoginRsp message.
         * @function verify
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPhoneLoginRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a UserPhoneLoginRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserPhoneLoginRsp} UserPhoneLoginRsp
         */
        UserPhoneLoginRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserPhoneLoginRsp) { return object }
            var message = new $root.login_proto.UserPhoneLoginRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a UserPhoneLoginRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserPhoneLoginRsp
         * @static
         * @param {login_proto.UserPhoneLoginRsp} message UserPhoneLoginRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPhoneLoginRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this UserPhoneLoginRsp to JSON.
         * @function toJSON
         * @memberof login_proto.UserPhoneLoginRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPhoneLoginRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserPhoneLoginRsp
    })()

    login_proto.UserRegisterReq = (function () {
        /**
         * Properties of a UserRegisterReq.
         * @memberof login_proto
         * @interface IUserRegisterReq
         * @property {string|null} [phoneNumber] UserRegisterReq phoneNumber
         * @property {string|null} [verCode] UserRegisterReq verCode
         */

        /**
         * Constructs a new UserRegisterReq.
         * @memberof login_proto
         * @classdesc Represents a UserRegisterReq.
         * @implements IUserRegisterReq
         * @constructor
         * @param {login_proto.IUserRegisterReq=} [properties] Properties to set
         */
        function UserRegisterReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserRegisterReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof login_proto.UserRegisterReq
         * @instance
         */
        UserRegisterReq.prototype.phoneNumber = ''

        /**
         * UserRegisterReq verCode.
         * @member {string} verCode
         * @memberof login_proto.UserRegisterReq
         * @instance
         */
        UserRegisterReq.prototype.verCode = ''

        /**
         * Creates a new UserRegisterReq instance using the specified properties.
         * @function create
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {login_proto.IUserRegisterReq=} [properties] Properties to set
         * @returns {login_proto.UserRegisterReq} UserRegisterReq instance
         */
        UserRegisterReq.create = function create (properties) {
            return new UserRegisterReq(properties)
        }

        /**
         * Encodes the specified UserRegisterReq message. Does not implicitly {@link login_proto.UserRegisterReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {login_proto.IUserRegisterReq} message UserRegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegisterReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, 'phoneNumber')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.phoneNumber) }
            if (message.verCode != null && Object.hasOwnProperty.call(message, 'verCode')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.verCode) }
            return writer
        }

        /**
         * Encodes the specified UserRegisterReq message, length delimited. Does not implicitly {@link login_proto.UserRegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {login_proto.IUserRegisterReq} message UserRegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegisterReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserRegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserRegisterReq} UserRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegisterReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserRegisterReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string()
                    break
                case 2:
                    message.verCode = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserRegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserRegisterReq} UserRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegisterReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserRegisterReq message.
         * @function verify
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRegisterReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) {
 if (!$util.isString(message.phoneNumber)) { return 'phoneNumber: string expected' }
}
            if (message.verCode != null && message.hasOwnProperty('verCode')) {
 if (!$util.isString(message.verCode)) { return 'verCode: string expected' }
}
            return null
        }

        /**
         * Creates a UserRegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserRegisterReq} UserRegisterReq
         */
        UserRegisterReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserRegisterReq) { return object }
            var message = new $root.login_proto.UserRegisterReq()
            if (object.phoneNumber != null) { message.phoneNumber = String(object.phoneNumber) }
            if (object.verCode != null) { message.verCode = String(object.verCode) }
            return message
        }

        /**
         * Creates a plain object from a UserRegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserRegisterReq
         * @static
         * @param {login_proto.UserRegisterReq} message UserRegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRegisterReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.phoneNumber = ''
                object.verCode = ''
            }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) { object.phoneNumber = message.phoneNumber }
            if (message.verCode != null && message.hasOwnProperty('verCode')) { object.verCode = message.verCode }
            return object
        }

        /**
         * Converts this UserRegisterReq to JSON.
         * @function toJSON
         * @memberof login_proto.UserRegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRegisterReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserRegisterReq
    })()

    login_proto.UserRegisterRsp = (function () {
        /**
         * Properties of a UserRegisterRsp.
         * @memberof login_proto
         * @interface IUserRegisterRsp
         * @property {number|null} [retCode] UserRegisterRsp retCode
         */

        /**
         * Constructs a new UserRegisterRsp.
         * @memberof login_proto
         * @classdesc Represents a UserRegisterRsp.
         * @implements IUserRegisterRsp
         * @constructor
         * @param {login_proto.IUserRegisterRsp=} [properties] Properties to set
         */
        function UserRegisterRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * UserRegisterRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.UserRegisterRsp
         * @instance
         */
        UserRegisterRsp.prototype.retCode = 0

        /**
         * Creates a new UserRegisterRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {login_proto.IUserRegisterRsp=} [properties] Properties to set
         * @returns {login_proto.UserRegisterRsp} UserRegisterRsp instance
         */
        UserRegisterRsp.create = function create (properties) {
            return new UserRegisterRsp(properties)
        }

        /**
         * Encodes the specified UserRegisterRsp message. Does not implicitly {@link login_proto.UserRegisterRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {login_proto.IUserRegisterRsp} message UserRegisterRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegisterRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified UserRegisterRsp message, length delimited. Does not implicitly {@link login_proto.UserRegisterRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {login_proto.IUserRegisterRsp} message UserRegisterRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegisterRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a UserRegisterRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.UserRegisterRsp} UserRegisterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegisterRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.UserRegisterRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a UserRegisterRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.UserRegisterRsp} UserRegisterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegisterRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a UserRegisterRsp message.
         * @function verify
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRegisterRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a UserRegisterRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.UserRegisterRsp} UserRegisterRsp
         */
        UserRegisterRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.UserRegisterRsp) { return object }
            var message = new $root.login_proto.UserRegisterRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a UserRegisterRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.UserRegisterRsp
         * @static
         * @param {login_proto.UserRegisterRsp} message UserRegisterRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRegisterRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this UserRegisterRsp to JSON.
         * @function toJSON
         * @memberof login_proto.UserRegisterRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRegisterRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return UserRegisterRsp
    })()

    login_proto.ResetPswdReq = (function () {
        /**
         * Properties of a ResetPswdReq.
         * @memberof login_proto
         * @interface IResetPswdReq
         * @property {string|null} [phoneNumber] ResetPswdReq phoneNumber
         * @property {string|null} [newPw] ResetPswdReq newPw
         * @property {string|null} [verCode] ResetPswdReq verCode
         */

        /**
         * Constructs a new ResetPswdReq.
         * @memberof login_proto
         * @classdesc Represents a ResetPswdReq.
         * @implements IResetPswdReq
         * @constructor
         * @param {login_proto.IResetPswdReq=} [properties] Properties to set
         */
        function ResetPswdReq (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * ResetPswdReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof login_proto.ResetPswdReq
         * @instance
         */
        ResetPswdReq.prototype.phoneNumber = ''

        /**
         * ResetPswdReq newPw.
         * @member {string} newPw
         * @memberof login_proto.ResetPswdReq
         * @instance
         */
        ResetPswdReq.prototype.newPw = ''

        /**
         * ResetPswdReq verCode.
         * @member {string} verCode
         * @memberof login_proto.ResetPswdReq
         * @instance
         */
        ResetPswdReq.prototype.verCode = ''

        /**
         * Creates a new ResetPswdReq instance using the specified properties.
         * @function create
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {login_proto.IResetPswdReq=} [properties] Properties to set
         * @returns {login_proto.ResetPswdReq} ResetPswdReq instance
         */
        ResetPswdReq.create = function create (properties) {
            return new ResetPswdReq(properties)
        }

        /**
         * Encodes the specified ResetPswdReq message. Does not implicitly {@link login_proto.ResetPswdReq.verify|verify} messages.
         * @function encode
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {login_proto.IResetPswdReq} message ResetPswdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPswdReq.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, 'phoneNumber')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.phoneNumber) }
            if (message.newPw != null && Object.hasOwnProperty.call(message, 'newPw')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.newPw) }
            if (message.verCode != null && Object.hasOwnProperty.call(message, 'verCode')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.verCode) }
            return writer
        }

        /**
         * Encodes the specified ResetPswdReq message, length delimited. Does not implicitly {@link login_proto.ResetPswdReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {login_proto.IResetPswdReq} message ResetPswdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPswdReq.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a ResetPswdReq message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.ResetPswdReq} ResetPswdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPswdReq.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.ResetPswdReq()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string()
                    break
                case 2:
                    message.newPw = reader.string()
                    break
                case 3:
                    message.verCode = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a ResetPswdReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.ResetPswdReq} ResetPswdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPswdReq.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a ResetPswdReq message.
         * @function verify
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetPswdReq.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) {
 if (!$util.isString(message.phoneNumber)) { return 'phoneNumber: string expected' }
}
            if (message.newPw != null && message.hasOwnProperty('newPw')) {
 if (!$util.isString(message.newPw)) { return 'newPw: string expected' }
}
            if (message.verCode != null && message.hasOwnProperty('verCode')) {
 if (!$util.isString(message.verCode)) { return 'verCode: string expected' }
}
            return null
        }

        /**
         * Creates a ResetPswdReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.ResetPswdReq} ResetPswdReq
         */
        ResetPswdReq.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.ResetPswdReq) { return object }
            var message = new $root.login_proto.ResetPswdReq()
            if (object.phoneNumber != null) { message.phoneNumber = String(object.phoneNumber) }
            if (object.newPw != null) { message.newPw = String(object.newPw) }
            if (object.verCode != null) { message.verCode = String(object.verCode) }
            return message
        }

        /**
         * Creates a plain object from a ResetPswdReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.ResetPswdReq
         * @static
         * @param {login_proto.ResetPswdReq} message ResetPswdReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetPswdReq.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.phoneNumber = ''
                object.newPw = ''
                object.verCode = ''
            }
            if (message.phoneNumber != null && message.hasOwnProperty('phoneNumber')) { object.phoneNumber = message.phoneNumber }
            if (message.newPw != null && message.hasOwnProperty('newPw')) { object.newPw = message.newPw }
            if (message.verCode != null && message.hasOwnProperty('verCode')) { object.verCode = message.verCode }
            return object
        }

        /**
         * Converts this ResetPswdReq to JSON.
         * @function toJSON
         * @memberof login_proto.ResetPswdReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetPswdReq.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return ResetPswdReq
    })()

    login_proto.ResetPswdRsp = (function () {
        /**
         * Properties of a ResetPswdRsp.
         * @memberof login_proto
         * @interface IResetPswdRsp
         * @property {number|null} [retCode] ResetPswdRsp retCode
         */

        /**
         * Constructs a new ResetPswdRsp.
         * @memberof login_proto
         * @classdesc Represents a ResetPswdRsp.
         * @implements IResetPswdRsp
         * @constructor
         * @param {login_proto.IResetPswdRsp=} [properties] Properties to set
         */
        function ResetPswdRsp (properties) {
            if (properties) {
 for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
 if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
}
}
        }

        /**
         * ResetPswdRsp retCode.
         * @member {number} retCode
         * @memberof login_proto.ResetPswdRsp
         * @instance
         */
        ResetPswdRsp.prototype.retCode = 0

        /**
         * Creates a new ResetPswdRsp instance using the specified properties.
         * @function create
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {login_proto.IResetPswdRsp=} [properties] Properties to set
         * @returns {login_proto.ResetPswdRsp} ResetPswdRsp instance
         */
        ResetPswdRsp.create = function create (properties) {
            return new ResetPswdRsp(properties)
        }

        /**
         * Encodes the specified ResetPswdRsp message. Does not implicitly {@link login_proto.ResetPswdRsp.verify|verify} messages.
         * @function encode
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {login_proto.IResetPswdRsp} message ResetPswdRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPswdRsp.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.retCode != null && Object.hasOwnProperty.call(message, 'retCode')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.retCode) }
            return writer
        }

        /**
         * Encodes the specified ResetPswdRsp message, length delimited. Does not implicitly {@link login_proto.ResetPswdRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {login_proto.IResetPswdRsp} message ResetPswdRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPswdRsp.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a ResetPswdRsp message from the specified reader or buffer.
         * @function decode
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login_proto.ResetPswdRsp} ResetPswdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPswdRsp.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.login_proto.ResetPswdRsp()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a ResetPswdRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login_proto.ResetPswdRsp} ResetPswdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPswdRsp.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a ResetPswdRsp message.
         * @function verify
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetPswdRsp.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.retCode != null && message.hasOwnProperty('retCode')) {
 if (!$util.isInteger(message.retCode)) { return 'retCode: integer expected' }
}
            return null
        }

        /**
         * Creates a ResetPswdRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login_proto.ResetPswdRsp} ResetPswdRsp
         */
        ResetPswdRsp.fromObject = function fromObject (object) {
            if (object instanceof $root.login_proto.ResetPswdRsp) { return object }
            var message = new $root.login_proto.ResetPswdRsp()
            if (object.retCode != null) { message.retCode = object.retCode | 0 }
            return message
        }

        /**
         * Creates a plain object from a ResetPswdRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login_proto.ResetPswdRsp
         * @static
         * @param {login_proto.ResetPswdRsp} message ResetPswdRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetPswdRsp.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.retCode = 0 }
            if (message.retCode != null && message.hasOwnProperty('retCode')) { object.retCode = message.retCode }
            return object
        }

        /**
         * Converts this ResetPswdRsp to JSON.
         * @function toJSON
         * @memberof login_proto.ResetPswdRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetPswdRsp.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return ResetPswdRsp
    })()

    return login_proto
})()

module.exports = $root
