import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// TODO: Add description of VUE_APP_GOOGLE_ANALYTICS_ID.
const analyticsID = process.env.VUE_APP_GOOGLE_ANALYTICS_ID
// TODO: Add description of VUE_APP_GOOGLE_MAPS_API_KEY.
Vue.prototype.$mapsApiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
// TODO: Add description of VUE_APP_GOOGLE_MAPS_PLACES_API_KEY.
Vue.prototype.$placesApiKey = process.env.VUE_APP_GOOGLE_MAPS_PLACES_API_KEY

Vue.use(VueI18n)

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

const messages = {
  en: require('./locales/en.json'),
  ar: require('./locales/ar.json')
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
