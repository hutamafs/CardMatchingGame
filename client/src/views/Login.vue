<template>
  <!-- login-page -->
  <section>
    <div id="loginregister-container" class="p-3 m-5">
      <div class="row d-flex mt-5">
        <div class="col-4 shadow register-login rounded bg-warning">
          <p class="mt-2 red">Please Login first</p>
          <form class="my-4" @submit.prevent="login">
            <div class="form-group">
              <label for="email-login">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model="name"
              />
            </div>
            <button
              type="submit"
              id="btn-login"
              class="btn btn-light btn-outline-dark"
            >
              Login
            </button>
          </form>
        </div>
        <div class="col-8 font-lobster">
          <h2 class="text-dark text-center">Welcome to</h2>
          <h2 class="text-dark text-center">blabla</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '../axios/axiosInstance'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      name: ''
    }
  },
  methods: {
    // login () {
    //   console.log(this.email, this.password)
    //   axios({
    //     url: '/users/login',
    //     method: 'post',
    //     data: {
    //       email: this.email,
    //       password: this.password
    //     }
    //   })
    //     .then((accessToken) => {
    //       console.log(accessToken.data.access_token, '<<< ini accessToken')
    //       localStorage.setItem('accessToken', accessToken.data.access_token)
    //       this.$router.push({ name: 'Home' })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>