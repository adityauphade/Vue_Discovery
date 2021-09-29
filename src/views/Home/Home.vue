<template>
  <div class="home bg-white">
    <div class="home-header"><Header /></div>
      <video class="home-bg" autoplay muted loop>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" type="video/mp4"/>
      </video>
        <!-- USING TEMPLATE OF HEADER COMPONENT -->
    <div class="home content">
      <!-- WELCOME -->
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

      <!-- ExploreOurWorld -->
      <section id="ExploreOurWorld">
          <div class="headerBlock">
            <div class="headerText">
              <h1 id="h1">Explore</h1>
              <h1 id="h2">our worlds</h1>
            </div>
            <div class="button-pair">
                <button class="first-button">&#8592;</button>
                <button>&#8594;</button>
            </div>
          </div>
          <div class="carousel"><Carousel/></div>
      </section>

      <!-- LandofDiscovery -->
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
        <div class="GoogleEarth">
          <img id="backgroundImg" src="@/assets/Home/GoogleEarth-c3.jpg" alt="GoogleEarth">
          <div class="blackBox">
            <div class="textContent">
              <div class="buttons">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div class="icons">
                <div class="temperature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                  </svg>
                  <p>55K</p>
                </div>
                <div class="wind">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <p>55mph</p>
                </div>
                <div class="compass">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                  </svg>
                  <p>55K</p>
                </div>
              </div>
              <div class="locationName">
                <p>Southern Gulf Islands, British Columbia, Canada</p>
                <h1>James Island</h1>
              </div>
              <div class="locationPin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <p>48.602830922° N / -123.342998628° W</p>
              </div>
            </div>
            <img id="overlayImage" src="https://dxaurk9yhilm4.cloudfront.net/images/6945/Map_500x750_200612_084636_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="">
          </div>
        </div>
      </section>
      <section id="HomeFooter">
        <a href="#">
            <div class="home-footer-content home-footer-image1">
                <div class="overlay">
                  <h4>Experiences</h4>
                  <button>&#8594;</button>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="home-footer-content home-footer-image2">
                <div class="overlay">
                  <h4>Lifestyle</h4>
                  <button>&#8594;</button>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="home-footer-content home-footer-image3">
                <div class="overlay">
                  <h4>Wellness</h4>
                  <button>&#8594;</button>
                </div>
            </div>
        </a>
      </section>
    <!-- FOOTER -->
    </div>
    <div class="home-footer"><Footer /></div>
  </div>  

  
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
@import './Home.scss'
</style>