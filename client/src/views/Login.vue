<template>
  <!-- login-page -->
  <section>
    <div class="container" style="width:70%">
      <div id="loginregister-container" class="p-5">
        <div class="row d-flex mt-5 rounded shadow">
          <div class="col-4 text-light register-login rounded" style="background-color: black;">
            <img class="col-3 p-0" src="../images/card-gif.gif" alt="" srcset=""><br>
            <p class="mt-2 red">Please Login first</p>
            <form class="my-4" @submit.prevent="login">
              <div class="form-group ">
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
                class="btn btn-light btn-outline-light"
              >
                Login
              </button>
            </form>
          </div>
          <div class="col-8 font-lobster d-flex align-items-center justify-content-center bg-light rounded shadow" style="opacity: 0.8">
            <h2 class="text-dark" style="opacity: 1;">
              <b>
                Welcome To <br>
                Matching Card Poker
              </b>
            </h2>
            <!-- <h2 class="text-dark text-center">blabla</h2> -->
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      const payload = {
        name: this.name
      }
      this.$socket.emit('user-connect', payload)
      localStorage.setItem('playerone', this.name)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
