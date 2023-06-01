import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCgHnPgmw0f1xSY6z4RoQ1coaSjXVT7hkM',
  authDomain: 'webullar-7a550.firebaseapp.com',
  databaseURL: 'https://webullar-7a550.firebaseio.com',
  projectId: 'webullar-7a550',
  storageBucket: 'webullar-7a550.appspot.com',
  messagingSenderId: '53766183375',
  appId: '1:53766183375:web:15b8f9c11b8e3001e65aba',
  measurementId: 'G-RE24WCZP7F',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

// const storage = firebase.storage();
// const functions = firebase.functions();
// const database = firebase.database();

export default firebase
