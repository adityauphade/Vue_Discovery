<template>
  <Header/>
  <div class="world-content">
    <h1>This is the world page</h1>
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