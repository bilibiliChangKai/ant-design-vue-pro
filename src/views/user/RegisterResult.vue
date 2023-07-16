<template>
  <a-result
    :isSuccess="true"
    :content="false"
    :title="email"
    :status="'success'"
    :sub-title="description">

    <template #extra>
      <!-- <a-button size="large" type="primary">查看邮箱</a-button> -->
      <!-- <a-button size="large" style="margin-left: 8px" @click="goHomeHandle">返回首页</a-button> -->
      <a-button size="large" @click="goHomeHandle">返回登录页面</a-button>
    </template>

  </a-result>
</template>

<script>
export default {
  name: 'RegisterResult',
  data () {
    return {
      description: '',
      form: {}
    }
  },
  computed: {
    email () {
      return this.form && this.form.title || ''
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    goHomeHandle () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
