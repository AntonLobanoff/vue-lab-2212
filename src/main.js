import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Header from '@/components/Header.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-header', Header)

app.mount('#app')
