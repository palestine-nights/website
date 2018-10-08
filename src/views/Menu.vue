<template>
  <v-content>
    <section>
      <v-container>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(key,value,i) in menu" :key="i">
            <div class="text-capitalize" slot="header">{{ value }}</div>
              <div v-for="(el,j) in key" :key="j">
                <div class="text-capitalize" slot="header">{{ el.title }}</div>
                <v-card>
                  <v-img height="14rem" :src="el.image"></v-img>
                  <v-card-text>{{ el.description }}</v-card-text>
                </v-card>
              </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: {
        soups: [
          {
            image: "./photo-1.jpg",
            title: "Adas soup",
            description: "",
            price: "2000"
          },
          {
            image: "./photo-1.jpg",
            title: "Vegetable soup",
            description: "",
            price: "2000"
          }
        ],
        salads: []
      }
    };
  }
};
</script>