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
              <th  v-for="data in table_head" :key="data">{{data}}</th>
          </tr>
          <tr>
             <td> {{customer.id}} </td>
             <td> {{customer.name}} </td>
             <td> {{customer.username}} </td>
             <td>{{customer.website}}</td>
             <td> {{customer.address.city}} </td> 
          </tr>
      </table>
  </div>
</template>

<script>
export default {  
  data(){
    return{
      id: this.$route.params.id,
      customer: {},
      table_head:['No','Ad',"Soyad",'Sifarish','Location']
    }
  },
  created(){

        fetch('https://jsonplaceholder.typicode.com/users/'+this.id)
        .then(response => response.json())
        .then(data => {
          this.customer = data
          console.log(data.address.city)
          })
  }
}
</script>

<style scoped>
/* *{
        margin: 0;
        padding: 0;
        outline: 0;
} */

.filter{
    display: flex;
    opacity: .7;
    margin: 15% 35%;
}

#customer {
    
    transform: translate(-50%, -50%);
    width: 30%;
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    background:  #46ddf5;
    text-align: center;
    flex: 1;
    margin: 50px;
    
}

#courier {
    transform: translate(-50%, -50%);
    width: 30%;
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    background:  #46ddf5;
    text-align: center;
    flex: 1;
    margin: 50px;
}
th,td {
    padding: 12px 15px;
    
}
.font {
    font-family: 'Raleway', sans-serif;
 }

</style>