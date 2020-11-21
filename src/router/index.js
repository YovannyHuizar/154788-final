import Vue from "vue";
import VueRouter from "vue-router";
import PartidasView from "../views/PartidasView.vue";
import LoginView from "../views/LoginView.vue";
import DBView from "../views/DBView.vue";
import PartidaView from "../components/partidas/Partida.vue";
import PerfilView from "../views/Perfil.vue";
import HistorialView from "../views/HistorialPartidas.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
    meta: {
      auth: false //
    }
  },
  {
    path: "/conexion-db",
    name: "db",
    component: DBView
  },

  {
    path: "/sign-up",
    name: "SignUp",
    component: LoginView
  },

  {
    path: "/partidas",
    name: "partidas",
    component: PartidasView,
    meta: {
      auth: true ///*se utiliza para controlar el acceso a usuarios o
    },
    children: [
      {
        path: ":id",
        name: "partida",
        component: PartidaView
      }
    ]
  },
  {
    path: "/historial",
    name: "historial",
    component: HistorialView,
    meta: {
      auth: true ///*se utiliza para controlar el acceso a usuarios o
    },
    children: [
      {
        path: ":id",
        name: "partida",
        component: HistorialView
      }
    ]
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: PerfilView
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
