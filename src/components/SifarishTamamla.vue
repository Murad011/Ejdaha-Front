<template>
  <div>
    
      <div class="filter">
          <table class="font" id="customer">
          
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
         <table class="font" id="courier">
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Adress</th>
              <th>Price</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Fabiden</td>
              <td>LeBlanc</td>
              <td>Fabiden@gmail.com</td>
              <td>1500$</td>
          </tr>           
      </table>

      </div>
      <button id="submit_button"> Submit </button>
    <div class="search_div">
      <input type="text" v-model="search"  id="searchList" placeholder="Search...">
    </div>
      
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
*{
    margin: 0;
    padding: 0;
    outline: 0;
}
/* *{
        margin: 0;
        padding: 0;
        outline: 0;
} */


.filter{
    /* position: absolute; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    opacity: .7;
    margin-top: 10%;
    margin-left:30%;margin-right: 30%;

}

#customer {
    position: absolute;
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
    flex: 1;
    margin: 50px;
    
}

#courier {
    position: absolute;
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
    flex: 1;
    margin: 50px;
}
th,td {
    padding: 12px 15px;
    
}
.font {
    font-family: 'Raleway', sans-serif;
}







 #submit_button{
    position: absolute;
    top: 70px;
    right: 20px;
    border-radius: 50%;
    border: 1px solid green;
    background-color: greenyellow;
    padding: 20px;
    color: blue;
 }

 .search_div{
    text-align: center;
    margin-top: 10px;
     

 }

 #searchList{
    width: 70%;
    
  }


</style>