<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="js">
export default {
  name: "App"
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Montserrat:wght@400;700&family=Nova+Flat&display=swap");
#app {
  font-family: "Nova Flat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;
  }
}
</style>
