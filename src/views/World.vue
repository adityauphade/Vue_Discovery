<template>
<div class="world-header"><Header/></div>
<div class="world-content">
  <div class="grid-images">
      <div v-for="(image, id) in imageArray" :key="id" class= "img">
        <img :src="image.src" :alt="id">
        <a href="#">{{image.author}}</a>
      </div>
    </div>
</div>
<div class="world-footer"><Footer/></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  }
})
export default class About extends Vue {
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