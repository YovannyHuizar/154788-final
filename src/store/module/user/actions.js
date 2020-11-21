export default {
  setUser: ({ commit }, user) => {
    /*Recibimos la informacion y segun lo que se recibe actualizamos
    el estado de nuestro sistema.
    */
    commit("SET_LOGGED_IN", user != null); //si es diferente a null entonces esta iniciada la sesion.
    if (user) {
      commit("SET_USER", user); //le agregamos los datos a nuestro state en una mutacion(./mutations)
    } else {
      commit("SET_USER", null);
      commit("SET_LOGGED_IN", false);
    }
  }
};
