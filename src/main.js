// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYi966lxOyZECMxZaVN-uM6sw6gDbLXZA",
  authDomain: "agreevata.firebaseapp.com",
  databaseURL: "https://agreevata.firebaseio.com",
  projectId: "agreevata",
  storageBucket: "agreevata.appspot.com",
  messagingSenderId: "647265325353"
};

firebase.initializeApp(config);
const database = firebase.database()

database.ref('customer').on('value', (snapshot)=>{
  console.log(snapshot.val())
})


/* firebase.auth().onAuthStateChanged(function(user){
  if(!app) { */
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
      data: function(){
        return {
          customers: []
      }
    }
    })
   //}
//})

