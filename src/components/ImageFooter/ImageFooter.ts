import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        imagePath:{
            type: String
        }
    }
  })

export default class ImageFooter extends Vue {}