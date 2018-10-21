<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';

export default {
  name: 'GoogleMap',
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    zoom: {
      type: Number,
      default: 20,
      required: false,
    },
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
    const { zoom } = this;
    const place = {
      lat: this.latitude,
      lng: this.longitude,
    };

    if (this.apiVersion) {
      GoogleMapsLoader.VERSION = this.apiVersion;
    }

    if (this.apiKey) {
      GoogleMapsLoader.KEY = this.apiKey;
    }

    GoogleMapsLoader.load((google) => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom,
        center: place,
      });

      // eslint-disable-next-line
      new google.maps.Marker({
        position: place,
        map,
        title: 'Palestine Nights Restaurant',
      });
    });
  },
};
</script>

<style>
#map {
  height: 400px;
  min-width: 100%;
}
</style>
