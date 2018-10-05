import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  duration: 1500
})

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(VueAnalytics, {
  id: 'UA-127042503-1',
  linkers: ['www.palestinenights.com', 'palestinenights.com']
})

new Vue({
  render: h => h(App)
}).$mount('#app')
