import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDBF8amla_vjNklDN4EeieSM9Y4dj87OTU",
  authDomain: "persol-lqmb.firebaseapp.com",
  databaseURL: "https://persol-lqmb.firebaseio.com",
  projectId: "persol-lqmb",
  storageBucket: "persol-lqmb.appspot.com",
  messagingSenderId: "18719045844",
  appId: "1:18719045844:web:267353846c47f3dbaee341",
  measurementId: "G-82D3GSXG4D"
};

// var firebaseConfig = {
//   apiKey: "AIzaSyAKlfuUNlBR95laYX0ndWHSrHyZ2p1sfto",
//   authDomain: "test-db-dbb9b.firebaseapp.com",
//   databaseURL: "https://test-db-dbb9b.firebaseio.com",
//   projectId: "test-db-dbb9b",
//   storageBucket: "test-db-dbb9b.appspot.com",
//   messagingSenderId: "714708611588",
//   appId: "1:714708611588:web:fda8b14e5ff2bed82e7b51",
//   measurementId: "G-FX8CDKFY0S"
// };

export default firebase.initializeApp(firebaseConfig);
