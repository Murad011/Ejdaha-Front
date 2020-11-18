<template>
  <div id="app">
    <Navbar id="nav" />
    
    <router-view id="rota"></router-view>
      
     
      
      
   
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

