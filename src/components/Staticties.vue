<template>
  <div class="area">
      <form class="col s12">
          <div class="row">
          <div class="input-field col s3">
            <input id="temp" type="number" class="validate"/>
            <label for="free">Free Couriers</label>
          </div>

           <div class="input-field col s3">
            <input id="temp" type="number" class="validate"/>
            <label for="busy">Busy Couriers</label>
          </div>

           <div class="input-field col s3">
            <input id="temp" type="number" class="validate"/>
            <label for="pack">Packages</label>
          </div>
          <div class="col s3">
              <div class="row">
                  <a class="col s6 wafes-effect waves-light btn-large teal lighten-2">
                    <i class="material-icons">
                        cloud_upload
                    </i>
                </a>
              </div>
            </div>
          </div>
      </form>
      <LineChart :chart-data='dataCollection'>
      </LineChart>
   </div>
</template>

<script>
import LineChart from './FovoriotLine.js'
import axios from 'axios'
export default {
    name: 'Staticties',
    
    components: {
        LineChart
    },
     data(){
    return {
      dataCollection: null,
      loaded: false,
      freeCouriers: [0,1,2,3,4,5,6,7,8,9],
      busyCouriers: [9,8,7,6,5,4,3,2,1,0],
      deliveryPackages: [4,6,4,6,4,6,4,6,4,6],
      time: [0,1,2,3,4,5,6,7,8,9]
    }
  },
  async mounted(){
    this.fillData()
    await this.getFavoriot()
  },
  methods: {
    fillData(){
      this.dataCollection = {
        labels: this.time,
        datasets: [
          {
            label : 'Free Couriers',
            bacgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightpink',
            pointBackgroundColor: 'red',
            borderWidht: 1,
            pointBorderColor: 'red',
            data: this.freeCouriers
          },
           {
            label : 'Busy Couriers',
            bacgroundColor: 'rgba(0, 0, 255, 0.2)',
            borderColor: 'lightblue',
            pointBackgroundColor: 'blue',
            borderWidht: 1,
            pointBorderColor: 'blue',
            data: this.busyCouriers
          },
           {
            label : 'Delivery Packages',
            bacgroundColor: 'rgba(255, 255, 0, 0.2)',
            borderColor: 'orange',
            pointBackgroundColor: 'orange',
            borderWidht: 1,
            pointBorderColor: 'orange',
            data: this.deliveryPackages
          }
        ]
      }
    },
    getFovoriot(){
      var url = ''
      var headers = {
        header: {
          'Content-Type': 'application/json',
          'apikey': ''
        }
      }
      axios.get(url, headers)
      .then((x)=>{
        console.log(x)
      })
      .catch((x)=>{
        console.log(x)
      })
    },
    postFovoriot(){

    }
  }   
}
</script>

<style>
.area {
    width: 500px;
    height: 120px;
    margin: auto;
}
</style>