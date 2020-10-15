<template>
  <div id="app">
   
    <Navbar />
    <Map/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Map
  }
}
</script>

<style>

</style>
