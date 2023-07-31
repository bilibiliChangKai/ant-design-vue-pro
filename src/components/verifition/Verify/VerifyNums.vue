<template>
  <div
    style="position: relative"
  >
    <div class="verify-img-out">
      <div
        class="verify-img-panel"
        :style="{'width': setSize.imgWidth,
                 'height': setSize.imgHeight,
                 'background-size' : setSize.imgWidth + ' '+ setSize.imgHeight,
                 'margin-bottom': vSpace + 'px'}"
      >
        <div class="verify-refresh" style="z-index:3" @click="refresh" v-show="showRefresh">
          <i class="iconfont icon-refresh"></i>
        </div>
        <img
          v-show="pointBackImgBase != null"
          :src="pointBackImgBase?('data:image/png;base64,'+pointBackImgBase):defaultImg"
          ref="canvas"
          alt=""
          style="width:100%;height:100%;display:block"

          @click="bindingClick?canvasClick($event):undefined">
      </div>
    </div>
    <!-- 'height': this.barSize.height, -->
    <div
      class="verify-bar-area"
      :style="{
        'width': setSize.imgWidth,
        'color': this.barAreaColor,
        'border-color': this.barAreaBorderColor,
        'line-height':this.barSize.height
      }">
      <span
        class="verify-msg"
        v-text="text"
        :style="{
          'color': this.barAreaBorderColor,
        }"></span>
      <div class="captcha-input">
        <a-input type="text" v-model="userInput" placeholder="请输入验证码" />
        <a-button @click="submitCaptcha" type="primary">提交</a-button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
/**
 * VerifyPoints
 * @description 点选
 * */
import { resetSize, _code_chars, _code_color1, _code_color2 } from './../utils/util'
import { getCapture, sendCode } from '@/api/capture'
import { SUCC_CODE, USER_WRITE_CODE_ERR } from '@/store/retcode'

export default {
    name: 'VerifyPoints',
    props: {
        // 弹出式pop，固定fixed
        mode: {
            type: String,
            default: 'fixed'
        },
        captchaType: {
            type: String
        },
        // 间隔
        vSpace: {
            type: Number,
            default: 5
        },
        imgSize: {
            type: Object,
            default () {
                return {
                    width: '310px',
                    height: '155px'
                }
            }
        },
        barSize: {
            type: Object,
            default () {
                return {
                    width: '310px',
                    height: '40px'
                }
            }
        },
        defaultImg: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            code_id: '',
            userInput: '',
            pointBackImgBase: '', // 后端获取到的背景图片
            setSize: {
                imgHeight: 0,
                imgWidth: 0,
                barHeight: 0,
                barWidth: 0
            },
            text: '',
            barAreaColor: undefined,
            barAreaBorderColor: undefined,
            showRefresh: true,
            bindingClick: true,
        }
    },
    computed: {
        resetSize () {
            return resetSize
        }
    },
    methods: {
        refreshCaptcha () {
            // 根据实际情况生成并获取验证码图片的 URL
            this.refresh()
        },

        async submitCaptcha () {
            // 在这里处理验证码的提交逻辑
            console.log('用户输入的验证码:', this.userInput)

            this.text = null
            const rsp = await sendCode(this.code_id, this.userInput)
            if (rsp !== null && rsp.retCode === SUCC_CODE) {
                // 验证成功
                this.barAreaColor = '#4cae4c'
                this.barAreaBorderColor = '#5cb85c'
                this.text = '验证成功'
                this.bindingClick = false
                if (this.mode == 'pop') {
                    setTimeout(() => {
                        this.$parent.clickShow = false
                        // this.refresh()
                    }, 1500)
                }
                this.$parent.$emit('success')
            } else {
                // 验证失败
                this.$parent.$emit('error', this)
                this.barAreaColor = '#d9534f'
                this.barAreaBorderColor = '#d9534f'
                
                let text = '验证失败'
                if (rsp !== null) {
                    if (rsp.retCode === USER_WRITE_CODE_ERR) {
                        text += ' 输入验证码不正确'
                    }
                    else {
                        text += '错误码：' + rsp.retCode
                    }
                }
                this.text = text
            }

            // 可以在这里发送验证码验证请求等
            // ...
        },

        init () {
            // 加载页面
            this.$nextTick(() => {
                this.setSize = this.resetSize(this)	// 重新设置宽度高度
                this.$parent.$emit('ready', this)
            })
        },
        refresh: function () {
            this.barAreaColor = '#000'
            this.barAreaBorderColor = '#ddd'
            this.bindingClick = true
            this.text = ''
            this.showRefresh = true
            this.userInput = ''
            // 刷新一下图片
            this.getPictrue()
        },

        // 请求背景图片和验证图片
        async getPictrue () {
            this.pointBackImgBase = null

            const rsp = await getCapture()
            if (rsp !== null && rsp.retCode === SUCC_CODE) {
                this.code_id = rsp.codeId
                this.pointBackImgBase = rsp.base64Img
            }
        }
    },
    watch: {
        // type变化则全面刷新
        type: {
            immediate: true,
            handler () {
                this.init()
            }
        }
    },
    mounted () {
        // 禁止拖拽
        this.$el.onselectstart = function () {
            return false
        }
    }
}
</script>

<style>

.verify-msg {
  font-size: 10px;
  position: absolute;
  top: -12px;
  left: 11px;
  margin-top: 0;
  margin-bottom: 0;
}

.captcha-input {
  margin-top: 16px;
  margin-bottom: 12px;
  margin-left: 10px;
  margin-right: 10px;
  background: transparent;
  border: 'none';
  display: flex;
  align-items: center;
}

.captcha-input input {
  width: 70%;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  margin-right: 10px;
}

.captcha-input button {
  width: 30%;
  height: 30px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>
