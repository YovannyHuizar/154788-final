<template>
  <section>
    <Notification :alert="alert" />
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          <div class="form-group row">
            <div class="col-sm-2"></div>
            <div class="col-sm-6 title">
              Crear Cuenta
            </div>
            <div class="col-sm-2">
              <img class="icon" src="../assets/cuenta.png" />
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
        <div class="card-text">
          <div class="form-group row">
            <label class="col-sm-4  font padd">Nombre</label>

            <input
              type="text"
              class="form-control my-2 col-sm-7"
              placeholder="Nombre"
              v-model="nombre"
              required
            />
            <label class="col-sm-4 font">Correo</label>
            <input
              type="email"
              class="form-control my-2 col-sm-7"
              placeholder="E-mail"
              v-model="email"
            />
            <label class="col-sm-4 font">Contraseña</label>
            <input
              placeholder="Contraseña"
              type="password"
              class="form-control my-2 col-sm-7"
              v-model="password"
              :class="password.length > 6 ? 'is-valid' : 'is-invalid'"
            />
            <!-- <small class=" col-sm-12" v-if="password.length < 6"
              >Contraseña debe ser mayor a 6 caracteres
            </small> -->
            <label class="col-sm-4 font">Confirmar Contraseña</label>
            <input
              placeholder="Confirmar Contraseña"
              type="password"
              class="form-control my-2 col-sm-7"
              :class="password == confirm ? 'is-valid' : 'is-invalid'"
              v-model="confirm"
            />
            <small v-if="password !== confirm">Contraseñas no coinciden </small>

            <label class="col-sm-4 font"> Foto de perfil</label>
            <input type="file" class=" col-sm-8" placeholder="Foto Perfil" />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2"></div>
          <button
            class="btn btn-primary card-link col-sm-4"
            @click="crearCuenta"
          >
            Crear Cuenta
            <div class="col-sm-3"></div>
          </button>
          <!----Boton para ir a componente de creacion de cuenta -->
          <router-link
            tag="button"
            class="card-link btn btn-link col-sm-4"
            to="/"
            >Ya tengo una cuenta
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
// * Importacion metodos Auth
import Auth from '@/auth'
import Notification from "./Helpers/Notification";
export default {
    name: "SignUp",
    components: {
        Notification
    },
    data() {
        return {
            email: '',
            password: '',
            confirm: '',
            nombre: '',
            foto: '',
            alert: {
                show: false,
                title: '',
                message: '',
                type: ''
            }
        }
    },
    methods: {
        validation(){
            if (!this.password) {
                this.alert = {
                    show: true,
                    title: 'Datos Obligatorios',
                    message: 'Falta Contraseña',
                    type: 'error'
                }
                return true
            }
            if (!this.nombre) {
                this.alert = {
                    show: true,
                    title: 'Datos Obligatorios',
                    message: 'Falta Nombre',
                    type: 'error'
                }
                return true
            }
            if (!this.email) {
                this.alert = {
                    show: true,
                    title: 'Datos Obligatorios',
                    message: 'Falta Correo Electronico',
                    type: 'error'
                }
                return true
            }
            return false
        },
        crearCuenta(){
            if(this.validation()){
                return
            }
            Auth.signUp({email:this.email,password:this.password,nombre:this.nombre})
            .then((result) => {
                console.log(result)
                this.alert = {
                    show: true,
                    title: 'Usuario Creado',
                    message: 'Tu usuario a sido creado con exito.',
                    type: 'success'
                }
                setTimeout(() => {
                    this.$router.push({name:'Login'})
                }, 3000);
            }).catch((err) => {
                this.alert = {
                    show: true,
                    title: 'Algo Salio mal',
                    message: err.message+'\n'+err.code,
                    type: 'error'
                }
            });
        },
        checkEmail() {
            }
        },
    };
</script>
<style lang="scss">
.font {
  font-size: 21px;
  padding-top: 10px;
}
.title {
  font-size: 38px;
}
.icon {
  position: relative;
  max-width: 65px;
  max-height: 65px;
  left: -10px;
  bottom: 20px;
  padding-bottom: 10px;
  width: 100%;
}
.icon2 {
  position: relative;
  max-width: 35px;
  max-height: 55px;
  left: -20px;
  bottom: 10px;
  padding-bottom: 10px;
  width: 100%;
}
.pad {
  padding-bottom: 10px;
}
</style>
