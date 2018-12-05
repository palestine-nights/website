<template>
  <v-container>
    <v-layout v-if="!loading" column>
      <v-snackbar v-model="showBar" :color="color" top>
        <span>{{ msg }}</span>
        <v-btn flat @click="showBar = false">Close</v-btn>
      </v-snackbar>

      <v-form>
        <meal-editor v-bind:meal="meal">
          <template slot="bottom">
          <v-flex xs12 row class="text-xs-center">
            <v-dialog v-model="deleteMealDialog" width="500">
              <v-btn slot="activator" color="error" dark>
                Delete
              </v-btn>

              <v-card>
                <v-card-title class="title error--text" primary-title>
                  Are you sure you want to delete meal with ID {{ meal.id }}?
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

    <v-layout column align-center v-else-if="errored">
      <h2 class="error--text font-weight-light">{{ msg }}</h2>
    </v-layout>

    <v-layout column align-center v-else-if="loading">
      <v-progress-circular :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import config from '../config';
import MealEditor from '../components/MealEditor.vue';

export default {
  name: 'EditMeal',
  components: {
    MealEditor,
  },
  mounted() {
    this.menuHost = config.menuHost;
    this.id = this.$route.params.id;

    axios.get(`${this.menuHost}/menu/${this.id}`)
      .then((response) => {
        this.meal = response.data;
      }).catch((error) => {
        this.errored = true;
        this.msg = error.response.data.error;
        this.color = 'error';
        this.showBar = true;
      }).finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      meal: {},
      deleteMealDialog: false,
      showBar: false,
      loading: true,
      errored: false,
      msg: '',
      color: 'error',
    };
  },
  methods: {
    saveMeal() {
      this.meal.price = Number(this.meal.price);

      axios.put(`${this.menuHost}/menu/${this.id}`, this.meal)
        .then((response) => {
          this.meal = response.data;
          this.color = 'success';
          this.showBar = true;
          this.msg = 'Successfully updated';
        }).catch((error) => {
          this.msg = error.response.data.error;
          this.color = 'error';
          this.showBar = true;
        }).finally(() => {
          this.loading = false;
        });
    },
    deleteMeal() {
      axios.delete(`${this.menuHost}/menu/${this.id}`)
        .then(() => {
          this.$router.push('/menu');
        }).catch((error) => {
          this.msg = error.response.data.error;
          this.color = 'error';
          this.showBar = true;
        }).finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
