import { Options, Vue } from 'vue-class-component';
// @ is an alias to /src
import Header from '@/components/Header2/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'    //IMPORTING COMPONENTS
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue'    //IMPORTING COMPONENTS

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer,
    ImageFooter
  },
})
export default class Experience extends Vue {}