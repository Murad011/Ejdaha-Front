<template>
  <div id="app">
   
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  }
}
</script>

<style>

</style>
