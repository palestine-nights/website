import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueScrollTo)

Vue.use(
  Vuetify, { iconfont: 'md' }
)

new Vue({
  render: h => h(App)
}).$mount('#app')
