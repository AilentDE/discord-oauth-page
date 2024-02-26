// import './assets/main.css'
import './assets/twstyle.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BaseCard from './components/ui/BaseCard.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-card', BaseCard)
app.component('base-dialog', BaseDialog)

app.mount('#app')
