import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        Title:{
            type: Object
        }
    },
    data(){
        return{
            menuIsOn: false,
        }
    }
})

export default class Header extends Vue {}