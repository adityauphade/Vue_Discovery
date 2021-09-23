<template>
  <div :style="{
    background: require ('/src/assets/Galleryheader.jpg')
  }" class="gallery-header">
    <Header/>
    <div class="title">Gallery</div>
  </div>
  <div class="gallery-content">
    <div class="grid-images">
      <div v-for="(image, id) in imageArray" :key="id" class= "img">
        <img :src="image.src" :alt="id">
        <a href="#">{{image.author}}</a>
      </div>
    </div>
  </div>
  <div class="gallery-footer">
      <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer.vue'

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  }
})
export default class Gallery extends Vue {
  protected imageArray:{
    src: string,
    author: string,
  }[] = [
    {
      src: require ('@/assets/outdoor-pursuits.jpg'),
      author: 'Outdoor Pursuits',
    },
    {
      src: require ('@/assets/golf.jpg'),
      author: 'Golf',
    },
    {
      src: require ('@/assets/lifestyle.jpeg'),
      author: 'Lifestyle',
    },
    {
      src: require ('@/assets/landscapes.jpg'),
      author: 'Landscapes',
    },
    {
      src: require ('@/assets/clubhouses.jpg'),
      author: 'Clubhouses',
    },
    {
      src: require ('@/assets/wellness.jpg'),
      author: 'Wellness',
    },
  ]
}
</script>

<style lang="scss" scoped>
$image-margin-bottom: 5em;
*{
  .title{
      font-size: 80px;
      color: #FFF;
      z-index: 1;
      font-family: 'messina-sans';
      text-align: center;
      width: 70vw;
      display: flex;
      margin: auto;
      height: 60vh;
      align-items: center;
  }
  .grid-images{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: $image-margin-bottom;
      // grid-gap: 5em 0em;
      div{
          display: flex;
          flex-direction: column;
          align-items: center;
          a{
            padding-top: 35px;
            font-size: 25px;
            font-family: 'Gideon Roman', cursive;
            text-decoration: none;
            text-align: center;
            color: #FFF;
          }
          img{
            width: 100%;
          }
      }
  }
}
.gallery-header{
    // background-image: url("@/assets/Galleryheader.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
}
body{
  width: 100vw;
}
.gallery-footer{
  margin-top: $image-margin-bottom;
}
</style>