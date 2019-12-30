
const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyCA1MuwmtTR4h1xPeOIYVZ7FlXyvgciXic",
  authDomain: "dandiystudio.firebaseapp.com",
  databaseURL: "https://dandiystudio.firebaseio.com",
  projectId: "dandiystudio",
  storageBucket: "gs://dandiystudio.appspot.com",
  messagingSenderId: "891943726460"
};

firebase.initializeApp(config);


module.exports = firebase;
