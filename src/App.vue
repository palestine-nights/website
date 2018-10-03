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

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
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
                      <v-list-tile-title>{{ phone }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ place }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ email}}</v-list-tile-title>
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

export default {
  name: "app",
  components: {
    ParallaxBar,
    Overview,
    PageFooter,
    HelloWorld
  },
  data: function() {
    return {
      title: "Palestine nights restaurant",
      subtitle: "‎مطعم ليالي فلسطين",
      phone: "‎37774768",
      email: "help@palestinenights.com",
      place: "Al Muharraq, Bahrain",
      items: ["photo-1.jpg", "photo-3.jpg", "photo-4.jpg", "photo-5.jpg"],
    };
  }
};
</script>