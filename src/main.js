import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.scss'
import router from './router'
import App from './App.vue'

import BaseLayout from "@/layouts/BaseLayout.vue";
import Promo from '@/components/Promo.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('layout', BaseLayout)
app.component('promo', Promo)

app.mount('#app')
