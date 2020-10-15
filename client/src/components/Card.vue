<template>
        <div class="col-md-3" id="background-card">
          <!-- <img :src="require(`${source}`)" class="rounded mx-auto d-block p-2" alt="..."> -->
          <img :src="require(`../images/${source}`)" class="rounded mx-auto d-block p-2" alt="..." @click="flip">
        </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  methods:{
    flip() {
      if(this.source == 'cardback.png') {
        this.source = `${this.card}_of_spades.png`
      } else {
        this.source = `cardback.png`
      }
      this.$store.dispatch('checkValue',this.card)
    }
  },
  data() {
    return {
      source:'cardback.png',
      total : 0,
      //require(`../images/${card}_of_spades.png`)
    }
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
