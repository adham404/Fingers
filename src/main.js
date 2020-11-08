import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
export const EventBus  = new Vue();


Vue.use(firebase)
var firebaseConfig = {
  apiKey: "AIzaSyApXvGYjMZ2S6Yn-8P9a6GYoC2zlH2sOGk",
  authDomain: "fingers-470d2.firebaseapp.com",
  databaseURL: "https://fingers-470d2.firebaseio.com",
  projectId: "fingers-470d2",
  storageBucket: "fingers-470d2.appspot.com",
  messagingSenderId: "752092374943",
  appId: "1:752092374943:web:e931182dd75af0183e7faa",
  measurementId: "G-DKK40P0V9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
