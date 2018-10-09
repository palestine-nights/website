<template>
  <v-content>
    <section>
      <parallax-bar image="./background.jpg"/>
    </section>

    <div id="scrollTo"></div>

    <section>
      <overview></overview>
    </section>

    <section>
      <v-container>
        <v-layout justify-center>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item">
            </v-carousel-item>
          </v-carousel>
          </v-layout>
      </v-container>
    </section>

    <section>
      <v-container>
        <v-layout justify-center>
          <div class="text-xs-center">
            <h2 class="my-2 headline text-uppercase">{{ $t('message.topMeals') }}</h2>
            <v-divider color="darkgreen"></v-divider>
          </div>
        </v-layout>
      </v-container>
      <menu-bar></menu-bar>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-2">
          <v-flex xs12 sm6 md6>
            <google-map :apiKey="apiKey" :latitude="coordinates.latitude"
                        :longitude="coordinates.longitude" :zoom="19">
            </google-map>
          </v-flex>
          <v-flex xs12 sm5 md5 offset-md1>
            <contact-us></contact-us>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import ParallaxBar from '../components/ParallaxBar.vue'
import Overview from '../components/Overview.vue'
import GoogleMap from '../components/GoogleMap.vue'
import MenuBar from '../components/MenuBar.vue'
import ContactUs from '../components/ContactUs.vue'

export default {
  name: 'Home',
  components: {
    ParallaxBar,
    Overview,
    GoogleMap,
    MenuBar,
    ContactUs
  },
  data() {
    return {
      items: ['./photo-1.jpg', './photo-2.jpg', './photo-3.jpg'],
      apiKey: this.$mapsApiKey,
      coordinates: {
        latitude: 26.27944,
        longitude: 50.595942,
      }
    };
  }
};
</script>