<template>
  <section>
    <div class="row mb-5">
      <div class="col card-title color2 mb-5">
        <h2>{{ usuario || "Esperando Retador" }}</h2>
      </div>
    </div>
    <div class="row ">
      <div class="col ">
        <img
          width="100px"
          height="auto"
          v-if="opciones && opciones.length === 2"
          :src="options[opcion]"
          alt=""
          srcset=""
        />
        <div class="">
          <h1 class="mb-5">
            {{ !opcion ? "💤" : "" }}
          </h1>
            <img
          width="140px"
          height="auto"
          v-if="opciones && opciones.length === 1"
          :src="options[opcion]"
          alt=""
          srcset=""
        />
        </div>
        <div class="row">
          <h2 class="col mt-5">
             {{ !opcion ? "Selecciona un tipo..." : "" }}
          </h2>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col" v-for="(option, key) in options" :key="key">
        <button @click="select(key)" class="btn btn-link">
          <img width="100px" height="auto" :src="option" alt="" srcset="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { mapGetters } from "vuex";
import { db } from "@/config/_firebase";
export default {
    name: 'UsuarioArea',
    props: ['usuario', 'opcion', 'userId', 'posicion','opciones'],
    data(){
        return{
            options:{
                p: require('@/assets/img/planta.png'),
                a: require('@/assets/img/Agua.png'),
                f: require('@/assets/img/Fuego.png'),
            }
        }
    },
    methods: {
        select(key){
            if(this.user.uid === this.userId){
                this.updateOption(key)
            }else{
                alert('No eres el usuario')
            }
        },
        updateOption(opcion){
            let opciones = this.opciones
            opciones[this.posicion] = opcion
            db.collection('partidas').doc(this.$route.params.id).update({
                opciones
            })
        }
    },
      computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
};
</script>
<style lang="scss">
.color2 {
  background-color: #1b2938;
  border-radius: 10px;
}
</style>
