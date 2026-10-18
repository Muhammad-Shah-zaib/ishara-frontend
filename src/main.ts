import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './core/router'

createApp(App).use(createPinia()).use(router).mount('#app')
