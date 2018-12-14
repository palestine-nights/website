<template>
  <v-container>
    <v-content v-if="!loading" column class="text-xs-center">
      <h2 class="display-2 text-xs-center font-weight-light green--text my-2">
        {{ menuItem.name }}
      </h2>

      <v-img :src="menuItem.image_url" aspect-ratio="3"></v-img>

      <div
        v-if="menuItem.description"
        class="title text-xs-center grey--text font-weight-thin my-2"
      >
        <span>{{ prettyPrice(menuItem.price) }} BHD</span>
      </div>

      <div
        v-if="menuItem.description"
        class="title text-xs-center font-weight-thin"
      >{{ menuItem.description }}</div>

      <v-btn
        class="mt-3"
        v-if="isAuthenticated()"
        color="orange"
        round
        :to="{ name: 'Edit Menu Item', params: { id: id } }"
      >Edit</v-btn>
    </v-content>

    <v-layout v-else-if="loading" column align-center>
      <v-progress-circular :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>

    <v-layout v-else-if="errored" column align-center>
      <h2 class="error--text font-weight-light">Sorry, try again later</h2>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Meal',
  mounted() {
    this.id = this.$route.params.id;

    this.$store
      .dispatch('menuStore/GET_MENU_ITEM', this.$route.params.id)
      .then((menuItem) => {
        this.menuItem = menuItem;
      });
  },
  data() {
    return {
      menuItem: {},
    };
  },
  computed: {
    ...mapState({
      loading: state => state.menuStore.loading,
    }),
  },
  methods: {
    prettyPrice: value => value.toFixed(3),
    isAuthenticated: () => !!localStorage.getItem('token'),
  },
};
</script>

<style>
.menu-card-price-hover {
  background-color: darkgreen !important;
  opacity: 0.5;
  border-color: transparent !important;
}
</style>
