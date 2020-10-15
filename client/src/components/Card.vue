<template>
        <div class="col-md-3" id="background-card">
          <img src="../images/1_of_spades.png" id="background-image" class="rounded mx-auto d-block p-2" alt="...">
        </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
