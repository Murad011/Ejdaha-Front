<template>
  <div class="login mt-4">
    <form class="text-center p-5" action="#!">
      <p class="h4 mb-4">Log in</p>

      <input
        v-model="email"
        type="email"
        id="defaultLoginFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />

      <input
        v-model="password"
        type="password"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Password"
      />

      <div class="d-flex justify-content-around">
        <div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultLoginFormRemember"
            />
            <label class="custom-control-label" for="defaultLoginFormRemember"
              >Remember me</label
            >
          </div>
        </div>
      </div>
      <button @click="logIn" class="btn btn-info btn-block my-4" type="submit">
        Sign in
      </button>

      <a href="#" class="mx-2" role="button"
        ><i class="fab fa-facebook-f light-blue-text"></i
      ></a>
      <a href="#" class="mx-2" role="button"
        ><i class="fab fa-twitter light-blue-text"></i
      ></a>
      <a href="#" class="mx-2" role="button"
        ><i class="fab fa-linkedin-in light-blue-text"></i
      ></a>
      <a href="#" class="mx-2" role="button"><i class="fab fa-google"></i></a>
    </form>
    
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      access: "",
      refresh: "",
      loggedIn: false,
      selected: true,
    };
  },
  methods: {
    async logIn(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };

      await fetch("http://127.0.0.1:8000/apis/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          this.refresh = data.refresh;
          this.access = data.access;
          localStorage.setItem("JWT", data.access);
          localStorage.setItem("refresh", data.refresh);
          if (data.access) {
            this.loggedIn = true;
            localStorage.setItem("logged_in", this.loggedIn);
            if (this.loggedIn == true) {
              this.$router.replace({ name: "header" });
            }
            EventBus.$emit("loggedIn", this.clickCount);
          }
        })
        
    },
  },
};
</script>

<style scoped>
.btn-info {
  background-color: #081830 !important;
  background-color: #22406d !important;
}

.text-center{
  border: 2px solid  #081830;
  border-radius: 50px;
  width: 50%;
  margin: auto;
  
}
</style>
