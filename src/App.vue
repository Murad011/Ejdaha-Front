<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <notifications group="foo" />
      
      
   
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

