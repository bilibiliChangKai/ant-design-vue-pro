<template>
  <div class="page-container">
    <a-card title="文生图功能" bordered>
      <div class="content-container">
        <!-- 左侧 -->
        <div class="left-panel">
          <div class="section">
            <span class="section-title">画面描述</span>
            <a-textarea v-model="description" :auto-size="{ minRows: 3 }" />
          </div>

          <div class="section">
            <span class="section-title">选择大小</span>
            <a-select v-model="size" style="width: 100%">
              <a-select-option value="512x512">512x512</a-select-option>
              <a-select-option value="256x256">256x256</a-select-option>
            </a-select>
          </div>

          <div class="section">
            <span class="section-title">选择张数</span>
            <a-slider v-model="count" :min="1" :max="10" />
          </div>
        </div>

        <!-- 中间 -->
        <div class="middle-panel">
          <div class="section">
            <span class="section-title">选择风格</span>
            <div class="style-list">
              <div
                class="style-card"
                v-for="(style, index) in styles"
                :key="index"
              >
                <image-loader :src="style.image" style="width: 60%" />
                <div class="image-description">{{ style.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧 -->
        <div class="right-panel">
          <div class="section">
            <span class="section-title">生成结果</span>
            <div class="result-container">
              <div class="result-image">
                <image-loader :src="resultImage" fit="contain" />
                <image-loader
                  v-for="(thumbnail, index) in thumbnailList"
                  :key="index"
                  :src="thumbnail"
                  fit="contain"
                />
              </div>
            </div>
          </div>

          <div class="section">
            <a-button type="primary" @click="handleSubmit" class="generate-button">立刻生成</a-button>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getImageUrl } from '@/api/test'
import { login_proto } from '@/proto/login_proto/login_proto'

export default {
  setup () {
    const description = ref('')
    const resultImage = ref('')

    const handleSubmit = async () => {
      if (!description.value) {
        alert('请输入关键字')
        return
      }

      debugger

      var req = login_proto.UserPswdLoginReq.create()
      req.phoneNumber = '123321123'

      // 调用后台接口，根据用户输入的关键字和选择的模型、子模型获取图片链接
      const formData = login_proto.UserPswdLoginReq.encode(req).finish()

      getImageUrl(formData).then(res => {
          resultImage.value = res.data.imageUrl
      }).catch(err => {
          console.error(`load user err: ${err.message}`)
          resultImage.value = 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
      })
    }

    return {
      description: description,
      size: '512x512',
      count: 1,
      styles: [
        {
          name: '风格1',
          image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
          description: '风格1的描述'
        },
        {
          name: '风格2',
          image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
          description: '风格2的描述'
        }
        // 添加更多风格...
      ],
      resultImage: resultImage,
      thumbnailList: [
        // 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
        // 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
        // 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
      ],
      handleSubmit
    }
  },
  methods: {
    // 处理生成结果的逻辑...
  }
}
</script>

<style scoped>
.page-container {
  padding: 24px;
}

.main-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 24px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}

.content-container {
  display: flex;
  justify-content: space-between;
}

.left-panel {
  width: 32%;
  padding-right: 16px;
}

.middle-panel {
  width: 28%;
  padding: 16px 16px;
}

.right-panel {
  width: 40%;
  padding-left: 16px;
}

.section {
  margin-bottom: 16px;
}

.section-title {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.style-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
}

.style-card {
  width: 100%;
}

.image-description {
  margin-top: 8px;
}

.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-image {
  width: 512px;
  height: 512px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.thumbnail-list {
  width: 64px;
  height: 64px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.generate-button {
  width: 60%;
  display: center;
  flex-direction: column;
  align-items: center;
}
</style>
