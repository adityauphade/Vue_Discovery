<template>
  <div class="home">
    <div class="home-header">
      <Header />
      <video class="main-bg" autoplay muted loop>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" type="video/mp4"/>
      </video>
    </div>
        <!-- USING TEMPLATE OF HEADER COMPONENT -->
    <div class="home content"></div>
    <div class="home-footer"><Footer /></div>
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.main-bg{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
// *{
//   background: crimson;
// }
// .home {
//   display: flex;
//   justify-content: center;
// }
</style>