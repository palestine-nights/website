<template>
  <v-card class="elevation-0 transparent">
    <v-card-title primary-title class="layout justify-center">
      <div class="headline green--text">Contact us</div>
    </v-card-title>

    <v-list class="transparent">
      <v-list-tile v-for="(row,i) in rows" :key="i">
        <v-list-tile-action>
           <v-icon class="green--text text--lighten-2">{{ row.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a v-if="row.link" :href="row.link">{{ row.text }}</a>
            <span v-else>{{ row.text }}</span>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      phone: '‎+9737774768',
      email: 'palestinenights@gmail.com',
      workingHours: "10:00 - 23:00",
      place: 'Bahrain, Al Muharraq',
      address: 'Palestine Nights Restaurant',
      rows: [
        {
          icon: 'phone',
          link: 'tel:+9737774768',
          text: '+9737774768'
        },
        {
          icon: 'email',
          link: 'mailto:palestinenights@gmail.com',
          text: 'palestinenights@gmail.com'
        },
        {
          icon: 'place',
          link: 'comgooglemaps://?q=Palestine Nights Restaurant',
          text: 'Bahrain, Al Muharraq'
        },
        {
          icon: 'access_time',
          text: '10:00 - 23:00'
        },
        {
          icon: 'fab fa-facebook',
          link: 'https://www.facebook.com/palestine.nights.restaurant',
          text: '@palestine.nights.restaurant'
        },
        {
          icon: 'fab fa-instagram',
          link: 'https://www.instagram.com/palestine_nights_restaurant',
          text: '@palestine_nights_restaurant'
        }
      ]
    }
  }
}
</script>