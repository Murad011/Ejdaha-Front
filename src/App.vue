<template>
  <div id="app">
   
    <Navbar />
   
    
    <router-view></router-view>
      
     
      
      
   
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'





export default {
  name: 'App',
  components: {
    Navbar
  
    
  }
   
}
</script>

<style>
#app {
  font-family: 'Commissioner', sans-serif;
  /* text-align: center;
  margin-top: 30px; */
}
</style>
