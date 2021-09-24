<template>
    <div class="footer">
        <footer>
            <div class="footer-content">
                <img src="@/assets/onlylogo.png" alt="">
                <div class="footer-navigation">
                    <ul>
                        <li><p>GET IN TOUCH</p></li>
                        <li>(480) 624-5200</li>
                        <li><u>mail@discoverylandco.com</u></li>
                    </ul>
                    <ul>
                        <li><router-link to="/about">About DLC</router-link></li>
                        <li><router-link to="/world">Our Worlds</router-link></li>
                        <li><router-link to="/experience">Experiences</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/press">Press</router-link></li>
                    </ul>
                    <ul>
                        <li>Magazine</li>
                        <li>Careers</li>
                        <li>Foundation</li>
                        <li>Company</li>
                        <li>Contact</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
            <p>© Discovery Land Company. All rights reserved.</p>
        </footer>
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
export default class Footer extends Vue {}
</script>

<style  lang="scss" scoped>
@import './Footer.scss'
</style>