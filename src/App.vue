<template>
  <v-app dark>
    <v-content>
      <section>
        <parallax-bar image="photo-2.jpg" :height="700" :title="title" :subtitle="subtitle"/>
      </section>

      <div id="description"></div>

      <section>
        <overview></overview>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-2">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item">
              </v-carousel-item>
            </v-carousel>
           </v-layout>
        </v-container>
      </section>

      <section id="menu">
        <v-container>
          <v-layout justify-center>
            <div class="text-xs-center">
              <h2 class="my-2 headline text-uppercase">MOST POPULAR MEALS</h2>
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
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline green--text">Contact us</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <a :href="'tel:' + phone">{{ phone }}</a>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <a :href="'mailto:' + email">{{ email }}</a>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <a :href="'comgooglemaps://?q=' + subtitle">{{ place }}</a>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">access_time</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ workingHours }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>

    <page-footer>
    </page-footer>
  </v-app>
</template>

<script>
import ParallaxBar from './components/ParallaxBar.vue';
import Overview from './components/Overview.vue';
import PageFooter from './components/PageFooter.vue';
import GoogleMap from './components/GoogleMap.vue';
import MenuBar from './components/MenuBar.vue';

export default {
  name: "app",
  components: {
    ParallaxBar,
    Overview,
    PageFooter,
    GoogleMap,
    MenuBar
  },
  data: function() {
    return {
      title: 'Palestine nights restaurant',
      subtitle: "‎مطعم ليالي فلسطين",
      phone: '‎+9737774768',
      email: 'palestinenights@gmail.com',
      workingHours: "10:00 - 23:00",
      place: 'Bahrain, Al Muharraq',
      items: ['photo-1.jpg', 'photo-3.jpg', 'photo-4.jpg', 'photo-5.jpg'],
      apiKey: 'AIzaSyB_EjQmuych_DPv4Ffrs0T6AcdR2F4Xtlc',
      coordinates: {
        latitude: 26.27944,
        longitude: 50.595942,
      }
    };
  }
};
</script>