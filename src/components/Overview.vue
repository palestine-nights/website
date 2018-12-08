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
        <v-layout v-if="loading" class="my-2" column align-center>
          <v-progress-circular :width="2" color="blue-grey" indeterminate></v-progress-circular>
        </v-layout>

        <v-layout v-if="!errored && !loading" id="rating" column align-center>
          <v-card column align-center class="transparent text-xs-center"
                  :href="linkToGoogleMaps"
                  color="elevation-0">
            <v-rating v-model="rating"
                    half-increments
                    readonly
                    color="green"
                    background-color="green">
            </v-rating>
            <span class="caption font-weight-thin grey--text">
              Google Maps: {{ rating | round }}
            </span>
          </v-card>
        </v-layout>

        <v-layout  align-center justify-center>
          <v-flex md12>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="green--text">restaurant</v-icon>
              </v-card-text>

              <v-card-text class="font-weight-light">
                {{ $t('message.overview.texts[0].text') }}
              </v-card-text>

              <v-card-text class="text-xs-center">
                <v-icon x-large class="green--text">place</v-icon>
              </v-card-text>

              <v-card-text class="font-weight-light">
                {{ $t('message.overview.texts[1].text') }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Overview',
  props: {
    apiKey: {
      type: String,
      required: false,
    },
    apiVersion: {
      type: String,
      default: '3.33',
      required: false,
    },
  },
  mounted() {
    axios.get(
      `${this.$ratingHost}?placeid=${this.placeID}`,
      {
        headers: {
          Authorization: this.apiKey,
        },
      },
    )
      .then((response) => {
        this.rating = response.data.rating;
      })
      .catch((error) => {
        this.error = error;
        this.errored = true;
      })
      .finally(() => { this.loading = false; });
  },
  data() {
    return {
      placeID: 'ChIJm8XlftWlST4RbuKXY7a7xzY',
      rating: 0,
      loading: true,
      errored: false,
      linkToGoogleMaps: 'https://maps.google.com/?q=Palestine+Nights+Restaurant',
    };
  },
  filters: {
    round: value => value.toFixed(1),
  },
};
</script>
