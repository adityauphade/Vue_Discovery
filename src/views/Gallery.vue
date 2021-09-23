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
$image-margin-bottom: 5em;
*{
  .title{
      font-size: 80px;
      color: #FFF;
      z-index: 1;
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
  background-image: url("../assets/Gallery/Galleryheader.jpg");
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
.title{
  font-family: 'Gideon Roman', cursive;
}
@media screen and (max-width: 834px) and (min-width: 429px){
.grid-images{
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.title{
  font-size: 60px;
}
}
@media screen and (max-width: 428px) {
.grid-images{
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  div{
    a{
      font-size: 22px;
    }
  }
}
.title{
  font-size: 45px;
}
}
</style>