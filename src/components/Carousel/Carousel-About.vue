<template>
    <div class="slider">
        <div class="slider-track" v-for="items in AboutCarouselList" :key="items.title">
        <div class="slide">
            <div class="image-holder">
                <img :src="getImgURL(items.pic)">
            </div>
            <div class="img-description">
                <span class = "img-title" v-text="items.title"></span>
                <span class = "img-location" v-text="items.location"></span> 
            </div>
        </div>
        </div>
    </div>
</template>

<script type="module" src="./Carousel.ts"></script>

<style scoped lang="scss">
@import './Carousel.scss'
</style>