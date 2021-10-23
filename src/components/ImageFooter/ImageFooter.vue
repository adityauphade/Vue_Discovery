<template>
    <div class="ImageFooter">
        <img :src="imagePath" alt="">
        <div class="explore-nav">
            <h1>Our Worlds</h1>
            <button class="button"><span>Explore</span></button>
        </div>
    </div>
</template>

<script type="module" src="./ImageFooter.ts"></script>

<style scoped lang="scss">
@import './ImageFooter.scss'
</style>