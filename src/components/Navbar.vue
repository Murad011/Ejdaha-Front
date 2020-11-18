<template>

<div class="wrapper">
    <div class="sidebar">
       <h2 class="ejdaha">Ejdaha Delivery</h2>
        <ul>
            <li><router-link to="/"><i class="fas fa-home"></i>Home</router-link></li>
            <li><router-link to="/staticties"> <i class="fas fa-user"></i>Statistika</router-link> </li>
            <li><router-link to="/sifarishler_siyahisi"> <i class="fas fa-address-card"></i>Sifarisler Siyahisi</router-link> </li>
        </ul> 
        <div class="social_media">
          <router-link to="login"><i class="fas fa-sign-out-alt"></i></router-link>
          
      </div>
    </div>
 
</div>


</template>

<script>
     
export default {
  name: 'Navbar',
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
.font {
    font-family: 'Raleway', sans-serif;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
  background-color: #f3f5f9;
}
.social_media{
  margin-bottom: 11px;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 100%;
  height: 100%;
  background: #4882da;
  background: #4882da;

}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  margin: 10px;
  
}

.wrapper .sidebar ul li{
  padding: 1px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);

}    



.wrapper .sidebar ul li a{
  color: #bdb8d7;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
 
}

.wrapper .sidebar ul li:hover{
  background-color: #4882da;
  background-color: #4882da;
 
}
    
.wrapper .sidebar ul li:hover a{
  color: #fff;
  text-decoration: none;
}
 
.wrapper .sidebar .social_media{
  position: absolute;
  bottom: 85px;
  left: 97%;
  transform: translateX(-5%);
  display: flex;
}

.wrapper .sidebar .social_media a{
  display: block;
  width: 40px;
  background:#4882da;
  background: #4882da;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}




</style>
