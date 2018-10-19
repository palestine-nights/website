<template>
  <v-app dark>
   <transition>
      <router-view></router-view>
  </transition>
  <page-footer></page-footer>
  </v-app>
</template>

<script>
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageFooter,
  },
};
</script>