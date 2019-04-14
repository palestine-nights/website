<template>
  <v-card v-if="to === undefined" class="menu-top-item" :height="height">
    <v-img height="14rem" :src="image" :aspect-ratio="imageAspectRatio">
    </v-img>

    <div class="menu-top-item-price">
      {{ price }}
  </div>

    <v-card-title class="justify-center">
      <div class="headline text-xs-center font-weight-regular my-2 text-truncate">{{ title }}</div>
      <div v-if="description" class="font-italic font-weight-light">{{ description }}</div>
    </v-card-title>
  </v-card>

  <v-card v-else :to="to" class="menu-top-item" :height="height">
    <v-img height="14rem" :src="image" :aspect-ratio="imageAspectRatio">
    </v-img>

    <div class="menu-top-item-price">
      {{ price }}
    </div>

    <v-card-title class="justify-center">
      <div class="headline text-xs-center font-weight-regular my-2 text-truncate">{{ title }}</div>
      <div v-if="description" class="font-italic font-weight-light">{{ description }}</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    image: {
      type: String,
      default: 'example.jpg',
      required: false,
    },
    imageAspectRatio: {
      type: Number,
      default: 2.75,
      required: false,
    },
    title: {
      type: String,
      default: 'Example',
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      default: '10$',
      required: false,
    },
    height: {
      type: String,
      default: '300px',
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.menu-top-item-price {
  height: 30px;
  width: 80px;
  margin: auto;
  border-radius: 0 0 50px 50px;
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
}

.menu-top-item {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>
