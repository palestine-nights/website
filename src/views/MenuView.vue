<template>
  <v-content>
    <v-container>
      <v-flex v-for="(category,id) in categories" :key="id">
        <v-card :to="category.link" class="with-bottom-offset">
          <v-card-title>
            <span class="headline mb-0 text-capitalize">{{ category.name }}</span>
             <v-spacer></v-spacer>
            <v-icon large>
              keyboard_arrow_right
            </v-icon>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      categories: [
        {
          name: 'Main Dishes',
          link: '/menu/main-dishes',
        },
        {
          name: 'Soups',
          link: '/menu/soups/',
        },
        {
          name: 'Salads',
          link: '/menu/salads/',
        },
        {
          name: 'Appetizers',
          link: '/menu/appetizers/',
        },
        {
          name: 'Drinks',
          link: '/menu/drinks/',
        },
      ],
    };
  },
};
</script>

<style>
.with-bottom-offset {
  margin-bottom: 0.5rem;
}
</style>
