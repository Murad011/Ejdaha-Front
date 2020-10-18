<template>
  <div class="filter">
      <table class="font" id="customer">
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Adress</th>
              <th>Price</th>
          </tr>
          <tr>
              <th>1</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>2</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>3</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>3</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
            <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
      </table>

         <table class="font" id="courier">
          
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Adress</th>
              <th>Price</th>
          </tr>
          <tr>
              <th>1</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>2</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>3</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>3</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
            <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
           <tr>
              <th>4</th>
              <th>Fabiden</th>
              <th>LeBlanc</th>
              <th>Fabiden@gmail.com</th>
              <th>1500$</th>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: 'SifarishiTamamla'
    
}
</script>

<style scoped>
*{
        margin: 0;
        padding: 0;
        outline: 0;
}

.filter{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: .7;
}

#customer {
    position: absolute;
    z-index: 2;
    top: 30%;
    right: 1%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    background:  #46ddf5;
    text-align: center;
}

#courier {
    position: absolute;
    z-index: 2;
    left: 30%;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    background:  #46ddf5;
    text-align: center;
}
th,td {
    padding: 12px 15px;
    
}
.font {
    font-family: 'Raleway', sans-serif;
 }

</style>