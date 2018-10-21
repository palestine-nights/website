<template>
  <v-content>
    <v-container>
      <v-flex v-for="(info,key) in categories" :key="key">
        <v-card :to="info.link" class="with-bottom-offset">
          <v-card-title>
            <span class="headline mb-0 text-capitalize">{{ key }}</span>
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
      categories: {
        soups: {
          link: '/menu/soups/',
        },
        salads: {
          link: '/menu/salads/',
        },
        appetizers: {
          link: '/menu/appetizers/',
        },
      },
    };
  },
};
</script>

<style>
.with-bottom-offset {
  margin-bottom: 0.5rem;
}
</style>
