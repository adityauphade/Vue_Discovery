<template>
  <div class="bg-white">
    <div class="about-header">
      <Header/>
      <!-- <h1 id='head1'>Creating your</h1>
      <h1 id='head2'>perfect world</h1> -->
    </div>
    <div class="about-body">
      <div class="container-1">
        <div class="headerContent">
          Founded in 1994 by Mike Meldman, Discovery Land Company is a US-based real estate developer and operator of private residential club communities and resorts with a world-renowned portfolio of domestic and international properties. 
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
            <img src="https://dxaurk9yhilm4.cloudfront.net/images/163/What_we_do_intro_5ae402c9837860cd6e4f65e304b3a5fa.jpg" alt="Paradise">
          </div>
        </div>
      </div>
      <div class="container-2">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg" alt="">
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  }
})
export default class About extends Vue {}
</script>

<style lang="sass" scoped>
@import './About.scss';
</style>
