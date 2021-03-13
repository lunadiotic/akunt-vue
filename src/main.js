import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// import bootstrap, popper
import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js/dist/popper'
import 'bootstrap'

// import custom css
import '@/assets/app.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
