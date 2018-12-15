<template>
  <v-content>
      <v-container>
        <v-layout v-if="!loading && activeItems.length > 0" row wrap>
          <v-flex xs12 sm12 md12>
            <v-switch v-model="active" label="Active" color="green">
            </v-switch>
          </v-flex>

          <v-flex row wrapmd6 xl3 lg4 sm6 xs12 v-for="(item,key) in activeItems" :key="key">
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

        <v-layout v-else-if="!loading && activeItems.length == 0" column align-center>
          <h2 class="font-weight-light">No meals for specified category.</h2>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';
import MenuItem from '../../components/MenuItem.vue';

export default {
  name: 'MenuDashboard',
  components: {
    MenuItem,
  },
  mounted() {
    this.category_id = this.$route.params.category_id;
    this.$store.dispatch('menuStore/GET_MENU_ITEMS');
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: state => state.menuStore.menuItems,
      loading: state => state.menuStore.loading,
    }),
    activeItems() {
      return this.menuItems.filter(item => item.active === this.active);
    },
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
</style>
