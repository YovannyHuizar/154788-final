<template>
  <section v-show="ocultar">
    <div class="card-title mt-2 color ">
      <router-link class="btn btn-link col col-1 float-right" to="/partidas"
        ><h2>x</h2></router-link
      >

      <h4 class="center pl-5 pt-3 mt-5" v-if="!partida.completed">
        {{ partida.participantes_nombre[0] }} vs
        {{ partida.participantes_nombre[1] || "Sin Retador" }}
      </h4>
      <h4 class="center mt-5" v-if="partida.completed">
        Ganador: {{ partida.ganador_name }}
      </h4>
    </div>
    <div class="row">
      <div class="col  color ">
        <UsuarioArea
          class="color"
          :posicion="0"
          :opciones="partida.opciones"
          :userId="partida.participantes_id[0]"
          :usuario="partida.participantes_nombre[0]"
          :opcion="partida.opciones[0]"
        />
      </div>
      <div class="col col-2"></div>
      <div class="col color">
        <UsuarioArea
          :posicion="1"
          :opciones="partida.opciones"
          :userId="partida.participantes_id[1]"
          :usuario="partida.participantes_nombre[1]"
          :opcion="partida.opciones[1]"
        />
      </div>
    </div>
    <div class="mb-5"></div>
    <div
      class="row mt-3"
      v-if="
        partida.created_by !== user.uid &&
          partida.participantes_nombre.length !== 2
      "
    >
      <div class="col col-sm-4 offset-sm-4">
        <button class="btn btn-primary mb-5" @click="unirsePartida">Jugar</button>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import { mapGetters } from "vuex";
import { db } from "@/config/_firebase";
import UsuarioArea from "./Usuario";
const partidas = db.collection('partidas')
export default {
    name: 'PartidaView',
    components:{
      UsuarioArea
    },
    beforeRouteEnter (to, from, next) { // ? Este navigation guard se ejecuta cuando es la primera vez que entra, el siguiente cuando cmabia la ruta. Como lodice su nombre.
    next(vm => {
      vm.$bind('partida', partidas.doc(to.params.id))
    })
  },
  beforeRouteUpdate (to, from, next) { // ? Para cargar datos con los cambios de ruta, es recomendable utilizar reste tipo de navigation guards: https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards, Especialmente cuando es el mismo componente el que se muestra en la misma ruta, y solo el parametro de la ruta cambia. https://github.com/vuejs/vuefire/issues/167
    this.$bind('partida', partidas.doc(to.params.id))
    next()
  },
  data() {
      return {
          partida: {},
          ocultar: true
      }
  },
  watch:{
    partida:{
      deep: true,
      inmmediate: true,
      handler: function(val){
        if(val.opciones&&val.opciones.length===2 && !val.completed){
          this.whoWins()
        }
      }
    },
    '$route.params.id': {
      deep: true,
      immediate: true,
      handler: function(val,) {
        this.$bind('partida', partidas.doc(val))
      }
    },
  },
 methods:  {
    unirsePartida() {
      let nombres = this.partida.participantes_nombre
      let ids = this.partida.participantes_id
      nombres[1] = this.user.displayName
      ids[1] = this.user.uid
      db.collection('partidas').doc(this.$route.params.id).update({
        participantes_nombre: nombres,
        participantes_id: ids
      })
    },
    whoWins () {
      let partida = {
        ganador_name: '',
        ganador_id: '',
        completed: true
      }
      if (this.partida.opciones[0] === this.partida.opciones[1]) {
        partida.ganador_name = 'Empate'
      }
      // $player1 ==  "planta" && $player2 == "agua"
      if (this.partida.opciones[0] === 'p' && this.partida.opciones[1] === 'a') {
        partida.ganador_name = this.partida.participantes_nombre[0]
        partida.ganador_id = this.partida.participantes_id[0]
      }
      // $player1 == "agua" && $player2 == "planta"
      if (this.partida.opciones[0] === 'a' && this.partida.opciones[1] === 'p') {
        partida.ganador_name = this.partida.participantes_nombre[1]
        partida.ganador_id = this.partida.participantes_id[1]
      }
      // $player1 == "Agua" && $player2 == "Fuego"
      if (this.partida.opciones[0] === 'a' && this.partida.opciones[1] === 'f') {
        partida.ganador_name = this.partida.participantes_nombre[0]
        partida.ganador_id = this.partida.participantes_id[0]
      }
      // $player1 == "fuego" && $player2 == "agua"
      if (this.partida.opciones[0] === 'f' && this.partida.opciones[1] === 'a') {
        partida.ganador_name = this.partida.participantes_nombre[1]
        partida.ganador_id = this.partida.participantes_id[1]
      }
      // $player1 == "fuego" && $player2 == "planta"
      if (this.partida.opciones[0] === 'f' && this.partida.opciones[1] === 'p') {
        partida.ganador_name = this.partida.participantes_nombre[0]
        partida.ganador_id = this.partida.participantes_id[0]
      }
      // $player1 = "planta" && $player2 == "fuego"
      if (this.partida.opciones[0] === 'p' && this.partida.opciones[1] === 'f') {
         partida.ganador_name = this.partida.participantes_nombre[1]
        partida.ganador_id = this.partida.participantes_id[1]
      }
        console.log(this.partida)
      partidas.doc(this.partida.id).update(partida)
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
.color {
  background-color: #2c3e50;
  border-radius: 10px;
  padding-bottom: 12px;
}
a {
  color: white;
}
</style>
