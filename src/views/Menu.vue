<template>
  <v-content>
    <v-container>
      <v-flex v-for="(info,key) in categories" :key="key">
        <v-card tile>
          <v-card-title>
            <div>
              <router-link tag="span"
                           class="headline mb-0 text-capitalize"
                           :to="info.link">
              {{ key }}
              </router-link>
            </div>
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

</style>
