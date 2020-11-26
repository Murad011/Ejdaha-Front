<template>
  <div class="d-flex mt-4 statistika flex-column justify-content-center align-items-center" style="height: 80vh">
    <div class="p-2">
      <h1 >Enter to predict Loyal Custom</h1>
      <h1 class="bg-success text-center text-white"  style="font-size:2rem">{{APIResult}}</h1>
    </div>
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
          <button @click="predict" type="button" id="tesdiq" class="btn btn-primary btn-lg btn-block">Təsdiq Et</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios";

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
        this.APIResult = response.data;
      })

    }
  }
};
</script>


<style scoped>
.btn-primary{
  background-color: #041c3f;
}



</style>
