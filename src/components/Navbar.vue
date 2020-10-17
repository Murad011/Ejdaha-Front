<template>
  <div class="hello">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Ejdaha Delivery</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/staticties">Staticties</router-link></b-nav-item>
        
         <b-nav-item ><router-link to="/delivery">Delivery</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form> 
        </b-nav-form>
      <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em  class="font">User</em>
          </template>
          <b-dropdown-item href="#" class="font">Profile</b-dropdown-item>
          <b-dropdown-item href="#" class="font">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  
}
</script>

<style scoped>
.font {
    font-family: 'Raleway', sans-serif;
}
</style>
