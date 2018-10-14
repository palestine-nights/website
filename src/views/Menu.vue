<template>
  <v-content>
    <v-container>
      <v-flex>
        <v-card v-for="(info,key) in categories" :key="key" class="elevation-0 transparent">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 text-capitalize">
                <a :href="info.link">{{ key }}</a>
              </h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      categories: {
        soups: {
          link: '/menu/soups/'
        },
        salads: {
          link: '/menu/salads/'
        },
        appetizers: {
          link: '/menu/appetizers/'
        },
      }
    };
  }
};
</script>

<style>

</style>
