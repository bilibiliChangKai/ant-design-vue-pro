<template>
  <div class="main">
    <LoginInput :rowKey="rowKey"></LoginInput>
  </div>
</template>

<script>
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import Verify from '@/components/verifition/Verify'
import LoginInput from '@/components/tools/LoginInput.vue'
import { mapActions } from 'vuex'
import { timeFix, encryptPsw } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'
import { login_proto } from '@/proto/login_proto/login_proto'

export default {
  components: {
    TwoStepCaptcha,
    Verify,
    LoginInput,
  },
  data () {
    return {
      customActiveKey: 'tab1',
      rowKey: 0,
    }
  },
  created () {
    get2step({ })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
