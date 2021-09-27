<template>
  <div class="home bg-white">
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
          <img :src="require('@/assets/Home/Ocean-right.jpg')" alt="Ocean View" />
        </div>
        <div class="bottom-left">
          <img :src="require('@/assets/Home/Leisure-left.jpg')" alt="Leisure" />
        </div>
      </section>
      <section id="LandofDiscovery">
        <div class="HeaderBlock">
          <div class="Header">
            <div id="h1">Lands of</div>
            <div id="h2">Discovery</div>
          </div>
          <div class="textContent">
            A world away from the day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey to our communities.
          </div>
        </div>
        <div class="DynamicImages-c3">
          <img id="" src="@/assets/Home/GoogleEarth-c3.jpg" alt="GoogleEarth">
        </div>
      </section>
    </div>
    <div class="home-footer"><Footer /></div>
  </div>  

  
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
@import './Home.scss'
</style>