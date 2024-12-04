import './assets/main.css'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(FloatingVue)

app.mount('#app')
