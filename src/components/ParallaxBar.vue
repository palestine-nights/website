<template>
  <v-parallax :src="image" :height="height">
    <v-layout column align-center justify-center>
      <div class="display-4 mb-3 text-xs-center">{{ $t('message.title') }}</div>
      <v-btn large flat icon
             class="arrow bounce" v-scroll-to="'#scrollTo'"
             v-on:click="arrowClicked" >
        <v-icon size="50px">keyboard_arrow_down</v-icon>
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'ParallaxBar',
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.height = document.documentElement.clientHeight;
    },
    arrowClicked() {
      this.$ga.event({
        eventCategory: 'arrow',
        eventAction: 'pressed',
      });
    },
  },
  data() {
    return {
      height: document.documentElement.clientHeight,
      selector: '#scrollTo',
    };
  },
  props: {
    /**
     * Path to image.
     */
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 20px, 0);
  }
}

.bounce {
  animation: bounce 0.7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.arrow {
  position: absolute !important;
  bottom: 2rem;
}
</style>
