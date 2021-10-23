<template>
<div class="world-header"><Header/></div>
<div class="world-content">
  <div class="grid-images">
      <div v-for="(image, id) in imageArray" :key="id" class= "img">
        <img :src="getImageData(image.src)" :alt="id">
        <a href="#">{{image.title}}</a>
        <p>{{image.location}}</p>
      </div>
    </div>
</div>
<div class="world-footer"><Footer/></div>
</template>

<script type='Module' src="./World.ts"></script>

<style lang="scss" scoped>
@import './World.scss'
</style>