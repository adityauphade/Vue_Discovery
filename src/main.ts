import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue} from 'bootstrap-vue'
// import Vue from 'vue';
// Vue.use(BootstrapVue)
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


// createApp(App).use(router).mount('#app')
// App.use(BootstrapVue)
createApp(App).use(router).mount('#app')
// createApp(App).use(BootstrapVue).mount('#app')