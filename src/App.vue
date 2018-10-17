<template>
  <v-app dark>
   <transition name="fade">
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
