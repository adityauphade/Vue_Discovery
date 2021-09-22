<template>
  <div class="gallery-header">
    <Header/>
    <div class="title">Gallery</div>
  </div>
  <div class="gallery-content">
        <div class="grid-images">
            <div class= "img1">
            <img src="https://picsum.photos/400/200" alt="">
            <a href="#">Picture</a>
            </div>
            <div class= "img2">
            <img src="https://picsum.photos/401/200" alt="">
            <a href="#">Picture</a>
            </div>
            <div class= "img3">
            <img src="https://picsum.photos/402/200" alt="">
            <a href="#">Picture</a>
            </div>
            <div class= "img4">
            <img src="https://picsum.photos/399/200" alt="">
            <a href="#">Picture</a>
            </div>
            <div class= "img5">
            <img src="https://picsum.photos/403/200" alt="">
            <a href="#">Picture</a>
            </div>
            <div class= "img6">
            <img src="https://picsum.photos/398/200" alt="">
            <a href="#">Picture</a>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
*{
    width: 100%;
    .title{
        font-size: 80px;
        color: #FFF;
        z-index: 1;
        font-family: 'Gideon Roman', cursive;
        text-align: center;
    }
    .grid-images{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 5em;
        // grid-gap: 5em 0em;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            a{
                padding-top: 35px;
                font-size: 25px;
                font-family: 'Gideon Roman', cursive;
                text-decoration: none;
                text-align: center;
                color: #FFF;
            }
        }
    }
}
.gallery-header{
    background-image: url("https://picsum.photos/2000/1000");
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
}
</style>