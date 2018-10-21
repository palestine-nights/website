<template>
  <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex row wrapmd6 sm6 xs12 v-for="(soup,key) in soups" :key="key">
            <menu-item class="with-bottom-offset" height="22rem"
                      :title="soup.title"
                      :price="soup.price"
                      :image="soup.photo">
            </menu-item>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';

export default {
  name: 'SoupsMenu',
  components: {
    MenuItem,
  },
  data() {
    return {
      soups: [
        {
          photo: 'https://topekacivictheatre.com/wp-content/uploads/2018/07/no-image.jpg',
          title: 'Adas soup',
          price: '2,000',
        },
        {
          photo: 'https://topekacivictheatre.com/wp-content/uploads/2018/07/no-image.jpg',
          title: 'Vegetable soup',
          price: '2,000',
        },
      ],
    };
  },
};
</script>

<style>
.menu-card-price-hover {
  background-color: darkgreen!important;
  opacity: 0.5;
  border-color: transparent!important;
}

.menu-card-price-hover > .price {
  background-color: aqua;
}
</style>
