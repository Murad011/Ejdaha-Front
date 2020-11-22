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

      <div class="container m-auto py-5">
          <div class="row">
              <div class="col">
              <table class="font" id="customer">
          
          <tr>
              <th  v-for="data in table_head2" :key="data">{{data}}</th>
          </tr>
          <tr >
             
             <td class="text-center"> {{courier.ad}} </td>
             <td class="text-center"> {{courier.soyad}} </td>
             <td class="text-center"> {{courier.phone_number}} </td>
             <td class="text-center"> <router-link :to="'/preview/' + courier.id"> <button> Tesdiqle </button> </router-link></td>
          </tr>
      </table>
      </div>
      
          </div>

      </div>


    <div class="container">
        <Xerite/>
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
      table_head1:['No','Ad',"Soyad",'telefon','email','sifarish','location','total'],
      table_head2:['Ad',"Soyad",'telefon'],
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

          fetch('http://127.0.0.1:8000/courier/',{
          headers:{
            'Authorization': token
          }
        })
        .then(response => response.json())
        .then(data => {
          for (let index = 0; index < data.length; index++) {
                if(data[index].is_busy === false){
                  
                  this.courier = data[index]
                  console.log(this.courier)

                }              
            }
        })
  },
  
}
</script>

<style scoped>

#map{
    margin-top: 20px;
}



#customer {
    height: 300px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 20px 10px rgba(32, 32, 32, .3);
    border: 5px;
    text-align: center;
    
    
    
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
