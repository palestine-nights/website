<template>
  <v-container>
    <v-layout v-if="!loading" column>
      <v-snackbar v-model="msg.show" :color="msg.color" top>
        <span>{{ msg.text }}</span>
      </v-snackbar>

      <v-form>
        <meal-editor v-bind:meal="menuItem">
          <template slot="bottom">
          <v-flex xs12 row class="text-xs-center">
            <v-dialog v-model="deleteMealDialog" width="500">
              <v-btn slot="activator" color="error" dark>
                Delete
              </v-btn>

              <v-card>
                <v-card-title class="title error--text" primary-title>
                  Are you sure you want to delete meal with ID {{ menuItem.id }}?
                </v-card-title>

                <v-card-text>
                  Note, that it will be fully removed from database.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="text-xs-center">
                  <v-btn color="green" flat @click="deleteMealDialog = false">
                    No
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="error" flat @click="deleteMeal()">
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn class="mr-3" @click="saveMeal()" color="green">OK</v-btn>
          </v-flex>
          </template>
        </meal-editor>
      </v-form>
    </v-layout>

    <v-layout column align-center v-else-if="loading">
      <v-progress-circular :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import MealEditor from '../../components/MealEditor.vue';

export default {
  name: 'EditMenuItem',
  components: {
    MealEditor,
  },
  mounted() {
    this.$store.dispatch('menuStore/GET_MENU_ITEM', this.$route.params.id).then((menuItem) => {
      this.menuItem = menuItem;
    });
  },
  computed: {
    ...mapState({
      msg: state => state.menuStore.msg,
      loading: state => state.menuStore.loading,
    }),
  },
  data() {
    return {
      menuItem: {},
      deleteMealDialog: false,
    };
  },
  methods: {
    saveMeal() {
      this.menuItem.price = Number(this.menuItem.price);
      this.$store.dispatch('menuStore/UPDATE_MENU_ITEM', this.menuItem).then((response) => {
        this.$router.push(`/menu/${response.id}`);
      });
    },
    deleteMeal() {
      this.$store.dispatch('menuStore/DELETE_MENU_ITEM', this.menuItem.id).then(() => {
        this.$router.push('/categories');
      });
    },
  },
};
</script>
