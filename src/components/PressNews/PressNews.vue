<template>
  <section class="press-news">
    <h1 class="heading">
      Press
    </h1>

    <div class="press-news-cards">
      <press-news-card v-for="(data, idx) in desktopNewsData" :key="idx" :title="data.title" :subtitle="data.subtitle" />
    </div>
    <div class="press-news-cards-mobile">
      <press-news-card v-for="(data, idx) in newsData" :key="idx" :title="data.title" :subtitle="data.subtitle" />
    </div>

    <div class="press-news-pages">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16" @click="previousPage()">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <span class="page-number">
        {{ page + 1 }}
        -
        {{ totalPages }}
      </span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16" @click="nextPage()">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script type="module" src="./PressNews.ts"></script>

<style scoped lang="scss">
  @import '@/global.scss';
  @import "./PressNews";
</style>
