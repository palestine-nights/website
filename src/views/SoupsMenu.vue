<template>
  <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex md6 sm6 xs12 v-for="(soup,key) in soups" :key="key">

            <v-hover>
              <v-card slot-scope="{ hover }">
                <v-img :aspect-ratio="16/9" :src="soup.photo">
                  <v-expand-transition>
                    <div v-if="hover" style="height: 100%;"
                         class="menu-card-price-hover display-3 font-weight-thin">
                      <span class="menu-card-price">{{ soup.price }}</span>
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-title>
                  <h3 class="display-1 font-weight-light green--text mb-2">{{ soup.title }}</h3>
                </v-card-title>
              </v-card>
            </v-hover>

          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'SoupsMenu',
  data() {
    return {
      soups: [
        {
          photo: 'https://topekacivictheatre.com/wp-content/uploads/2018/07/no-image.jpg',
          title: 'Adas soup',
          price: '2,000 BD',
        },
        {
          photo: 'https://topekacivictheatre.com/wp-content/uploads/2018/07/no-image.jpg',
          title: 'Vegetable soup',
          price: '2,000 BD',
        },
      ],
    };
  },
};
</script>

<style>
.menu-card-price-hover {
  background-color: darkgreen!important;
  opacity: 0.5;
  border-color: transparent!important;
}

.menu-card-price {
  /* Should be aligned to the center. */
}
</style>
