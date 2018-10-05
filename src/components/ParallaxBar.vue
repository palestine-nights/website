<template>
  <v-parallax :src="image" :height="height">
    <v-layout column align-center justify-center>
      <div class="display-4 white--text mb-3 text-xs-center">{{ subtitle }}</div>
      <v-btn class="arrow bounce" v-scroll-to="'#scrollTo'" large flat icon>
        <v-icon size="4rem">keyboard_arrow_down</v-icon>
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "ParallaxBar",
  props: {
    /*
    * Path to image.
    */
    image: {
      type: String,
      required: true
    },
    /*
    * ParallaxBar height.
    */
    height: {
      type: Number,
      default: 700,
      required: false
    },
    /*
    * Title string.
    */
    title: {
      type: String,
      default: 'Title',
      required: false
    },
    /*
    * Subtitle string.
    */
    subtitle: {
      type: String,
      default: 'Subtitle',
      required: false
    }
  }
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
  bottom: 1.5rem;
}
</style>