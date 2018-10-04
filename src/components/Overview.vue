<template>

  <v-layout column>
    <v-container>
      <v-layout align-center justify-center class="my-3">
        <div class="text-xs-center">
          <h2 class="headline green--text text-uppercase">Authentic palestine cuisine</h2>
          <div class="subheading my-1">Palestinian heritage carefully crafted to include your tastebud</div>
        </div>
      </v-layout>
      <v-flex xs12>
        <v-divider color="darkgreen"></v-divider>
        <v-layout row wrap align-center>
          <v-flex xs18 md6>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="green--text">restaurant_menu</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Unique recipes</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs18 md6>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="green--text">local_florist</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Best ingredients</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Overview'
};
</script>