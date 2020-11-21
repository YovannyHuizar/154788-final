import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/main.scss";
import { auth } from "./config/_firebase";

//* VueFire instalacion //*
import { firestorePlugin } from "vuefire";
Vue.config.productionTip = false;
Vue.use(firestorePlugin);
//* metodo de comrpobación de estado de seisón.El cual comprueba el estado y le avisa a nuestro store que la información de usuario ha cambiado. (./store/module/user/actions) https://blog.logrocket.com/vue-firebase'authentication/

auth.onAuthStateChanged(user => {
  store.dispatch("setUser", user);
  if (user) {
    router.push({ name: "partidas" }).catch(err => console.log(err));
  } else {
    router.push({ name: "Login" }).catch(err => console.log(err));
  }
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`
  //To = a donde vamos. From= de donde venimos
  // Verificamos las rutas que neceistan autorización
  if (to.meta.auth) {
    console.log("Necesitas permiso para entrar a esta página");
    // Traemos info del usuario actual
    let user = store.state.user.user;
    console.log(`User:`, user);
    // Comprobamos que si haya iniciado sesión el usuario
    if (!store.state.user.logged) {
      // Si no hay usuario lo manda al login
      next({
        name: "Login"
      });
      return;
    }
    // Si hay usuario ingresamos a la ruta.
    console.log(`Usuario logeado: ${user.email}`, store.state.user.logged);
    next();
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
