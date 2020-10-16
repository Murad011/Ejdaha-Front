<template>
  <div id="app">
   
    <Navbar />
    <Map/>
    <router-view></router-view>
      
     
      
      
   
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
   
    
    
  },

}
</script>

<style>
#app {
  font-family: 'Commissioner', sans-serif;
  /* text-align: center;
  margin-top: 30px; */
}
</style>
