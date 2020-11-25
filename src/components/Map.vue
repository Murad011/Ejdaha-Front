<template>
  <div id="map" class="row map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <v-geosearch :options="geosearchOptions" ></v-geosearch>
      <l-marker :lat-lng="marker">
        
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import  L  from "leaflet";


import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';

export default {
  name: 'Map',
  components:{
    LMap,
    LTileLayer,
    LMarker,
    
    VGeosearch
  },
  data() {
    return {
      zoom:11,
      center: L.latLng(	40.409264, 49.867092),
      url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6393a20c829a4d0ea029ca49c48cf3a2',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(40.409264, 49.867092),
      geosearchOptions: {
        provider: new OpenStreetMapProvider(),
      },
      
    }
  },
  
}
</script>


<style scoped>
  .map {
    height: 40vh;
  }
</style>
