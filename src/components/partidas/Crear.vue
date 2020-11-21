<template>
  <section class="login-box container">
    <div class="padd"><img src="../assets/Pokemon.png" /></div>
    <div class="row ">
      <input
        type="text"
        class="form-control my-2 col-sm-7"
        placeholder="Nombre"
        v-model="partida.match_name"
        required
      />
    </div>
  </section>
</template>

<script lang="js">
import {mapGetters} from "vuex";

export default {
  name: "crear",
  props: ["partida"],
  computed: {
      ...mapGetters({
      user: "getUser"
      })
  }
};
</script>
<style lang="scss">
.container {
  position: absolute;
  z-index: 3;
}
.card {
  margin-bottom: 10px;
  color: white;
}
</style>
