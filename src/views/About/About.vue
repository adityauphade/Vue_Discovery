<template>
  <Header/>
  <div class="about">
    <h1>This is the about page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header
  }
})
export default class About extends Vue {}
</script>

<style lang="sass" scoped>

</style>
