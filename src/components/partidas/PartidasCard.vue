<template>
  <section>
    <div
      class="card py-2 "
      :style="
        partida.created_by == user.uid
          ? 'background: #525252'
          : 'background:gray'
      "
    >
      <div class="card-title">
        <div class="row">
          <div class="col-3">
            <h4>
              {{ partida.match_name ? partida.match_name : "Batalla Pokemon" }}
            </h4>
          </div>
          <div class="col-3">
            <h4>
              {{ partida.participantes_nombre[0] }}
            </h4>
          </div>
          <div class="col-3">
            <h4>
              {{ partida.mode_game ? partida.mode_game : "1 de 1" }}
            </h4>
          </div>
          <div class="col-3">
            <h4>
              {{ partida.privacity ? partida.privacity : "publica" }}
            </h4>
          </div>
          <div class="col-3 ">
            <button
              class="btn-btn-primary"
              @click="
                $router.push({ name: 'partida', params: { id: partida.id } })
              "
            >
              ver
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import {mapGetters} from "vuex";

export default {
  name: "PartidaCard",
  props: ["partida"],
  computed: {
      ...mapGetters({
      user: "getUser"
      })
  }
};
</script>
<style lang="scss">
.card {
  color: white;
}
</style>
