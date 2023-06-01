<template>
  <div>
    <a-card title="图片收藏">
      <div class="image-gallery">
        <div class="image-gallery__display">
          <img :src="displayImage" alt="展示区" />
        </div>
        <div class="image-gallery__collection">
          <a-row :gutter="16">
            <a-col :span="2" v-for="(image, index) in collection" :key="index">
              <a-card :hoverable="true" class="thumbnail-card" @click="handleThumbnailClick(index)">
                <img :src="image.thumbnail" alt="缩略图" />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collection: [
        {
            thumbnail: 'https://i.pinimg.com/474x/6b/91/43/6b91435bd6c0a1da64d293e34b0a9d13.jpg',
            image: 'https://i.pinimg.com/474x/6b/91/43/6b91435bd6c0a1da64d293e34b0a9d13.jpg'
          },
          {
            thumbnail: 'https://img2.woyaogexing.com/2021/08/17/d686699abe2247909206e921c7eae3bb!400x400.png',
            image: 'https://img2.woyaogexing.com/2021/08/17/d686699abe2247909206e921c7eae3bb!400x400.png'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          },
          {
            thumbnail: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg',
            image: 'https://p.qqan.com/up/2021-4/16196618195008329.jpg'
          }
        ],
        displayImage: ''
      }
    },
    methods: {
      handleThumbnailClick (index) {
        this.displayImage = this.collection[index].image
      }
    }
  }
</script>

<style scoped>
.image-gallery {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.image-gallery__display {
width: 512px;
height: 512px;
margin-bottom: 16px;
}

/* .image-gallery__collection {
width: 100%;
}

.thumbnail-card {
border: 1px solid #d9d9d9;
border-radius: 2px;
width: 100%;
height: 0;
padding-bottom: 100%;
overflow: hidden;
}

.thumbnail-card img {
width: 100%;
height: 100%;
object-fit: cover;
} */

.image-gallery__collection {
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.thumbnail-card {
border: 1px solid #d9d9d9;
border-radius: 2px;
width: 100%;
height: 0;
padding-bottom: 100%;
overflow: hidden;
display: flex;
  flex-direction: column;
  align-items: center;
}

.thumbnail-card img {
width: 100%;
height: 100%;
object-fit: cover;
}
</style>
