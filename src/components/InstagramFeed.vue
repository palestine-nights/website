<template>
  <div>
    <v-container grid-list-md>
      <vue-instagram :token="token" :count="count" :mediaType="mediaType" class="layout justify-space-between row fill-height">
        <template slot="feeds" slot-scope="props">
          <v-flex>
            <v-card>
              <v-img :src="props.feed.images.low_resolution.url"></v-img>

              <v-card-title primary-title>
                <div v-if="props.feed.caption">
                  <span>{{ props.feed.caption.text }}</span>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="blue" :href="props.feed.link">Open</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </template>
      </vue-instagram>
    </v-container>
  </div>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'InstagramFeed',

  components: {
    VueInstagram,
  },
  data: function () {
    return {
      token: "37266272.e372b6e.140b4817cda3462e8c3c67b6eff6bf13",
      count: 3,
      mediaType: "image"
    }
  },
}
</script>