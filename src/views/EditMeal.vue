<template>
  <v-container>
    <v-layout v-if="!loading" column>
      <v-snackbar v-model="response.showBar" :color="response.color" top>
        <span>{{ response.msg }}</span>
        <v-btn flat @click="response.showBar = false">Close</v-btn>
      </v-snackbar>

      <v-form>
        <v-layout row wrap>
          <v-flex xs12 row class="text-xs-center mb-3">
            <h1 class="display-1 font-weight-light">Menu Editor</h1>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <v-text-field v-model="meal.name" label="Name"></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <v-textarea v-model="meal.description" label="Description"></v-textarea>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <v-text-field v-model="meal.category" label="Category"></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <v-text-field v-model="meal.price" label="Price"></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <v-text-field v-model="meal.image_url" label="Image URL"></v-text-field>
          </v-flex>

          <v-flex xs12 row class="text-xs-center">
            <v-btn class="mr-3" @click="saveMeal()" color="green">OK</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import config from '../config';
import MenuItem from '../components/MenuItem.vue';

export default {
  name: 'EditMeal',
  components: {
    MenuItem,
  },
  mounted() {
    this.menuHost = config.menuHost;
    this.id = this.$route.params.id;

    axios.get(`${this.menuHost}/menu/${this.id}`)
      .then((response) => {
        this.meal = response.data;
      })
      .catch((error) => {
        this.response.msg = error.response.data.error;
        this.response.color = 'error';
        this.response.showBar = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      meal: {},
      response: {
        msg: '',
        showBar: false,
      },
      loading: true,
    };
  },
  methods: {
    saveMeal() {
      this.meal.price = Number(this.meal.price);

      axios.put(`${this.menuHost}/menu/${this.id}`, this.meal)
        .then((response) => {
          this.meal = response.data;
          this.response.color = 'success';
          this.response.showBar = true;
          this.response.msg = 'Successfully updated';
        })
        .catch((error) => {
          this.response.msg = error.response.data.error;
          this.response.color = 'error';
          this.response.showBar = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
