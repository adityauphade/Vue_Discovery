<template>
<div class="home bg-white">
  <div class="experience-header">
    <Header/>
    <div class="video-title">
      <h1 id="title1">Unforgettable</h1>
      <h1 id="title2">Experiences</h1>
    </div>
  </div>
  <video class="experience-bg" autoplay muted loop>
    <source src="https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805">
  </video>
  <div class="experience-content">
    <div class="container-1">
      <div class="headerContent">
      Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you.
      </div>
      <div class="bodyContent">
        <div class="leftBody">
          <h1>Exclusive to<br>your world</h1>
          Our worlds are designed to offer you endless <br>
          opportunities to share incredible once-in-a-lifetime <br>
          experiences and adventures every single minute of the <br>
          day. Each of our settings offers a relaxed sense of <br>
          community through exceptional clubhouses, <br>
          world-class golf courses, welcoming staff and an <br>
          extensive Outdoor Pursuits program. Create moments <br>
          of joy and wonder, unforgettable memories and <br>
          cherished times, together with those who matter most.
        </div>
        <div class="rightBody">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="Amenities-Explore">

      <div class="container-2">
        <div class="main-image">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg" alt="">
        </div>
        <div class="background-gradient">
        </div>
        <div class="white-box">
          <h1>Golf</h1><br>
          <p>We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.</p><br>
          <button class="button"><span>Explore</span></button>
        </div>
      </div>

      <div class="container-3">
        <div class="main-image">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt="">
        </div>
        <div class="background-gradient">
        </div>
        <div class="white-box">
          <h1>Outdoor Pursuits</h1><br>
          <p>We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.</p><br>
          <button class="button"><span>Explore</span></button>
        </div>
      </div>

      <div class="container-4">
        <div class="main-image">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt="">
        </div>
        <div class="background-gradient">
        </div>
        <div class="white-box">
          <h1>Wellness</h1><br>
          <p>We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.</p><br>
          <button class="button"><span>Explore</span></button>
        </div>
      </div>

    </div>
  </div>
  <ImageFooter v-bind:imagePath="require(`@/assets/Experiences/footerImage.jpg`)"/>
  <div class="experience-footer"><Footer/></div>
</div>
</template>

<script type='Module' src="./Experience.ts"></script>

<style lang="scss" scoped>
@import '@/global.scss';
@import './Experience.scss';
</style>





    