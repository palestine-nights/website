<template>
	<div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'

export default {
  name: 'GoogleMap',
  props: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    zoom: {
      type: Number,
      default: 20,
      required: false
    },
    apiKey: {
      type: String,
      required: false
    },
    apiVersion: {
      type: String,
      default: '3.33',
      required: false
    },
    markerAnimationEnabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  mounted: function () {
    var zoom = this.zoom
    var place = { lat: this.latitude, lng: this.longitude }
    var markerAnimationEnabled = this.markerAnimationEnabled

    if (this.apiVersion) {
      GoogleMapsLoader.VERSION = this.apiVersion
    }

    if (this.apiKey) {
      GoogleMapsLoader.KEY = this.apiKey
    }

    GoogleMapsLoader.load(function(google) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: place
      })

        var marker = new google.maps.Marker({
          position: place,
          map: map,
          title: 'Palestine Nights Restaurant'
        })

        if (markerAnimationEnabled) {
          marker.setAnimation(google.maps.Animation.BOUNCE)
        }
    });
  }
}
</script>

<style>
#map {
  height: 400px;
  min-width: 100%;
}
</style>
