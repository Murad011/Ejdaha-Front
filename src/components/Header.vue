<template>
    <div class="header">
         <div class="info">
       <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img class="title1" src="./image/courier.png" alt="">
                        <h3 class="title2">Total Free Couriers</h3>
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">Total Free Couriers</a>
                    </h3>
                    <p>Ejdaha Delivery</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img class="title1" src="./image/courier2.png" alt="">
                        <h3 class="title2">Total Busy Couriers</h3>
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">Total Busy Couriers</a>
                    </h3>
                    <p>Ejdaha Delivery</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img class="title1" src="./image/packages.png" alt="">
                        <h3 class="title2">Total Delivery Packages</h3>
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">Total Delivery Packages</a>
                    </h3>
                    <p>Ejdaha Delivery</p>
                </div>
            </div>
        </div>
    </div>
  </div>

   
</div>
  
</template>

<script>
export default {
    name : 'Header'
}
</script>

<style scoped>
.container {
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.container .card {
    position: relative;
    border-radius: 10px;
    
    
    
}



.container .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
    display: flex;
    
}

.title1 {
    
    flex: 1;
    vertical-align: middle;
    height: 140px;
    margin: 0 auto;
    margin-top: 8%;
   
    
}
.title2{
    flex: 2;
    text-align: center;
    line-height: 2.8;
    
    
    
}

.container .card:nth-child(1) .icon {
    background: #e07768;

}

.container .card:nth-child(2) .icon {
    background: #6eadd4;
}

.container .card:nth-child(3) .icon {
    background: #4aada9;
}


.container .card .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
    
}

i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

.container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
    
}

.container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex; 
    justify-content: center;
    align-items: center; 
    z-index: 1;
    transform: translateY(100px);
    
}  

.container .card:hover .face.face1{
    background: #ff0057;
    transform: translateY(0px);
}

.container .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content {
    opacity: 1;
}

.container .card .face.face1 .content i{
    max-width: 100px;
}

.container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
    transform: translateY(-100px);
}



.container .card:hover .face.face2{
    transform: translateY(0);
}

.container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}

.container .card .face.face2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
} 

.container a {
    text-decoration: none;
    color: #414141;
    
}

.info {
     
    margin: 0;
    padding: 0;
    min-height: 50vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;   
    font-family: sans-serif;
    background-color: #f1f1f1; 
    
} 

</style>
