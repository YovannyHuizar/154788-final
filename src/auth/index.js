import { auth } from "@/config/_firebase";
//import router from "../router";

export default {
  signUp(userData) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(result => {
          const user = auth.currentUser;
          user
            .updateProfile({
              displayName: userData.nombre
            })
            .catch(function(error) {
              reject(error);
            });
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  login(userData) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  logOut() {
    auth.signOut();
  }
};
