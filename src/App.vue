<template>
  <v-app dark>
    <router-view></router-view>
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
