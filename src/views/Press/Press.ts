import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'
import Carousel from '@/components/Carousel/Carousel-About.vue'
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue'

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer,
    Carousel,
    ImageFooter
  }
})
export default class Press extends Vue {
  // public image: string = require(`@/assets/About/footerImage.jpg`),
  public Title:{
    text1: string,
    text2: string
  } = {
    text1: "News",
    text2: "and Press"
  }
}