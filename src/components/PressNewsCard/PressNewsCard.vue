<template>
  <section class="press-news-card">
    <div class="top">
      <h2 class="title" v-html="title"></h2>
      <h3 class="subtitle" v-html="subtitle"></h3>
    </div>
    <div class="bottom">
      <button class="button"><span>Read Article</span></button>
    </div>
  </section>
</template>

<script type="module" src="./PressNewsCard.ts"></script>

<style scoped lang="scss">
  @import '@/global.scss';
  @import "./PressNewsCard";
</style>
