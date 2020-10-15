<template>
  <div class="home">
        <div class="container">
      <h1 class="text-center mt-3">GAME START</h1>
    </div>
    <div class="container">
      <div class="row mt-3 shadow rounded">
        <Card/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data() {
    return {
      user:'',
      users:[]
    }
  },
  components: {
    Card
  },
  sockets:{
    'user-connected' (data) {
      this.users = data
    }
  },
  created() {
    this.user = localStorage.playerone
  }
}
</script>
