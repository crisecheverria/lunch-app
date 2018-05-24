import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC8DcPCKL7bLmHfKQiC8YQqQrwlkkKja3s",
  authDomain: "tutor2go-react.firebaseapp.com",
  databaseURL: "https://tutor2go-react.firebaseio.com",
  projectId: "tutor2go-react",
  storageBucket: "tutor2go-react.appspot.com",
  messagingSenderId: "196396082810"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase
  .auth
  .GoogleAuthProvider();
