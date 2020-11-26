<template>
  <div class="content">
    <div class="card_div">
      <div class="card">
        <img class="image1" src="./image/freecourier.png" alt="" />
       <em class="font text-white" id="free">Ərazidə Olmayan Kuryerlər</em>
        <b class="font text-white"> {{ free_couriers }} </b>
      </div>

      <div class="card bg-danger">
        <img class="image2" src="./image/busycourier.png" alt="" />
        <em class="font text-white" id="busy">Ərazidə Olan Kuryerlər </em>
        <b class="font text-white"> {{ busy_couriers }} </b>
      </div>

      <div class="card bg-success">
        <img class="image3" src="./image/packages.png" alt="" />
        <em class="font text-white" id="packages"> Sifariş Paketləri </em>
        <b class="font text-white"> {{ delivery_packages }} </b>
      </div>
    </div>
    <div class="container">
      <Map1 />
      <p class="filial">Fliallarimiz <i class="far fa-copyright"></i></p>
    </div>
  </div>
</template>

<script>

import Map1 from "./Map1.vue";
export default {
  components: {
    Map1,
  
  },
  data() {
    return {
      free_couriers: 0,
      busy_couriers: 0,
      delivery_packages: 0,
    };
  },
  beforeCreate() {
    const user = localStorage.getItem("logged_in");
    if (user === "false") {
      this.$router.replace({ name: "login" });
    }
  },
  created() {
    const api = localStorage.getItem("JWT");
    const token = "Bearer " + api;

    fetch("http://127.0.0.1:8000/courier/", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (element.is_busy === false) {
            this.free_couriers += 1;
          } else {
            this.busy_couriers += 1;
          }
        }
      });

    fetch("http://127.0.0.1:8000/delivery/", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (let index = 0; index < data.length; index++) {
          this.delivery_packages += 1;
        }
      });
  },
};
</script>

<style scoped>
.card_div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.4%;
}



.image1 {
  margin: 0 auto;
  margin-top: 5%;
  height: 60px;
}

.image2 {
  margin: 0 auto;
  margin-top: 5%;
  height: 60px;
}

.image3 {
  margin: 0 auto;
  margin-top: 5%;
  height: 60px;
}

.filial {
  font-family: "Raleway", sans-serif;
}

.card {
  width: 100%;
  height: 100%;
  background-color: #1251b1;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 17px;
  box-sizing: border-box;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
}

.card .title {
  width: 100%;
  margin: 0%;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  letter-spacing: 4px;
  margin: 10px;
}

.card .text {
  width: 90%;
  margin: 0 auto;
  color: white;
  font-weight: 200;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  margin: 10px;
}

.font {
  font-family: "Raleway", sans-serif;
  color: black;
  text-decoration: none;
  text-align: center;
  margin: 10px;
}
</style>
