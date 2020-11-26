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
             <td class="text-center"> {{customer.id}} </td>
             <td class="text-center"> {{customer.ad}} </td>
             <td class="text-center"> {{customer.soyad}} </td>
             <td class="text-center"> {{customer.phone_number}} </td>
             <td class="text-center"> {{customer.email}} </td>
             <td class="text-center"> {{customer.musterinin_sifarisi}} </td>
             <td class="text-center"> {{customer.location}} </td>
             <td class="text-center"> {{customer.total}} </td>
             <td class="text-center"> {{customer.time}}</td>
          </tr>
      </table>
      </div>
      </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="font bg-danger" id="courier">
              <tr>
                <th  v-for="data in table_head2" :key="data">{{data}}</th>
              </tr>
              <tr class="text-center">
                <td class="text-center"> {{courier.ad}} </td>
                <td class="text-center"> {{courier.soyad}} </td>
                <td class="text-center"> {{courier.phone_number}} </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    <div class="container">
        <Map/>
        
    </div> 
    <div class="container my-4">
      <button type="button" @click="gonder" id="button" class="btn btn-primary btn-lg btn-block bg-success">Tesdiq et</button>
      </div>
      
  </div>
</template>

<script>
import Map from './Map.vue'
export default {  
  
        components: {
            Map
           
        },
  data(){
    return{
      
      id: this.$route.params.id,
      customer: {},
      courier:{
        id:'',
        ad:'',
        soyad:'',
        phone_number:'',
        is_busy:''
      },
      table_head1:['No','Ad',"Soyad",'Telefon','Email','Sifarish','Location','Total','Tarix'],
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
            
          });

          fetch('http://127.0.0.1:8000/courier/',{
            method:'GET',
            headers:{
              
              'Authorization': token 
            }
          })
          .then(response => response.json())
          .then(data => {
            for (let index = 0; index < data.length; index++) {
              const element = data[index];
              if (element.is_busy === false) {
                this.courier.id = element.id
                this.courier.ad = element.ad
                this.courier.soyad = element.soyad
                this.courier.phone_number = element.phone_number
                this.courier.is_busy = element.is_busy

              }
            }
          })
  },
  methods:{
    gonder(){
      const delivery_data = {
        musterinin_adi:this.customer.ad,
        musterinin_soyadi:this.customer.soyad,
        musterinin_sifarisi:this.customer.musterinin_sifarisi,
        musterinin_nomresi:this.customer.phone_number,
        email: this.customer.email,
        kuryerin_adi:this.courier.ad,
        kuryerin_soyadi:this.courier.soyad,
        kuryerin_nomresi:this.courier.phone_number,
        location:this.customer.location,
        total:this.customer.total
      }
      const api = localStorage.getItem("JWT");
      const token = 'Bearer ' + api
      fetch('http://127.0.0.1:8000/delivery/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': token 
        },
        body:JSON.stringify(delivery_data)
      })
      .then(response => response.json())


      fetch('http://127.0.0.1:8000/customer/'+this.id+'/',{
        method:'DELETE',
        headers:{
          'Authorization': token 
        }
      })
      .then(response => response.json())
      
      const data = {
        ad: this.courier.ad,
        soyad: this.courier.soyad,
        phone_number: this.courier.phone_number,
        is_busy:true
      }

      fetch('http://127.0.0.1:8000/courier/'+this.courier.id+'/',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': token 
        },
        body:JSON.stringify(data)
      })
      .then(response => response.json())

      this.$notify({
      group: 'foo',
      title: 'Təsdiq edildi',
      text: 'Sifariş göndərildi'
});
      
      this.$router.replace({name:'sifarisler'})



    }
 
   }
  
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
    background-color: #1251b1;
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
    background: #04152e;
    text-align: center;
    color: white;
    
}


th,td {
    padding: 12px 15px;
    
}
.font {
    font-family: 'Raleway', sans-serif;
}

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
 
  font-size: 12px;
 
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
 
}


.search_div{
    text-align: center;
    margin: 20px;
     

 }

#searchList{
width: 70%;
    
  }


</style>
