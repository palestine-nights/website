<template>
  <v-content>
      <v-container>
        <v-layout v-if="!loading && menuItems.length > 0" row wrap >
          <v-flex row wrapmd6 xl3 lg4 sm6 xs12 v-for="(item,key) in menuItems" :key="key">
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

        <v-layout v-else-if="!loading && menuItems.length == 0" column align-center>
          <h2 class="font-weight-light">No meals for specified category.</h2>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';
import MenuItem from '../components/MenuItem.vue';

export default {
  name: 'MenuCategory',
  components: {
    MenuItem,
  },
  mounted() {
    this.category_id = this.$route.params.category_id;
    this.$store.dispatch('menuStore/GET_CATEGORY_MENU_ITEMS', this.category_id);
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      menuItems: state => state.menuStore.menuItems,
      loading: state => state.menuStore.loading,
    })
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
