import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header2/Header.vue'    //IMPORTING COMPONENTS
import Footer from '@/components/Footer/Footer.vue'

@Options({
  components: {     //REGISTER COMPONENTS HERE
    Header,
    Footer
  }
})
export default class Gallery extends Vue {
  protected imageArray:{
    src: string,
    author: string,
  }[] = [
    {
      src: require ('@/assets/Gallery/outdoor-pursuits.jpg'),
      author: 'Outdoor Pursuits',
    },
    {
      src: require ('@/assets/Gallery/golf.jpg'),
      author: 'Golf',
    },
    {
      src: require ('@/assets/Gallery/lifestyle.jpeg'),
      author: 'Lifestyle',
    },
    {
      src: require ('@/assets/Gallery/landscapes.jpg'),
      author: 'Landscapes',
    },
    {
      src: require ('@/assets/Gallery/clubhouses.jpg'),
      author: 'Clubhouses',
    },
    {
      src: require ('@/assets/Gallery/wellness.jpg'),
      author: 'Wellness',
    },
  ]
}