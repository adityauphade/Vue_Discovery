<template>
  <div class="home">
    <Header />    <!-- USING TEMPLATE OF HEADER COMPONENT -->
    <video class="main-bg" autoplay muted loop>
      <source src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" type="video/mp4"/>
    </video>
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// @ is an alias to /src
import Header from '@/components/Header.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
// *{
//   background: crimson;
// }
// .home {
//   display: flex;
//   justify-content: center;
// }
</style>