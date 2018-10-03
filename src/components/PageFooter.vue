<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
    <v-btn :href="icon.link" v-for="icon in icons" :key="icon.link" class="mx-3 white--text" icon>
      <v-icon size="24px">{{ icon.icon }}</v-icon>
    </v-btn>
    <v-flex lighten-2 py-3 text-xs-center white--text xs12>
      &copy;{{ year }} — All rights reserved
    </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "PageFooter",
  data: function() {
    return {
      year: new Date().getFullYear(),
      icons: [
        {
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/palestine.nights.restaurant/"
        },
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/palestine_nights_restaurant"
        }
      ]
    };
  }
};
</script>