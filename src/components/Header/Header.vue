<template>
  <div class="header">
    <div class="leftHeader">
      <router-link to="/"><img src="@/assets/logo.png" alt="Logo"></router-link>      
    </div>
    <div class="rightHeader">
      <router-link to="/about">About DLC</router-link>
      <router-link to="/world">Our World</router-link>
      <router-link to="/experience">Experiences</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/press">Press</router-link>
      <router-link to="/menu"><img src="@/assets/menu-logo.jpg" alt="Menu"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// @Options({   --DEFINING PROPERTIES & COMPONENTS
//   props: {
//     content passed from the parent is received & used as prop 
//     msg: String
//   },
//   components{
//       components are used repetedly  
//   }
// })
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS only to Header component -->
<style scoped lang="scss">
@import './Header.scss'
</style>
