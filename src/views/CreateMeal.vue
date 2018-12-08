<template>
  <v-container>
    <v-layout column>
      <v-snackbar v-model="showBar" :color="color" top>
        <span>{{ msg }}</span>
        <v-btn flat @click="showBar = false">Close</v-btn>
      </v-snackbar>

      <v-form>
        <meal-editor v-bind:meal="meal">
          <template slot="bottom">
            <v-flex xs12 row class="text-xs-center">
              <v-btn
                class="mr-3"
                :loading="loading"
                :disabled="loading"
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
import axios from 'axios';
import config from '../config';
import MealEditor from '../components/MealEditor.vue';

export default {
  name: 'CreateMeal',
  components: {
    MealEditor,
  },
  data() {
    return {
      meal: {},
      deleteMealDialog: false,
      showBar: false,
      loading: false,
      errored: false,
      msg: '',
      color: 'error',
    };
  },
  methods: {
    create() {
      this.apiHost = config.apiHost;
      this.meal.price = Number(this.meal.price);

      axios.post(`${this.apiHost}/menu`, this.meal)
        .then((response) => {
          this.meal = response.data;
          this.$router.push(`/menu/${this.meal.id}`);
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
