<template>
  <v-app dark>
    <section>
      <parallax-bar image="background.jpg" :title="title" :subtitle="subtitle"/>
    </section>
    <router-view></router-view>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import ParallaxBar from './components/ParallaxBar.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    ParallaxBar,
    PageFooter
  },
  data() {
    return {
      title: 'Palestine nights restaurant',
      subtitle: '‎مطعم ليالي فلسطين',
    }
  }
}
</script>
