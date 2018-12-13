<template>
  <v-container>
    <v-layout column>
      <v-snackbar v-model="msg.show" :color="msg.color" top>
        <span>{{ msg.text }}</span>
      </v-snackbar>

      <v-form>
        <meal-editor v-bind:meal="menuItem">
          <template slot="bottom">
            <v-flex xs12 row class="text-xs-center">
              <v-btn
                class="mr-3"
                @click="create()"
                color="green"
              >Create</v-btn>
            </v-flex>
          </template>
        </meal-editor>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import MealEditor from '../../components/MealEditor.vue';

export default {
  name: 'CreateMenuItem',
  components: {
    MealEditor,
  },
  data() {
    return {
      menuItem: {},
    };
  },
  computed: {
    ...mapState({
      msg: state => state.menuStore.msg,
      loading: state => state.menuStore.loading,
    }),
  },
  methods: {
    create() {
      this.menuItem.price = Number(this.menuItem.price);
      this.$store.dispatch('menuStore/CREATE_MENU_ITEM', this.menuItem).then((menuItem) => {
        this.$router.push(`/menu/${menuItem.id}`);
      });
    },
  },
};
</script>
