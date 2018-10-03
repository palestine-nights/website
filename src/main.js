import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// TODO: Merge this.
Vue.use(VueScrollTo, { duration: 1500 })
Vue.use(Vuetify, { iconfont: 'md' })

new Vue({
  render: h => h(App)
}).$mount('#app')
