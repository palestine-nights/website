<template>

  <v-layout column>
    <v-container>
      <v-layout align-center justify-center class="my-3">
        <div class="text-xs-center">
          <h2 class="headline green--text text-uppercase">{{ $t('message.overview.title') }}</h2>
          <div class="subheading my-1">{{ $t('message.overview.subtitle') }}</div>
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
                <div class="headline text-xs-center">{{ $t('message.overview.texts[0].name') }}</div>
              </v-card-title>
              <v-card-text>{{ $t('message.overview.texts[0].text') }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs18 md6>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="green--text">local_florist</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ $t('message.overview.texts[1].name') }}</div>
              </v-card-title>
              <v-card-text>{{ $t('message.overview.texts[1].text') }}</v-card-text>
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