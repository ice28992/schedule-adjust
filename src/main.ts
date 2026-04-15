import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import componentPlugin from './plugins/materials/index'

const app = createApp(App)
app.use(componentPlugin)

app.mount('#app')
