<template>
  <div class="menu bg-dark" :class="[menuIsOn ? 'menuIsOn' : '']">
    <div class="wrapper-menu">
      <div class="nav-menu">
        <router-link to="/about">About DLC</router-link>
        <router-link to="/world">Our World</router-link>
        <router-link to="/experience">Experiences</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/press">Press</router-link>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="leftHeader">
      <router-link to="/"
        ><img src="@/assets/logo.png" alt="Logo"
      /></router-link>
    </div>
    <div class="rightHeader">
      <router-link class="nav-pages" to="/about">About DLC</router-link>
      <router-link class="nav-pages" to="/world">Our World</router-link>
      <router-link class="nav-pages" to="/experience">Experiences</router-link>
      <router-link class="nav-pages" to="/gallery">Gallery</router-link>
      <router-link class="nav-pages" to="/press">Press</router-link>
      <a href="#"
        ><img
          @click="menuIsOn = !menuIsOn"
          src="@/assets/menu-logo.jpg"
          alt="Menu"
      /></a>
    </div>
  </div>
  <div class="header-text">
    <h1 id="title1">{{ Title.text1 }}</h1>
    <h1 id="title2">{{ Title.text2 }}</h1>
  </div>
</template>

<script type="module" src="./Header.ts"></script>

<!-- Add "scoped" attribute to limit CSS only to Header component -->
<style scoped lang="scss">
@import "./Header.scss";
</style>
