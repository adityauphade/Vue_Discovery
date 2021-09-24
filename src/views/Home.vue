<template>
  <div class="home">
    <div class="home-header"><Header /></div>
      <video class="home-bg" autoplay muted loop>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" type="video/mp4"/>
      </video>
        <!-- USING TEMPLATE OF HEADER COMPONENT -->
    <div class="home content">
        <!-- WELCOME -->
    <!-- welcome section -->
      <section id="welcome">
        <div class="top-left">
          <h1 class="welcome-to-our-world">
            <span class="welcome-to">
              Welcome to
            </span>
            <span class="our-world">
              our world
            </span>
          </h1>
          <p class="welcome-text">
            Discover the unique atmosphere of our private residential club
            communities. Once experienced. Never forgotten. This is classic,
            comfortable, modern living in nature’s most spectacular settings
            worldwide. Reassuringly exclusive. Generously welcoming. Find your
            unique world – a place where families love to be; creating
            unforgettable moments, together.
          </p>
        </div>
        <div class="right">
          <!-- <img :src="require('@/assets/home/welcome/0.jpg')" alt="Ocean View" /> -->
        </div>
        <div class="bottom-left">
          <!-- <img :src="require('@/assets/home/welcome/1.jpg')" alt="Leisure" /> -->
        </div>
      </section>
    </div>
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
$page-width: 100%;
.home-header{
  position: absolute;
  width: $page-width;
  z-index: 100;
}
.home-bg{
  width: $page-width;
  height: 100vh;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.home-content{
  width: $page-width;
}
.home-footer{
  width: $page-width;
}
</style>