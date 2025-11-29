
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'


const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()
app.use(router)
app.use(pinia) 
app.use(vuetify)

app.directive('demo', (el, binding) => {
  el.style.color = binding.value.color
  el.innerText = binding.value.text
})
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', err, info)
}
app.mount('#app')

