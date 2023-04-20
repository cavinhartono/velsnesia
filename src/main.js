import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxmA_garKPe6h2jijsz8yoVH530-TRVZQ',
  authDomain: 'velsnesia.firebaseapp.com',
  projectId: 'velsnesia',
  storageBucket: 'velsnesia.appspot.com',
  messagingSenderId: '1061915919256',
  appId: '1:1061915919256:web:2b9a266bc7856457e0e1ed',
  measurementId: 'G-ZCEMTSLZZ0'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
