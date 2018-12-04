<template>
  <v-content>
    <v-container>

      <v-layout v-if="!loading" column>
        <v-flex xs3 v-for="(category,id) in categories" :key="id">
          <v-card :to="'/menu/' + category" class="with-bottom-offset">
            <v-card-title>
              <span class="title font-weight-regular text-capitalize">
                {{ category | humanize }}
              </span>
              <v-spacer></v-spacer>
              <v-icon large>keyboard_arrow_right</v-icon>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-else-if="loading" column align-center>
        <v-progress-circular :size="70" :width="7" color="green" indeterminate>
        </v-progress-circular>
      </v-layout>

    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios';
import config from '../config';

export default {
  name: 'Menu',
  mounted() {
    this.menuHost = config.menuHost;
    this.category = this.$route.params.category;

    axios.get(`${this.menuHost}/menu/categories`)
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        this.errMsg = error.response.data.error;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      categories: [],
      errMsg: '',
      loading: true,
    };
  },
  filters: {
    humanize: value => value.split('-').join(' '),
  },
};
</script>

<style>
.with-bottom-offset {
  margin-bottom: 0.5rem;
}
</style>
