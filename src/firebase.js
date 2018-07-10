import { initializeApp } from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDYi966lxOyZECMxZaVN-uM6sw6gDbLXZA",
  authDomain: "agreevata.firebaseapp.com",
  databaseURL: "https://agreevata.firebaseio.com",
  projectId: "agreevata",
  storageBucket: "agreevata.appspot.com",
  messagingSenderId: "647265325353"
};

const fb = initializeApp(config);

//firebase.initializeApp(config);
export const db = fb.database();
//const database = firebase.database();

export const customersRef = db.ref('customers');
export const anamnesisRef = db.ref('anamnesis');

/* database.ref('customers').on('value', (snapshot) => {
  console.log(snapshot.val())
}) */


