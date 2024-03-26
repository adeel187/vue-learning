import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CommonButton from './components/CommonButton.vue'

const app = createApp(App)

app.use(router)
app.component('common-button', CommonButton)

app.mount('#app')
