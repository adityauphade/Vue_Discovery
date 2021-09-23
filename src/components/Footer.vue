<template>
    <div class="footer">
        <footer>
            <div class="footer-content">
                <img src="../assets/onlylogo.png" alt="">
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
.footer{
    color: white;
    background: #1A1A1A;
}
footer{
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 80vw;
    padding: 120px 0px 60px 0px;
    margin: auto;
}
.footer-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
footer .footer-content img {
    width: 5%;
    height: 5%;
    padding: 1%;
    margin-top: 1%;
}
.footer-navigation{
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    justify-content: space-between; 
    align-items: flex-start;
}
ul{
    list-style-type: none;
}
li{
    padding: 0.9rem;
    line-height: 0.9;
}
footer p {
    padding: 1%;
    margin-bottom: 0;
    margin-top: 0;
    font-size: .75rem;
    opacity: .75;
    color: #777;
}
a {
color: #ffffff;
margin-right: 3rem;
text-decoration: none;
}
@media screen and (max-width: 834px) and (min-width: 429px){
footer{
    padding: 100px 0px 50px 0px;
    .footer-content{
        img{
            width:50px;
        }
        .footer-navigation{
            font-size: 14px;
        }
    }
}
}
@media screen and (max-width: 428px) {
footer{
    padding: 75px 0px 37.5px 0px;
    .footer-content{
        flex-direction: column;
        img{
            width:40px;
            justify-content: center;
        }
        .footer-navigation{
            font-size: 9px;
        }
    }
    p{
        font-size: 0.6rem;
    }
}
}
</style>