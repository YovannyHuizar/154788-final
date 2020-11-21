<template>
  <section>
    <div class="home container">
      <div id="app">
        <Sidebar />
      </div>

      <div><img src="../assets/Pokemon.png" /></div>
      <router-view> </router-view>
     
      <div class="row padd">
        <div class="col-3">
          <button class="btn btn-secondary">
            Partidas Disponibles
          </button>
        </div>
        <div class="col-1"></div>
        <div class="col-1"></div>

        <div class="col-3">
          <button
            class="btn btn-secondary
"
            @click="crearPartida"
          >
            Crear Partida
          </button>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <button
            class="btn btn-secondary
"
          >
           <router-link class="a" to="/historial">Historial de partidas</router-link>
          </button>
        </div>
      </div>

      <div class="row box">
        <div class="col-3 "></div>
        <div class="col-6 padd">
          <h1>Partidas Disponibles</h1>
        </div>
        <div class="col-3"></div>
        <br />
        <div class="col-3 padd"><h3>Partida:</h3></div>
        <div class="col-3 padd"><h3>Creador:</h3></div>
        <div class="col-3 padd"><h3>Modo de juego:</h3></div>
        <div class="col-3 padd"><h3>Privacidad:</h3></div>
      </div>
      <div class="row scrollable box">
        <div class="col-12" v-for="partida in partidasFilter" :key="partida.id">
          <partida-card :partida="partida" />
          <div class="col-8 padd"></div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Auth from "@/auth";
import { mapGetters } from "vuex";
import { db, Timestamp } from "@/config/_firebase";
import PartidaCard from "@/components/partidas/PartidasCard";
import Sidebar from "@/components/Sidebar.vue";
import collect from "collect.js";

export default {
  name: "PartidasView",
  components: {
    PartidaCard,
    Sidebar
  },
  data() {
    return {
      ocultar: true,
      partidas: [],
      partidasFilter: [],
       filter: false,
      partida: {
        match_name: "",
        mode_game: "",
        privacity: "",
        completed: false,
        created_at: Timestamp.now(),
        created_by: "",
        ganador_id: "",
        ganador_name: "",
        title: "",
        opciones: [],
        participantes_id: [],
        participantes_nombre: []
      }
    };
  },
    watch: {
    partidas: {
      deep: true,
      immediate: true,
      handler: function (val) {
        if(!this.filter) {
          this.partidasFilter = val
        }
      }
    },
    filter: {
      deep: true,
      immediate: true,
      handler: function (val) {
        if(!val) {
          this.partidasFilter = this.partidas
        }
      }
    },
  },
  methods: {
    logOut() {
      return Auth.logOut();
    },
    crearPartida() {
      this.partida.created_by = this.user.uid;
      this.partida.participantes_id.push(this.user.uid);
      this.partida.participantes_nombre.push(this.user.displayName);
      db.collection("partidas").add(this.partida);
      this.reset();
    },
    reset() {
      this.partida = {
        match_name: "",
        mode_game: "",
        completed: false,
        created_at: Timestamp.now(),
        created_by: "",
        ganador_id: "",
        ganador_name: "",
        title: "",
        opciones: [],
        participantes_id: [],
        participantes_nombre: []
      };
    },
    misPartidas() {
      const partidas = collect(this.partidas)
        .where("created_by", this.user.uid)
        .all();
      this.filter = true;
      this.partidasFilter = partidas;
      this.title = "Mis Partidas"

    },
    misGanadas() {
      const partidas = collect(this.partidas)
        .where("ganador_id", this.user.uid)
        .all();
      this.filter = true;
      this.partidasFilter = partidas;
      this.partidasFilter.count();
    }
  },

  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  firestore: {
    partidas: db.collection("partidas")
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

section {
  color: white;
}
router-link {
  color: white;
}
.a {
  color: white;
}
body {
  background-image: url("../assets/Fondo.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.box {
  background-color: #646464;
}
.btn-secondary {
  width: 100%;
  background-color: #646464;
}

.scrollable {
  height: 400px;
  overflow: auto;
  border-radius: 6px;
  overflow-x: hidden;
}
.scrollable::-webkit-scrollbar {
  width: 7px;
}
.scrollable::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 5px;
}
</style>
