<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref(''),
  password = ref(''),
  errorMessage = ref(), // Untuk error
  router = useRouter()

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.info('Successfully signed in!')
      console.log(auth.currentUser)
      router.push('/feed') // redirect
    })
    .catch((error) => {
      console.error(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errorMessage.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errorMessage.value = 'Incorrect Password'
          break
        default:
          errorMessage.value = 'Email or password was incorrect'
          break
      }
    })
}

const withGoogle = () => {}
</script>

<template>
  <div class="login">
    <h2 class="title">Masuk Akun</h2>
    <form action="" class="form">
      <div class="field">
        <label for="email">Email</label>
        <input
          type="text"
          class="input-text"
          id="email"
          v-model="email"
          placeholder="johndoe@example.com"
        />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="text" class="input-text" id="password" v-model="password" />
      </div>
      <div class="field">
        <p class="text" v-if="errorMessage">{{ errorMessage }}</p>
        <button class="btn primary" @click="login">Buat</button>
      </div>
    </form>
    <p class="text">Anda tidak punya akun? <a href="/register" class="link">Buat Akun.</a></p>
  </div>
</template>
