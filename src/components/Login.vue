<template>
<div class="login">
  <form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Log in</p>

  
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

    <div class="d-flex justify-content-around">
        <div>
           
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        
    </div>
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-google"></i></a>

</form>
</div>


</template>

<script>

export default {

    data(){
        return{
            email: "",
            password:"",
            access:"",
            refresh:""
        }
    },
    methods:{
       async logIn(e){
            e.preventDefault;
            const data = {
                email: this.email,
                password: this.password
            };

            await fetch('http://127.0.0.1:8000/apis/api/token/',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                this.refresh = data.refresh
                this.access = data.access
                localStorage.setItem("JWT", data.access);
                console.log('succes ==> ', data);

                this.$router.push('header');
            })
            .catch((error) =>{
                console.log('error ==>', error);
            });

        }
    },



}
</script>

<style scoped>


.btn-info{
  background-color:#4882da !important;
  background-color: #4882da !important;
  
}


</style>