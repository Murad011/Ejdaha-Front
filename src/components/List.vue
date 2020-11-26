<template>
  <div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head" >
									<th class="cell100 column1">No</th>
									<th class="cell100 column2">Ad</th>
									<th class="cell100 column3">Soyad</th>
									<th class="cell100 column4">Telefon</th>
									<th class="cell100 column5">Email</th>
                  <th class="cell100 column5">Sifariş</th>
                  <th class="cell100 column5">Adress</th>
                  <th class="cell100 column5">Qiymət</th>
                  <th class="cell100 column5">Tarix</th>


								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
								<tr class="row100 body" v-for="data in datas" :key="data.id">
									<td class="cell100 column1">  {{data.id}} </td>
									<td class="cell100 column2">  <router-link :to="'/sifarishi_tamamla/'+data.id"> {{data.ad}} </router-link> </td>
									<td class="cell100 column3">  {{data.soyad}} </td>
									<td class="cell100 column4">  {{data.phone_number}} </td>
									<td class="cell100 column5">  {{data.email}} </td>
                  <td>  {{data.musterinin_sifarisi}} </td>
                  <td>  {{data.location}} </td>
                  <td>  {{data.total}} </td>
                  <td>  {{data.time}}  </td>
								</tr>
                
                         
							</tbody>
						</table>
					</div>
				</div>
					</div>
				</div>
			</div>
</template>

<script>

export default {
    data() {
      return {
        tableHead:["No:","Ad","Soyad","telefon",'email','sifaris','location','total','time'],
        datas: [],
        search:''
      }
    },
    beforeCreate(){
        const user = localStorage.getItem('logged_in')
        if(user === 'false'){
            this.$router.replace({name:'login'})
        }
    },
    created (){

     
        
    

      const api = localStorage.getItem("JWT");
      const token = 'Bearer ' + api

      
        fetch('http://127.0.0.1:8000/customer/',{
          headers:{
            'Authorization': token 
          }
        })
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                this.datas = data              
            }
        })

        
    }

}
</script>

<style scoped>
.js-pscroll {
  overflow: hidden;
}

.table100 .ps__rail-y {
  width: 9px;
  background-color: transparent;
  opacity: 1 !important;
  right: 5px;
}

.table100 .ps__rail-y::before {
  content: "";
  display: block;
  background-color: #ebebeb;
  border-radius: 20px;
  width: 100%;
  height: calc(100% - 30px);
  left: 0;
  top: 15px;
}

.table100 .ps__rail-y .ps__thumb-y {
  width: 100%;
  right: 0;
  background-color: transparent;
  opacity: 1 !important;
}

.table100 .ps__rail-y .ps__thumb-y::before {
  content: "";
  display: block;
  background-color: #cccccc;
  border-radius: 5px;
  width: 100%;
  height: calc(100% - 30px);
  left: 0;
  top: 15px;
}


.limiter {
  width: 1366px;
  margin: 0 auto;
 
}

.container-table100 {
  width: 100%;
  min-height: 20vh;
  background: #fff;
  border-radius: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 30px;
}

.wrap-table100 {
  width: 1500px;
}
.table100 {
  background-color: #fff;
}

table {
  width: 100%;
}

th, td {
  font-weight: unset;
  padding-right: 50px;
}

.column1 {
  width: 5%;
  padding-left: 15px;
}

.column2 {
  width: 20%;
  
}

.column3 {
  width: 20%;
}

.column4 {
  width: 20%;
}

.column5 {
  width: 20%;
}

.table100-head th {
  padding-top: 25px;
  padding-bottom: 30px;
}

.table100-body td {
  padding-top: 20px;
  padding-bottom: 30px;
}

.table100 {
  padding-top: 40px;
}

.table100-head {
  width: 100%;
  top: 0;
  left: 0;
}

.table100-body {
  max-height: 580px;
  overflow: auto;
}


.table100.ver1 th {
  font-family: Lato-Bold;
  font-size: 18px;
  color: #fff;
  line-height: 1.4;
  background-color:#081f42;
}

.table100.ver1 td {
  font-family: Lato-Regular;
  font-size: 15px;
  color: #616060;
  line-height: 1.4;
}

.table100.ver1 .table100-body tr:nth-child(even) {
  background-color: #f8f6ff;
}
  
</style>
