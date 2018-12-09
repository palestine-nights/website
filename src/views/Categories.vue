<template>
  <v-content>
    <v-container>

      <v-layout v-if="!loading" column>
        <v-flex xs3 v-for="(category,id) in categories" :key="id">
          <v-card :to="{ name: 'Category', params: { category_id: category.id } }"
                  class="with-bottom-offset">
            <v-card-title>
              <span class="title font-weight-regular text-capitalize">
                {{ category.name | humanize }}
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
import { mapState } from 'vuex';

export default {
  name: 'Categories',
  mounted() {
    this.$store.dispatch('categoriesStore/GET_CATEGORIES');
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      categories: state => state.categoriesStore.categories,
      loading: state => state.categoriesStore.loading,
    }),
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
