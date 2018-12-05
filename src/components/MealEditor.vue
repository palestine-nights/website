<template>
  <v-layout row wrap>
    <v-flex xs12 row class="text-xs-center mb-3">
      <h1 class="display-1 font-weight-light">Create Meal</h1>
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

    <slot name="bottom"></slot>
  </v-layout>
</template>

<script>
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
};
</script>
