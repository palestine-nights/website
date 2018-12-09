<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-text-field v-model="meal.name" label="Name"></v-text-field>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-textarea v-model="meal.description" label="Description"></v-textarea>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-select
        v-model="meal.category_id"
        :item-text="value => value.name"
        :items="categories"
        :loading="loading"
        item-value="id"
        label="Category"
      ></v-select>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="meal.price" label="Price"></v-text-field>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="meal.image_url" label="Image URL"></v-text-field>
    </v-flex>

    <slot name="bottom"></slot>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MealEditor',
  props: {
    /**
     * Meal object of type Meal.
     */
    meal: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch('categoriesStore/GET_CATEGORIES');
  },
  computed: {
    ...mapState({
      categories: state => state.categoriesStore.categories,
      loading: state => state.categoriesStore.loading,
    })
  },
};
</script>
