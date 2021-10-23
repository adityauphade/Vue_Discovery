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

<script type="module" src="./Gallery.ts"></script>

<style lang="scss" scoped>
@import './Gallery.scss';
</style>