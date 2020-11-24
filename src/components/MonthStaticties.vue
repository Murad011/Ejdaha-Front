<template>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 80vh">
    <div class="p-2">
      <h1 >Enter to predict Loyal Custom</h1>
      <h1 class="bg-primary text-center text-white "  style="font-size:2rem">{{APIResult}}</h1>
    </div>
<<<<<<< HEAD
    
  
    <div class="col text-center">
    <p class="w-60 text-center">Courier staticties</p>
     
=======
    <div class="p-2">
      <form @submit.prevent>
        <div class="form-row" style="max-width:500px">
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="Recency">Recency</label>
            <input
              class="form-control"
              v-model.trim="customdata.Recency"
              type="number"
              id="Recency"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="Frequency">Frequency</label>
            <input
              class="form-control"
              v-model.trim="customdata.Frequency"
              type="number"
              id="Frequency"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="Monetary">Monetary</label>
            <input
              class="form-control"
              v-model.trim="customdata.Monetary"
              type="number"
              id="Monetary"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="R">R</label>
            <input
              class="form-control"
              v-model.trim="customdata.R"
              type="number"
              id="R"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="F">F</label>
            <input
              class="form-control"
              v-model.trim="customdata.F"
              type="number"
              id="F"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="M">M</label>
            <input
              class="form-control"
              v-model.trim="customdata.M"
              type="number"
              id="M"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="RFMGroup">RFMGroup</label>
            <input
              class="form-control"
              v-model.trim="customdata.RFMGroup"
              type="number"
              id="RFMGroup"
            />
          </div>
          <div class="form-group col-md-3">
            <label class="col-12 px-0" for="RFMScore">RFMScore</label>
            <input
              class="form-control"
              v-model.trim="customdata.RFMScore"
              type="number"
              id="RFMScore"
            />
          </div>
          <button @click="predict" type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
      </form>
>>>>>>> 92e7ae83f8433951177a5905324e2bd2bf6f6917
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD

import { mdbLineChart } from "mdbvue";
export default {
    name: "ChartPage",
    components: {
      mdbLineChart,
      
    
    },
    data() {
      return {
        lineChartData: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(255, 99, 132, 0.1)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 0.7,
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: "My Second dataset",
              backgroundColor: "rgba(151,187,205,0.2)",
              borderColor: "rgba(151,187,205,1)",
              borderWidth: 0.8,
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        },
        lineChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ]
          }
        }
      };
    },
    beforeCreate(){
        const user = localStorage.getItem('logged_in')
        if(user === 'false'){
            this.$router.replace({name:'login'})
        }
    }
  };
</script>
=======
import { getAPI } from "@/axios";
>>>>>>> 92e7ae83f8433951177a5905324e2bd2bf6f6917

export default {
  name: "Posts",
  data() {
    return {
      customdata: {
        Recency: "",
        Frequency: "",
        Monetary: "",
        R: "",
        F:"",
        M:"",
        RFMGroup:"",
        RFMScore:""

      },
      APIResult: ""
    };
  },
  methods: {
    async predict() {

getAPI.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('JWT')}`;


      getAPI
      .get("http://127.0.0.1:8000/posts/",{
        params:{
          Recency: this.customdata.Recency,
          Frequency: this.customdata.Frequency,
          Monetary: this.customdata.Monetary,
          R: this.customdata.R,
          F:this.customdata.F,
          M:this.customdata.M,
          RFMGroup:this.customdata.RFMGroup,
          RFMScore:this.customdata.RFMScore
        }
      })
      .then(response => {
        console.log("Recieved data successfully");
        this.APIResult = response.data;
        console.log(response.data);
      }) 
      .catch(err => {
          console.log(err);
        });

    }
  }
};
</script>

<style>
</style>
