import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';



createApp(App)
    .use(store)
    .use(PrimeVue, {
        unstyled: false
    })
    .use(router)
    .mount('#app')
