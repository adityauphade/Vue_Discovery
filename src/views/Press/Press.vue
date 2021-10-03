<template>
  <div class="bg-white">
    <div class="press-header">
      <Header v-bind:Title="Title"/>
    </div>
    <div class="wrapper-container">
      <div class="press-content-1">
        <h1>Latest News</h1>
        <div class="press-slideshow">
          <img src="@/assets/Press/1.jpg" alt="">
          <div class="whitebox bg-white">
            <p>News</p><br>
            <h1>Title</h1><br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae nisi architecto necessitatibus voluptates earum neque corporis delectus, dolorum dolorem consequatur enim, similique doloribus libero id pariatur ipsa deserunt culpa. Deleniti autem mollitia ipsa temporibus!</p><br>
            <button>Hella</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script type="module" src="./Press.ts"></script>

<style lang="sass" scoped>
@import './Press.scss';
</style>
