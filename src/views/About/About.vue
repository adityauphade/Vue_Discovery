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
      <div class="container-3">
        <div class="headerBlock">
            <div class="headerText">
              <h1 id="h1">The Discovery Difference</h1>
              <!-- <h1 id="h2">our worlds</h1> -->
            </div>
            <div class="button-pair">
                <button class="first-button">&#8592;</button>
                <button>&#8594;</button>
            </div>
          </div>
        <div class="carousel">
          <Carousel />
        </div>
      </div>
      <div class="container-4">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg" alt="">
      </div>
      <div class="container-5">
        <img id="mainImage" src="https://dxaurk9yhilm4.cloudfront.net/images/157/What_we_do_design_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg" alt="">
        <div class="description">
            <h1>Discovery Design</h1><br>            
            See the beauty in every corner of your new, bespoke <br>
            home away from home. From fabrics and furniture <br>
            pieces to floorplans, our professional designers will <br>
            collaborate closely with you to create an interior living <br>
            space which reflects your style and unique tastes as <br>
            well as perfectly complementing your lifestyle.
        </div>
        <img id="sideImage" src="https://dxaurk9yhilm4.cloudfront.net/images/158/What_we_do_design_2_2ab4534b0a2984e07d7caeca8808129f.jpg" alt="">
      </div>

      <div class="container-6">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg" alt="">
      </div>

      <div class="container-7">
        <img id="mainImage" src="https://dxaurk9yhilm4.cloudfront.net/images/153/What_we_do_builders_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg" alt="">
        <div class="description">
            <h1>Discovery Builders</h1><br>            
            Every Discovery property is wonderfully in-tune with its <br>
            natural surroundings - a harmonious blend of the <br>
            architecturally impressive with the environmentally <br>
            sensitive. And your every expectation will be met, with <br>
            our meticulous eye for detail matching outstanding <br>
            levels of craftsmanship and master building.
        </div>
        <img id="sideImage" src="https://dxaurk9yhilm4.cloudfront.net/images/155/What_we_do_builders_2_2ab4534b0a2984e07d7caeca8808129f.jpg" alt="">
      </div>
      <ImageFooter/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'
import Carousel from '@/components/Carousel/Carousel-About.vue'
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue'

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer,
    Carousel,
    ImageFooter
  }
})
export default class About extends Vue {}
</script>

<style lang="sass" scoped>
@import './About.scss';
</style>
