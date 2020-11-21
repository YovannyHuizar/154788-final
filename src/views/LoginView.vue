<template>
  <section class="login-box container">
    <div class="padd"><img src="../assets/Pokemon.png" /></div>
    <div class="row ">
      <div class="col-12 col-md-6 mx-auto padd">
        <!---Utilizamos el componnte dentro de la vista html --->
        <login-box v-if="$route.name == 'Login'" />
        <sign-up v-if="$route.name == 'SignUp'" />
      </div>
    </div>
  </section>
</template>

<script lang="js">
///*importamos componentes a nuestra vista (view)


import LoginBox from "@/components/LoginBox";
import SignUp from "@/components/SignUpBox";
export default {
     name: "LoginView",
     components: {
         LoginBox, //*Registramos  componente en nuestro javascript
         SignUp
     }
}
</script>
<style lang="scss">
.padd {
  padding-top: 10px;
  padding-bottom: 50px;
}
</style>
