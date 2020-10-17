<template>
    <div class="content">
    <div class="card">
        <div class="icon"><i class="fas fa-user"></i></div>
        <img class="title1" src="./image/freecourier.png" alt="">
        <a href="#" target="_blank" class="font">Total Busy Couriers</a>
        <p class="text">Ejdaha Delivery</p>
    
    </div>
    <div class="card">
        <div class="icon"><i class="fas fa-heart"></i></div>
        <img class="title1" src="./image/busycourier.png" alt="">
        <a href="#" target="_blank" class="font">Total Busy Couriers</a>
        <p class="text">Busy Crouires</p>
    
    </div>
    <div class="card">
        <div class="icon"><i class="fas fa-phone"></i></div>
        <img class="title1" src="./image/packages.png" alt="">
        <a href="#" target="_blank" class="font">Total Delivery Packages</a>
        <p class="text">Delivery Pacgakes</p>
    </div>
     <div class="card">
        <div class="icon"><i class="fas fa-phone"></i></div>
        <img class="title1" src="./image/rating.png" alt="">
       <a href="#" target="_blank" class="font">Raiting</a>
        <p class="text">Raiting</p>
     </div>
    
 
    
   
  
<Map/>
   
</div>
  
</template>

<script>
import Map from './Map.vue'
export default {
    name : 'Header',
    components: {
        Map
    }
}
</script>

<style scoped>
.template{
    width: 100vh;
    background-color: #1d1d1d;
    margin: 0;
    font-family: 'Commissioner', sans-serif;
    height: 100vh;
}
.title1{
    
    vertical-align: middle;
    margin: 0 auto;
    margin-top: 8%;
}
.content{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    display: flex;
}

@media screen and (max-width: 767px) {
    .content {
        margin: 50px auto;
        flex-direction: column;
    }
}

.card {
    width: 100%;
    max-width: 230px;
    min-width: 150px;
    height: 110px;
    background-color: #17a2b8 !important;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.24);
    border: 2px solid rgba(7,7,7, 0.12);
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3 ease;
    box-sizing: border-box;
    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
    transform: translateY(-50px);
}


.icon i {
    font-size: 36px;
}

.card .title{
    width: 100%;
    margin: 0%;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
}


.card .text {
    width: 80%;
    margin: 0 auto;
    color: white;
    font-weight: 200;
    text-align: center;
    margin-top: 20px;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3 ease;
}

.card:hover {
    height: 148px;
}

.card:hover .info {
    height: 90%;
}

.card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
}

.card:hover .icon {
    background-position: -120px;
    transition: all 0.3s ease;
}

.card:hover .icon i{
    color: #ff4848;
    opacity: 1;
    transition: all 0.3s ease;
}

.font {
    font-family: 'Raleway', sans-serif;
    color: white;
    text-decoration: none;
}





</style>
