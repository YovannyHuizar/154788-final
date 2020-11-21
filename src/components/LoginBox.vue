<template>
  <section class="login-box">
    <Notification :alert="alert" />
    <div class="card">
      <div class="card-body">
        <div class="form-group row">
          <div class="col-sm-3 "></div>
          <div class="col-sm-5 mt-4">
            <center><h4>Iniciar Sesion</h4></center>
          </div>
          <div class=" mr-2 col-sm-2 mt-4">
            <img class="icon" src="../assets/pokeball.png" />
          </div>
          <div class="col-sm-2"></div>
        </div>

        <div class="card-text">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control my-2"
                placeholder="E-mail"
                required
                v-model="user.email"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Contraseña</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control my-2"
                placeholder="Contraseña"
                required
                v-model="user.password"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-5">
              <button @click="login" class="btn btn-primary card-link">
                Entrar
              </button>
            </div>
            <div class=" col-sm-2"></div>
            <div class="col-sm-5">
              <router-link
                tag="button"
                class="card-link btn btn-primary"
                to="/sign-up"
                >Crear Cuenta</router-link
              >
            </div>

            <div class="col-sm-8">
              <router-link
                tag="button"
                class="card-link btn btn-link mt-4"
                to="/sign-up"
                >¿Has olvidado tu Contraseña?</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
// * Importacion metodos Auth
import Auth from '@/auth'
import Notification from "./Helpers/Notification";
export default{
 name:'LoginBox',
 components:{
 Notification
},
data(){
  return{
    user:{
    email:'',
    password:'',
    foto:'Screenshot_1.jpg'
  },
  alert:{
    show: false,
    title: '',
    message:'',
    type: ''
  }
 }
},
methods: {
  login() {
    Auth.login(this.user).then((result) => {
      console.log(result)
      this.alert ={
        show: true,
        title: `Bienvenido ${result.user.displayName}`,
        message: 'Suerte en tus partidas',
        type: 'sucess'
      }
    }).catch((err) =>{
      this.alert ={
        show: true,
        title: 'Bienvenido',
        message: err.message + '\n' + err.code,
        type: 'error'
      }
    });
  }
},
}
</script>
<style lang="scss">
.icon {
  position: relative;
  left: -20px;
  bottom: 10px;
  padding-bottom: 10px;
  width: 80%;
}
.round {
  border-radius: 25px;
}
.card-body {
  background-color: #363851;
}
button {
  width: 80%;
}
</style>
