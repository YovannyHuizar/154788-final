<template>
  <div class="sidebar" :class="{ show: showSidebar }">
    <div class="control">
      <img class="ham" src="../assets/Ham.png" @click="showNav" />
    </div>

    <div class="navigation-links">
      <transition-group name="fade">
        <div class="card-header" v-show="showLink" key="1">
          <router-link to="/perfil">perfil</router-link>
        </div>
        <div class="card-header" v-show="showLink" key="2">
         <router-link to="/partidas">Partidas disponibles</router-link>
        </div>
        <div class="card-header" v-show="showLink" key="3">
          <router-link to="/historial">Historial partidas</router-link>
        </div>
        <div class="card-header" v-show="showLink" @click="logOut" key="4">
          Cerrar sesion
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Auth from "@/auth";
export default {
  data: () => {
    return {
      showSidebar: false,
      showLink: false
    };
  },
  methods: {
    logOut() {
      return Auth.logOut();
    },
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 600);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 600);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  padding: 0px;
  min-height: calc(120vh);
  background-color: rgba($color: #363851, $alpha: 1);
  border: solid #fff;
  border-width: 0 1px 0 0;
  z-index: 3;
  transition: all 0.5s ease-in-out;
  .control {
    position: relative;
    left: 80px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;
    .ham {
      width: 200%;
      height: 200%;
      font-size: 2rem;
      cursor: pointer;
      transition: all 2.5s ease-in-out;
      transition: all 3.5s ease-in;
      z-index: 0;
    }
  }
  &.show {
    width: 180px;
    .control > i {
      color: #fff;
      transform: rotateZ(-180deg);
    }
    .navigation-icons {
      color: #fff;
    }
  }
  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;
    i {
      font-size: 2rem;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #fff;
      }
    }
  }
  .navigation-links {
    color: white;
    padding-top: 5px;
    float: left;
    div {
      font-size: 1.35rem;
      padding-left: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
}
@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform linear calc(0.1s * #{$var}), display 0.5s;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4, 5);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>
