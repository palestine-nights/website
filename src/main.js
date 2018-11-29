import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics';
import VueI18n from 'vue-i18n';
import VueMoment from 'vue-moment';

import App from './App.vue';
import router from './router';

import EngLocale from './locales/en.json';
import ArLocale from './locales/ar.json';

Vue.config.productionTip = false;

/**
 * VUE_APP_GOOGLE_ANALYTICS_ID - ID of your Google Analytics project.
 */
const analyticsID = process.env.VUE_APP_GOOGLE_ANALYTICS_ID;

/**
 * VUE_APP_GOOGLE_MAPS_API_KEY - Google Maps API_KEY with access maps API.
 */
Vue.prototype.$mapsApiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

/**
 * VUE_APP_GOOGLE_MAPS_PLACES_API_KEY - Google Maps API_KEY with access places API.
 */
Vue.prototype.$placesApiKey = process.env.VUE_APP_GOOGLE_MAPS_PLACES_API_KEY;

Vue.use(VueMoment);

Vue.use(VueI18n);

Vue.use(VueScrollTo, {
  duration: 1500,
});

Vue.use(Vuetify, {
  iconfont: 'md',
});

Vue.use(VueAnalytics, {
  id: analyticsID,
  router,
  autoTracking: {
    exception: true,
  },
});

const messages = {
  en: EngLocale,
  ar: ArLocale,
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
