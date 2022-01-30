import firebase from "Config/firebase-config";

const socialAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res);
      return res.user;
    })
    .catch((e) => {
      return e;
    });
};
export default socialAuth;
