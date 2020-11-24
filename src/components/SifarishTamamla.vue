<template>
  <div>
    
      <div class="container m-auto py-5">
          <div class="row">
              <div class="col">
              <table class="font" id="customer">
          
          <tr>
              <th  v-for="data in table_head1" :key="data">{{data}}</th>
          </tr>
          <tr>
             <td> {{customer.id}} </td>
             <td> {{customer.ad}} </td>
             <td> {{customer.soyad}} </td>
             <td> {{customer.phone_number}} </td>
             <td> {{customer.email}} </td>
             <td> {{customer.musterinin_sifarisi}} </td>
             <td> {{customer.location}} </td>
             <td> {{customer.total}} </td>
          </tr>
      </table>
      </div>
      </div>
      </div>
    <div class="container">
        <Xerite/>
    </div> 
    <div class="container my-4">
      <router-link :to="'/preview/'+customer.id"><button type="button" id="button" class="btn btn-primary btn-lg btn-block">Təsdiq et</button></router-link>
      </div>
  </div>
</template>

<script>
import Xerite from './Xerite.vue'
export default {  
        components: {
            Xerite
           
        },
  data(){
    return{
      id: this.$route.params.id,
      customer: {},
      courier:{},
      table_head1:['No','Ad',"Soyad",'Telefon','Email','Sifariş','Location','Total'],
      table_head2:['Ad',"Soyad",'Telefon'],
      search: ''
    }},

    beforeCreate(){
        const user = localStorage.getItem('logged_in')
        if(user === 'false'){
            this.$router.replace({name:'login'})
        }
    },
  
  created(){

        
  

        const api = localStorage.getItem("JWT");
        const token = 'Bearer ' + api
        fetch('http://127.0.0.1:8000/customer/'+this.id+'/' ,{
          method: 'GET',
          headers:{
            'Authorization': token 
          }
        })
        .then(response => response.json())
        .then(data => {
          this.customer = data
            
          })
  },
  
}
</script>

<style scoped>

#map{
    margin-top: 20px;
}

#button{
  background-color:  #041938;
}

#customer {
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    background: #04152e;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    border: 5px;
    text-align: center;
    color: white;
    
    
    
}

#courier {
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    
    text-align: center;
    
}


th,td {
    padding: 12px 15px;
    
}
.font {
    font-family: 'Raleway', sans-serif;
}




.search_div{
    text-align: center;
    margin: 20px;
     

 }

#searchList{
width: 70%;
    
  }


</style>
