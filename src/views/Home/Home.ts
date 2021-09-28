import { Options, Vue } from 'vue-class-component';
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'    //IMPORTING COMPONENTS
import Carousel from '@/components/Carousel/Carousel.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer, 
    Carousel
  },
})
export default class Home extends Vue {}