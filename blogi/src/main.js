import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import Amplify from "aws-amplify"
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'
import store from './store'
import './assets/fontawesome/all.css'

Amplify.configure(aws_exports);

const app = createApp(App).use(store)

app.use(router)

app.mount('#app')