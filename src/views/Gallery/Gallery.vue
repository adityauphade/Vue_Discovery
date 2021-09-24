<template>
  <div class="gallery-header">
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
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'

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
      src: require ('@/assets/Gallery/outdoor-pursuits.jpg'),
      author: 'Outdoor Pursuits',
    },
    {
      src: require ('@/assets/Gallery/golf.jpg'),
      author: 'Golf',
    },
    {
      src: require ('@/assets/Gallery/lifestyle.jpeg'),
      author: 'Lifestyle',
    },
    {
      src: require ('@/assets/Gallery/landscapes.jpg'),
      author: 'Landscapes',
    },
    {
      src: require ('@/assets/Gallery/clubhouses.jpg'),
      author: 'Clubhouses',
    },
    {
      src: require ('@/assets/Gallery/wellness.jpg'),
      author: 'Wellness',
    },
  ]
}
</script>

<style lang="scss" scoped>
@import './Gallery.scss';
</style>