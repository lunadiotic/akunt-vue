<template>
  <main class="container">
    <div class="mx-auto col-md-4">
      <form @submit.prevent="login">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="user.email"
        />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="user.password"
        />
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>

    <button @click.prevent="logout">logout</button>
    <button @click.prevent="getUser">User</button>
  </main>
  <!-- /.container -->
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
  export default {
    setup() {
      const user = reactive({
        email: '',
        password: ''
      })

      let login = async () =>  {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie')
          .then(() => {
            axios.post('http://localhost:8000/login', user)
          }
        )
      }

      let logout = async () =>  {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie')
          .then(() => {
            axios.post('http://localhost:8000/logout')
          }
        )
      }

      let getUser = async () => {
        let user = await axios.get('http://localhost:8000/api/user')
        console.log(user)
      }

      return { user, login, logout, getUser }
    }
  }
</script>