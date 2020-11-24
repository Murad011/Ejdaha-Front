<template>
    <div>
      <mdb-tbl>
        <mdb-tbl-head color="black" textWhite>
          <tr>
            <th v-for="data in tableHead" :key="data">{{data}}</th>
           
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr>
            
                <td v-for="data in customer" :key="data">
                  {{data}}
              </td>
              <td>
                Kenan
              </td>
              <td>
                Huseynov
              </td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

     <button type="button" id="button" class="btn btn-primary btn-lg btn-block my-5">Tesdiq et</button>
    </div>
</template>
<script>
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
export default {
     name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    },
    data(){
        return{
            id: this.$route.params.id,
            tableHead:['No','Musterinin adi','Musterinin soyadi','Musterinin telefon nomresi','Musterinin emaili','Musterinin sifarisi','Location','Total','Kuryerin Adi','Kuryerin Soyadi'],
            customer: [],
            courier: []

        }
    },
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
        this.customer = data})

        fetch('http://127.0.0.1:8000/courier/' ,{
          method: 'GET',
          headers:{
            'Authorization': token
          }
        })
        .then(response => response.json())
        .then(data => {
          for (let index = 0; index < data.length; index++) {
                if(data[index].is_busy === false){
                  
                  this.courier.push(data[index])
                  console.log(this.courier)

                }              
            }
        })

  }
}
</script>
<style scoped>
.table{
    border-collapse: collapse;
}
td , th{
    border: 1px solid black;
}
div{
    margin-right: 10px;
    margin-top: 200px;
}
.btn-primary{
    background:#00060e;
}


#button{
  background-color:  #041938;

}
</style>