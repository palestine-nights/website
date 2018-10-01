<template>
  <v-parallax :src="image" :height="height">
      <v-layout column align-center justify-center>
      <div class="display-4 white--text mb-3 text-xs-center">{{ subtitle }}</div>
      <!-- <div class="display- white--text mb-3 text-xs-center text-uppercase">{{ title }}</div> -->
        <v-btn class="on-bottom" v-scroll-to="'#description'" large flat icon>
        <v-icon size="50px">keyboard_arrow_down</v-icon>
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
    * Query to scroll on button click.
    */
    scrollTo: {
      type: String,
      default: "#description",
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
.on-bottom {
  position: absolute !important;
  bottom: 1rem;
  animation: MoveUpDown 1s linear infinite;
}
@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 10px;
  }
}
</style>