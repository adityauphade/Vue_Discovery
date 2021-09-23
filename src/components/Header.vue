<template>
  <div class="header">
    <div class="leftHeader">
      <router-link to="/"><img src="../assets/logo.png" alt="Logo"></router-link>      
    </div>
    <div class="rightHeader">
      <router-link to="/about">About DLC</router-link>
      <router-link to="/world">Our World</router-link>
      <router-link to="/experience">Experiences</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/press">Press</router-link>
      <router-link to="/menu"><img src="../assets/menu-logo.jpg" alt="Menu"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// @Options({   --DEFINING PROPERTIES & COMPONENTS
//   props: {
//     content passed from the parent is received & used as prop 
//     msg: String
//   },
//   components{
//       components are used repetedly  
//   }
// })
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS only to Header component -->
<style scoped lang="scss">

@mixin horizontal-align {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header{
  padding-top: 35px;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin: auto;
  img{
    cursor: pointer;
  }

}

.rightHeader, .leftHeader{
  @include horizontal-align
}

.rightHeader{
  a{
    text-decoration: none;
    color: #FFF;
    margin-left: 60px;
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
    position: relative;
  }
  a::after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #FFF;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  a:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  img{
    width: 30px;
    padding-left: 10px;
  }
}
.leftHeader{
  img{
    width: 250px;
  };
}
@media screen and (max-width: 834px) and (min-width: 429px){
.leftHeader{
  img{
    width: 225px;
  }
}
.rightHeader{
  display: none;
}
}
@media screen and (max-width: 428px) {
.leftHeader{
  img{
    width: 175px;
  }
}
.rightHeader{
  display: none;
}
}
</style>
