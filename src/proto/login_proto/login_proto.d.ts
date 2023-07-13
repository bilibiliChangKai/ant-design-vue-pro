import * as $protobuf from "protobufjs";
/** Namespace login_proto. */
export namespace login_proto {

    /** Represents a Login */
    class Login extends $protobuf.rpc.Service {

        /**
         * Constructs a new Login service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Login service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Login;

        /**
         * Calls GetMachineVerify.
         * @param request GetMachineVerifyReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetMachineVerifyRsp
         */
        public getMachineVerify(request: login_proto.IGetMachineVerifyReq, callback: login_proto.Login.GetMachineVerifyCallback): void;

        /**
         * Calls GetMachineVerify.
         * @param request GetMachineVerifyReq message or plain object
         * @returns Promise
         */
        public getMachineVerify(request: login_proto.IGetMachineVerifyReq): Promise<login_proto.GetMachineVerifyRsp>;

        /**
         * Calls SendMachineVerifyResult.
         * @param request SendMachineVerifyResultReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SendMachineVerifyResultRsp
         */
        public sendMachineVerifyResult(request: login_proto.ISendMachineVerifyResultReq, callback: login_proto.Login.SendMachineVerifyResultCallback): void;

        /**
         * Calls SendMachineVerifyResult.
         * @param request SendMachineVerifyResultReq message or plain object
         * @returns Promise
         */
        public sendMachineVerifyResult(request: login_proto.ISendMachineVerifyResultReq): Promise<login_proto.SendMachineVerifyResultRsp>;

        /**
         * Calls SendTextVerCode.
         * @param request SendTextVerCodeReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SendTextVerCodeRsp
         */
        public sendTextVerCode(request: login_proto.ISendTextVerCodeReq, callback: login_proto.Login.SendTextVerCodeCallback): void;

        /**
         * Calls SendTextVerCode.
         * @param request SendTextVerCodeReq message or plain object
         * @returns Promise
         */
        public sendTextVerCode(request: login_proto.ISendTextVerCodeReq): Promise<login_proto.SendTextVerCodeRsp>;

        /**
         * Calls UserPswdLogin.
         * @param request UserPswdLoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UserPswdLoginRsp
         */
        public userPswdLogin(request: login_proto.IUserPswdLoginReq, callback: login_proto.Login.UserPswdLoginCallback): void;

        /**
         * Calls UserPswdLogin.
         * @param request UserPswdLoginReq message or plain object
         * @returns Promise
         */
        public userPswdLogin(request: login_proto.IUserPswdLoginReq): Promise<login_proto.UserPswdLoginRsp>;

        /**
         * Calls UserPhoneLogin.
         * @param request UserPhoneLoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UserPhoneLoginRsp
         */
        public userPhoneLogin(request: login_proto.IUserPhoneLoginReq, callback: login_proto.Login.UserPhoneLoginCallback): void;

        /**
         * Calls UserPhoneLogin.
         * @param request UserPhoneLoginReq message or plain object
         * @returns Promise
         */
        public userPhoneLogin(request: login_proto.IUserPhoneLoginReq): Promise<login_proto.UserPhoneLoginRsp>;

        /**
         * Calls UserRegister.
         * @param request UserRegisterReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UserRegisterRsp
         */
        public userRegister(request: login_proto.IUserRegisterReq, callback: login_proto.Login.UserRegisterCallback): void;

        /**
         * Calls UserRegister.
         * @param request UserRegisterReq message or plain object
         * @returns Promise
         */
        public userRegister(request: login_proto.IUserRegisterReq): Promise<login_proto.UserRegisterRsp>;

        /**
         * Calls ResetPswd.
         * @param request ResetPswdReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ResetPswdRsp
         */
        public resetPswd(request: login_proto.IResetPswdReq, callback: login_proto.Login.ResetPswdCallback): void;

        /**
         * Calls ResetPswd.
         * @param request ResetPswdReq message or plain object
         * @returns Promise
         */
        public resetPswd(request: login_proto.IResetPswdReq): Promise<login_proto.ResetPswdRsp>;
    }

    namespace Login {

        /**
         * Callback as used by {@link login_proto.Login#getMachineVerify}.
         * @param error Error, if any
         * @param [response] GetMachineVerifyRsp
         */
        type GetMachineVerifyCallback = (error: (Error|null), response?: login_proto.GetMachineVerifyRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#sendMachineVerifyResult}.
         * @param error Error, if any
         * @param [response] SendMachineVerifyResultRsp
         */
        type SendMachineVerifyResultCallback = (error: (Error|null), response?: login_proto.SendMachineVerifyResultRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#sendTextVerCode}.
         * @param error Error, if any
         * @param [response] SendTextVerCodeRsp
         */
        type SendTextVerCodeCallback = (error: (Error|null), response?: login_proto.SendTextVerCodeRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#userPswdLogin}.
         * @param error Error, if any
         * @param [response] UserPswdLoginRsp
         */
        type UserPswdLoginCallback = (error: (Error|null), response?: login_proto.UserPswdLoginRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#userPhoneLogin}.
         * @param error Error, if any
         * @param [response] UserPhoneLoginRsp
         */
        type UserPhoneLoginCallback = (error: (Error|null), response?: login_proto.UserPhoneLoginRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#userRegister}.
         * @param error Error, if any
         * @param [response] UserRegisterRsp
         */
        type UserRegisterCallback = (error: (Error|null), response?: login_proto.UserRegisterRsp) => void;

        /**
         * Callback as used by {@link login_proto.Login#resetPswd}.
         * @param error Error, if any
         * @param [response] ResetPswdRsp
         */
        type ResetPswdCallback = (error: (Error|null), response?: login_proto.ResetPswdRsp) => void;
    }

    /** VerType enum. */
    enum VerType {
        Invalid = 0,
        LoginVerify = 1,
        RegisterVerify = 2,
        ResetPsWdVerify = 3
    }

    /** Properties of an EmptyReq. */
    interface IEmptyReq {
    }

    /** Represents an EmptyReq. */
    class EmptyReq implements IEmptyReq {

        /**
         * Constructs a new EmptyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IEmptyReq);

        /**
         * Creates a new EmptyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyReq instance
         */
        public static create(properties?: login_proto.IEmptyReq): login_proto.EmptyReq;

        /**
         * Encodes the specified EmptyReq message. Does not implicitly {@link login_proto.EmptyReq.verify|verify} messages.
         * @param message EmptyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IEmptyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyReq message, length delimited. Does not implicitly {@link login_proto.EmptyReq.verify|verify} messages.
         * @param message EmptyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IEmptyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.EmptyReq;

        /**
         * Decodes an EmptyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.EmptyReq;

        /**
         * Verifies an EmptyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.EmptyReq;

        /**
         * Creates a plain object from an EmptyReq message. Also converts values to other types if specified.
         * @param message EmptyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.EmptyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmptyRsp. */
    interface IEmptyRsp {
    }

    /** Represents an EmptyRsp. */
    class EmptyRsp implements IEmptyRsp {

        /**
         * Constructs a new EmptyRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IEmptyRsp);

        /**
         * Creates a new EmptyRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyRsp instance
         */
        public static create(properties?: login_proto.IEmptyRsp): login_proto.EmptyRsp;

        /**
         * Encodes the specified EmptyRsp message. Does not implicitly {@link login_proto.EmptyRsp.verify|verify} messages.
         * @param message EmptyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IEmptyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyRsp message, length delimited. Does not implicitly {@link login_proto.EmptyRsp.verify|verify} messages.
         * @param message EmptyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IEmptyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.EmptyRsp;

        /**
         * Decodes an EmptyRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.EmptyRsp;

        /**
         * Verifies an EmptyRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.EmptyRsp;

        /**
         * Creates a plain object from an EmptyRsp message. Also converts values to other types if specified.
         * @param message EmptyRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.EmptyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMachineVerifyReq. */
    interface IGetMachineVerifyReq {
    }

    /** Represents a GetMachineVerifyReq. */
    class GetMachineVerifyReq implements IGetMachineVerifyReq {

        /**
         * Constructs a new GetMachineVerifyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IGetMachineVerifyReq);

        /**
         * Creates a new GetMachineVerifyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMachineVerifyReq instance
         */
        public static create(properties?: login_proto.IGetMachineVerifyReq): login_proto.GetMachineVerifyReq;

        /**
         * Encodes the specified GetMachineVerifyReq message. Does not implicitly {@link login_proto.GetMachineVerifyReq.verify|verify} messages.
         * @param message GetMachineVerifyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IGetMachineVerifyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMachineVerifyReq message, length delimited. Does not implicitly {@link login_proto.GetMachineVerifyReq.verify|verify} messages.
         * @param message GetMachineVerifyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IGetMachineVerifyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMachineVerifyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMachineVerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.GetMachineVerifyReq;

        /**
         * Decodes a GetMachineVerifyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMachineVerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.GetMachineVerifyReq;

        /**
         * Verifies a GetMachineVerifyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMachineVerifyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMachineVerifyReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.GetMachineVerifyReq;

        /**
         * Creates a plain object from a GetMachineVerifyReq message. Also converts values to other types if specified.
         * @param message GetMachineVerifyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.GetMachineVerifyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMachineVerifyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMachineVerifyRsp. */
    interface IGetMachineVerifyRsp {

        /** GetMachineVerifyRsp retCode */
        retCode?: (number|null);

        /** GetMachineVerifyRsp codeId */
        codeId?: (string|null);

        /** GetMachineVerifyRsp base64Img */
        base64Img?: (string|null);
    }

    /** Represents a GetMachineVerifyRsp. */
    class GetMachineVerifyRsp implements IGetMachineVerifyRsp {

        /**
         * Constructs a new GetMachineVerifyRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IGetMachineVerifyRsp);

        /** GetMachineVerifyRsp retCode. */
        public retCode: number;

        /** GetMachineVerifyRsp codeId. */
        public codeId: string;

        /** GetMachineVerifyRsp base64Img. */
        public base64Img: string;

        /**
         * Creates a new GetMachineVerifyRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMachineVerifyRsp instance
         */
        public static create(properties?: login_proto.IGetMachineVerifyRsp): login_proto.GetMachineVerifyRsp;

        /**
         * Encodes the specified GetMachineVerifyRsp message. Does not implicitly {@link login_proto.GetMachineVerifyRsp.verify|verify} messages.
         * @param message GetMachineVerifyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IGetMachineVerifyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMachineVerifyRsp message, length delimited. Does not implicitly {@link login_proto.GetMachineVerifyRsp.verify|verify} messages.
         * @param message GetMachineVerifyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IGetMachineVerifyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMachineVerifyRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMachineVerifyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.GetMachineVerifyRsp;

        /**
         * Decodes a GetMachineVerifyRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMachineVerifyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.GetMachineVerifyRsp;

        /**
         * Verifies a GetMachineVerifyRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMachineVerifyRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMachineVerifyRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.GetMachineVerifyRsp;

        /**
         * Creates a plain object from a GetMachineVerifyRsp message. Also converts values to other types if specified.
         * @param message GetMachineVerifyRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.GetMachineVerifyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMachineVerifyRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMachineVerifyResultReq. */
    interface ISendMachineVerifyResultReq {

        /** SendMachineVerifyResultReq codeId */
        codeId?: (string|null);

        /** SendMachineVerifyResultReq ans */
        ans?: (string|null);
    }

    /** Represents a SendMachineVerifyResultReq. */
    class SendMachineVerifyResultReq implements ISendMachineVerifyResultReq {

        /**
         * Constructs a new SendMachineVerifyResultReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.ISendMachineVerifyResultReq);

        /** SendMachineVerifyResultReq codeId. */
        public codeId: string;

        /** SendMachineVerifyResultReq ans. */
        public ans: string;

        /**
         * Creates a new SendMachineVerifyResultReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMachineVerifyResultReq instance
         */
        public static create(properties?: login_proto.ISendMachineVerifyResultReq): login_proto.SendMachineVerifyResultReq;

        /**
         * Encodes the specified SendMachineVerifyResultReq message. Does not implicitly {@link login_proto.SendMachineVerifyResultReq.verify|verify} messages.
         * @param message SendMachineVerifyResultReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.ISendMachineVerifyResultReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMachineVerifyResultReq message, length delimited. Does not implicitly {@link login_proto.SendMachineVerifyResultReq.verify|verify} messages.
         * @param message SendMachineVerifyResultReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.ISendMachineVerifyResultReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMachineVerifyResultReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMachineVerifyResultReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.SendMachineVerifyResultReq;

        /**
         * Decodes a SendMachineVerifyResultReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMachineVerifyResultReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.SendMachineVerifyResultReq;

        /**
         * Verifies a SendMachineVerifyResultReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMachineVerifyResultReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMachineVerifyResultReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.SendMachineVerifyResultReq;

        /**
         * Creates a plain object from a SendMachineVerifyResultReq message. Also converts values to other types if specified.
         * @param message SendMachineVerifyResultReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.SendMachineVerifyResultReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMachineVerifyResultReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMachineVerifyResultRsp. */
    interface ISendMachineVerifyResultRsp {

        /** SendMachineVerifyResultRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a SendMachineVerifyResultRsp. */
    class SendMachineVerifyResultRsp implements ISendMachineVerifyResultRsp {

        /**
         * Constructs a new SendMachineVerifyResultRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.ISendMachineVerifyResultRsp);

        /** SendMachineVerifyResultRsp retCode. */
        public retCode: number;

        /**
         * Creates a new SendMachineVerifyResultRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMachineVerifyResultRsp instance
         */
        public static create(properties?: login_proto.ISendMachineVerifyResultRsp): login_proto.SendMachineVerifyResultRsp;

        /**
         * Encodes the specified SendMachineVerifyResultRsp message. Does not implicitly {@link login_proto.SendMachineVerifyResultRsp.verify|verify} messages.
         * @param message SendMachineVerifyResultRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.ISendMachineVerifyResultRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMachineVerifyResultRsp message, length delimited. Does not implicitly {@link login_proto.SendMachineVerifyResultRsp.verify|verify} messages.
         * @param message SendMachineVerifyResultRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.ISendMachineVerifyResultRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMachineVerifyResultRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMachineVerifyResultRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.SendMachineVerifyResultRsp;

        /**
         * Decodes a SendMachineVerifyResultRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMachineVerifyResultRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.SendMachineVerifyResultRsp;

        /**
         * Verifies a SendMachineVerifyResultRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMachineVerifyResultRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMachineVerifyResultRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.SendMachineVerifyResultRsp;

        /**
         * Creates a plain object from a SendMachineVerifyResultRsp message. Also converts values to other types if specified.
         * @param message SendMachineVerifyResultRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.SendMachineVerifyResultRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMachineVerifyResultRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendTextVerCodeReq. */
    interface ISendTextVerCodeReq {

        /** SendTextVerCodeReq phoneNumber */
        phoneNumber?: (string|null);

        /** SendTextVerCodeReq verType */
        verType?: (login_proto.VerType|null);
    }

    /** Represents a SendTextVerCodeReq. */
    class SendTextVerCodeReq implements ISendTextVerCodeReq {

        /**
         * Constructs a new SendTextVerCodeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.ISendTextVerCodeReq);

        /** SendTextVerCodeReq phoneNumber. */
        public phoneNumber: string;

        /** SendTextVerCodeReq verType. */
        public verType: login_proto.VerType;

        /**
         * Creates a new SendTextVerCodeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendTextVerCodeReq instance
         */
        public static create(properties?: login_proto.ISendTextVerCodeReq): login_proto.SendTextVerCodeReq;

        /**
         * Encodes the specified SendTextVerCodeReq message. Does not implicitly {@link login_proto.SendTextVerCodeReq.verify|verify} messages.
         * @param message SendTextVerCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.ISendTextVerCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendTextVerCodeReq message, length delimited. Does not implicitly {@link login_proto.SendTextVerCodeReq.verify|verify} messages.
         * @param message SendTextVerCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.ISendTextVerCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendTextVerCodeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendTextVerCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.SendTextVerCodeReq;

        /**
         * Decodes a SendTextVerCodeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendTextVerCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.SendTextVerCodeReq;

        /**
         * Verifies a SendTextVerCodeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendTextVerCodeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendTextVerCodeReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.SendTextVerCodeReq;

        /**
         * Creates a plain object from a SendTextVerCodeReq message. Also converts values to other types if specified.
         * @param message SendTextVerCodeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.SendTextVerCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendTextVerCodeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendTextVerCodeRsp. */
    interface ISendTextVerCodeRsp {

        /** SendTextVerCodeRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a SendTextVerCodeRsp. */
    class SendTextVerCodeRsp implements ISendTextVerCodeRsp {

        /**
         * Constructs a new SendTextVerCodeRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.ISendTextVerCodeRsp);

        /** SendTextVerCodeRsp retCode. */
        public retCode: number;

        /**
         * Creates a new SendTextVerCodeRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendTextVerCodeRsp instance
         */
        public static create(properties?: login_proto.ISendTextVerCodeRsp): login_proto.SendTextVerCodeRsp;

        /**
         * Encodes the specified SendTextVerCodeRsp message. Does not implicitly {@link login_proto.SendTextVerCodeRsp.verify|verify} messages.
         * @param message SendTextVerCodeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.ISendTextVerCodeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendTextVerCodeRsp message, length delimited. Does not implicitly {@link login_proto.SendTextVerCodeRsp.verify|verify} messages.
         * @param message SendTextVerCodeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.ISendTextVerCodeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendTextVerCodeRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendTextVerCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.SendTextVerCodeRsp;

        /**
         * Decodes a SendTextVerCodeRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendTextVerCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.SendTextVerCodeRsp;

        /**
         * Verifies a SendTextVerCodeRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendTextVerCodeRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendTextVerCodeRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.SendTextVerCodeRsp;

        /**
         * Creates a plain object from a SendTextVerCodeRsp message. Also converts values to other types if specified.
         * @param message SendTextVerCodeRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.SendTextVerCodeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendTextVerCodeRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserPswdLoginReq. */
    interface IUserPswdLoginReq {

        /** UserPswdLoginReq phoneNumber */
        phoneNumber?: (string|null);

        /** UserPswdLoginReq a1 */
        a1?: (string|null);
    }

    /** Represents a UserPswdLoginReq. */
    class UserPswdLoginReq implements IUserPswdLoginReq {

        /**
         * Constructs a new UserPswdLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserPswdLoginReq);

        /** UserPswdLoginReq phoneNumber. */
        public phoneNumber: string;

        /** UserPswdLoginReq a1. */
        public a1: string;

        /**
         * Creates a new UserPswdLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPswdLoginReq instance
         */
        public static create(properties?: login_proto.IUserPswdLoginReq): login_proto.UserPswdLoginReq;

        /**
         * Encodes the specified UserPswdLoginReq message. Does not implicitly {@link login_proto.UserPswdLoginReq.verify|verify} messages.
         * @param message UserPswdLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserPswdLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPswdLoginReq message, length delimited. Does not implicitly {@link login_proto.UserPswdLoginReq.verify|verify} messages.
         * @param message UserPswdLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserPswdLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPswdLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPswdLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserPswdLoginReq;

        /**
         * Decodes a UserPswdLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserPswdLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserPswdLoginReq;

        /**
         * Verifies a UserPswdLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPswdLoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPswdLoginReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserPswdLoginReq;

        /**
         * Creates a plain object from a UserPswdLoginReq message. Also converts values to other types if specified.
         * @param message UserPswdLoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserPswdLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPswdLoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserPswdLoginRsp. */
    interface IUserPswdLoginRsp {

        /** UserPswdLoginRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a UserPswdLoginRsp. */
    class UserPswdLoginRsp implements IUserPswdLoginRsp {

        /**
         * Constructs a new UserPswdLoginRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserPswdLoginRsp);

        /** UserPswdLoginRsp retCode. */
        public retCode: number;

        /**
         * Creates a new UserPswdLoginRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPswdLoginRsp instance
         */
        public static create(properties?: login_proto.IUserPswdLoginRsp): login_proto.UserPswdLoginRsp;

        /**
         * Encodes the specified UserPswdLoginRsp message. Does not implicitly {@link login_proto.UserPswdLoginRsp.verify|verify} messages.
         * @param message UserPswdLoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserPswdLoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPswdLoginRsp message, length delimited. Does not implicitly {@link login_proto.UserPswdLoginRsp.verify|verify} messages.
         * @param message UserPswdLoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserPswdLoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPswdLoginRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPswdLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserPswdLoginRsp;

        /**
         * Decodes a UserPswdLoginRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserPswdLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserPswdLoginRsp;

        /**
         * Verifies a UserPswdLoginRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPswdLoginRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPswdLoginRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserPswdLoginRsp;

        /**
         * Creates a plain object from a UserPswdLoginRsp message. Also converts values to other types if specified.
         * @param message UserPswdLoginRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserPswdLoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPswdLoginRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserPhoneLoginReq. */
    interface IUserPhoneLoginReq {

        /** UserPhoneLoginReq phoneNumber */
        phoneNumber?: (string|null);

        /** UserPhoneLoginReq verCode */
        verCode?: (string|null);
    }

    /** Represents a UserPhoneLoginReq. */
    class UserPhoneLoginReq implements IUserPhoneLoginReq {

        /**
         * Constructs a new UserPhoneLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserPhoneLoginReq);

        /** UserPhoneLoginReq phoneNumber. */
        public phoneNumber: string;

        /** UserPhoneLoginReq verCode. */
        public verCode: string;

        /**
         * Creates a new UserPhoneLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPhoneLoginReq instance
         */
        public static create(properties?: login_proto.IUserPhoneLoginReq): login_proto.UserPhoneLoginReq;

        /**
         * Encodes the specified UserPhoneLoginReq message. Does not implicitly {@link login_proto.UserPhoneLoginReq.verify|verify} messages.
         * @param message UserPhoneLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserPhoneLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPhoneLoginReq message, length delimited. Does not implicitly {@link login_proto.UserPhoneLoginReq.verify|verify} messages.
         * @param message UserPhoneLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserPhoneLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPhoneLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPhoneLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserPhoneLoginReq;

        /**
         * Decodes a UserPhoneLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserPhoneLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserPhoneLoginReq;

        /**
         * Verifies a UserPhoneLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPhoneLoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPhoneLoginReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserPhoneLoginReq;

        /**
         * Creates a plain object from a UserPhoneLoginReq message. Also converts values to other types if specified.
         * @param message UserPhoneLoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserPhoneLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPhoneLoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserPhoneLoginRsp. */
    interface IUserPhoneLoginRsp {

        /** UserPhoneLoginRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a UserPhoneLoginRsp. */
    class UserPhoneLoginRsp implements IUserPhoneLoginRsp {

        /**
         * Constructs a new UserPhoneLoginRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserPhoneLoginRsp);

        /** UserPhoneLoginRsp retCode. */
        public retCode: number;

        /**
         * Creates a new UserPhoneLoginRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPhoneLoginRsp instance
         */
        public static create(properties?: login_proto.IUserPhoneLoginRsp): login_proto.UserPhoneLoginRsp;

        /**
         * Encodes the specified UserPhoneLoginRsp message. Does not implicitly {@link login_proto.UserPhoneLoginRsp.verify|verify} messages.
         * @param message UserPhoneLoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserPhoneLoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPhoneLoginRsp message, length delimited. Does not implicitly {@link login_proto.UserPhoneLoginRsp.verify|verify} messages.
         * @param message UserPhoneLoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserPhoneLoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPhoneLoginRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPhoneLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserPhoneLoginRsp;

        /**
         * Decodes a UserPhoneLoginRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserPhoneLoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserPhoneLoginRsp;

        /**
         * Verifies a UserPhoneLoginRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPhoneLoginRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPhoneLoginRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserPhoneLoginRsp;

        /**
         * Creates a plain object from a UserPhoneLoginRsp message. Also converts values to other types if specified.
         * @param message UserPhoneLoginRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserPhoneLoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPhoneLoginRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserRegisterReq. */
    interface IUserRegisterReq {

        /** UserRegisterReq phoneNumber */
        phoneNumber?: (string|null);

        /** UserRegisterReq verCode */
        verCode?: (string|null);

        /** UserRegisterReq passwd */
        passwd?: (string|null);
    }

    /** Represents a UserRegisterReq. */
    class UserRegisterReq implements IUserRegisterReq {

        /**
         * Constructs a new UserRegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserRegisterReq);

        /** UserRegisterReq phoneNumber. */
        public phoneNumber: string;

        /** UserRegisterReq verCode. */
        public verCode: string;

        /** UserRegisterReq passwd. */
        public passwd: string;

        /**
         * Creates a new UserRegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRegisterReq instance
         */
        public static create(properties?: login_proto.IUserRegisterReq): login_proto.UserRegisterReq;

        /**
         * Encodes the specified UserRegisterReq message. Does not implicitly {@link login_proto.UserRegisterReq.verify|verify} messages.
         * @param message UserRegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRegisterReq message, length delimited. Does not implicitly {@link login_proto.UserRegisterReq.verify|verify} messages.
         * @param message UserRegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserRegisterReq;

        /**
         * Decodes a UserRegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserRegisterReq;

        /**
         * Verifies a UserRegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserRegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserRegisterReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserRegisterReq;

        /**
         * Creates a plain object from a UserRegisterReq message. Also converts values to other types if specified.
         * @param message UserRegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserRegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserRegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserRegisterRsp. */
    interface IUserRegisterRsp {

        /** UserRegisterRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a UserRegisterRsp. */
    class UserRegisterRsp implements IUserRegisterRsp {

        /**
         * Constructs a new UserRegisterRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IUserRegisterRsp);

        /** UserRegisterRsp retCode. */
        public retCode: number;

        /**
         * Creates a new UserRegisterRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRegisterRsp instance
         */
        public static create(properties?: login_proto.IUserRegisterRsp): login_proto.UserRegisterRsp;

        /**
         * Encodes the specified UserRegisterRsp message. Does not implicitly {@link login_proto.UserRegisterRsp.verify|verify} messages.
         * @param message UserRegisterRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IUserRegisterRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRegisterRsp message, length delimited. Does not implicitly {@link login_proto.UserRegisterRsp.verify|verify} messages.
         * @param message UserRegisterRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IUserRegisterRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRegisterRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRegisterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.UserRegisterRsp;

        /**
         * Decodes a UserRegisterRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRegisterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.UserRegisterRsp;

        /**
         * Verifies a UserRegisterRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserRegisterRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserRegisterRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.UserRegisterRsp;

        /**
         * Creates a plain object from a UserRegisterRsp message. Also converts values to other types if specified.
         * @param message UserRegisterRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.UserRegisterRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserRegisterRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResetPswdReq. */
    interface IResetPswdReq {

        /** ResetPswdReq phoneNumber */
        phoneNumber?: (string|null);

        /** ResetPswdReq newPw */
        newPw?: (string|null);

        /** ResetPswdReq verCode */
        verCode?: (string|null);
    }

    /** Represents a ResetPswdReq. */
    class ResetPswdReq implements IResetPswdReq {

        /**
         * Constructs a new ResetPswdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IResetPswdReq);

        /** ResetPswdReq phoneNumber. */
        public phoneNumber: string;

        /** ResetPswdReq newPw. */
        public newPw: string;

        /** ResetPswdReq verCode. */
        public verCode: string;

        /**
         * Creates a new ResetPswdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResetPswdReq instance
         */
        public static create(properties?: login_proto.IResetPswdReq): login_proto.ResetPswdReq;

        /**
         * Encodes the specified ResetPswdReq message. Does not implicitly {@link login_proto.ResetPswdReq.verify|verify} messages.
         * @param message ResetPswdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IResetPswdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResetPswdReq message, length delimited. Does not implicitly {@link login_proto.ResetPswdReq.verify|verify} messages.
         * @param message ResetPswdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IResetPswdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResetPswdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResetPswdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.ResetPswdReq;

        /**
         * Decodes a ResetPswdReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResetPswdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.ResetPswdReq;

        /**
         * Verifies a ResetPswdReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResetPswdReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResetPswdReq
         */
        public static fromObject(object: { [k: string]: any }): login_proto.ResetPswdReq;

        /**
         * Creates a plain object from a ResetPswdReq message. Also converts values to other types if specified.
         * @param message ResetPswdReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.ResetPswdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResetPswdReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResetPswdRsp. */
    interface IResetPswdRsp {

        /** ResetPswdRsp retCode */
        retCode?: (number|null);
    }

    /** Represents a ResetPswdRsp. */
    class ResetPswdRsp implements IResetPswdRsp {

        /**
         * Constructs a new ResetPswdRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login_proto.IResetPswdRsp);

        /** ResetPswdRsp retCode. */
        public retCode: number;

        /**
         * Creates a new ResetPswdRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResetPswdRsp instance
         */
        public static create(properties?: login_proto.IResetPswdRsp): login_proto.ResetPswdRsp;

        /**
         * Encodes the specified ResetPswdRsp message. Does not implicitly {@link login_proto.ResetPswdRsp.verify|verify} messages.
         * @param message ResetPswdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login_proto.IResetPswdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResetPswdRsp message, length delimited. Does not implicitly {@link login_proto.ResetPswdRsp.verify|verify} messages.
         * @param message ResetPswdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login_proto.IResetPswdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResetPswdRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResetPswdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_proto.ResetPswdRsp;

        /**
         * Decodes a ResetPswdRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResetPswdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_proto.ResetPswdRsp;

        /**
         * Verifies a ResetPswdRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResetPswdRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResetPswdRsp
         */
        public static fromObject(object: { [k: string]: any }): login_proto.ResetPswdRsp;

        /**
         * Creates a plain object from a ResetPswdRsp message. Also converts values to other types if specified.
         * @param message ResetPswdRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login_proto.ResetPswdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResetPswdRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
