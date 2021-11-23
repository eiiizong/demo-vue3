import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
