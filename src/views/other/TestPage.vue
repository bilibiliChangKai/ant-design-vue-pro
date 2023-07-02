<template>
  <div>
    <a-card title="文生图功能">
      <div>选择模型</div>
      <a-select v-model="selectedModel" style="width: 400px; margin-top: 10px">
        <a-select-option
          v-for="model in models"
          :key="model.value"
          :value="model.value"
        >
          {{ model.label }}
        </a-select-option>
      </a-select>

      <div style="margin-top: 20px">选择子模型</div>
      <a-select v-model="selectedSubModel" style="width: 400px; margin-top: 10px">
        <a-select-option
          v-for="subModel in subModels"
          :key="subModel.value"
          :value="subModel.value"
        >
          {{ subModel.label }}
        </a-select-option>
      </a-select>

      <div style="margin-top: 20px">关键字输入</div>
      <a-input
        v-model="keyword"
        placeholder="请输入关键字"
        style="width: 400px; margin-top: 10px"
      />
      <a-button type="primary" @click="handleSubmit" style="margin-left: 10px">
        确认
      </a-button>

      <div v-if="imageUrl" style="margin-top: 50px">
        <img :src="imageUrl" alt="文生图" width="512" height="512" />
      </div>
    </a-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getImageUrl } from '@/api/test'

export default {
  setup () {
    const models = [
      { label: '模型1', value: 'model1' },
      { label: '模型2', value: 'model2' }
      // ...
    ]

    const subModels = [
      { label: '子模型1', value: 'subModel1' },
      { label: '子模型2', value: 'subModel2' }
      // ...
    ]

    const selectedModel = ref(models[0].value)
    const selectedSubModel = ref(subModels[0].value)
    const keyword = ref('')
    const imageUrl = ref('')

    const handleSubmit = async () => {
      if (!keyword.value) {
        alert('请输入关键字')
        return
      }

      debugger

      // 调用后台接口，根据用户输入的关键字和选择的模型、子模型获取图片链接
      const formData = JSON.stringify({
          model: selectedModel.value,
          subModel: selectedSubModel.value,
          keyword: keyword.value
      })

      getImageUrl(formData).then(res => {
          imageUrl.value = res.data.imageUrl
      }).catch(err => {
          console.error(`load user err: ${err.message}`)
          imageUrl.value = 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
      })
    }

    return {
      models,
      subModels,
      selectedModel,
      selectedSubModel,
      keyword,
      imageUrl,
      handleSubmit
    }
  }
}
</script>
