import { createApp } from 'vue'

// Pinia state management
import { createPinia } from 'pinia'

// UI libraries
import './assets/styles/main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faClone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faClone)

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
