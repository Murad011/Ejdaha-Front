<template>
  <div class="wrapper">
    <div class="sidebar">
       <h2 class="ejdaha">Delivery Module</h2>
        <ul class="d-flex justify-content-center">
            <li class="mx-5" v-show="visible"><router-link to="/ana_sehife"><i class="fas fa-home"></i>Ana Səhifə</router-link></li>
            <li class="mx-5" v-show="visible"><router-link to="/staticties"> <i class="fas fa-user"></i>Statistika</router-link> </li>
            <li class="mx-5" v-show="visible"><router-link to="/sifarishler_siyahisi"> <i class="fas fa-address-card"></i>Sifarişlər Siyahısı</router-link> </li>
        </ul> 
        <div  v-show="visible" class="social_media">
          <router-link to="/login"><i @click="logOut" class="fas fa-sign-out-alt"></i></router-link>
          
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "Navbar",
  data() {
    return {
      visible: true,
      loggedOut: false,
    };
  },
  created() {
    EventBus.$on("loggedIn", this.showNavbar);
    const user = localStorage.getItem("logged_in");
    if (user == "false") {
      this.visible = false;
    }
  },
  methods: {
    showNavbar() {
      this.visible = true;
    },
    logOut() {
      localStorage.removeItem("JWT");

      localStorage.setItem("logged_in", false);
      this.loggedOut = true;
      if (this.loggedOut == true) {
        this.$router.replace({ name: "login" });
        this.visible = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.font {
  font-family: "Raleway", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}

body {
  background-color: #f3f5f9;
}
.social_media {
  margin-bottom: 11px;
}

.wrapper {
  display: flex;
}

.wrapper .sidebar {
  width: 100%;
  height: 100%;
  background: #0b2752;
  background: #041c3f;
}

.wrapper .sidebar h2 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  margin: 10px;
}

.wrapper .sidebar ul li {
  padding: 1px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.wrapper .sidebar ul li a {
  color: #bdb8d7;
  display: block;
}

.wrapper .sidebar ul li a .fas {
  width: 25px;
}

.wrapper .sidebar ul li:hover {
  background-color: #041a3a;
  background-color: #041938;
}

.wrapper .sidebar ul li:hover a {
  color: #fff;
  text-decoration: none;
}

.wrapper .sidebar .social_media {
  position: absolute;
  top: 10px;
  right: 10px;
  transform: translateX(-5%);
}

.wrapper .sidebar .social_media a {
  display: block;
  width: 40px;
  background: #041d42;
  background: #03193a;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
