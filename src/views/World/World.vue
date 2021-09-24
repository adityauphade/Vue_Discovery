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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  }
})
export default class World extends Vue {
  protected imageArray:{
    src: string,
    title: string,
    location: string
  }[] = [{
        src: 'p1.jpg',
        title: 'NORTH SHORE PRESERVE',
        location: `Kaua'i, Hawaii`
    },{
        src: 'p2.jpg',
        title: 'JAMES ISLAND',
        location: `Southern Gulf Islands, British Columbia, Canada`
    },{
        src: 'p3.jpg',
        title: 'COSTATERRA',
        location: `Comporta, Portugal`
    },{
        src: 'p4.jpg',
        title: 'BARBUDA OCEAN CLUB',
        location: `Barbuda, West Indies`
    },{
        src: 'p5.jpg',
        title: 'DRIFTWOOD',
        location: `Austin, Texas`
    },{
        src: 'p6.jpg',
        title: 'TROUBADOUR',
        location: `Nashville, Tennessee`
    },{
        src: 'p7.jpg',
        title: 'PLAYA GRANDE',
        location: `Rio San Juan, Dominican Republic`
    },
    {
        src: 'p8.jpg',
        title: 'CHILENO BAY',
        location: `Cabo San Lucas, Mexico`
    },
    {
        src: 'p9.jpg',
        title: 'THE SUMMIT',
        location: `Las Vegas, Nevada`
    },
    {
        src: 'p10.jpg',
        title: 'DUNE DECK',
        location: `Westhamton Beach, NY`
    },{
        src: 'p11.jpg',
        title: 'SILO RIDGE',
        location: `Amenia, New York`
    },{
        src: 'p12.jpg',
        title: 'MAKENA',
        location: `Maui, Hawaii`
    },
    {
        src: 'p13.jpg',
        title: 'YELLOWSTONE CLUB',
        location: `Big Sky, Montana`
    },
    {
        src: 'p14.jpg',
        title: 'GOZZER RANCH',
        location: `Coeur d'Alene, Idaho`
    },
    {
        src: 'p15.jpg',
        title: 'EL DORADO',
        location: `Los Gabos, Mexico`
    },
    {
        src: 'p16.jpg',
        title: 'MADISON',
        location: `La Quinta, California`
    },
    {
        src: 'p17.jpg',
        title: `BAKER'S BAY`,
        location: `Great Guana Cay, Behamas`
    },
    {
        src: 'p18.jpg',
        title: 'HIDEAWAY',
        location: `La Quinta California`
    },
    {
        src: 'p19.jpg',
        title: 'MOUNTAINTOP',
        location: `Cashiers North Carolina`
    },
    {
        src: 'p20.jpeg',
        title: 'MIRABEL',
        location: `Scottsdale, Azizona`
    },
    {
        src: 'p21.jpg',
        title: 'KUKIO',
        location: `Kohala, Hawaii`
    },
    {
        src: 'p22.jpg',
        title: 'VAQUERO',
        location: `Westlake, Texas`
    },
    {
        src: 'p23.jpg',
        title: 'IRON HORSE',
        location: `Whitefish, Montana`
    },
    {
        src: 'p24.jpg',
        title: 'CORDEVALLE',
        location: `Silicon Valley, California`
    },
    {
        src: 'p25.jpg',
        title: 'ESTANICIA',
        location: `Scottsdale, Arizona`
    }]
    protected getImageData(src: string): string{
      return require('@/assets/OurWorlds/' + src)
    }
}
</script>

<style lang="scss" scoped>
@import './World.scss'
</style>