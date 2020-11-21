export default {
  SET_USER: (state, user) => (state.user = user), // establecemos los datos recibidos en el state de nuestro sistema
  SET_LOGGED_IN: (state, status) => (state.logged = status)
};
