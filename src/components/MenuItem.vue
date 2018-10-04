<template>
  <v-card height="28rem">
    <v-img height="14rem" :src="image" :aspect-ratio="imageAspectRatio">
    </v-img>

    <div class="menu-item-price">
      {{ price }}
    </div>

    <v-card-title class="justify-center">
      <div class="headline text-xs-center font-weight-bold my-2">{{ title }}</div>
      <div class="font-italic">{{ description }}</div>
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
      required: false
    },
    imageAspectRatio: {
      type: Number,
      default: 2.75,
      required: false
    },
    title: {
      type: String,
      default: 'Example',
      required: false
    },
    description: {
      type: String,
      default: 'Food',
      required: false
    },
    price: {
      type: String,
      default: '10$',
      required: false
    }
  }
};
</script>

<style>
.menu-item-price {
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
</style>
