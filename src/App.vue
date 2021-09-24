<template>
  <div class="app">
    <router-view/>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// // @ is an alias to /src
// import Home from '@/views/Home.vue'    //IMPORTING COMPONENTS

// @Options({
//   components: {     //REGISTER COMPONENTS HERE
//     Home
//   },
// })
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
*{
  font-family: 'Open Sans', sans-serif;
  // font-family: 'Josefin Sans', sans-serif;
  // font-family: 'Roboto', sans-serif;
  // background: #000;
  // width: 100vw;
  // height: 100vh;
}
body{
  background: #000 !important;
}
</style>
