<template>
  <div class="about container">
    <div class="row">
      <div class="col-3"></div>
      <div class="card col-6 rounded-lg">
        <div class="card-body">
          <div class="form-group row">
            <div class="col-sm-4"></div>
            <div class="col-sm-12">
              <center></center>
              <h3>Hola, {{ user.displayName }}!</h3>
            </div>
            <div class="col-sm-3"></div>
            <div class="col-sm-6 mb-5">
              <img class="rounded-lg  picture" src="../assets/picture.jpg" />
            </div>
            <div class="col-sm-3"></div>
            <div class="row col-sm-6">
              <div class="col-sm-12 text">Victorias:</div>
              <div class="col-sm-12  text-2">#</div>
            </div>
            <div class="row col-sm-6">
              <div class="col-sm-12 text">Derrotas:</div>
              <div class="col-sm-12 text-2 mb-5">#</div>
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-12 text">Numero de partidas jugadas:</div>
              <div class="col-sm-12 text-2 mb-5">#</div>
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-12 center text">
                <h6>Fecha de creacion {{ user.metadata.creationTime }}!</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script lang="js">
import Auth from "@/auth";
import { mapGetters } from "vuex";
import { db, Timestamp } from "@/config/_firebase";
export default {
  name: "About",
  components: {
  },
  data() {
    return {
      partidas: [],
      partida: {
        match_name: "",
        mode_game: "",
        privacity: "",
        completed: false,
        created_at: Timestamp.now(),
        created_by: "",
        ganador_id: "",
        ganador_name: "",
        opciones: [],
        participantes_id: [],
        participantes_nombre: []
      }
    };
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
        opciones: [],
        participantes_id: [],
        participantes_nombre: []
      };
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
.picture {
  width: 100%;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
}
.text {
  font-size: 2vw;
}
.text-2 {
  font-size: 1.8vw;
}
</style>
