<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const name = ref(''),
  email = ref(''),
  password = ref(''),
  router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value, name.value)
    .then((data) => {
      console.log('Successfully registered!')
      router.push('/dashboard') // redirect
    })
    .catch((error) => {
      console.error(error.code)
      alert(error.message)
    })
}

const withGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/dashboard')
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <div class="register">
    <h2 class="title">Buat Akun</h2>
    <form action="" class="form">
      <div class="field">
        <label for="name">Nama Lengkap</label>
        <input type="text" class="input-text" id="name" placeholder="John Doe" v-model="name" />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input
          type="text"
          class="input-text"
          id="email"
          placeholder="johndoe@example.com"
          v-model="email"
        />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="text" class="input-text" id="password" v-model="password" />
      </div>
      <div class="field">
        <button class="btn primary" @click="register">Buat</button>
      </div>
    </form>
    <p class="text">Anda punya akun? <a href="/login" class="link">Masuk Akun.</a></p>
    <button @click="withGoogle" class="text">Sign In with Google</button>
  </div>
</template>
