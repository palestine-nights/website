<template>
  <v-content>
      <v-container>
        <v-layout v-if="!loading && items.length > 0" row wrap >
          <v-flex row wrapmd6 xl3 lg4 sm6 xs12 v-for="(item,key) in items" :key="key">
            <menu-item class="with-bottom-offset"
                      :title="item.name"
                      :price="prettyPrice(item.price)"
                      :image="item.image_url"
                      :to="'/menu/' + item.id"
                      height="300px">
            </menu-item>
          </v-flex>
        </v-layout>

        <v-layout v-else-if="loading" column align-center>
          <v-progress-circular :size="70" :width="7" color="green" indeterminate>
          </v-progress-circular>
        </v-layout>

        <v-layout v-else-if="!errored && !loading && items.length == 0" column align-center>
          <h2 class="font-weight-light">No meals for specified category.</h2>
        </v-layout>

        <v-layout v-else-if="errored" column align-center>
          <h2 class="error--text font-weight-light">Sorry, try again later</h2>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import axios from 'axios';
import MenuItem from '../components/MenuItem.vue';

export default {
  name: 'MenuCategory',
  components: {
    MenuItem,
  },
  mounted() {
    this.category = this.$route.params.category;

    axios.get(`${this.$apiHost}/menu/${this.category}`)
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        this.errMsg = error.response.data.error;
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  methods: {
    prettyPrice: value => value.toFixed(3),
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
