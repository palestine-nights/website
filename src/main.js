import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// TODO: Add description of VUE_APP_GOOGLE_ANALYTICS_ID.
const analyticsID = process.env.VUE_APP_GOOGLE_ANALYTICS_ID
// const googleMapsApiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
// const environment = process.env.NODE_ENV
// const isProd = environment === 'production'

Vue.use(VueScrollTo, {
  duration: 1500
})

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(VueAnalytics, {
  id: analyticsID,
  router,
  autoTracking: {
    exception: true
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
