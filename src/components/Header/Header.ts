import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        Title:{
            type: Object
        }
    }
})

export default class Header extends Vue {}