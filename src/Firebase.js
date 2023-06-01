import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCrYS8U4zjlAz4dViYl4f12ggLEmYXvU8g',
  authDomain: 'eliyadel.firebaseapp.com',
  projectId: 'eliyadel',
  storageBucket: 'eliyadel.appspot.com',
  messagingSenderId: '834825386214',
  appId: '1:834825386214:web:b92a9eab09bbcba1de2327',
  measurementId: 'G-X2118QWRZP',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

// const storage = firebase.storage();
// const functions = firebase.functions();
// const database = firebase.database();

export default firebase
