import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// import bootstrap, popper
import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js/dist/popper'
import 'bootstrap'

// import custom css
import '@/assets/app.css'

axios.defaults.withCredentials = true

const app = createApp(App)

app.use(router)

app.mount('#app')
