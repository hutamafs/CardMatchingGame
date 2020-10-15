<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container-flex">
      <div class="item-flex">Logo</div>
      <div class="item-flex">GAME</div>
      <div class="item-flex">Logout</div>
    </div>
    <!-- end of navbar -->
    <div class="container">
      <h1 class="text-center mt-3">GAME START</h1>
    </div>

    <div class="container">
      <div class="row mt-3 shadow rounded">
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
        <div class="col-md-3" id="background-card">
          <img src="./images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
