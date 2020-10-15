<template>
  <div id="app">
    <!-- navbar -->
    <div class="container-flex">
      <div class="item-flex">Logo</div>
      <div class="item-flex">GAME</div>
      <div class="item-flex">Logout</div>
    </div>
    <!-- end of navbar -->

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
