import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// TODO: Add description of VUE_APP_GOOGLE_ANALYTICS_ID.
const analyticsID = process.env.VUE_APP_GOOGLE_ANALYTICS_ID
// TODO: Add description of VUE_APP_GOOGLE_MAPS_API_KEY.
Vue.prototype.$mapsApiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY


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

// TODO: Add description of VUE_APP_GOOGLE_MAPS_API_KEY.
Vue.prototype.$mapsApiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
