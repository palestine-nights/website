<template>
    <v-container>
      <v-layout v-if="!loading" column>
        <h2 class="display-2 text-xs-center font-weight-light green--text my-2">
          {{ meal.name }}
        </h2>

        <v-img :src="meal.image_url" aspect-ratio="3"></v-img>

        <div v-if="meal.description" class="title text-xs-center grey--text font-weight-thin my-2">
          <span>{{ prettyPrice(meal.price) }} BHD</span>
        </div>

        <div v-if="meal.description" class="title text-xs-center font-weight-thin">
          {{ meal.description }}
        </div>
      </v-layout>

      <v-layout v-else-if="loading" column align-center>
        <v-progress-circular :size="70" :width="7" color="green" indeterminate>
        </v-progress-circular>
      </v-layout>

      <v-layout v-else-if="!errored && !loading && items.length == 0" column align-center>
        <h2 class="font-weight-light">Invalid Meal ID.</h2>
      </v-layout>

      <v-layout v-else-if="errored" column align-center>
        <h2 class="error--text font-weight-light">Sorry, try again later</h2>
      </v-layout>
    </v-container>
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
    this.id = this.$route.params.id;

    axios.get(`${this.$apiHost}/menu/${this.id}`)
      .then((response) => {
        this.meal = response.data;
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
      meal: {},
      errMsg: '',
      errored: false,
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
