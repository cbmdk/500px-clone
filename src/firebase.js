import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBbu_7Lf2-vxsET_V22T-kJ271_-y67ztQ",
    authDomain: "px-clone.firebaseapp.com",
    databaseURL: "https://px-clone.firebaseio.com",
    projectId: "px-clone",
    storageBucket: "px-clone.appspot.com",
    messagingSenderId: "994515548519",
    appId: "1:994515548519:web:72dbb96b26c5865dfdd7c2",
    measurementId: "G-3ZETJ6HBSP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider}
  export default db;